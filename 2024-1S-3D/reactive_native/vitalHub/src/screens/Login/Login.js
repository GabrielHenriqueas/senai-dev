import { DefaultButton, GoogleButton } from "../../components/Button/Button"
import { Button, ButtonGoogle, ButtonTitle, ButtonTitleGoogle } from "../../components/Button/StyledButton"
import { Container } from "../../components/Container/StyledContainer"
import { ContentAccount, LinkBold, TextAccount } from "../../components/ContentAccount/StyledContentAccount"
import { Input } from "../../components/Input/StyledInput"
import { LinkMedium } from "../../components/Link/StyledLink"
import { Logo } from "../../components/Logo/StyledLogo"
import { Title } from "../../components/Title/StyledTitle"
import { AntDesign } from '@expo/vector-icons';

export const Login = ({ Login }) => {
    return (
        <Container>

            <Logo source={require('../../assets/VitalHubLogo.png')} />

            <Title>Entrar ou criar conta</Title>

            <Input
                placeholder="Usuário ou E-mail"
            />

            <Input
                placeholder="Senha"
            />

            <LinkMedium>Esqueceu sua senha?</LinkMedium>

            <DefaultButton text={"Entrar"} />

            <GoogleButton text={"Entrar com o Google"} />


            <ContentAccount>
                <TextAccount>Não tem conta?</TextAccount><LinkBold> Crie uma agora!</LinkBold>
            </ContentAccount>

        </Container>
    )
}