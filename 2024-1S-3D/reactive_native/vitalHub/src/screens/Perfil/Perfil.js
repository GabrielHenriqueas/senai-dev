import { Button, ButtonGray, ButtonTitle } from "../../components/Button/Button"
import { Container, ContainerImage, ContainerScroll } from "../../components/Container/Style"
import { ContentAccount } from "../../components/ContentAccount/ContentAccount"
import { BoxInput, CepCidadeInput, CepInput, Input, PerfilInput } from "../../components/Input/Input"
import { PerfilImage } from "../../components/PerfilImage/Style"
import { PerfilRectangle } from "../../components/PerfilRectangle/Style"
import { LabelCidadeCep, LabelPerfil, LinkEmail, NameText, Title } from "../../components/Title/Styled"

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
                    <LabelCidadeCep>CEP</LabelCidadeCep>
                    <LabelCidadeCep>Cidade</LabelCidadeCep>
                </BoxInput>

                <BoxInput>
                    <CepCidadeInput
                        placeholder={"06548-909"}
                    />
                    <CepCidadeInput
                        placeholder={"Moema-SP"}
                    />
                </BoxInput>

                <Button>
                    <ButtonTitle>Salvar</ButtonTitle>
                </Button>

                <Button>
                    <ButtonTitle>Editar</ButtonTitle>
                </Button>

                <ButtonGray>
                    <ButtonTitle>Sair do App</ButtonTitle>
                </ButtonGray>



            </Container>

        </ContainerScroll>

    )
}