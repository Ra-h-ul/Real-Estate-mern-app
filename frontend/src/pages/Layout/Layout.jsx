import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';

import "./Layout.css";

function Layout() {
  return (
    <>
      <div className="layout">
        <Navbar />
      </div>
      <div className='content'>
        <Outlet/>
      </div>
    </>
  );
}

export default Layout;