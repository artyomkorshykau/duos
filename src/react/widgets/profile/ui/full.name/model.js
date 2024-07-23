import { useEffect, useState } from 'react';

export const useFullName = () => {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [surName, setSurName] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const [gender, setGender] = useState('')

  useEffect(() => {

    const storedFirstName = localStorage.getItem('firstName')
    const storedLastName = localStorage.getItem('lastName')
    const storedSurName = localStorage.getItem('surName')
    const storedBirthDate = localStorage.getItem('birthDate')
    const storedGender = localStorage.getItem('gender')

    if (storedFirstName) setFirstName(storedFirstName)
    if (storedLastName) setLastName(storedLastName)
    if (storedSurName) setSurName(storedSurName)
    if (storedBirthDate) setBirthDate(storedBirthDate)
    if (storedGender) setGender(storedGender)

  }, [])

  return {

    firstName,
    lastName,
    surName,
    birthDate,
    gender,
    setFirstName,
    setLastName,
    setSurName,
    setBirthDate,
    setGender,

  }

}