import {useEffect, useState} from "react";

export const useFetch = (test) => {
	console.log(test)

	const [isLoading, setIsLoading] = useState(false)
	const [isError, setIsError] = useState(false)
	const [items, setItems] = useState([])


	useEffect(() => {
		(async function () {
			setIsError(false)
			setIsLoading(true);
			try {
				const resp = await fetch("http://localhost:3001/films")
				const data = await resp.json()
				setItems(data)
			} catch (e) {
				setIsError(true)
			}
			setIsLoading(false)
		}())
	},[])

	return {items, isLoading, isError}
}

