import React,{useContext} from 'react';
import { PoweroffOutlined } from '@ant-design/icons'
import {ThemeContext} from '../App.js'
function Header() {
  const value = useContext(ThemeContext);
  return  <div className='header'>
      <h2>Admin Panel</h2>
      <span onClick={() => {
          value.setLoggedIn('false')
          localStorage.setItem('loggedIn','false')
      }}>
          <PoweroffOutlined />
      </span>
      </div>;
}

export default Header;
