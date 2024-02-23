import { Button, ButtonGray, ButtonTitle } from "../../components/Button/Button"
import { Container, ContainerImage, ContainerScroll } from "../../components/Container/Style"
import { LinkBold } from "../../components/ContentAccount/ContentAccount"
import { Input, InputProntuario, PerfilInput } from "../../components/Input/Input"
import { PerfilImage } from "../../components/PerfilImage/Style"
import { PerfilRectangle } from "../../components/PerfilRectangle/Style"
import { LabelPerfil, LinkEmail, NameText } from "../../components/Title/Styled"

export const Prontuario = ({ Prontuario }) => {
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

                <LabelPerfil>Descrição da Consulota</LabelPerfil>
                <InputProntuario
                    placeholder={"Descrição"}
                />

                <LabelPerfil>Diagnóstico do paciente</LabelPerfil>
                <Input
                    placeholder={"Diagnóstico"}
                />

                <LabelPerfil>Prescrição médica</LabelPerfil>
                <InputProntuario
                    placeholder={"Prescrição"}
                />

                <Button>
                    <ButtonTitle>Salvar</ButtonTitle>
                </Button>

                <ButtonGray>
                    <ButtonTitle>Editar</ButtonTitle>
                </ButtonGray>

                <LinkBold>Cancelar</LinkBold>
            </Container >
        </ContainerScroll>
    )
}