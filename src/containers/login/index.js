import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import LoginImg from '../../assets/login-image.svg'
import Logo from '../../assets/logo.svg'
import Button from '../../components/Button'
import { useUser } from '../../hooks/UserContext'
import api from '../../services/api'
import {
  Container,
  LoginImage,
  ContainerItens,
  Label,
  Input,
  SingInlink,
  ErrorMessage
} from './style'

function Login () {
  const { putUserData } = useUser()

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
    const { data } = await toast.promise(
      api.post('sessions', {
        email: clientData.email,
        password: clientData.password
      }),
      {
        pending: 'Verificando os dados',
        success: 'Seja bem-vindo(a)',
        error: 'Verifique o email ou senha'
      }
    )

    putUserData(data)
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

    <Button type= 'submit' style= {{ marginTop: 75, marginBottom: 25 }}>
      Login
      </Button>

    </form>

    <SingInlink>
      Não possui conta?{'  '}
       <Link style={{ color: 'white' }} to= '/cadastro'>
        Inscrever-se
        </Link>
      </SingInlink>

     </ContainerItens>
    </Container>
  )
}

export default Login
