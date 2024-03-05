import { FlatListComponent } from "react-native";
import CalendarList from "../../components/Calendar/CalendarHome"
import { Container, FilterAppointment } from "../../components/Container/StyledContainer"
import { Header } from "../../components/Header/Header"
import { BtnListAppointment } from "../../components/BtnListAppointment/BtnListAppointment";

const Consultas = [
    { id: 1, nome: "Carlos", situacao: "pendente" },
    { id: 2, nome: "Carlos", situacao: "pendente" },
    { id: 3, nome: "Carlos", situacao: "cancelado" },
    { id: 4, nome: "Carlos", situacao: "realizado" },
    { id: 5, nome: "Carlos", situacao: "cancelado" },
    { id: 5, nome: "Carlos", situacao: "cancelado" },
    { id: 5, nome: "Carlos", situacao: "cancelado" },
    { id: 5, nome: "Carlos", situacao: "cancelado" },
];

export const ConsultasPaciente = ({ }) => {
    return (
        <Container>
            <Header />

            <CalendarList />

            <FilterAppointment>

                {/* botao p consultas agendadas */}
                <BtnListAppointment
                    textButton={"Agendadas"}
                    clickButton={statusLista === "pendente"}
                    onPress={() => setStatusLista("pendente")} />

                {/* botao p consultas realizadas */}
                <BtnListAppointment
                    textButton={"Realizadas"}
                    clickButton={statusLista === "realizado"}
                    onPress={() => setStatusLista("realizado")} />

                {/* botao p consultas canceladas */}
                <BtnListAppointment
                    textButton={"Canceladas"}
                    clickButton={statusLista === "cancelado"}
                    onPress={() => setStatusLista("cancelado")} />

            </FilterAppointment>

            {/* <FlatListComponent

            /> */}

            {/* modal cancelar */}
            {/* <CancellationModal
                visible={showModalCancel}
                setShowModalCancel={setShowModalCancel}
            />

            <ConsultModal
                visible={showModalConsult}
                setShowModalConsult={setShowModalConsult}
            /> */}

        </Container>
    )
}