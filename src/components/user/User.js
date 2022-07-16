import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import '../css/Dashboard.css';

function User() {
  const [walletaddress, setwalletaddress] = useState(null);

  const [ethdata, setethdata] = useState([]);

  const FetchData = async () => {
    if (typeof window.ethereum !== 'undefined') {
      console.log('MetaMask is installed!');
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });

      // setwalletaddress(accounts[0]);
      //   debugger;
    }
    console.log(walletaddress);
  };

  const getFetchData = async () => {
    const response = await fetch(`https://api.rarible.org/v0.1/items/byOwner/?owner=ETHEREUM:${walletaddress}`);

    //  0x2B4f7CbCca5C635C3806D0EF36135cE652F6e566

    const data = await response.json();

    setethdata(data.items);

    console.log(data);
  };

  console.log(ethdata);

  // useEffect(() => {
  //   getFetchData();
  // }, [walletaddress]);

  return (
    <div className="dashboard-container">
      <div className="heading">
        <h1>dashboard</h1>
      </div>

      <div className="dashboard-body">
        <div className="image-container   ">
          <div className="second-container">
            <img src="/images/user7.png" alt="user" width="150" height="160" />
          </div>
        </div>

        <div className="input-container">
          <div className="input-vrline">
            <input type="text" placeholder="wallet address" onChange={(e) => setwalletaddress(e.target.value)}></input>
            <button type="button" onClick={getFetchData}>
              Get Data
            </button>
          </div>
        </div>
      </div>

      <div className="heading">
        <h1>transactions</h1>
      </div>

      {ethdata.length ? (
        ethdata.map((e) => {
          // Transaction();

          return (
            <div>
              <div className="transaction-body" key={e.id}>
                <tr>
                  <td className="title">BLOCKCHAIN</td>
                  <td className="content">{e.blockchain}</td>
                </tr>

                <tr>
                  <td className="title">CONTRACT</td>
                  <td className="content">{e.contract}</td>
                </tr>
                <tr>
                  <td className="title">SELLER</td>
                  <td className="content">{e.lastSale.seller}</td>
                </tr>
                <tr>
                  <td className="title">BUYER</td>
                  <td className="content">{e.lastSale.buyer}</td>
                </tr>
                {/* <tr>
              <td className="title">VALUE</td>
              <td className="content">{e.lastSale.price}</td>
            </tr> */}
                <tr>
                  <td className="title">DATE</td>
                  <td className="content">{e.lastSale.date}</td>
                </tr>
                <tr>
                  <td className="title">PRICE</td>
                  <td className="content">{e.lastSale.price}</td>
                </tr>
                <tr>
                  <td className="title">PENDING</td>
                  <td className="content">{e.pending.length}</td>
                </tr>
              </div>
            </div>
          );
        })
      ) : (
        <div
          style={{
            color: 'rgb(129, 125, 125)',
            textAlign: 'center',
            fontSize: '20px',
            fontFamily: "Georgia, 'Times New Roman', Times, serif ",
          }}
        >
          No transactions records
        </div>
      )}
    </div>
  );
}
export default User;
