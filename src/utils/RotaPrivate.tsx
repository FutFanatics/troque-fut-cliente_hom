import { Navigate, Outlet } from "react-router-dom";
import autenticaStore from "../stores/autentica.store"

export const RotaPrivate = () => {
    const { isAutenticado } = autenticaStore;

    return (
        isAutenticado ? <Outlet /> : <Navigate to="/login" />
    )
}

