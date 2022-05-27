import styled from 'styled-components'
import TextField from '@mui/material/TextField'

export const Input = styled(TextField)`
  border-color: ${({ theme }) => theme.input.main};

  label.Mui-focused {
    color: ${({ theme }) => theme.input.main};
  }

  .MuiOutlinedInput-root.Mui-focused fieldset {
    border-color: ${({ theme }) => theme.input.main};
  }
`
