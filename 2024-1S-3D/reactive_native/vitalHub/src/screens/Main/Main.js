import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Perfil } from '../Perfil/Perfil';
import { RedefinirSenha } from '../RedefinirSenha/RedefinirSenha';

//chamando os elementos do StyledMain.js
import { ContentIcon, TextIcon } from './StyledMain';

import { FontAwesome, FontAwesome5 } from '@expo/vector-icons'

const BottomTab = createBottomTabNavigator();

export const Main = () => {
    return (
        <BottomTab.Navigator
            initialRouteName='Home'
            screenOptions={({ route }) => ({
                tabBarStyle: {
                    backgroundColor: "#FFFFFFF",
                    height: 80,
                    paddingTop: 10,
                },
                tabBarActiveBackgroundColor: "transparent",
                tabBarShowLabel: false,
                headerShown: false,
                tabBarIcon: ({ focused }) => {
                    if (route.name === "Home") {
                        return (
                            <ContentIcon
                                tabBarActiveBackgroundColor={focused ? "#ECF2FF" : "transparent"}
                            >
                                <FontAwesome name='calendar' size={18} color={"#4E4B59"} />
                                {focused && <TextIcon>Agenda</TextIcon>}
                            </ContentIcon>
                        )

                    } else {
                        <ContentIcon
                            tabBarActiveBackgroundColor={focused ? "#ECF2FF" : "transparent"}
                        >
                            <FontAwesome5 name='user-cicle' size={18} color={"#4E4B59"} />
                            {focused && <TextIcon>Perfil</TextIcon>}
                        </ContentIcon>
                    }
                }
            })}
        >

            <BottomTab.Screen
                name='Home'
                component={RedefinirSenha}
            />

            <BottomTab.Screen
                name='Perfil'
                component={Perfil}
            />

        </BottomTab.Navigator>
    )
}