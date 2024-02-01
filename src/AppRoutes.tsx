import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RotaPrivate } from "./utils/RotaPrivate";

import Home from "./pages/Home";
import Order from "./pages/Order";
import Data from "./pages/Data";
import Shipping from "./pages/Shipping";
import Devolution from "./pages/Devolution";
import Login from "./pages/Login";
import LoginAcompany from "./pages/Login/index-acompany";
import Follow from "./pages/follow";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route> 
                <Route path="/solicitar" element={<Home />}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/login-acompany" element={<LoginAcompany/>}></Route>
                <Route path="/order" element={<Order />}></Route>
                <Route path="/data" element={<Data />}></Route>
                <Route path="/shipping" element={<Shipping />}></Route>
                <Route path="/devolution" element={<Devolution />}></Route>
                <Route path="/follow" element={<Follow/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}
export default AppRoutes;