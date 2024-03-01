import { DefaultButton, GoogleButton } from "../../components/Button/Button"
import { Container } from "../../components/Container/StyledContainer"
import { Input } from "../../components/Input/StyledInput"
import { Link } from "../../components/Link/Link"
import { LinkMedium } from "../../components/Link/StyledLink"
import { Logo } from "../../components/Logo/StyledLogo"
import { Title } from "../../components/Title/StyledTitle"

export const Login = ({ Login }) => {
    return (
        <Container>

            <Logo source={require('../../assets/VitalHubLogo.png')} />

            <Title>Entrar ou criar conta</Title>

            <Input placeholder="Usuário ou E-mail" />

            <Input placeholder="Senha" />

            <LinkMedium>Esqueceu sua senha?</LinkMedium>

            <DefaultButton text={"Entrar"} />

            <GoogleButton text={"Entrar com o Google"} />

            <Link text={"Não tem conta?"} link={" Crie uma agora!"} />

        </Container>
    )
}