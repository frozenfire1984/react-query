import {useMutation, useQueryClient} from "react-query";

export const usePatchTitle = (setIsUpdating) => {
	const queryClient = useQueryClient()
	
	return useMutation(['films'], ({id, text}) => fetch(`http://localhost:3001/films/${id}`, {
			method: "PATCH",
			body: JSON.stringify({
				"title": text,
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		}).then(res => res.json()).then(data => console.log(data)).catch((e) => console.log(e.message)),
		{
			onSuccess: async () => {
				await queryClient.invalidateQueries('films')
				setIsUpdating(false)
			}
		}
	)
}