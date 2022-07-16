import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Login.css';

function Login() {
  const navigate = useNavigate();

  const [email, setemail] = useState();
  const [password, setpassword] = useState();

  const [loginStatus, setloginStatus] = useState();
  const [userpage, setuserpage] = useState(false);

  const [mode, setMode] = useState('signin');
  const [isactive, setisactive] = useState(true);

  const [rname, rsetname] = useState();
  const [rusername, rsetusername] = useState();
  const [remail, rsetemail] = useState();
  const [rpassword, rsetpassword] = useState();
  const [rconfirmpassword, rsetconfirmpassword] = useState();

  const [registrationStatus, setRegistrationStatus] = useState();

  function PasswordConfimation() {
    if (rpassword === rconfirmpassword) {
      return 'Matched';
    } else {
      return 'Not Matched';
    }
  }

  function MyMode() {
    return (
      <div className="choices">
        <button type="button" onClick={() => setMode('signin')}>
          Sign in
        </button>
        <button type="button" onClick={() => setMode('signup')}>
          Sign up
        </button>
      </div>
    );
  }

  function RegisterEvent(e) {
    e.preventDefault();
    axios
      .post('http://localhost:4000/api/registration', {
        name: rname,
        username: rusername,
        email: remail,
        password: rpassword,
      })
      .then((res) => {
        console.log('values added');
        if (res.data.result) {
          setRegistrationStatus(res.data.message);
          console.log(registrationStatus);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function LoginEvent(e) {
    e.preventDefault();
    axios
      .post('http://localhost:4000/api/login', {
        email: email,
        password: password,
      })
      .then((res) => {
        if (res.data.result) {
          setloginStatus(res.data.message);
          setuserpage(res.data.signin);
        }

        console.log(res);
      })
      .catch((err) => {
        setloginStatus(err.response.data.message);
      });
  }

  return (
    <div className="container">
      <div>
        <div className="header-container">
          <div className="app-name">
            <h1>Cryptax</h1>
          </div>

          <div className="choices">
            <button type="button" onClick={() => setMode('signin')}>
              Sign in
            </button>
            <button type="button" onClick={() => setMode('signup')}>
              Sign up
            </button>
          </div>

          <div className="body-container">
            {mode === 'signin' ? (
              <div>
                <form>
                  <div>
                    <input type="email" placeholder="Email" onChange={(e) => setemail(e.target.value)} />
                    <input type="password" placeholder="Password" onChange={(e) => setpassword(e.target.value)} />
                    <br></br>
                    <button type="submit" onClick={LoginEvent}>
                      Sign In
                    </button>
                  </div>
                </form>

                <h2>{loginStatus}</h2>
              </div>
            ) : (
              <div className="">
                <form>
                  <div>
                    <input type="text" placeholder="Name" onChange={(e) => rsetname(e.target.value)} />
                    <input type="text" placeholder="Username" onChange={(e) => rsetusername(e.target.value)} />
                    <input type="email" placeholder="Email" onChange={(e) => rsetemail(e.target.value)} />
                    <input type="password" placeholder="Password" onChange={(e) => rsetpassword(e.target.value)} />
                    <input
                      type="password"
                      placeholder="Confirm Password"
                      onChange={(e) => rsetconfirmpassword(e.target.value)}
                    />
                    <br></br>
                    <button type="submit" onClick={RegisterEvent}>
                      Sign Up
                    </button>
                  </div>
                </form>

                <h2>{registrationStatus}</h2>
              </div>
            )}
          </div>
        </div>
      </div>
      {userpage ? navigate(':userId') : ''}
    </div>
  );
}
export default Login;
//   const navigate = useNavigate();

//   const [email, setemail] = useState();
//   const [password, setpassword] = useState();

//   const [loginStatus, setloginStatus] = useState();
//   const [userpage, setuserpage] = useState(false);

//   const [mode, setMode] = useState('signin');

//   const [rname, rsetname] = useState();
//   const [rusername, rsetusername] = useState();
//   const [remail, rsetemail] = useState();
//   const [rpassword, rsetpassword] = useState();
//   const [rconfirmpassword, rsetconfirmpassword] = useState();

//   const [registrationStatus, setRegistrationStatus] = useState();

//   function PasswordConfimation() {
//     if (rpassword === rconfirmpassword) {
//       return 'Matched';
//     } else {
//       return 'Not Matched';
//     }
//   }

//   function RegisterEvent(e) {
//     e.preventDefault();
//     axios
//       .post('http://localhost:4000/api/registration', {
//         name: rname,
//         username: rusername,
//         email: remail,
//         password: rpassword,
//       })
//       .then((res) => {
//         console.log('values added');
//         if (res.data.result) {
//           setRegistrationStatus(res.data.message);
//           console.log(registrationStatus);
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }

//   function LoginEvent(e) {
//     e.preventDefault();
//     axios
//       .post('http://localhost:4000/api/login', {
//         email: email,
//         password: password,
//       })
//       .then((res) => {
//         if (res.data.result) {
//           setloginStatus(res.data.message);
//           setuserpage(res.data.signin);
//         }

//         console.log(res);
//       })
//       .catch((err) => {
//         setloginStatus(err.response.data.message);
//       });
//   }

//   return (
//     <div className="w-screen h-screen flex justify-center items-center bg-slate-200">
//       <div className="min-w-[250px]   bg-white p-4 shadow-inner rounded">
//         <div>
//           <h1 className="text-center font-bold pb-4">Cryptax</h1>

//           <div className="flex justify-between items-center  pb-4">
//             <button
//               type="button"
//               className={`w-6/12 ${mode === 'signin' ? 'text-teal-500' : ''}`}
//               onClick={() => setMode('signin')}
//             >
//               Sign in
//             </button>
//             <button
//               type="button"
//               className={`w-6/12 ${mode === 'signup' ? 'text-teal-500' : ''}`}
//               onClick={() => setMode('signup')}
//             >
//               Sign up
//             </button>
//           </div>
//         </div>

//         {mode === 'signin' ? (
//           <div className="">
//             <form>
//               <div className="flex flex-col gap-4">
//                 <input
//                   type="email"
//                   placeholder="Email"
//                   onChange={(e) => setemail(e.target.value)}
//                   className="w-full outline-none bg-transparent border-2 rounded-md p-2 focus:outline-none focus-visible:ring focus-visible:ring-teal-300 focus-visible:ring-opacity-30 focus-visible:ring-offset-teal-100 transition-all duration-150"
//                 />
//                 <input
//                   type="password"
//                   placeholder="Password"
//                   onChange={(e) => setpassword(e.target.value)}
//                   className="w-full outline-none bg-transparent border-2 rounded-md p-2 focus:outline-none focus-visible:ring focus-visible:ring-teal-300 focus-visible:ring-opacity-30 focus-visible:ring-offset-teal-100 transition-all duration-150"
//                 />
//                 <button type="submit" onClick={LoginEvent} className="bg-teal-400 rounded-md p-2 font-bold">
//                   Sign In
//                 </button>
//               </div>
//             </form>

//             <h2>{loginStatus}</h2>
//           </div>
//         ) : (
//           <div className="">
//             <form>
//               <div className="flex flex-col gap-4">
//                 <input
//                   type="text"
//                   placeholder="Name"
//                   onChange={(e) => rsetname(e.target.value)}
//                   className="w-full outline-none bg-transparent border-2 rounded-md p-2 focus:outline-none focus-visible:ring focus-visible:ring-teal-300 focus-visible:ring-opacity-30 focus-visible:ring-offset-teal-100 transition-all duration-150"
//                 />
//                 <input
//                   type="text"
//                   placeholder="Username"
//                   onChange={(e) => rsetusername(e.target.value)}
//                   className="w-full outline-none bg-transparent border-2 rounded-md p-2 focus:outline-none focus-visible:ring focus-visible:ring-teal-300 focus-visible:ring-opacity-30 focus-visible:ring-offset-teal-100 transition-all duration-150"
//                 />
//                 <input
//                   type="email"
//                   placeholder="Email"
//                   onChange={(e) => rsetemail(e.target.value)}
//                   className="w-full outline-none bg-transparent border-2 rounded-md p-2 focus:outline-none focus-visible:ring focus-visible:ring-teal-300 focus-visible:ring-opacity-30 focus-visible:ring-offset-teal-100 transition-all duration-150"
//                 />
//                 <input
//                   type="password"
//                   placeholder="Password"
//                   onChange={(e) => rsetpassword(e.target.value)}
//                   className="w-full outline-none bg-transparent border-2 rounded-md p-2 focus:outline-none focus-visible:ring focus-visible:ring-teal-300 focus-visible:ring-opacity-30 focus-visible:ring-offset-teal-100 transition-all duration-150"
//                 />
//                 <input
//                   type="password"
//                   placeholder="Confirm Password"
//                   onChange={(e) => rsetconfirmpassword(e.target.value)}
//                   className="w-full outline-none bg-transparent border-2 rounded-md p-2 focus:outline-none focus-visible:ring focus-visible:ring-teal-300 focus-visible:ring-opacity-30 focus-visible:ring-offset-teal-100 transition-all duration-150"
//                 />
//                 <button type="submit" onClick={RegisterEvent} className="bg-teal-400 rounded-md p-2 font-bold">
//                   Sign Up
//                 </button>
//               </div>
//             </form>

//             <h2>{registrationStatus}</h2>
//           </div>
//         )}
//       </div>
//       {userpage ? navigate(':userId') : ''}
//     </div>
//   );
