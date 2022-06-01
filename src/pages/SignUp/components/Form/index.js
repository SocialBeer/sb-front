import * as yup from 'yup'
import { useFormik } from 'formik'

import { FormContainer } from './styled'
import { Button } from '../../../../components/Button'
import { Input } from '../../../../components/Input'
import { fieldNames, fields } from './constants'

export const Form = () => {
  const formik = useFormik({
    initialValues: fieldNames.reduce(
      (acc, name) => ({ ...acc, [name]: fields[name].defaultValue || '' }),
      {}
    ),
    validationSchema: yup
      .object()
      .shape(
        fieldNames.reduce(
          (acc, name) => ({ ...acc, [name]: fields[name].getValidation() }),
          {}
        )
      ),
  })
  console.log(
    fieldNames.reduce(
      (acc, name) => ({ ...acc, [name]: fields[name].getValidation() }),
      {}
    )
  )
  const handleSubmit = () => {}
  return (
    <FormContainer>
      {fieldNames.map((name) => {
        const field = fields[name]
        return (
          <Input
            variant="outlined"
            size="small"
            name={name}
            key={name}
            label={field.label}
            required={field.required}
            type={field.type}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values[name]}
            error={formik.touched[name] && formik.errors[name]}
            helperText={formik.touched[name] && formik.errors[name]}
          />
        )
      })}
      <Button variant="contained" onClick={handleSubmit}>
        Agree & Join
      </Button>
    </FormContainer>
  )
}
