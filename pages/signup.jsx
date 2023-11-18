import { useState } from "react"
import styled from "styled-components"
import Link from "next/link"

import { useForm } from "react-hook-form"
import { joiResolver } from "@hookform/resolvers/joi"

import { signupSchema } from "../modules/user/user.schema"

import ImageWithSpace from "../src/components/layout/ImageWithSpace"
import H1 from "../src/components/typography/H1"
import H2 from "../src/components/typography/H2"
import H4 from "../src/components/typography/H4"
import Button from "../src/components/inputs/Button"
import Input from "../src/components/inputs/Input"

const FormContainer = styled.div`
margin-top: 25px; 
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin: 20px 0;
    gap: 15px;
`

const Text = styled.p`
text-align: center;
`

export default function SignupPage() {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: joiResolver(signupSchema)
    })

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [user, setUser] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const hanldeForm = (data) => {

        console.log(data)

    }

    return (
        <ImageWithSpace>
            <H1># Social Dev</H1>
            <H4>Tudo que acontece no mundo dev, está aqui!</H4>

            <FormContainer>
                <H2>Crie sua conta</H2>

                <Form onSubmit={handleSubmit(hanldeForm)}>
                    <Input type="text" label="Nome" {...register('firstName')} error={errors.firstName} />
                    <Input type="text" label="Sobrenome" {...register('lastName')} error={errors.lastName} />
                    <Input type="text" label="Usuário" {...register('user')} error={errors.user} />
                    <Input type="email" label="Email" {...register('email')} error={errors.email} />
                    <Input type="password" label="Senha" {...register('password')} error={errors.password} />

                    <Button type="submit" disabled={Object.keys(errors).length}>Cadastrar</Button>
                </Form>

                <Text>
                    Já possui uma conta? <Link href="/login">Faça seu login</Link>

                </Text>

            </FormContainer>
        </ImageWithSpace>
    )
}