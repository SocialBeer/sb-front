import { Card as MaterialCard } from '@mui/material'
import styled from 'styled-components'

export const Card = styled(MaterialCard)`
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  box-shadow: 0 4px 12px ${({ theme }) => theme.colors.black15} !important;
`
