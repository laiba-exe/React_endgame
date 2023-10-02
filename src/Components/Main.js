//import React from 'react';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DeleteUser from './DeleteUser';
import UsersList from './UsersList';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal } from 'bootstrap'
import UpdateUser from './UpdateUser';
import * as bootstrap from 'bootstrap';
window.bootstrap = bootstrap;


export default function Main() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  


  const handleSubmit = (e) => {
    e.preventDefault();
  
    const dataToSend = {
      name: formData.name,
      email: formData.email,
      password: formData.password
    };
  
    fetch('https://localhost:7164/api/Account/RegisterUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataToSend)
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((responseData) => {
        // Data was successfully added, you can handle the response as needed
        console.log('Data added successfully:', responseData);
  
        // Optionally, you can clear the form fields after successful submission
        setFormData({
          name: '',
          email: '',
          password: ''
        });



         // After successful submission, fetch and update data
         fetchUpdatedData();
        })
        .catch((error) => {
          console.error('Error adding data:', error);
        });
    };


  debugger
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    debugger;
   // fetch('https://jsonplaceholder.typicode.com/posts')
     fetch('https://localhost:7164/api/Account/GetUsers')

        .then((response) => {
         if(!response.ok){
           
   debugger
           throw new Error('Network response was not ok');
         }
        return response.json()
        })
       

        .then((data) => {
         //posts=data;

         console.log(data); // Log the data received from the API
         setPosts(data.data);
        })
       .catch((error) => {
          console.error('Error fetching data:', error);
        });
            console.log('Ending useEffect');
    
  }, []);
 
  

{/* Delete User */}


 //this is using async await
//  Constructs the URL for the DELETE request based on the user's id.
// Uses async/await syntax to make the DELETE request to the specified URL.
// Checks if the response from the server is OK (status code 200). If it's not OK, it throws an error.
// Checks the content type of the response to determine whether it's JSON or not.
// If the response is JSON, it parses the JSON data; otherwise, it treats the response as text.
// Logs the response data to the console.
// Calls the fetchUpdatedData function to update the data after a successful deletion.
// Handles any errors that occur during the process and logs them to the console.
  const handleDeleteUser = async (id) => {
    const url = `https://localhost:7164/api/Account/DeleteUser?Id=${id}`;
  
    try {
      const response = await fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const contentType = response.headers.get('content-type');
      const responseData = contentType && contentType.includes('application/json')
        ? await response.json()
        : await response.text();
  
      console.log('Response data:', responseData);
  
      fetchUpdatedData();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };





  
  // Function to fetch and update data
  const fetchUpdatedData = () => {
    return fetch('https://localhost:7164/api/Account/GetUsers')
      .then((response) => {
        if (!response.ok) {
          debugger;
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setPosts(data.data);
      })
      .catch((error) => {
        console.error('Error fetching updated data:', error);
      });
  };



{/*UpdateUser*/}


    // State to store the user data for editing
  const [editingUser, setEditingUser] = useState(null);

  // Function to open the edit modal
  const handleEditUser = (user) => {
    debugger
    setEditingUser(user);

    // <UpdateUser />
// Open the modal using Bootstrap's JavaScript API
const modal = new bootstrap.Modal(document.getElementById('updateUserModal2'));

var modalContainer = user.name;
var myModal = new bootstrap.Modal(modalContainer, { backdrop: 'static' })

modalContainer.querySelector(".modal-body").innerHTML = "Your value is: " + modal;

myModal.show();
                                    };



  // Function to update the user data
  const handleUpdateUser = (updatedData) => {
    // Call your API to update the user data with the updatedData
    // After successful update, you can fetch the updated data and refresh the table

    // Example: Make a PUT request to update user data
    fetch('https://localhost:7164/api/Account/UpdateUser', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedData)
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(() => {
        // After successful update, fetch and update data
        fetchUpdatedData();
      })
      .catch((error) => {
        console.error('Error updating user data:', error);
      });
  };







  return (
    <>
    {/* navbar */}
<nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Navbar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="#">Action</Link></li>
                  <li><Link className="dropdown-item" to="#">Another action</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link disabled" aria-disabled="true">Disabled</Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>


    {/* three input fields with labels */}
<div className="container mt-4">
        <div className="row">
          <div className="col-md-12">
            <div className="form-group row">
              <label htmlFor="name" className="col-md-2 col-form-label">Name:</label>
              <div className="col-md-4">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Enter name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="form-group row">
              <label htmlFor="email" className="col-md-2 col-form-label">Email:</label>
              <div className="col-md-4">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Enter email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="form-group row">
              <label htmlFor="password" className="col-md-2 col-form-label">Password:</label>
              <div className="col-md-4">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Enter password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
    {/* submit button */}
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-12">
            <button className="btn btn-success" type="button" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>


    {/* table */}
<div className='container mt-5'>
     <table className="table table-success table-striped table-hover">
      <thead className='table-secondary'>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope='col'>Password</th>
          <th scope='col'>Action</th>
        </tr>
      </thead>
  <tbody>
    {posts.map((posts) => (
      <tr key={posts.id}>
        <td>{posts.id}</td>
        <td>{posts.name}</td>
        <td>{posts.email}</td>
        <td>{posts.password}</td>
        <td>{/* this td has two buttons delete and edit */}
            <button className="btn btn-danger" onClick={() => handleDeleteUser(posts.id)}>
                Delete</button>
            <button className="btn btn-warning" onClick={() => handleEditUser(posts)}> {/*  // Call a function to initiate the edit process */}
                Edit</button>
    {editingUser && (
        <UpdateUser
          userData={editingUser}
          onUpdate={(updatedData) => {
            handleUpdateUser(updatedData);
            setEditingUser(null); // Close the modal after update
                                     }        
                   }
        />
                    )}
    
        </td>
      </tr>
    ))}
  </tbody>
    </table></div>


    <div className="modal fade" id="updateUserModal2" tabIndex="-1" aria-labelledby="updateUserModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="updateUserModalLabel">Edit User</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name:</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email:</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password:</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  // value={user.password}
                />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-success">Save changes</button>
          </div>
        </div>
      </div>
    </div>
      </>
  )



















  
}

// export default Main;