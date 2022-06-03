import { useSelector } from 'react-redux'

export const useAuth = () => useSelector(({ auth }) => auth)

export const useRequestStatus = (actions) =>
  useSelector(
    ({ requestStatus }) => {
      return actions.reduce(
        (acc, action) => ({
          ...acc,
          loading: {
            ...acc.loading,
            [action]: requestStatus.loading?.[action],
          },
          error: { ...acc.error, [action]: requestStatus.error?.[action] },
        }),
        {}
      )
    },
    (prev, next) => JSON.stringify(prev) === JSON.stringify(next)
  )
