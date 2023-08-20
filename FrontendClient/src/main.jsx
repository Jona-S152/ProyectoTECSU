import React from 'react';
import ReactDOM from 'react-dom';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "./routes/Login.jsx";
import Register from "./routes/SignUp.jsx";
import MenuMain from "./routes/Menu.jsx";
import ProtectedRoute from "./routes/ProtectedRoute.jsx";
import {AuthProvider} from "./Authentication/AuthProvider.jsx";
import Class from "./Pages/Introduccion.jsx";
import TiposDeDatosPage from "./Pages/class.jsx";
import Variables from "./Pages/class2.jsx";

// const router = createBrowserRouter([
//     {
//         path: '/',
//         element: <Login/>
//     },
//     {
//         path: '/SignUp',
//         element: <Register/>
//     },
//     {
//         path: '/',
//         element: <ProtectedRoute/>,
//         children: [
//             {
//             path: '/Menu',
//             element: <MenuMain/>
//             }
//         ]
//     }
// ]);

ReactDOM.createRoot( document.getElementById ( 'root' )).render (
    // <React.StrictMode>
    //     <AuthProvider>
    //         <RouterProvider router={router}/>
    //     </AuthProvider>
    // </React.StrictMode>
    <Variables/>
);
