import { Button, ButtonTitle } from "../../components/Button/Button"
import { Container } from "../../components/Container/Style"
import { Input } from "../../components/Input/Input"
import { Logo } from "../../components/Logo/Styled"
import { SubTitle, Title } from "../../components/Title/Styled"

export const RedefinirSenha = ({ RedefinirSenha }) => {
    return (
        <Container>

            <Logo source={require('../../assets/VitalHubLogo.png')} />

            <Title>Redefinir senha</Title>

            <SubTitle>Insira e confirme a sua nova senha</SubTitle>

            <Input
                placeholder={"Nova Senha"} 
            />

            <Input
                placeholder={"Confirmar nova senha"} 
            />

            <Button>
                <ButtonTitle>CONFIRMAR NOVA SENHA</ButtonTitle>
            </Button>


        </Container>
    )
}