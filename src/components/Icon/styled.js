import styled from 'styled-components'

export const Wrapper = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  vertical-align: middle;

  svg {
    path {
      fill: ${(props) => props.color};
    }

    rect {
      stroke: ${(props) => props.color};
    }

    fill: ${(props) => props.color};
    width: ${(props) => props.size};
    height: ${(props) => props.size};
  }
`
