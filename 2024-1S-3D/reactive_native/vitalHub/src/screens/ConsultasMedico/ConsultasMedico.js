import CalendarList from "../../components/Calendar/CalendarHome";
import { Container } from "../../components/Container/Style";
import { Header } from "../../components/Header/Header";


export const ConsultasMedico = ({ ConsultasMedico }) => {
    return (
        <Container>
             <Header/>

            <CalendarList/>
            
        </Container>
    )
}