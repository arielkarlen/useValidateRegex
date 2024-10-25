import { useCallback } from 'react'

export function useValidateRegex (clearErrors, setError, field, regex) {
  const validateRegex = useCallback((password) => {
    clearErrors('password')
    regex.forEach(({ regex, errorMessageRegex }) => {
      if (!new RegExp(regex).test(password)) {
        setError(field, { type: 'manual', message: errorMessageRegex })
      }
    })
  }, [clearErrors, setError, regex])

  return { validateRegex }
}

