import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import { Link as StyledLink } from './styled'

export const Link = ({ to, children }) => {
  const navigate = useNavigate()

  const handleLinkClick = useCallback(() => {
    navigate(to, { replace: true })
  }, [to, navigate])

  return <StyledLink onClick={handleLinkClick}>{children}</StyledLink>
}
