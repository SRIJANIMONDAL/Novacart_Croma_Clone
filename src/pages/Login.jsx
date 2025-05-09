// import React, { useEffect, useState } from "react";
// import Papa from "papaparse";
// import { useNavigate } from "react-router-dom";
// import "./Login.css";

// const Login = ({ handleLogin }) => {
//   const [csvUsers, setCsvUsers] = useState([]);
//   const [selectedEmail, setSelectedEmail] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     Papa.parse("/sampled_users.csv", {
//       download: true,
//       header: true,
//       complete: (results) => {
//         const users = results.data.filter(user => user.email);
//         setCsvUsers(users);
//       },
//       error: (err) => {
//         console.error("CSV Load Error:", err);
//         setError("Failed to load user data.");
//       },
//     });
//   }, []);

//   const handleLoginSubmit = (e) => {
//     e.preventDefault();

//     const matchedUser = csvUsers.find((user) => user.email === selectedEmail);

//     if (matchedUser) {
//       localStorage.setItem("user", JSON.stringify(matchedUser));
//       localStorage.setItem("loggedInEmail", matchedUser.email);

//       handleLogin(); // ✅ update login state in App.jsx

//       // Optional: Save login history
//       const loginRecord = {
//         id: Date.now(),
//         name: matchedUser.username || "Unknown",
//         email: matchedUser.email,
//         time: new Date().toLocaleString(),
//       };
//       const previous = JSON.parse(localStorage.getItem("loggedUsers")) || [];
//       localStorage.setItem("loggedUsers", JSON.stringify([...previous, loginRecord]));

//       alert(`Welcome back, ${matchedUser.username || "User"}!`);
//       navigate("/");
//     } else {
//       setError("Please select a valid email.");
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-box">
//         <h2>Login</h2>
//         {error && <p className="error-message">{error}</p>}
//         <form onSubmit={handleLoginSubmit}>
//           <div className="input-group">
//             <label>Select Email</label>
//             <select
//               value={selectedEmail}
//               onChange={(e) => setSelectedEmail(e.target.value)}
//               required
//             >
//               <option value="">-- Select your email --</option>
//               {csvUsers.map((user, index) => (
//                 <option key={index} value={user.email}>
//                   {user.email}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <button type="submit" className="login-btn">Login</button>
//         </form>
//         <p className="signup-link">New here? <a href="/signup">Sign up</a></p>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = ({ handleLogin }) => {
  const [csvUsers, setCsvUsers] = useState([]);
  const [selectedEmail, setSelectedEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    Papa.parse("/sampled_users.csv", {
      download: true,
      header: true,
      complete: (results) => {
        const users = results.data.filter(user => user.email);
        setCsvUsers(users);
      },
      error: (err) => {
        console.error("CSV Load Error:", err);
        setError("Failed to load user data.");
      },
    });
  }, []);

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    const matchedUser = csvUsers.find((user) => user.email === selectedEmail);

    if (matchedUser) {
      // Save full user data and user ID in localStorage
      localStorage.setItem("user", JSON.stringify(matchedUser));
      localStorage.setItem("loggedInEmail", matchedUser.email);
      localStorage.setItem("loggedInUserID", matchedUser.UserID); // ✅ Save UserID for recommendation

      handleLogin(); // update login state in App.jsx

      // Optional: Save login history
      const loginRecord = {
        id: Date.now(),
        name: matchedUser.username || "Unknown",
        email: matchedUser.email,
        time: new Date().toLocaleString(),
      };
      const previous = JSON.parse(localStorage.getItem("loggedUsers")) || [];
      localStorage.setItem("loggedUsers", JSON.stringify([...previous, loginRecord]));

      alert(`Welcome back, ${matchedUser.username || "User"}!`);
      navigate("/");
    } else {
      setError("Please select a valid email.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleLoginSubmit}>
          <div className="input-group">
            <label>Select Email</label>
            <select
              value={selectedEmail}
              onChange={(e) => setSelectedEmail(e.target.value)}
              required
            >
              <option value="">-- Select your email --</option>
              {csvUsers.map((user, index) => (
                <option key={index} value={user.email}>
                  {user.email}
                </option>
              ))}
            </select>
          </div>

          <button type="submit" className="login-btn">Login</button>
        </form>
        <p className="signup-link">New here? <a href="/signup">Sign up</a></p>
      </div>
    </div>
  );
};

export default Login;
