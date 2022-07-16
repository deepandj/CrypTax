import React, { useState } from 'react';
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import Login from './Login';
import Registration from './Registration';
import User from './User';

function RegisterFormHeader() {
  const { userId } = useParams();
  const location = useLocation();

  return (
    <div className="form-header">
      <center>
        {/* <h3>Cryptax</h3> */}

        {location.pathname !== `/user/${userId}` ? (
          <div>
            <Outlet />
          </div>
        ) : (
          <User />
        )}
      </center>
    </div>
  );
}

export default RegisterFormHeader;
