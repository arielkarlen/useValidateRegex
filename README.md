
# Validate Regex React Hook Form

A regex validation for [React Hook Form](https://www.npmjs.com/package/react-hook-form)


## Installation

Install React Hook Form

```bash
  npm i react-hook-form
```

Install the library

```bash
  npm install use-react-validateregex-hook-form
```

Import to your project

```bash
  import useValidateRegex from 'use-react-validateregex-hook-form'
```
## Usage

Import useForm, and the functions setErrors and clearErrors. Configure the necessary default form values

```bash
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
    reset,
    setValue,
    setError,
    clearErrors
  } = useForm({
    mode: 'onTouched',
    defaultValues: {
      password: '',
    }
  })
```

Create the object with the necessary Regex to validate.
Add or remove the necessary ones

```bash
  const regex = [
    {
        "regex": "^.{8,20}$",
        "errorMessageRegex": "La contraseña debe tener al menos 8 caracteres y no exceder los 20."
    },
    {
        "regex": "^(?!.*(.)\\1).+$",
        "errorMessageRegex": "La contraseña no puede tener 2 caracteres consecutivos iguales."
    },
    {
        "regex": "[A-Z]",
        "errorMessageRegex": "La contraseña debe contener al menos una letra mayúscula."
    },
    {
        "regex": "[a-z]",
        "errorMessageRegex": "La contraseña debe contener al menos una letra minúscula."
    },
    {
        "regex": "[0-9]",
        "errorMessageRegex": "La contraseña debe contener al menos un número."
    },
    {
        "regex": "[\\W_]",
        "errorMessageRegex": "La contraseña debe contener al menos un caracter especial."
    }
]
```

Configure the hook and pass it the functions clearErrors, setErrors, the field to validate and the Regex object
```bash
  const { validateRegex } = useValidateRegex(clearErrors, setError, 'password', regex)
```

If you need to validate another regex, do an alias destruct to create another instance of the hook
```bash
   const { validateRegex: validateMailregex } = useValidateRegex(clearErrors, setError, 'email', mailRegex)
```

Add the Password field to the form, and call the function to validate onChange.
Add error messages
```bash
  <TextField
                variant='standard'
                className='form-control'
                label='Password *'
                {...register('password', {
                  required: {
                    value: true,
                    message: 'Password is required'
                  },
                  onChange: (e) => validateRegex(e.target.value)
                })}
              />
              {errors.password
                ? (
                  <p>
                    * {errors?.password?.message}
                  </Typography>
                  )
                : undefined}
```


## Authors

- [Ariel Karlen](https://www.linkedin.com/in/arielkarlen/)


## License

[MIT](https://choosealicense.com/licenses/mit/)
