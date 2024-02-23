import { useState } from "react";
import CalendarList from "../../components/Calendar/CalendarHome";
import { Container, FilterAppointment } from "../../components/Container/Style";
import { Header } from "../../components/Header/Header";
import { BtnListAppointment } from "../../components/BtnListAppointment/BtnListAppointment";
import { ContentAccount } from "../../components/ContentAccount/ContentAccount";
import { PacientCard } from "../../components/PacientCard/PatientCard";
import { AppointmentCard } from "../../components/AppointmentCard/AppointmentCard";
import { ListComponent } from "../../components/List/List";
import { Modal } from "react-native";
import { CancellationModal } from "../../components/CancellationModal/CancellationModal";
import { ConsultModal } from "../../components/ConsultaModal/StyledConsultModal";

const Consultas = [
    {id: 1, nome: "Carlos", situacao: "pendente"},
    {id: 2, nome: "Carlos", situacao: "pendente"},
    {id: 3, nome: "Carlos", situacao: "cancelado"},
    {id: 4, nome: "Carlos", situacao: "realizado"},
    {id: 5, nome: "Carlos", situacao: "cancelado"},
    {id: 5, nome: "Carlos", situacao: "cancelado"},
    {id: 5, nome: "Carlos", situacao: "cancelado"},
    {id: 5, nome: "Carlos", situacao: "cancelado"},
];

export const ConsultasMedico = () => {
    
    //state para o estado da lista(Cards)
    const [statusLista, setStatusLista] = useState("pendente")

    // state para a exibição dos modais
    const [showModalCancel, setShowModalCancel] = useState(false);
    const [showModalConsult, setShowModalConsult] = useState(false);
    const [showModalAppointment, setShowModalAppointment] = useState(false);

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
                    clickButton={statusLista === "realizado"}
                    onPress={() => setStatusLista("realizado")} />

                {/* botao p consultas canceladas */}
                <BtnListAppointment
                    textButton={"Canceladas"}
                    clickButton={statusLista === "cancelado"}
                    onPress={() => setStatusLista("cancelado")} />
            </FilterAppointment>

            {/* Seção de Cards */}

            {/* Card */}
        
            {/* Lista */}
            <ListComponent
                data={Consultas}
                keyExtractor={(item) => item.id}

                renderItem={({item}) => 
            statusLista == item.situacao && (
                <AppointmentCard
                    situacao={item.situacao}
                    onPressCancel={() => setShowModalCancel(true)}
                    onPressVerProntuario={() => setShowModalConsult(true)}
                    onPressAppointment={() => setShowModalAppointment(true)}
                />
            )}
                showsVerticalScrollIndicator={false}
            />
            
        

            {/* modal cancelar */}
            <CancellationModal
                visible={showModalCancel}
                setShowModalCancel={setShowModalCancel}
            />

            <ConsultModal
                visible={showModalConsult}
                setShowModalConsult={setShowModalConsult}
            />       
        </Container>
    )
}