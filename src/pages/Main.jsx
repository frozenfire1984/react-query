import {useEffect, useState} from 'react'
import {useFetch} from "../hooks/useFetch";
import {useGetFilms} from "../hooks/useGetFilms";

const Main = () => {
	//const {items, isLoading, isError} = useFetch()
	const {
		data: {results = []} = {},
		isLoading,
		isRefetching,
		isError,
		error
	} = useGetFilms('films')

	return (
		<div>
			{isError && <div>{error.message}</div>}
			{isRefetching && <div>update...</div>}

			{isLoading ?
				<div>Loading...</div>
				:
				<div>
					{results.map((item) => (
						<div key={item.id}>{item.title}</div>
					))
					}
				</div>
			}
		</div>
	)
}

export default Main