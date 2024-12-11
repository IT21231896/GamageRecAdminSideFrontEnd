import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import "../../css/admin/adminAddTask.css";

import Navbar from '../../components/templetes/Navbar';
import Footer from '../../components/templetes/Footer';
import Sidebar from '../../components/templetes/SideBar';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const AdminAddTask = () => {
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
      };
      const navigate = useNavigate();


  return (
    <div>
        <Navbar />
        
        <div className="main-tasks-container"> 

            <nav className="breadcrumb" aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a class="text-decoration-none" href="/admin-Dashboard">Home</a></li>
                        <li class="breadcrumb-item"><a class="text-decoration-none" href="/admin-manage-task">Manage Tasks</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Add Task</li>
                    </ol>
            </nav>


            <div className='head'>
                <h1 class="text-center">Add Tasks</h1>
            </div>

            <div className='back-button-area'>
                <div className='but-inside'>
                    <button class="btn back-btn my-3" onClick={() => navigate('/admin-manage-task')}>
                     <t class="bi bi-arrow-left m-3"> Back </t> 
                    </button>
                </div>
            </div>

            <div className="add-task-container">


            <div className="content">
                <form className="task-form">
                <label>
                    <input type="text" placeholder="Employee ID" />
                </label>
                <label>
                    <input type="text" placeholder="Task Title" />
                </label>
                <label>
                    <input
                    type="text"
                    placeholder="Deadline"
                    onFocus={(e) => (e.target.type = 'date')}
                    onBlur={(e) => (e.target.type = 'text')}
                    />
                </label>
                <label>
                    <input type="text" placeholder="Budgetary Information" />
                </label>
                <label>
                    <textarea placeholder="Task Description"></textarea>
                </label>
                
                    <div className='back-button-area'>
                        <button type="submit" className="send-btn">Send</button>
                    </div>
                </form>
            </div>
        </div>

    
        </div>

        <button className="sidebar-toggle" onClick={toggleSidebar}>☰</button>
        <div className={`flex-grow-1 d-flex ${sidebarVisible ? 'show-sidebar' : ''}`}>
            <Sidebar sidebarVisible={sidebarVisible} />
        </div>
        <div class="container3">
            <Footer />
        </div>
    </div>
  );
};

export default AdminAddTask;
