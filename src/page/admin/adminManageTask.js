import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import "../../css/admin/adminManageTask.css";


import Navbar from '../../components/templetes/Navbar';
import Footer from '../../components/templetes/Footer';
import Sidebar from '../../components/templetes/SideBar';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const AdminManageTask = () => {
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
      };

      const navigate = useNavigate();


  return (
    <div>
        <Navbar />
        <div className="manage-tasks-container">

                    <nav className="breadcrumb" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a class="text-decoration-none" href="/admin-Dashboard">Home</a></li>
                                <li class="breadcrumb-item active" aria-current="page">Mange Task</li>
                            </ol>
                    </nav>

                <div className="tasks-container">



                <div className='headManage'>
                    <h1 class="text-center">Tasks</h1>
                </div>

                <header className="tasks-header">
                        <button className="add-task-btn" onClick={() => navigate('/admin-add-task')}>Add Task</button>
                        <button className="progress-btn" onClick={() => navigate('#')}>Received Progress</button>
                </header>

                <table className="tasks-table">
                    <thead>
                    <tr>
                        <th>Task ID</th>
                        <th>Employer ID</th>
                        <th>Task Name</th>
                        <th>Description</th>
                        <th>Deadline</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>001</td>
                        <td>0001</td>
                        <td>Car Service System</td>
                        <td>
                        A "Car Service System" is a platform that streamlines vehicle
                        maintenance...
                        </td>
                        <td>12/3/2024</td>
                        <td>
                        <button className="delete-btn">Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>002</td>
                        <td>0002</td>
                        <td>Library App</td>
                        <td>
                        A "Library App" is a digital platform for managing books and
                        tracking...
                        </td>
                        <td>12/3/2024</td>
                        <td>
                        <button className="delete-btn">Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>003</td>
                        <td>0003</td>
                        <td>Cool App</td>
                        <td>
                        A "Cool App" is a digital platform for managing books and
                        tracking...
                        </td>
                        <td>06/3/2024</td>
                        <td>
                        <button className="delete-btn">Delete</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
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

export default AdminManageTask;
