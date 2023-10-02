import React from 'react';

export default function UsersList(props){
    debugger
    return (
       <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope='col'>Password</th>
          </tr>
        </thead>
    <tbody>
      {props.map((props) => (
        
        <tr key={props.id}>
          <td>{props.id}</td>
          <td>{props.name}</td>
          <td>{props.email}</td>
          <td>{props.password}</td>
        </tr>
      ))}
    </tbody>
      </table>
    )
  }