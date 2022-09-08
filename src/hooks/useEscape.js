import {useEffect} from "react";

export const useEscape = (onEsc) => {
	useEffect(() => {
		console.log("useEffect")
		const onEscapeHandler = (e) => {
			if (e.keyCode === 27) {
				onEsc()
				console.log("esc")
			}
		}
		window.addEventListener('keydown', onEscapeHandler)
		
		return () => {
			window.removeEventListener('keydown', onEscapeHandler)
		}
	},[onEsc])
}