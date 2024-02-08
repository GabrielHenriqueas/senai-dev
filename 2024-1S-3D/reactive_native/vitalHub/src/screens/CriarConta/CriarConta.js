import { Button, ButtonTitle } from "../../components/Button/Button"
import { Container } from "../../components/Container/Style"
import { LinkBold } from "../../components/ContentAccount/ContentAccount"
import { Input } from "../../components/Input/Input"
import { LinkMedium } from "../../components/Link/Style"
import { Logo } from "../../components/Logo/Styled"
import { SubTitle, Title } from "../../components/Title/Styled"

export const CriarConta = ({ CriarConta }) => {
    return (
        <Container>
            <Logo source={require('../../assets/VitalHubLogo.png')} />

            <Title>Criar conta</Title>

            <SubTitle>Insira seu endereço de e-mail e senha para realizar seu cadastro.</SubTitle>

            <Input 
                placeholder={"Usuário ou E-mail"}
            />
            <Input 
                placeholder={"Senha"}
            />
            <Input 
                placeholder={"Confirmar Senha"}
            />

            <Button>
                <ButtonTitle>CADASTRAR</ButtonTitle>
            </Button>

            <LinkBold>Cancelar</LinkBold>
        </Container>
    )
}