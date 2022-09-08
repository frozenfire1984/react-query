import React, {memo, useEffect, useState, useCallback, useRef, useMemo} from "react";
import {useAdd, usePatchStatus, usePatchTitle, useRemove} from "./hooks";
import {useIsFetching, useIsMutating, useQueryClient} from "react-query";
import {useEscape} from "../../hooks/useEscape";

const useFocus = () => {
	console.log("use focus")
	const refInput = useRef(null)
	const setInputFocus = () => {
		console.log("focus")
		refInput.current && refInput.current.focus()
	}
	return {refInput, setInputFocus}
}

const Item = memo(
	({id, title, checked, index}) => {
		//console.log("from item")
		
		// set state
		const [text, setText] = useState(title.toString())
		//const [localTitle, setLocalTitle] = useState(title.toString())
		const [isEdited, setIsEdited] = useState(false)
		const [isUpdating, setIsUpdating] = useState(false)
		const refInput = useRef(null)
		const queryClient = useQueryClient()
		
		// customHooks
		const {mutate: mutateTitle} = usePatchTitle()
		const {mutate: mutateStatus} = usePatchStatus()
		const {mutate: mutateRemove} = useRemove()
		useEscape(() => setIsEdited(false))
		
		// mutate handlers
		const onKeyDownHandler = (e) => {
			if (e.keyCode === 13) {
				
				setIsUpdating(true)
				//setLocalTitle(text)
				mutateTitle({id, text}, {
					onSuccess: async () => {
						await queryClient.invalidateQueries('films')
						setIsEdited(false)
						setIsUpdating(false)
					}
				})
			}
		}
		
		const onPatchStatusHandler = (id, status) => {
			setIsUpdating(true)
			//mutateStatus instanceof Function &&
			mutateStatus({id, status}, {
				onSuccess: async () => {
					await queryClient.invalidateQueries('films')
					setIsUpdating(false)
				}
			})
		}
		
		const onDeleteHandler = (id) => {
			setIsUpdating(true)
			mutateRemove({id}, {
				onSuccess: async () => {
					await queryClient.invalidateQueries('films')
					setIsUpdating(false)
				}
			})
		}
		
		//const {refInput, setInputFocus} = useFocus()
		
		
		// utils handlers
		const onEditHandler = () => {
			setIsEdited(true)
		}
		
		const documentClickHandler = (event) => {
			if (refInput.current && !refInput.current.contains(event.target)) {
				setIsEdited(false)
			}
		}
		
		useEffect(() => {
			if (isEdited) {
				refInput.current.focus()
			}
		}, [isEdited])
		
		useEffect(() => {
			document.addEventListener("mousedown", documentClickHandler, true)
			return () => {
				document.removeEventListener("mousedown", documentClickHandler, true)
			}
		}, [])
		
		return (
			<li key={index}
					className={`todos__item todos__item_ext todo-item ${checked ? 'todo-item_checked' : ''} ${isUpdating ? 'todo-item_disabled' : ''}`}>
				<i className={'todo-item todo-item__id'} title={id}>{id}</i>
				
				{isEdited
					?
					<form onSubmit={(e) => e.preventDefault()}>
						<input
							className={'todo-item__title todo-item__title_editable'}
							ref={refInput}
							type="text"
							value={text}
							onChange={(e) => setText(e.target.value)}
							onKeyDown={(e) => onKeyDownHandler(e)}
							disabled={isUpdating}
						/>
					</form>
					:
					<div onClick={onEditHandler} className={'todo-item__title'}>
						{title}
					</div>
				}
				
				<button className={'btn btn_patch'} onClick={() => onPatchStatusHandler(id, !checked)}>check</button>
				<button className={'btn'} onClick={() => onDeleteHandler(id)}>remove</button>
			</li>
		)
	}
)

export {Item}

