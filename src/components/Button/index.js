import styled, { css } from 'styled-components'
import { LoadingButton as MaterialLoadingButton } from '@mui/lab'
import { Button as MaterialButton } from '@mui/material'

export const Button = styled(MaterialButton)`
  ${(props) => css`
    background-color: ${props.theme.buttons[props.variant]
      .background} !important;
    color: ${props.theme.buttons[props.variant].textColor} !important;
    border-color: ${props.theme.buttons[props.variant].borderColor} !important;
    &:hover {
      background-color: ${props.theme.buttons[props.variant]
        .hoverBackground} !important;
      color: ${props.theme.buttons[props.variant].hoverTextColor} !important;
      border-color: ${props.theme.buttons[props.variant]
        .hoverBorderColor} !important;
    }
  `}
`

export const LoadingButton = styled(MaterialLoadingButton)`
  ${(props) => css`
    :not(.MuiLoadingButton-loading) {
      background-color: ${props.theme.buttons[props.variant]
        .background} !important;
      color: ${props.theme.buttons[props.variant].textColor} !important;
      border-color: ${props.theme.buttons[props.variant]
        .borderColor} !important;
    }

    ,
    &:hover {
      background: ${props.theme.buttons[props.variant]
        .hoverBackground} !important;
      color: ${props.theme.buttons[props.variant].hoverTextColor} !important;
      border-color: ${props.theme.buttons[props.variant]
        .hoverBorderColor} !important;
    }
  `}
`
