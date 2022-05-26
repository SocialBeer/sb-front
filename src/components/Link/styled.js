import { Link as MaterialLink } from '@mui/material'
import styled from 'styled-components'

export const Link = styled(MaterialLink)`
  text-decoration: none !important;
  color: ${({ theme }) => theme.linksColor} !important;
  cursor: pointer;
  &:hover {
    text-decoration: underline !important;
  }
`
