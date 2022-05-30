import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { SignIn } from '../../pages/SignIn'
import { SignUp } from '../../pages/SignUp'

export const AppRouter = ({ authenticated = false }) => {
  return (
    <BrowserRouter>
      {authenticated ? (
        <Routes></Routes>
      ) : (
        <Routes>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      )}
    </BrowserRouter>
  )
}
