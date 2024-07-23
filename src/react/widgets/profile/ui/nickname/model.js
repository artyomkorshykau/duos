import { useEffect, useState } from 'react';

export const useUserName = () => {

  const [userName, setUserName] = useState('')

  useEffect(() => {

    const storedUserName = localStorage.getItem('userName')

    if (storedUserName) setUserName(storedUserName)

  }, [])

  return {

    userName,
    setUserName

  }

}