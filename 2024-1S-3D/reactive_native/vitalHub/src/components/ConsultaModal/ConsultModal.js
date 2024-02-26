import { Modal } from "react-native"
import { ModalContent, ModalText } from "../CancellationModal/Style"
import { LinkEmail, NameText, Title } from "../Title/Styled"
import { Button, ButtonTitle } from "../Button/Button"
import { ConsultModalStyled } from "../ConsultaModal/StyledConsultModal"
import { ContentAccount, LinkBold } from "../ContentAccount/ContentAccount"
import { ModalImage, PerfilImage } from "../PerfilImage/Style"

export const ConsultModal = ({
    visible,
    setShowModalConsult,
    ...rest }) => {
    return (
        // 
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">

            {/* Container */}
            <ConsultModalStyled>
                {/* content */}
                <ModalContent>

                    <ModalImage source={{ uri: "https://github.com/ThiagoRafael-lin.png" }} />

                    {/* Title */}
                    <Title>Niccole Sarga</Title>

                    <LinkEmail>22 anos niccole.sarga@gmail.com</LinkEmail>

                    {/* button modal*/}
                    <Button>
                        <ButtonTitle>Inserir Prontuário</ButtonTitle>
                    </Button>

                    {/* button cancel */}
                    <ContentAccount>
                        <LinkBold onPress={() => setShowModalConsult(false)}>Cancelar</LinkBold>
                    </ContentAccount>

                </ModalContent>
            </ConsultModalStyled>
        </Modal>
    )
}