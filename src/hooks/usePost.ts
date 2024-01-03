import { useState } from "react";
/**
 * <T> = Um Tipo generíco de retorno, pode retornar qualquer coisa
 * Funções Assíncronas retornam Promisses
 */
export default function usePost() {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const [resposta, setResposta] = useState('');

    async function cadastrarDados<T>({url, dados, token = ""}: {url: string, dados: T, token?: string }) {
        try{
            const request = {
                method: 'POST',
                headers: {},
                body: JSON.stringify(dados)
            };

            if (token) {
                request.headers = {
                    'Content-Type': 'application/json',
                    'Authorization': token
                }
            } else {
                request.headers = {
                    'Content-Type': 'application/json',
                }
            }

            const response = await fetch(url, request)
            setSuccess(true);
            const respostaConvertida = await response.json();
            setResposta(respostaConvertida.token);

        } catch(error) {
            setError('Não foi possível enviar os dados')
        }
    }

    return { cadastrarDados, success, error, resposta };
}