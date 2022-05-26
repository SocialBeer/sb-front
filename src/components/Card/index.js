import styled from 'styled-components'
import { Card as MaterialCard } from '@mui/material'
import { getUnitAsPixels } from '../../styles/sizes'

export const Card = styled(MaterialCard)`
  padding: ${({ p }) => p};
  margin: ${({ m }) => m};
  box-shadow: 0 ${getUnitAsPixels(0.5)} ${getUnitAsPixels(1.5)}
    ${({ theme }) => theme.colors.black15} !important;
`
