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

    const sampleTasks = [
        { id: "001", employerId: "0001", name: "Car Service System", description: "A platform that streamlines vehicle maintenance...", deadline: "12/3/2024" },
        { id: "002", employerId: "0002", name: "Library App", description: "A digital platform for managing books and tracking...", deadline: "12/3/2024" },
        { id: "003", employerId: "0003", name: "Cool App", description: "A digital platform for organizing and planning...", deadline: "06/3/2024" },
        { id: "004", employerId: "0004", name: "E-commerce Platform", description: "A web application for online shopping...", deadline: "15/4/2024" },
        { id: "005", employerId: "0005", name: "Fitness Tracker", description: "An app for tracking fitness activities...", deadline: "20/4/2024" },
        { id: "006", employerId: "0006", name: "Inventory System", description: "A tool for managing stock levels...", deadline: "25/5/2024" },
        { id: "007", employerId: "0007", name: "Social Media App", description: "A platform for connecting with friends...", deadline: "01/6/2024" },
        { id: "008", employerId: "0008", name: "HR Management System", description: "A system for managing employee data...", deadline: "10/6/2024" },
    ];

    return (
        <div>
            <Navbar />
            <div className="manage-tasks-container">
                <nav className="breadcrumb" aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a className="text-decoration-none" href="/admin-Dashboard">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Manage Task</li>
                    </ol>
                </nav>

                <div className="tasks-container">
                    <div className='headManage'>
                        <h1 className="text-center">Tasks</h1>
                    </div>

                    <header className="tasks-header">
                        <button className="add-task-btn" onClick={() => navigate('/admin-add-task')}>Add Task</button>
                        <button className="progress-btn" onClick={() => navigate('#')}>Received Progress</button>
                    </header>

                    <div className="tasks-table-container">
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
                                {sampleTasks.map((task) => (
                                    <tr key={task.id}>
                                        <td>{task.id}</td>
                                        <td>{task.employerId}</td>
                                        <td>{task.name}</td>
                                        <td>{task.description}</td>
                                        <td>{task.deadline}</td>
                                        <td>
                                            <button className="delete-btn">Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <button className="sidebar-toggle" onClick={toggleSidebar}>☰</button>
            <div className={`flex-grow-1 d-flex ${sidebarVisible ? 'show-sidebar' : ''}`}>
                <Sidebar sidebarVisible={sidebarVisible} />
            </div>
            <div className="container3">
                <Footer />
            </div>
        </div>
    );
};

export default AdminManageTask;
