import styled from "styled-components";

export const Input = styled.TextInput.attrs({
    placeholderTextColor: "#34898f"
})`
    width: 90%;
    height: 53px;
    padding: 16px;
    margin-top: 15px;

    border: 2px solid #49B3BA;
    border-radius: 5px;

    font-size: 16px;
    font-family: "MontserratAlternates_600SemiBold";
    color: #34898f;
`

export const InputVerifica = styled(Input)`
    width: 65px;
    height: 62px;
    padding: 0px;
    padding-bottom: 5px;
    justify-content: center;
    align-items: center;
    margin-top: 0px;
    font-size: 40px;
    font-family: "Quicksand_600SemiBold";
    text-align: center;
`