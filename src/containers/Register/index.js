import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import Logo from '../../assets/logo.svg'
import RegisterImg from '../../assets/register-image1.svg'
import { Button } from '../../components'
import api from '../../services/api'
import {
  Container,
  RegisterImage,
  ContainerItens,
  Label,
  Input,
  SingInlink,
  ErrorMessage
} from './style'

export function Register () {
  const schema = Yup.object().shape({
    name: Yup.string().required('O seu nome é obrigatório'),
    email: Yup.string().email('Digite um email válido').required('O email é obrigatório'),
    password: Yup.string().required('A senha é obrigatória').min(6, 'No minimo 6 digitos'),
    confirmPassword: Yup.string().required('A senha é obrigatória').oneOf([Yup.ref('password')], 'As senhas devem ser iguais')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async clientData => {
    try {
      const { status } = await api.post('users', {
        name: clientData.name,
        email: clientData.email,
        password: clientData.password
      },
      { validateStatus: () => true }
      )

      if (status === 201 || status === 200) {
        toast.success('Cadastro criado com sucesso')
      } else if (status === 409) {
        toast.error(' E-mail já cadastrado, faça login para continuar')
      } else {
        throw new Error()
      }
    } catch (err) {
      toast.error('Falha no sistema! tente novamente')
    }
  }

  return (
    <Container>
     <RegisterImage src= {RegisterImg} alt='Register-Image' />
     <ContainerItens>
      <img src= {Logo} alt='Logo-Image' />
      <h1>Cadastre-se</h1>

     <form noValidate onSubmit = {handleSubmit(onSubmit)}>

     <Label error={errors.name?.message}>Name</Label>
      <Input type= "text" { ...register('name')}
       error={errors.name?.message}
       />
      <ErrorMessage>{errors.name?.message}</ErrorMessage>

      <Label error={errors.email?.message}>Email</Label>
      <Input type= "email" { ...register('email')}
       error={errors.email?.message}
       />
      <ErrorMessage>{errors.email?.message}</ErrorMessage>

      <Label error={errors.password?.message}>Senha</Label>
      <Input type= "password" { ...register('password')}
      error={errors.password?.message}
      />
      <ErrorMessage>{errors.password?.message}</ErrorMessage>

      <Label error={errors.confirmPassword?.message}>Confirmar Senha</Label>
      <Input type= "Password" { ...register('confirmPassword')}
      error={errors.confirmPassword?.message}
      />
      <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>

    <Button type= 'submit' style= {{ marginTop: 25, marginBottom: 25 }}>
      Login
      </Button>

    </form>

    <SingInlink>
      já possui conta?{' '}
       <Link style={{ color: 'white' }} to= '/login'>
        Faça Login
        </Link>
      </SingInlink>

     </ContainerItens>
    </Container>
  )
}
