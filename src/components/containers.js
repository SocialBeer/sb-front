import styled from 'styled-components'
import { getMediaQuery, ScreenSize } from '../styles/breakpoints'

export const MainWidthContainer = styled.div`
  max-width: ${({ theme }) => theme.sizes.mainWidth};
  width: 100%;
  ${getMediaQuery(ScreenSize.MOBAIL, ScreenSize.LARGE)} {
    padding: 0 24px;
  }
`

export const FixCenterContainer = styled.div`
  width: 100%;
  height: 80vh;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
