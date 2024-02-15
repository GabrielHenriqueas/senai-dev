import styled from "styled-components";
import { LinearGradient } from "expo-linear-gradient"

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    background-color: #fafafa;
`

export const ContainerImage = styled.SafeAreaView`
    width: 100%;
    height: 330;    
    align-items: center;
`

export const ContainerScroll = styled.ScrollView`
    flex: 1;
`

export const ContainerHeader = styled(LinearGradient).attrs({

    colors: ['#60BFC5', '#496BBA'],
    start: {x:0, y:0},
    end: {x:1, y:1},

})`

    width: 100%;
    height: 144px;
    border-radius:  0px 0px 15px 15px;
`

export const BoxUser = styled.SafeAreaView`
    
`