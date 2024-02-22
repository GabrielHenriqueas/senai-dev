import { Modal } from "react-native"
import { ModalContent, ModalText } from "../CancellationModal/Style"
import { Title } from "../Title/Styled"
import { Button } from "../Button/Button"
import { ConsultModal } from "../ConsultaModal/StyledConsultModal"
import { ContentAccount, LinkBold } from "../ContentAccount/ContentAccount"

export const ConsultModal = ({
    visible,
    setShowModalConsulta,
    ...rest }) => {
    return (
        // 
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">

            {/* Container */}
            <ConsultModal>
                {/* content */}
                <ModalContent>

                    {/* Title */}
                    <Title>Cancelar Consulta</Title>

                    {/* description */}
                    <ModalText>
                        Ao cancelar essa consulta, abrirá uma possível disponibilidade no seu horário, deseja mesmo cancelar essa consulta?
                    </ModalText>

                    {/* button modal*/}
                    <Button>
                        <ButtonTitle>Confirmar</ButtonTitle>
                    </Button>

                    {/* button cancel */}
                    <ContentAccount>
                        <LinkBold onPress={() => setShowModalConsult(false)}>Cancelar</LinkBold>
                    </ContentAccount>


                </ModalContent>
            </ConsultModal>
        </Modal>
    )
}