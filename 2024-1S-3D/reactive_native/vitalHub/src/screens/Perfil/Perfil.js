import { Button, ButtonTitle } from "../../components/Button/Button"
import { Container, ContainerImage, ContainerScroll } from "../../components/Container/Style"
import { ContentAccount } from "../../components/ContentAccount/ContentAccount"
import { BoxInput, Input, PerfilInput } from "../../components/Input/Input"
import { PerfilImage } from "../../components/PerfilImage/Style"
import { PerfilRectangle } from "../../components/PerfilRectangle/Style"
import { LabelPerfil, LinkEmail, NameText, Title } from "../../components/Title/Styled"

export const Perfil = ({ Perfil }) => {
    return (
        <ContainerScroll>
            <Container>

                <ContainerImage>

                    <PerfilImage source={require('../../assets/PerfilImage.png')} />

                    <PerfilRectangle>
                        <NameText>Richard Kosta</NameText>
                        <LinkEmail>richard.kosta@gmail.com</LinkEmail>
                    </PerfilRectangle>

                </ContainerImage>

                <LabelPerfil>Data de nascimento:</LabelPerfil>
                <PerfilInput
                    placeholder={"__/__/____"}
                />

                <LabelPerfil>CPF</LabelPerfil>
                <PerfilInput
                    placeholder={"Ex: 123.456.789-00"}
                />

                <LabelPerfil>Endereço</LabelPerfil>
                <PerfilInput
                    placeholder={"Ex: Rua Vicenso Silva, 987"}
                />

                <BoxInput>
                    <LabelPerfil>Endereço</LabelPerfil>
                    <LabelPerfil>Endereço</LabelPerfil>
                </BoxInput>

                <BoxInput>
                    <PerfilInput
                        placeholder={"Ex: Rua Vicenso Silva, 987"}
                    />
                    <PerfilInput
                        placeholder={"Ex: Rua Vicenso Silva, 987"}
                    />
                </BoxInput>

                <Button>
                    <ButtonTitle>Salvar</ButtonTitle>
                </Button>



            </Container>

        </ContainerScroll>

    )
}