import { Modal } from "react-native"
import { ModalContent } from "../CancellationModal/Style"
import { Title } from "../Title/Styled"

export const ConsultaModal = ({
    visible,
    setShowModalConsulta,
    ...rest }) => {
    return (
        // 
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">

            {/* Container */}
            <ConsultaModal>
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
                        <LinkBold onPress={() => setShowModalCancel(false)}>Cancelar</LinkBold>
                    </ContentAccount>


                </ModalContent>
            </ConsultaModal>
        </Modal>
    )
}