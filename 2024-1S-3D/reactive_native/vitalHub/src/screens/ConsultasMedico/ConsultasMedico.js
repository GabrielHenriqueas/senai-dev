import { useState } from "react";
import CalendarList from "../../components/Calendar/CalendarHome";
import { Container, FilterAppointment } from "../../components/Container/Style";
import { Header } from "../../components/Header/Header";
import { BtnListAppointment } from "../../components/BtnListAppointment/BtnListAppointment";
import { ContentAccount } from "../../components/ContentAccount/ContentAccount";
import { PacientCard } from "../../components/PacientCard/PatientCard";


export const ConsultasMedico = () => {
    const [statusLista, setStatusLista] = useState("pendente")

    return (
        <Container>

            {/* Header */}
            <Header />

            {/* Calendário */}
            <CalendarList />

            {/* Filtros (botões) */}
            {/* Container */}

            <FilterAppointment>
                {/* botao p consultas agendadas */}
                <BtnListAppointment
                    textButton={"Agendadas"}
                    clickButton={statusLista === "pendente"}
                    onPress={() => setStatusLista("pendente")} />

                {/* botao p consultas realizadas */}
                <BtnListAppointment
                    textButton={"Realizadas"}
                    clickButton={statusLista === "realizadas"}
                    onPress={() => setStatusLista("realizadas")} />

                {/* botao p consultas canceladas */}
                <BtnListAppointment
                    textButton={"Canceladas"}
                    clickButton={statusLista === "canceladas"}
                    onPress={() => setStatusLista("canceladas")} />
            </FilterAppointment>

            <ContentAccount>
            <PacientCard/>

            </ContentAccount>


        </Container>
    )
}