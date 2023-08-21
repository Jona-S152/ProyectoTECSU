import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { RankingPage } from "./Pages/RankingPage";
import { Sesion } from "./Pages/Sesion";
import { MenuPage } from "./Pages/Menu";
import { Layout } from "./components/Layout";
import Prueba1 from "./components/Pruebas/Prueba1";
import Prueba2 from "./components/Pruebas/Prueba2";
import Prueba3 from "./components/Pruebas/Prueba3";
//import { Navigation } from "./components/Navigation";

function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element = {<Navigate to = "/iniciar-sesion" />} />
                <Route path="/iniciar-sesion" element = {<Sesion />} />
                <Route path="/menu" element = {<Layout><MenuPage /></Layout>}/>
                <Route path="/ranking" element = {<Layout><RankingPage /></Layout>} />
                <Route path="/prueba1" component={<Layout><Prueba1/></Layout>} />
                <Route path="/prueba1" component={<Layout><Prueba2/></Layout>} />
                <Route path="/prueba1" component={<Layout><Prueba3/></Layout>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;