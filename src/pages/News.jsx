import {useFetch} from "../hooks/useFetch";

const News = () => {
	const {items, isLoading, isError} = useFetch('test')

	return (
		<div>
			{isError && <div>Error</div>}

			{isLoading ?
				<div>Loading...</div>
				:
				<div>
					<pre>
						{JSON.stringify(items, null, 2)}
					</pre>
				</div>
			}
		</div>
	)
}

export default News