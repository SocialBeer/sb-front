import * as yup from 'yup'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'

import { FormContainer } from './styled'
import { Button } from '../../../../components/Button'
import { ErrorMessage, Input } from '../../../../components/Input'
import { fieldNames, fields } from './constants'
import { authApi } from '../../../../store/auth/thunks'
import { useAuth, useRequestStatus } from '../../../../store'
import { getUnitAsPixels } from '../../../../styles/sizes'
import { Autocomplete } from '@mui/material'

export const Form = () => {
  const dispatch = useDispatch()
  const { metadata } = useAuth()
  const requestStatus = useRequestStatus([
    authApi.registration.typePrefix,
    authApi.getMetadata.typePrefix,
  ])

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
        return field.mode === 'search' ? (
          <Autocomplete
            options={metadata.countries}
            loading={requestStatus.loading[authApi.getMetadata.typePrefix]}
            key={name}
            onChange={(_, newValue) => {
              formik.setFieldValue(name, newValue || '')
            }}
            onBlur={formik.handleBlur}
            renderInput={(params) => (
              <Input
                {...params}
                variant="outlined"
                size="small"
                name={name}
                label={field.label}
                required={field.required}
                type={field.type}
                value={formik.values[name]}
                error={Boolean(formik.touched[name] && formik.errors[name])}
                helperText={formik.touched[name] && formik.errors[name]}
              />
            )}
          />
        ) : (
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
            error={Boolean(formik.touched[name] && formik.errors[name])}
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
