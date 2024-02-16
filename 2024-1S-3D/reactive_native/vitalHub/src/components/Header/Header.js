import { BoxUser, ContainerHeader, DataUser, ImageUser, NameUser, TextDefault } from "../Container/Style"
import { Ionicons } from '@expo/vector-icons';


export const Header = ({ Header }) => {
    return (
        <ContainerHeader>
            <BoxUser>
                <ImageUser
                    source={{ uri: "https://github.com/kauameloo.png" }}
                />
                <DataUser>
                    <TextDefault>Bem Vindo !</TextDefault>
                    <NameUser>Dr. Fulano</NameUser>
                </DataUser>
            </BoxUser>

            <Ionicons name="notifications" size={24} color="white" />
        </ContainerHeader>
    )
}