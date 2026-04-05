import { ref, set, push} from "firebase/database";
import { database } from "./firebaseConfig";

export const salvarTeste = async () => {
    try {
        await set(ref(database, "teste/"), {
            mensagem: "Firebase conectado"
        });

    console.log("Salvo com sucesso!!");
    } catch (error) {
        console.log("Erro ao salvar", error);
    }
};


export const salvarUsuario = async (dados: any) => {
    try {
        const usuariosRef = ref(database, "users");

        await push(usuariosRef, dados);

        console.log("Usuário salvo com sucesso!");
    } catch (error) {
        console.log("Erro ao salvar", error);
    }
};