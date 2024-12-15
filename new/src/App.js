
import './App.css';
import Card from './components/Card';

function App() {
  return (
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
   
  
 

  );
}

export default App;
