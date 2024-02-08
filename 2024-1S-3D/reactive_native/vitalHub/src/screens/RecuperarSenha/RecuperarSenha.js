import { Button, ButtonTitle } from "../../components/Button/Button"
import { Container } from "../../components/Container/Style"
import { Input } from "../../components/Input/Input"
import { Logo } from "../../components/Logo/Styled"
import { SubTitle, Title } from "../../components/Title/Styled"

export const RecuperarSenha = ({ RecuperarSenha }) => {
    return (
        < Container >
            <Logo source={require('../../assets/VitalHubLogo.png')} />

            <Title>Recuperar Senha</Title>

            <SubTitle>Digite abaixo seu email cadastrado que enviaremos um link para recuperação de senha</SubTitle>

            <Input
                placeholder="Usuário ou E-mail"
            />

            <Button>
                <ButtonTitle>Continuar</ButtonTitle>
            </Button>


        </Container >
    )
}