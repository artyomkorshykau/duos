import { getCookie } from '@/scripts/helpers/get.token.js'

export const getHeaders = () => {
  
  const token = getCookie('token')
  
  return {
    
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    
  }
  
}

export const getFileHeaders = () => {
  
  const token = getCookie('token')
  
  return {
    
    Authorization: `Bearer ${token}`,
    
  }
  
}
