// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Container, Row, Col } from "react-bootstrap";
// import Profile from "./Components/Profile";

// function App() {
//   const teamData = [
//     {
//       id: 1,
//       name: "Adam Jonson",
//       role: "Developer",
//       imageUrl: "https://picsum.photos/200/600?grayscale",
//     },
//     {
//       id: 2,
//       name: "Linda Larson",
//       role: "Manager",
//       imageUrl: "https://picsum.photos/300/500?grayscale",
//     },
//     {
//       id: 3,
//       name: "Marry Hudson",
//       role: "Designer",
//       imageUrl: "https://picsum.photos/400/500?grayscale",
//     },
//     {
//       id: 4,
//       name: "Nina Hudson",
//       role: "Designer",
//       imageUrl: "https://picsum.photos/350/300?grayscale",
//     },
//     {
//       id: 5,
//       name: "Margo Larson",
//       role: "Manager",
//       imageUrl: "https://picsum.photos/200/400?grayscale",
//     },
//     {
//       id: 6,
//       name: "Nicole Scavo",
//       role: "Manager",
//       imageUrl: "https://picsum.photos/200/300?grayscale",
//     },
//   ];

 
 

//   return (
//     <Container className="mt-5 p-5">
//       <Row className="g-4">
//         {teamData.map((item) => {
//           return (
//             <Col  xs={12} md={4}>
//               <Profile
//                 name={item.name}
//                 role={item.role}
//                 imageUrl={item.imageUrl}
//               />
//             </Col>
//           );
//         })}
//       </Row>
//     </Container>
//   );
// }

// export default App;



import React from "react";
//import Todo from "./Components/Todo";
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Service from "./Pages/Service";
import PageNotFound from "./Pages/PageNotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import LoginPage from "./Components/LoginPage";


function App(){
  return(
  
    
    
//    // <Todo/>


//    //routes
// <>
    
//         <BrowserRouter>
//         <Navbar /> 
//           <Routes>
         
//           <Route path="/" element={<Home />} />
//           <Route path="/About" element={<About />} />
//           <Route path="/Service" element={<Service />} />
//           <Route path="/Contact" element={<Contact />} />
//           <Route path="*" element={<PageNotFound />} /> 
//         </Routes>
//         <Footer/>
        
// </BrowserRouter>
        
      
// <h1 className="text-3xl font-bold underline">
// Hello world!
// </h1>

<LoginPage/>
   
  )

  
}

export default App;