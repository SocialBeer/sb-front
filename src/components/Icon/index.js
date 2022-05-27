import { Wrapper } from './styled'

export const Icon = ({ component, color, height, width, size, margin }) => {
  return (
    <Wrapper
      color={color}
      height={height}
      width={width}
      size={size}
      margin={margin}
    >
      {component}
    </Wrapper>
  )
}
