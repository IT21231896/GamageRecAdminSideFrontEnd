import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../../css/admin/adminRecivedTask.css';
import { FaFileAlt } from 'react-icons/fa'; 
import { IoDownloadOutline } from "react-icons/io5";

import Navbar from '../../components/templetes/Navbar';
import Footer from '../../components/templetes/Footer';
import Sidebar from '../../components/templetes/SideBar';
import PageFooter from '../../components/PagesFooter';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AdminReceivedTask() {
  const navigate = useNavigate();
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('http://localhost:8800/admin/task/adminRecivedTasks');
        setTasks(response.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
        setLoading(false);
      }
    };
    fetchTasks();
  }, []);

  return (
    <div>
      <Navbar />

      <div className="container1">

        <nav className="breadcrumb" aria-label="breadcrumb">
          <ol className="breadcrumb">
              <li className="breadcrumb-item"><a className="text-decoration-none" href="/admin-Dashboard">Home</a></li>
                <li className="breadcrumb-item" aria-current="page" ><a className="text-decoration-none" href="/admin-manage-task">Manage Task</a></li>
                <li className="breadcrumb-item active" aria-current="page">Received Task Progress</li>
            </ol>
        </nav>
      </div>

      <div className="container2">
        <div>
          <h1 className="text-center">Received Task</h1>
        </div>
        <div>
          <button className="btn btn-primary my-3" onClick={() => navigate('/admin-manage-task')}>
            <span className="bi bi-arrow-left-circle m-0 text-white"></span>
            <span className="ms-2">Back</span>
          </button>
        </div>

        <div className="table-container">
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr className="table-light">
                  <th className="small-width">Task ID</th>
                  <th className="small-width">Employer ID</th>
                  <th className="large-width">Task Name</th>
                  <th className="large-width">Description</th>
                  <th className="small-width">Attachment</th>
                </tr>
              </thead>
              <tbody>
                {tasks.map((task) => (
                  <tr key={task.TaskID}>
                    <td>{task.TaskID}</td>
                    <td>{task.EmployeeID}</td>
                    <td>{task.TaskName}</td>
                    <td>{task.Description}</td>
                    <td>
                      <div className="text-center">
                        <span className="d-block mt-1">
                          {task.Attachment ? task.Attachment.split('/').pop() : 'No Attachment'}
                        </span>
                        {task.Attachment ? (
                          <a
                            href={task.Attachment}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <IoDownloadOutline size={20} />
                          </a>
                        ) : (
                          'No Attachment'
                        )}
                      </div>
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
}
