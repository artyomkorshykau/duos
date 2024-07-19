import { useState } from "react";
import { useRouter } from "next/navigation";


export const useQuestionnaire = () => {
	
	const { push } = useRouter()
	
	const [ status, setStatus ] = useState( 'begin' )
	
	const buttonTitle = status === 'begin' ? `Начать` : status === 'continue' ? `Продолжить` : `На главную`
	
	const handleButtonAction = () => {
		
		if( status === 'begin' ) setStatus( 'continue' )
		if( status === 'continue' ) setStatus( 'end' )
		if( status === 'end' ) {
			
			setStatus( 'begin' )
			push( '/' )
			
		}
		
	}
	
	return { buttonTitle, handleButtonAction, status }
}