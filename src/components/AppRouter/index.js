import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SignIn } from '../../pages/SignIn'

import { SignIn } from '../../pages/SignIn'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  )
}
