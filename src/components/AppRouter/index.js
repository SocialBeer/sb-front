import { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

import { SignIn } from '../../pages/SignIn'
import { SignUp } from '../../pages/SignUp'
import { useAuth } from '../../store'

export const AppRouter = () => {
  const navigate = useNavigate()
  const { authenticated } = useAuth()

  useEffect(() => {
    if (!authenticated) {
      return navigate('/sign-in')
    }
    navigate('/')
  }, [authenticated])

  return (
    <>
      {authenticated ? (
        <Routes>
          <Route path="/" element={<>app</>} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      )}
    </>
  )
}
