import React from 'react';

function Table(props) {
  return (
    <>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>{props.tableName}</h2>
      <table
        style={{
          width: "80%",
          margin: "20px auto",
          padding: "20px",
          backgroundColor: "grey", 
          border: "2px solid black", 
          borderRadius: "8px", 
          boxShadow: "4px 4px 8px rgba(0, 0, 0.3, 0.3)", 
          borderCollapse: "collapse",
        }}
      > 
        <thead>
          <tr style={{ backgroundColor: "green", color: "white" }}>
            <th style={{ padding: "10px", border: "1px solid white" }}>ID</th>
            <th style={{ padding: "10px", border: "1px solid white" }}>Name</th>
            <th style={{ padding: "10px", border: "1px solid white" }}>Department</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((item) => (
            <tr  style={{ textAlign: "center", borderBottom: "1px solid white" }}>
              <td style={{ padding: "10px", border: "1px solid white" }}>{item.id}</td>
              <td style={{ padding: "10px", border: "1px solid white" }}>{item.name}</td>
              <td style={{ padding: "10px", border: "1px solid white" }}>{item.department}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Table;
