
import './App.css';
import Table from './Components/Table';

function App() {

  const employees = [
    { id: 1, name: "John Doe", department: "Engineering" },
    { id: 2, name: "Jane Smith", department: "Marketing" },
    { id: 3, name: "Sam Brown", department: "Sales" },
    { id: 4, name: "Emily White", department: "HR" },
    { id: 5, name: "Michael Green", department: "Finance" },
    { id: 6, name: "Anna Johnson", department: "Engineering" },
    { id: 7, name: "David Lee", department: "Sales" },
    { id: 8, name: "Chris Black", department: "Marketing" },
    { id: 9, name: "Sophie Turner", department: "HR" },
    { id: 10, name: "Lucas Scott", department: "Finance" },
  ];
  


  return (
    <Table data={employees} tableName="Employee Information" />
   
  )





}


export default App;
