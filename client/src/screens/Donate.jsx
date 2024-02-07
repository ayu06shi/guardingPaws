import React from 'react'
import { useAuth } from '../context/auth'
import CharityHis from './CharityHis'
import UserDonation from './UserDonation'

const Donate = () => {
    const [auth, setAuth] = useAuth([])

  return (
    <>
      {
        auth?.user?.role === 1 ? (
          <CharityHis />
        ) : (
          <UserDonation />
        )
      }
    </>
  )
}

export default Donate