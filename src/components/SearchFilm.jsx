import {useGetFilm} from "../hooks/useGetFilm";
import React from "react";

const SearchFilm = ({film}) => {
	const {
		data: {results: films = []} = {},
		isLoading,
		isError,
		error
	} = useGetFilm(film)
	return (
		<div>
			{isLoading && 'loading...'}
			
			
			{isError
				? error.message
				: films.map((item, index) => (
					<div key={index}>{item.title}</div>
				))
			}
		</div>
	)
}

export default SearchFilm