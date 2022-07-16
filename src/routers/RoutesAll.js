import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from '../App';
import Login from '../components/user/Login';
import RegisterFormHeader from '../components/user/RegisterFormHeader';
import Registration from '../components/user/Registration';
import User from '../components/user/User';
import UserLogin from '../components/user/UserLogin';

import InvalidPageRoute from './InvalidPageRoute';

function RoutesAll() {
  return (
    <div>
      <Routes>
        <Route path="*" element={<InvalidPageRoute />} />
        <Route path="/" element={<App />} />
        <Route path="user" element={<RegisterFormHeader />}>
          <Route path=":userId" element={<User />} />
          <Route index element={<Login />} />
          <Route path="register" element={<Registration />} />
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="userlogin" element={<UserLogin />} />
      </Routes>
    </div>
  );
}

export default RoutesAll;
