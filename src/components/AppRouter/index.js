import { Routes, Route, Navigate } from 'react-router-dom'

import { SignIn } from '../../pages/SignIn'
import { SignUp } from '../../pages/SignUp'
import { useAuth } from '../../store'

export const AppRouter = () => {
  const { authenticated } = useAuth()

  return (
    <Routes>
      {authenticated ? (
        <>
          <Route index element={<>app</>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </>
      ) : (
        <>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="*" element={<Navigate to="/sign-in" replace />} />
        </>
      )}
    </Routes>
  )
}
