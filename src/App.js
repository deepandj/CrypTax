import { Link } from 'react-router-dom';
// "start": "react-scripts start",
// npm run server-start

import RegisterFormHeader from './components/user/RegisterFormHeader';
import './components/css/Homepage.css';
import './components/css/Page.css';
 
function App() {
  return (
    <div className="App">
      <div className="navbar">
        <h2 className="logo">CRYPTAX</h2>
        <ul>
          <li>
            <Link to="user" element={<RegisterFormHeader />}>
              user
            </Link>
          </li>
        </ul>
      </div>
      <hr className="hr"></hr>
      <div className="content">
        <h2 className="c-h2">calculate your crypto taxes easy and quick</h2>

        <p className="c-p">
          cryptax is a crypto tax calculation software that deals with your thousands of transaction, calculates your
          taxes and saves your time..
        </p>
      </div>
    </div>
  );
}

export default App;
