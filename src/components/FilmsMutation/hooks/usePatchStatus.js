import {useMutation, useQueryClient} from "react-query";

export const usePatchStatus = () => {
	const queryClient = useQueryClient()
	
	return useMutation('films', ({id, status}) => fetch(`http://localhost:3001/films/${id}`, {
			method: "PATCH",
			body: JSON.stringify({
				"checked": status,
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.then(res => res.json())
			.then(data => data)
			.catch((e) => console.log(e.message)),
		{
			/*onSuccess: async () => {
				await queryClient.invalidateQueries('films')
			}*/
		}
	)
}