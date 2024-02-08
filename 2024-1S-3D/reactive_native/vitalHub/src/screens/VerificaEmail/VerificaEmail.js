import styled from "styled-components";
import { Container } from "../../components/Container/Style";
import { Logo } from "../../components/Logo/Styled";
import { SubTitle, Title } from "../../components/Title/Styled";
import { LinkMedium } from "../../components/Link/Style";
import { ContentAccount, ContentNumber, LinkBold } from "../../components/ContentAccount/ContentAccount";
import { InputVerifica } from "../../components/Input/Input";
import { Button, ButtonTitle } from "../../components/Button/Button";

export const VerificaEmail = ({ VerificaEmail }) => {
    return (
        <Container>
            <Logo source={require('../../assets/VitalHubLogo.png')} />

            <Title>Verifique seu e-mail</Title>
            
            <SubTitle>Digite o código de 4 dígitos enviado para      <LinkBold>username@email.com</LinkBold></SubTitle>
            

            <ContentNumber>
                <InputVerifica
                    placeholder="0"
                    keyboardType={"numeric"}
                    maxLength={1}
                />

                <InputVerifica
                    placeholder="0"
                    keyboardType={"numeric"}
                    maxLength={1}
                />

                <InputVerifica
                    placeholder="0"
                    keyboardType={"numeric"}
                    maxLength={1}
                />

                <InputVerifica
                    placeholder="0"
                    keyboardType={"numeric"}
                    maxLength={1}
                />
            </ContentNumber>

            <Button>
                <ButtonTitle>Entrar</ButtonTitle>
            </Button>

            <ContentAccount>
                <LinkBold>Reenviar Código</LinkBold>
            </ContentAccount>
        </Container>
    )
}