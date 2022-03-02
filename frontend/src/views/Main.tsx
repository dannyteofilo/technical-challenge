import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Header } from '../components/Header/Header'
import { getUserInfo } from '../helpers/requests'
import { menuHeader } from '../constants/constants'

export const Main = () => {
  const { username } = useParams<{ username: string }>()
  const [User, setUser] = useState<any>({})
  const [Repos, setRepos] = useState<Array<any>>([])
  useEffect(() => {
    console.log('userName: ', username)
    // getUserInfo(username).then((resp) => {
    //   console.log('response: ', resp)
    // })
  }, [username])
  return (
    <>
      <Header menu={menuHeader} />
      <h1>{User.login}</h1>
      {Repos.map((r) => (
        <h2>{r.name}</h2>
      ))}
    </>
  )
}