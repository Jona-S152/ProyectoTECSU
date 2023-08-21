import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { UserProvider } from "./api/getUserId.api";
import { RankingPage } from "./Pages/RankingPage";
import { Sesion } from "./Pages/Sesion";
import { MenuPage } from "./Pages/Menu";
import { Layout } from "./components/Layout";
import Introduccion from "./Clases/Introduccion";
import TiposDeDatosPage from "./Clases/class";
import Variables from "./Clases/class2";
import { GameMenu } from "./juegos/MiniJuegos";
import { CandyCrush } from "./juegos/candy-crush-master/CandyCrush";
import { FormClass2 } from "./Formularios/FormClass2";
import { FormClass3 } from "./Formularios/FormClass3";
import { FormClass4 } from "./Formularios/FormClass4";
import Bucles from "./Clases/class3";
import Condicionales from "./Clases/class4";

function App() {
    return(
        <UserProvider>
            <BrowserRouter>
                <Routes>
                        <Route path="/" element = {<Navigate to = "/iniciar-sesion" />} />
                        <Route path="/iniciar-sesion" element = {<Sesion />} />
                        <Route path="/menu" element = {<Layout><MenuPage /></Layout>}/>
                        <Route path="/introduccion" element = {<Layout><Introduccion /></Layout>} />
                        <Route path="/tipos-de-datos" element = {<Layout><TiposDeDatosPage /></Layout>} />
                        <Route path="/variables" element = {<Layout><Variables /></Layout>} />
                        <Route path="/ranking" element = {<Layout><RankingPage /></Layout>} />
                        <Route path="/minijuegos" element = {<Layout><GameMenu /></Layout>} />
                        <Route path="/candy-crush" element = {<Layout><CandyCrush /></Layout>} />
                        <Route path="/prueba1" element = {<Layout><FormClass2 /></Layout>} />
                        <Route path="/prueba2" element = {<Layout><FormClass3 /></Layout>} />
                        <Route path="/prueba3" element = {<Layout><FormClass4 /></Layout>} />
                        <Route path="/bucles" element = {<Layout><Bucles /></Layout>} />
                        <Route path="/condicionales" element = {<Layout><Condicionales /></Layout>} />
                    </Routes>            
            </BrowserRouter>
        </UserProvider>
            
    )
}

export default App;