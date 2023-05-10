import React, { useState } from 'react'
import { v1 } from 'uuid'
import s2 from '../../s1-main/App.module.css'
import GreetingContainer from './GreetingContainer'

/*
* 2 - указать нужный тип в useState с users
* 3 - дописать типы и логику функции pureAddUserCallback и проверить её тестами
* 4 - в файле GreetingContainer.tsx дописать типизацию пропсов
* 5 - в файле GreetingContainer.tsx указать нужные типы в useState с name и error
* 6 - в файле GreetingContainer.tsx дописать тип и логику функции setNameCallback
* 7 - в файле GreetingContainer.tsx дописать логику функций pureAddUser, pureOnBlur, pureOnEnter и проверить их тестами
* 8 - в файле GreetingContainer.tsx вычислить количество добавленных и имя последнего (totalUsers, lastUserName)
* 10 - в файле Greeting.tsx вычислить inputClass в зависимости от наличия ошибки
* 11 - сделать стили в соответствии с дизайном
* */

// types
export type UserType = {
    _id: string
    name: string
}
export type UsersType = [
    users: UserType
]

export const pureAddUserCallback = (name: string, setUsers: any, users: UsersType[]) => {
    const user = {
        _id: v1(),
        name: name
    }
    setUsers([...users, user])
}

const HW3 = () => {
    const [users, setUsers] = useState<UsersType[]>([])

    const addUserCallback = (name: string) => {
        pureAddUserCallback(name, setUsers, users)
    }

    return (
        <div id={'hw3'} className={s2.hw}>
            <div className={s2.hwTitle}>Homework #3</div>
            {/*для автоматической проверки дз (не менять)*/}

            <div className={s2.hw1}>
                <GreetingContainer
                    users={users}
                    addUserCallback={addUserCallback}
                />
            </div>
        </div>
    )
}

export default HW3
