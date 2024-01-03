/**
  * Uma solução eficiente para gerenciar o estado em 
    aplicativos web é utilizar o MobX, uma biblioteca 
    de gerenciamento de estado que permite que os 
    dados sejam gerenciados de forma simples e reativa. 
    
    Com o MobX, é possível criar observáveis e reações 
    que atualizam a interface de usuário 
    automaticamente sempre que houver alguma mudança 
    no estado, tornando o processo de gerenciamento de 
  * estado mais simplificado e eficiente.  
 */

import { action, makeObservable, observable } from "mobx";



interface IUsuario {
    email: string;
    token: string;
}

class AutenticaStore{
    isAutenticado = false;
    usuario: IUsuario = {
        email: "",
        token: ""
    }

    constructor() {
        // Tornar esses objetos observaveis para gerenciar estados
        makeObservable(this, {
            isAutenticado: observable,
            usuario: observable,
            login: action,
            logout: action,
        })
    }

    login({email, token} : IUsuario) {
        this.isAutenticado = true;
        this.usuario = {email, token};
    }

    logout() {
        this.isAutenticado = false;
        this.usuario = { email: "", token: ""};
    }
}

const autenticaStore = new AutenticaStore();

export default autenticaStore;