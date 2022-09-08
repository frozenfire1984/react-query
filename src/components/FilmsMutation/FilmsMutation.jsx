import React, {useCallback, useRef, useState} from 'react'
import {useIsFetching, useIsMutating} from "react-query";
import {useAdd, useGet, usePatchStatus, useRemove} from "./hooks";
import {Item} from "./Item"

const FilmsMutation = () => {
	
	const isFetchingGlobal = useIsFetching()
	const isMutatingGlobal = useIsMutating()
	
	const {
		data: films = [],
		isError,
		isLoading,
		isFetching,
		error
	} = useGet()
	
	const {
		mutate: mutateAdd,
		isLoading: isSending,
	} = useAdd()
	
	/*const {
		mutate: mutateRemove,
		isLoading: isDeleting
	} = useRemove()
	
	const {
		mutate: mutatePatch,
		isLoading: isPatching
	} = usePatchStatus()*/
	
	const [text, setText] = useState("")
	const todosUl = useRef(null)
	
	const handleScroll = (ref) => {
		window.scrollTo({
			top: ref.offsetHeight,
			left: 0,
			behavior: "smooth"
		})
	}
	
	const onSubmitHandler = (e) => {
		e.preventDefault()
		
		const payload =  {
			"id": Date.now(),
			"title": text,
			"desc": "Some desc",
			"checked": false,
			"rating": 100
		}
		
		mutateAdd instanceof Function && mutateAdd(payload, {
			onSuccess: () => {
				setText("")
				if (todosUl.current !== null) {
					handleScroll(todosUl.current)
				}
			}
		})
	}
	
	/*const onDeleteHandler = (id) => {
			mutateRemove instanceof Function && mutateRemove({id})
	}*/
	
	/*const onPatchHandler = useCallback((id, status) => {
		mutatePatch instanceof Function && mutatePatch({id, status})
	},[mutatePatch])*/
	
	return (
		<div>
			<div className={'global-status'}>
				{isFetchingGlobal
					? "GLOBAL FETCHING"
					: null
				}
				
				{isMutatingGlobal
					? "GLOBAL UPDATING (mutating)"
					: null
				}
			</div>
			<form onSubmit={onSubmitHandler}>
				<input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
				<button type={"submit"}>Add</button>
				<div style={{height: '30px'}}>{isSending && 'sending...'}</div>
			</form>
			<hr/>
			<div className={'status'}>
				{isLoading && 'loading...'}
				{isFetching && !isLoading && 'fetching...'}
				{/*{isDeleting && 'deleting (mutating)...'}
				{isPatching && 'patching (mutating)...'}*/}
			</div>
			
			<ul className={'todos'} ref={todosUl}>
				{isError
					? error.message
					: films?.map((item, index) => (
						<Item
							key={index}
							{...item}
							index={index}
							//onPatchHandler={onPatchHandler}
						/>
					))
				}
				{/*<pre>
					{JSON.stringify(films, null, 2)}
				</pre>*/}
				<Table></Table>
			</ul>
		</div>
	)
}

export {FilmsMutation}