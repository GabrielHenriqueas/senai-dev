import { Button, View } from "react-native"

export const Navegacao = ({ navigation }) => {
    return (
        <View>
            <Button
                title="Login"
                onPress={() => navigation.navigate("Login")}
            />
            <Button
                title="Recuperar Senha"
                onPress={() => navigation.navigate("RecuperarSenha")}
            />
            <Button
                title="Verifique seu email"
                onPress={() => navigation.navigate("VerificaEmail")}
            />
            <Button
                title="Redefinir Senha"
                onPress={() => navigation.navigate("RedefinirSenha")}
            />
            <Button
                title="Criar Conta"
                onPress={() => navigation.navigate("CriarConta")}
            />
        </View>
    )
}