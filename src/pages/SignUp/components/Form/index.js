import * as yup from 'yup'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'

import { FormContainer } from './styled'
import { Button } from '../../../../components/Button'
import { ErrorMessage, Input } from '../../../../components/Input'
import { fieldNames, fields } from './constants'
import { authApi } from '../../../../store/auth/thunks'
import { useRequestStatus } from '../../../../store'
import { getUnitAsPixels } from '../../../../styles/sizes'

export const Form = () => {
  const dispatch = useDispatch()
  const requestStatus = useRequestStatus([authApi.registration.typePrefix])

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

  const handleSubmit = async () => {
    const isValid = !Object.values(await formik.validateForm()).length

    if (isValid) {
      return dispatch(
        authApi.registration({
          ...formik.values,
        })
      )
    }

    formik.setTouched(
      fieldNames.reduce((acc, fieldName) => ({ ...acc, [fieldName]: true }), {})
    )
  }

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
      <Button
        variant="contained"
        onClick={handleSubmit}
        loading={requestStatus.loading[authApi.registration.typePrefix]}
      >
        Agree & Join
      </Button>

      <ErrorMessage mt={getUnitAsPixels(-2)}>
        {requestStatus.error[authApi.registration.typePrefix]}
      </ErrorMessage>
    </FormContainer>
  )
}
