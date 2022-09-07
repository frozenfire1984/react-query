import React, {memo, useState} from "react";
import {useAdd, usePatchTitle} from "./hooks";
import {useIsFetching, useIsMutating} from "react-query";

const Item = memo(
	({id, title, checked, index, onDeleteHandler, onPatchHandler}) => {
		console.log("from item")
		
		const [text, setText] = useState(title.toString())
		const [isEdited, setIsEdited] = useState(false)
		const [isUpdating, setIsUpdating] = useState(false)
		
		const {mutate} = usePatchTitle(setIsUpdating)
		
		const onKeyDownHandler = (e) => {
			if (e.keyCode === 13) {
				setIsEdited(false)
				setIsUpdating(true)
				mutate({id, text})
			}
		}
		
		const onSubmitHandler = (e) => {
			e.preventDefault()
		}
		
		return (
			<li key={index} className={`todos__item todos__item_ext todo-item ${checked ? 'todo-item_checked' : ''} ${isUpdating ? 'todo-item_disabled' : ''}`}>
				<i className={'todo-item todo-item__id'} title={id}>{id}</i>
				
				{isEdited
					?
					<form onSubmit={onSubmitHandler}>
						<input
							type="text"
							value={text}
							onChange={(e) => setText(e.target.value)}
							onKeyDown={(e) => onKeyDownHandler(e)}
						/>
					</form>
					:
					<b onClick={() => setIsEdited(prevState => !prevState)}>{title}</b>
				}
				
				<button className={'btn btn_patch'} onClick={() => onPatchHandler(id, !checked)}>check</button>
				<button className={'btn'} onClick={() => onDeleteHandler(id)}>remove</button>
			</li>
		)
	}
)

export {Item}

