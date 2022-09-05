import {useQuery} from "react-query";

const useGetPlanet = (planetUrl) => {
	return useQuery(
		['planet', planetUrl],
		async () => {
			
			await new Promise((resolve => {
				setTimeout(resolve, 1000)
			}))
			
			return fetch(planetUrl)
				.then(res => res.json())
		}, {
			enabled: !!planetUrl,
			initialData: {
				name: "initial name"
			}
		}
	)
}

export const Planet = ({planetUrl}) => {
	
	const {
		data = {},
		isLoading
	} = useGetPlanet(planetUrl)
	
	console.log(data)
	
	
	return (
		<div>
			{isLoading
				? 'loading...'
				: <div>{data.name}</div>
			}
		
		</div>
	)
}