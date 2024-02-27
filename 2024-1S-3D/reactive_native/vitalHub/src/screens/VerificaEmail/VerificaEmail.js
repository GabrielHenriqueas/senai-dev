import styled from "styled-components";
import { Container } from "../../components/Container/StyledContainer";
import { Logo } from "../../components/Logo/StyledLogo";
import { SubTitle, Title } from "../../components/Title/StyledTitle";
//import { LinkMedium } from "../../components/Link/StyledLink";
import { ContentAccount, ContentNumber, LinkBold } from "../../components/ContentAccount/StyledContentAccount";
import { InputVerifica } from "../../components/Input/StyledInput";
import { Button, ButtonTitle } from "../../components/Button/StyledButton";

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