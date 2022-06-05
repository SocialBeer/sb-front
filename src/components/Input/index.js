import styled from 'styled-components'
import TextField from '@mui/material/TextField'
import { getUnitAsPixels } from '../../styles/sizes'

export const Input = styled(TextField)`
  border-color: ${({ theme }) => theme.input.main};

  label.Mui-focused {
    color: ${({ theme }) => theme.input.main};
  }

  label.Mui-error {
    color: ${({ theme }) => theme.input.error};
  }

  .MuiOutlinedInput-root.Mui-focused fieldset {
    border-color: ${({ theme }) => theme.input.main};
  }

  .MuiFormHelperText-root.Mui-error {
    margin-left: ${getUnitAsPixels(1)};
    color: ${({ theme }) => theme.input.error};
  }

  .MuiOutlinedInput-root.Mui-error fieldset {
    border-color: ${({ theme }) => theme.input.error};
  }
`

export const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.input.error};
  height: ${getUnitAsPixels(2)};
  margin-top: ${({ mt }) => mt};
  font-size: 14px;
`
