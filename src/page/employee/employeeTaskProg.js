import React, { useState } from 'react';
import Navbar from '../../components/templetes/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from '../../components/PagesFooter';
import Sidebar from '../../components/templetes/ESideBar';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import '../../css/employee/ETP(apvgr).css';

function EmployeeTaskProg() {
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [taskTitle, setTaskTitle] = useState('');
  const [taskID, setTaskID] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [file, setFile] = useState(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('taskTitle', taskTitle);
    formData.append('taskID', taskID);
    formData.append('taskDescription', taskDescription);
    if (file) {
      formData.append('file', file);
    }

    try {
      const response = await fetch('http://localhost:5000/api/tasks', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('Task Progress Updated Successfully!');
        setTaskTitle('');
        setTaskID('');
        setTaskDescription('');
        setFile(null);
      } else {
        alert('Failed to Update the Task Progress.');
      }
    } catch (error) {
      console.error('Error Updating the Task:', error);
      alert('An Error Occurred while Updatinging the Task Progress.');
    }
  };

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const handleGoBack = () => {
    Route(-1);
  };

  return (
    <div className="d-flex flex-column" style={{ minHeight: '100vh' }}>
      <Navbar />

      <button className="btn btn-primary sidebar-toggle" onClick={toggleSidebar}>☰</button>

      <div className={`flex-grow-1 d-flex ${sidebarVisible ? 'show-sidebar' : ''}`}>
        <Sidebar sidebarVisible={sidebarVisible} />
        
        <div className='main-content-wrap-employee-task'>
        <div className="container mb-4 d-none d-md-flex breadcrumb-wrap">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Add Tasks
                  </li>
                </ol>
              </nav>
            </div>
            
        <div className="main-content flex-grow-1 align-items-center justify-content-center">
        <div className="centered-div">
              <h2>Send Progress</h2>
            </div>
          <div className="container ">
            <div className=" justify-content-start mb-3">
              <button className="btn btn-secondary back-button" onClick={() => window.history.back()}>
              <img src={require('../../assets/back-button.png')} alt="Back Icon" className="back-icon" />
                Back
              </button>
              </div>
            </div>
            <div className="card shadow-sm p-4">
              <form onSubmit={handleFormSubmit}>
                <div className="mb-3">
                  <input
                    type="text"
                    id="taskTitle"
                    className="form-control"
                    placeholder="Task Title"
                    value={taskTitle}
                    onChange={(e) => setTaskTitle(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    id="taskID"
                    className="form-control"
                    placeholder="Task ID"
                    value={taskID}
                    onChange={(e) => setTaskID(e.target.value)}
                  />
                </div>
                <div className="mb-0">
                  <textarea
                    id="taskDescription"
                    className="form-control"
                    rows="8"
                    placeholder="Task Description"
                    value={taskDescription}
                    onChange={(e) => setTaskDescription(e.target.value)}
                  ></textarea>
                </div>
                <div className="mb-3">
                  <input type="file"
                  id="fileUpload"
                  className="form-control"
                  onChange={(e) => setFile(e.target.files[0])}
                  />
                </div>
                <div className="d-flex justify-content-center">
                  <button type="submit" className="btn btn-primary send-button">
                    Send
                  </button>
                </div>
              </form>
            </div>
          
        </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}

export default EmployeeTaskProg;
