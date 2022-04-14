import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import {
  Container,
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
  })
  .required()

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data) => {
    console.log(data)
    resetField('email')
  }
  return (
    <Container>
      <Wrapper>
        <FormContainer>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Title>Forgot password?</Title>
            <Para>Enter your email to reset password</Para>
            <FormInput
              type="email"
              placeholder="Email"
              {...register('email')}
            />
            <InputError>{errors.email?.message}</InputError>
            <FormButton type="submit">Submit</FormButton>
          </Form>
        </FormContainer>
      </Wrapper>
    </Container>
  )
}

export default ForgotPassword
