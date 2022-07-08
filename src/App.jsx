import { useState } from "react"
import CustomInput from "./components/CustomInput"
import useValidator from "./hooks/useValidator"
import { fullUserSchema } from './model/schema'
import './App.css'

function App() {
  const user = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    passwordconfirm: ''
  }

  const [err, setErr] = useState('')

  const { values, errors, handleChange, validateForm } = useValidator(user, fullUserSchema)

  const handleSubmit = e => {
    e.preventDefault()
    setErr('')
    if(!validateForm()) return
    if(values.password !== values.passwordconfirm) setErr('Passwords does not match')
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h3>The useValidator Hook</h3>
        <CustomInput 
          label='Firstname'
          handleChange={handleChange}
          errors={errors}
        />
        <CustomInput 
          label='Lastname'
          handleChange={handleChange}
          errors={errors}
        />
        <CustomInput 
          label='Email'
          handleChange={handleChange}
          errors={errors}
        />
        <CustomInput 
          label='Password'
          handleChange={handleChange}
          errors={errors}
          type="password"
        />
        <CustomInput 
          label='PasswordConfirm'
          handleChange={handleChange}
          errors={errors}
          type="password"
        />

        {err && <p className="err">{err}</p>}

        <button type="submit">Send</button>

      </form>
    </div>
  )
}

export default App
