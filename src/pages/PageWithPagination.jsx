import {useReducer, useState} from "react";
import {useQuery} from "react-query";
import moment from "moment";

const PageWithPagination = () => {
	const [limit, setLimit] = useState(10)
	const [pageNumber, setPageNumber] = useState(1)
	
	const url = new URL('http://localhost:3001/todos')
	url.search = new URLSearchParams({_limit: limit.toString(), _page: pageNumber.toString()})
	
	const calcPageAmount = (state, action) => {
		return Math.ceil(parseInt(action)/limit);
	}
	
	const [pageAmount, setPageAmount] = useReducer(calcPageAmount, 0)
	useQuery(
		"todos_count",
		() => {
			return fetch('http://localhost:3001/todos_count').then(res => res.json())
		}, {
			onSuccess: (res) => {
				setPageAmount(res.count)
			}
		}
	)
	
	const {
		data,
		isLoading,
		isError,
		error,
		isFetching,
	} = useQuery(
		["todos", limit, pageNumber],
		() => {
			return fetch(url.toString())
				.then(res => res.json())
		},
		{
			staleTime: 20000,
			keepPreviousData: true,
			enabled: !!pageAmount,
		}
	)
	

	
	return (
		<div>
			<div className='paginator'>
				<button onClick={() => setPageNumber(page => page - 1)} disabled={pageNumber === 1 || isLoading}>Prev</button>
				{pageNumber}
				<button onClick={() => setPageNumber(page => page + 1)} disabled={pageNumber === pageAmount || isLoading}>Next</button>
			</div>
			{isError ? error.message() : null}
			<ul className='todos'>
			{isFetching
				? 'loading...'
				: data?.map((item) => (
					<li className='todos__item' key={item.id}>
						{item.id}<br/>
						<b>{item.title}</b><br />
						{moment(item.date).format('Do MMMM YYYY')}
					</li>
				))
			}</ul>
			
		
		</div>
	)
}

export default PageWithPagination