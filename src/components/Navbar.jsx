// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';

// const Navbar = ({ isLoggedIn, handleLogout, cartCount, wishlistCount }) => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [showNotifications, setShowNotifications] = useState(false);

//   const notifications = [
//     'Welcome to CromaClone!!',
//     '🔥 Mega Electronics Sale - Up to 50% Off!',
//     '📦 Your Order #1234 has been Shipped!',
//     '🆕 Check Out Our New Laptop Arrivals!',
//     '🎁 Flat ₹1000 Off on Mobiles Today Only!',
//     '💳 EMI options available on Apple Products.',
//     '🚚 Delivery Update: Expect Delay due to Weather.',
//     '⭐ Product Review: Samsung Galaxy S24 got 4.9 Stars!',
//     '🔄 Return Window for Order #1205 Closes Tomorrow.',
//     '💡 Tip: Use Code "CROMA50" to get 50% Off!',
//   ];

//   return (
//     <nav className="navbar">
//       {/* Logo */}
//       <div className="logo">
//         <Link to="/" onClick={() => setMenuOpen(false)}>CromaClone</Link>
//       </div>

//       {/* Navigation Links */}
//       <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
//         <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
//         <Link to="/products" onClick={() => setMenuOpen(false)}>Products</Link>
//         <Link to="/offers" onClick={() => setMenuOpen(false)}>Offers</Link>
//         <Link to="/cart" onClick={() => setMenuOpen(false)}>Cart 🛒 ({cartCount})</Link>
//         <Link to="/wishlist" onClick={() => setMenuOpen(false)}>Wishlist 💖 ({wishlistCount})</Link>

//         {/* Notifications */}
//         <div className="notification-wrapper">
//           <button
//             className="notification-btn"
//             onClick={() => setShowNotifications(!showNotifications)}
//           >
//             🔔
//             {notifications.length > 0 && <span className="notif-dot"></span>}
//           </button>

//           {showNotifications && (
//             <div className="notification-dropdown">
//               {notifications.map((note, index) => (
//                 <div key={index} className="notification-item">{note}</div>
//               ))}
//             </div>
//           )}
//         </div>

//         {/* Auth Buttons */}
//         {isLoggedIn ? (
//           <>
//             <span className="welcome">Welcome!</span>
//             <button onClick={handleLogout} className="button">Logout</button>
//           </>
//         ) : (
//           <Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link>
//         )}
//       </div>

//       {/* Hamburger Icon for Mobile */}
//       <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
//         <span className="bar"></span>
//         <span className="bar"></span>
//         <span className="bar"></span>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ isLoggedIn, handleLogout, cartCount = 0, wishlistCount = 0 }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const notifications = [
    'Welcome to NovaCart!',
    '🔥 Big Bang Electronics Sale - Up to 50% Off!',
    '📦 Your Order #1234 has been Shipped!',
    '🆕 Discover Our New Gadget Arrivals!',
    '🎁 Flat ₹1000 Off on Select Smartphones!',
    '💳 EMI options available on Premium Products.',
    '🚚 Delivery Update: Expect Delay due to Rain.',
    '⭐ NovaPick: Apple Watch Ultra gets 4.9 Stars!',
    '🔄 Return Window for Order #1205 Ends Soon!',
    '💡 Tip: Use Code "NOVA50" to grab 50% Off!',
  ];

  return (
    <nav className="navbar">
      {/* 🛍️ Logo Section */}
      <div className="logo">
        <Link to="/" onClick={() => setMenuOpen(false)} className="logo-link">
          <img src="/Assets/novacart-logo.png" alt="NovaCart Logo" className="nova-logo" />
          <span className="nova-text">NovaCart</span>
        </Link>
      </div>

      {/* 📂 Navigation Links */}
      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/products" onClick={() => setMenuOpen(false)}>Products</Link>
        <Link to="/offers" onClick={() => setMenuOpen(false)}>Offers</Link>
        <Link to="/cart" onClick={() => setMenuOpen(false)}>Cart 🛒 ({cartCount})</Link>
        <Link to="/wishlist" onClick={() => setMenuOpen(false)}>Wishlist 💖 ({wishlistCount})</Link>

        {/* 🔔 Notifications */}
        <div className="notification-wrapper">
          <button
            className="notification-btn"
            onClick={() => setShowNotifications(!showNotifications)}
          >
            🔔
            {notifications.length > 0 && <span className="notif-dot"></span>}
          </button>

          {showNotifications && (
            <div className="notification-dropdown">
              {notifications.map((note, index) => (
                <div key={index} className="notification-item">{note}</div>
              ))}
            </div>
          )}
        </div>

        {/* 🔐 Auth Buttons */}
        {isLoggedIn ? (
          <button onClick={handleLogout} className="button">Logout</button>
        ) : (
          <Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link>
        )}
      </div>

      {/* 🍔 Hamburger for Mobile */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
