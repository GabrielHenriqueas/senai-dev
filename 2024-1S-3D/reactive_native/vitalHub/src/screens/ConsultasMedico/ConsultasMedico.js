import { useState } from "react";
import CalendarList from "../../components/Calendar/CalendarHome";
import { Container, FilterAppointment } from "../../components/Container/Style";
import { Header } from "../../components/Header/Header";
import { BtnListAppointment } from "../../components/BtnListAppointment/BtnListAppointment";
import { ContentAccount } from "../../components/ContentAccount/ContentAccount";
import { PacientCard } from "../../components/PacientCard/PatientCard";
import { AppointmentCard } from "../../components/AppointmentCard/AppointmentCard";
import { ListComponent } from "../../components/List/List";

const Consultas = [
    {id: 1, nome: "Carlos", situacao: "pendente"},
    {id: 2, nome: "Carlos", situacao: "realizado"},
    {id: 3, nome: "Carlos", situacao: "cancelado"},
    {id: 4, nome: "Carlos", situacao: "realizado"},
    {id: 5, nome: "Carlos", situacao: "cancelado"},
];

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

            {/* Seção de Cards */}

            {/* Card */}
            <AppointmentCard/>

            {/* Lista */}
            <ListComponent
                data={Consultas}
                keyExtractor={(item) => item.id}

                renderItem={({item}) => 
            statusLista == item.situacao && (
                <AppointmentCard
                    situacao={item.situacao}
                />
            )}
            />




           


        </Container>
    )
}