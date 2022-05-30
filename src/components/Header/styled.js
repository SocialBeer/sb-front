import styled from 'styled-components'

import { getUnitAsPixels } from '../../styles/sizes'

export const Container = styled.div`
  width: ${({ theme }) => theme.sizes.full};
  padding: ${getUnitAsPixels(3)} 0;
  display: flex;
  background: ${({ theme }) => theme.header.background};
  justify-content: space-between;
`
export const LoginSection = styled.div`
  display: flex;
  align-items: center;
  padding: ${getUnitAsPixels()} ${getUnitAsPixels(1.5)};
  border-left: 1px solid ${({ theme }) => theme.colors.black15};
  gap: ${getUnitAsPixels(1.5)};
`
