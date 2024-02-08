import { Button, ButtonGoogle, ButtonTitle, ButtonTitleGoogle } from "../../components/Button/Button"
import { Container } from "../../components/Container/Style"
import { ContentAccount, LinkBold, TextAccount } from "../../components/ContentAccount/ContentAccount"
import { Input } from "../../components/Input/Input"
import { LinkMedium } from "../../components/Link/Style"
import { Logo } from "../../components/Logo/Styled"
import { Title } from "../../components/Title/Styled"
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

            <Button>
                <ButtonTitle>Entrar</ButtonTitle>
            </Button>

            <ButtonGoogle>
                <AntDesign name="google" size={18} color="#496BBA" />
                <ButtonTitleGoogle>Entrar com o Google</ButtonTitleGoogle>
            </ButtonGoogle>

            <ContentAccount>
                <TextAccount>Não tem conta?</TextAccount><LinkBold> Crie uma agora!</LinkBold>
            </ContentAccount>

        </Container>
    )
}