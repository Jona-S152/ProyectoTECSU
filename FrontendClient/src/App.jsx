import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { RankingPage } from "./Pages/RankingPage";
import { Sesion } from "./Pages/Sesion";
import { MenuPage } from "./Pages/Menu";
import { Layout } from "./components/Layout";
//import { Navigation } from "./components/Navigation";

function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element = {<Navigate to = "/iniciar-sesion" />} />
                <Route path="/iniciar-sesion" element = {<Sesion />} />
                <Route path="/menu" element = {<Layout><MenuPage /></Layout>}/>
                <Route path="/ranking" element = {<Layout><RankingPage /></Layout>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;