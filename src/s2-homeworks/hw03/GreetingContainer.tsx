import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UsersType} from './HW3'

type GreetingContainerPropsType = {
  users: UsersType[]
  addUserCallback: (name: string) => void
}

export const pureAddUser = (name: string, setError: (error: string) => void, setName: (name: string) => void, addUserCallback: (name: string) => void) => {
  if (!name) {
    setError('Ошибка! Введите имя.')
  } else {
    addUserCallback(name)
    setName(' ')
  }
}

export const pureOnBlur = (name: string, setError: (error: string) => void) => {
  if (!name) {
    setError('Ошибка! Введите имя.')
  }
}

export const pureOnEnter = (e: KeyboardEvent<HTMLInputElement>, addUser: () => void) => {
  if (e.key === 'Enter') {
    addUser()
  }
}

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback,}) => {
  const [name, setName] = useState<string>(' ')
  const [error, setError] = useState<string>(' ')

  const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
    const trimmedName = e.currentTarget.value.trim()
    if (trimmedName) {
      setName(trimmedName)
      setError(' ')
    } else {
      setName(' ')
      error && setError('Error. Type name!')
    }
  }
  const addUser = () => {
    pureAddUser(name, setError, setName, addUserCallback)
  }

  const onBlur = () => {
    pureOnBlur(name, setError)
  }

  const onEnter = (e: any) => {
    pureOnEnter(e, addUser)
  }
  const totalUsers = users.length
  // @ts-ignore
  const lastUserName = users.length > 0 ? users[users.length - 1].name : ' ';
  return (
    <Greeting
      name={name}
      setNameCallback={setNameCallback}
      addUser={addUser}
      onBlur={onBlur}
      onEnter={onEnter}
      error={error}
      totalUsers={totalUsers}
      lastUserName={lastUserName}
    />
  )
}

export default GreetingContainer
