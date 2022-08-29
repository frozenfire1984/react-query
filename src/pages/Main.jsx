import {useEffect, useState} from 'react'
import {useFetch} from "../hooks/useFetch";

const Main = () => {
	const {items, isLoading, isError} = useFetch()



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

export default Main