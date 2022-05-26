import styled from 'styled-components'
import { getMediaQuery, ScreenSize } from '../styles/breakpoints'
import { getUnitAsPixels } from '../styles/sizes'

export const MainWidthContainer = styled.div`
  max-width: ${({ theme }) => theme.sizes.mainWidth};
  width: ${({ theme }) => theme.sizes.full};
  ${getMediaQuery(ScreenSize.MOBAIL, ScreenSize.LARGE)} {
    padding: 0 ${getUnitAsPixels(3)};
  }
`

export const FixCenterContainer = styled.div`
  width: ${({ theme }) => theme.sizes.full};
  height: 80vh;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
