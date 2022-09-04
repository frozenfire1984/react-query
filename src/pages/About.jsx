import {useGetFilms} from "../hooks/useGetFilms";


const About = () => {
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
					films count: {results?.length}
				</div>
			}
		</div>
	)
}

export default About