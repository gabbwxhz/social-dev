import styled from "styled-components"
import Link from "next/link"

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
    return (
        <ImageWithSpace>
            <H1># Social Dev</H1>
            <H4>Tudo que acontece no mundo dev, está aqui!</H4>

            <FormContainer>
                <H2>Crie sua conta</H2>

                <Form>
                    <Input type="text" label="Nome" />
                    <Input type="text" label="Sobrenome" />
                    <Input type="text" label="Usuário" />
                    <Input type="email" label="Email" />
                    <Input type="password" label="Senha" />

                    <Button>Entrar</Button>
                </Form>

                <Text>
                    Já possui uma conta? <Link href="/login">Faça seu login</Link>

                </Text>

            </FormContainer>
        </ImageWithSpace>
    )
}