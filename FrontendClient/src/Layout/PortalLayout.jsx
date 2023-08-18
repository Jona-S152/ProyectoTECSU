// import {useAuth} from "../Authentication/AuthProvider.jsx";
// import React from "react";
// import axios from "axios";
// import error from "eslint-plugin-react/lib/util/error.js";
//
// export default function PortalLayout(){
//     const Authentication = useAuth();
//     const handleSignOut = (e: React.MouseEvent<HTMLAnchorElement>) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('URL_DE_LA_API/sesion', {
//                 metghod: 'DELETE',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({  }   ),
//         } catch (error) {
//     };
//     }
//     return (
//         <>
//             <header>
//                 <nav>
//                     <ul>
//                         <li>
//                             <a href={"#"} onClick={handleSignOut}>
//                                 Sign out
//                             </a>
//                         </li>
//                     </ul>
//                 </nav>
//             </header>
//         </>
//     )
// }