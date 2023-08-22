
import ReactDOM from 'react-dom';
import Variables from "./Pages/class2.jsx";
import Bucles from "./Pages/class3.jsx";
import PythonRunner from "./Compilador/compilador.jsx";
import MenuMain from "./routes/Menu.jsx";
import Condicionales from "./Pages/class4.jsx";
import Taller from "./Pages/class5.jsx";

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
    <Taller/>
);
