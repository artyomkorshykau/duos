import { useMutation } from '@tanstack/react-query'
import profile from '@/service/profile.js'
import useGlobal from '@/store/index.js'

export const useNotify = () => {
  
  const [ globalState, globalActions ] = useGlobal()
  
  const { mutate: mutateEditNotify } = useMutation( {
    
    mutationKey: [ 'edit-notify' ],
    mutationFn: ( body ) => profile.editNotifies( body )
    
  } )
  
  const handleToggle = ( body ) => {
    
    mutateEditNotify(body )
    globalActions.user.setUser()
    
  }
  
  
  return { handleToggle, globalState }
  
}