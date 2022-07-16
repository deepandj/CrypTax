import React from 'react';

function User() {
  return (
    <div>
      <div>users Page</div>
      <div>
        <div>
          <tr>
            <td>
              <label>Enter Wallet Address</label>
            </td>
          </tr>
          <tr>
            <td>
              <input type="text" placeholder="wallet address"></input>
            </td>
          </tr>
        </div>
        <div>
          <button type="button">Fetch Data</button>
        </div>
      </div>
    </div>
  );
}

export default User;
