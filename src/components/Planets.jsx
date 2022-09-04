import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {useQuery} from "react-query";
import {useGetFilms} from "../hooks/useGetFilms";
import {useGetPlanets} from "../hooks/useGetPlanets";

const PlanetsCount = ({queryKey}) => {
	const {
		data: {results = []} = {},
		isLoading,
		isRefetching,
	} = useGetPlanets('planets')
	return (
		<div>
			{isLoading && 'loading...'}
			{isRefetching && 'update...'}
			<div>{!isLoading && <p>Planets count: {results.length}</p>}</div>
		</div>
	)
}

const Planets = ({queryKey}) => {
	const {
		data: {results: films = []} = {},
		isError,
		isLoading,
		isRefetching,
		error,
		...other
	} = useGetPlanets('planets')
	
	console.log(other)
	
	return (
		<div>
			<hr/>
			<hr/>
			{isLoading && 'loading...'}
			{isRefetching && 'update...'}
			
			{isError
				? error.message
				: films.map((item, index) => (
					<div key={index} >{item.name}</div>
					))
			}
			<hr/>
			<PlanetsCount/>
		
		</div>
	)
}

export default Planets