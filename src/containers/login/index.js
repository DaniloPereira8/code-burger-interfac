import React from 'react'
import { useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import LoginImg from '../../assets/login-image.svg'
import Logo from '../../assets/logo.svg'
import api from '../../services/api'
import {
  Container,
  LoginImage,
  ContainerItens,
  Label,
  Input,
  Button,
  SingInlink,
  ErrorMessage
} from './style'

function Login () {
  const schema = Yup.object().shape({
    email: Yup.string().email('Digite um email válido').required('O email é obrigatório'),
    password: Yup.string().required('A senha é obrigatória').min(6, 'No minimo 6 digitos')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async clientData => {
    const response = await api.post('sessions', {
      email: clientData.email,
      password: clientData.password
    })

    console.log(response)
  }

  return (
    <Container>
     <LoginImage src= {LoginImg} alt='Login-Image' />
     <ContainerItens>
      <img src= {Logo} alt='Logo-Image' />
      <h1>Login</h1>

     <form noValidate onSubmit = {handleSubmit(onSubmit)}>
      <Label>Email</Label>
      <Input type= "email" { ...register('email')}
       error={errors.email?.message}
       />
      <ErrorMessage>{errors.email?.message}</ErrorMessage>

      <Label>Senha</Label>
      <Input type= "password" { ...register('password')}
      error={errors.password?.message}
      />
      <ErrorMessage>{errors.password?.message}</ErrorMessage>

    <Button type= 'submit'>Login</Button>

    </form>

    <SingInlink>Não possui conta? <a>Inscrever-se</a></SingInlink>

     </ContainerItens>
    </Container>
  )
}

export default Login
