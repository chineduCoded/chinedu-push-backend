import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useNavigate } from 'react-router-dom'
import {
  Container,
  Forgot,
  Form,
  FormButton,
  FormContainer,
  FormInput,
  InputError,
  Para,
  Title,
  Wrapper,
} from './UserElements'

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  })
  .required()

const SignIn = () => {
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const navigate = useNavigate()

  const onSubmit = (data) => {
    console.log(data)
    resetField('email')
    resetField('password')
    navigate('dashboard')
  }
  return (
    <Container>
      <Wrapper>
        <FormContainer>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Title>Sign In</Title>
            <Para>Log in to your Account</Para>
            <FormInput
              type="email"
              placeholder="Email"
              {...register('email')}
            />
            <InputError>{errors.email?.message}</InputError>
            <FormInput
              type="password"
              placeholder="Password"
              {...register('password')}
            />
            <InputError>{errors.password?.message}</InputError>
            <FormButton type="submit">Login</FormButton>
          </Form>
          <Forgot to="forgot">Forgot password?</Forgot>
        </FormContainer>
      </Wrapper>
    </Container>
  )
}

export default SignIn
