
import { BrowserRouter, Router, Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Error from './Pages/Error';
import First from './Pages/First';
import './App.css';
import ThemeChange from './components/ThemeChange';
//import Card from './components/Card';
//import Counter from './components/Counter';
import Timer from './components/Timer';


  //card background-color based on status
 /* return (
   <div className="app">
      <Card
        title="Title 1"
        description="This is first card"
        imageUrl="https://fastly.picsum.photos/id/11/2500/1667.jpg?hmac=xxjFJtAPgshYkysU_aqx2sZir-kIOjNR9vx0te7GycQ"
        status="success"
      
      />
  <Card 
  title="Title 2"
  description="This is second card"
  imageUrl="https://fastly.picsum.photos/id/25/5000/3333.jpg?hmac=yCz9LeSs-i72Ru0YvvpsoECnCTxZjzGde805gWrAHkM"
  status="error"
     
  
  
  />
  <Card
  title="Title 3"
  description="This is third card"
  imageUrl="https://fastly.picsum.photos/id/13/2500/1667.jpg?hmac=SoX9UoHhN8HyklRA4A3vcCWJMVtiBXUg0W4ljWTor7s"
  status="warning"
  
  
  />

   </div>
   );*/

// Table

  //  import './App.css';
  //  import Table from './Components/Table';
   
  //  function App() {
   
  //    const employees = [
  //      { id: 1, name: "John Doe", department: "Engineering" },
  //      { id: 2, name: "Jane Smith", department: "Marketing" },
  //      { id: 3, name: "Sam Brown", department: "Sales" },
  //      { id: 4, name: "Emily White", department: "HR" },
  //      { id: 5, name: "Michael Green", department: "Finance" },
  //      { id: 6, name: "Anna Johnson", department: "Engineering" },
  //      { id: 7, name: "David Lee", department: "Sales" },
  //      { id: 8, name: "Chris Black", department: "Marketing" },
  //      { id: 9, name: "Sophie Turner", department: "HR" },
  //      { id: 10, name: "Lucas Scott", department: "Finance" },
  //    ];
     
   
   
  //    return (
  //      <Table data={employees} tableName="Employee Information" />
      
  //    )
   
   
   
   
   
  //  }
   
   
  //  export default App;
   


   

//counter 
function App() {

return(
 
  /*<Counter
        decrementLabel="Decrement" 
        incrementLabel="Increment" 
        resetLabel="Reset" 
        />
 
)*/


//timer

//<Timer/>

//lightmode & darkmode

//<ThemeChange/>

<>
<BrowserRouter>
<Routes>
<Route path="/" element={<First />}/>
  <Route path = "home" element={<Home/>}/>
  <Route path="contact" element={<Contact />} />
 
  <Route path="*" element={<Error />} />

 
</Routes>
</BrowserRouter>
</>


)}

export default App;
