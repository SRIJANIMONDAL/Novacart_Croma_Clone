
// import React, { useEffect, useRef, useState } from 'react';
// import './HomePage.css';

// const images = [
//   '/Assets/banner1.jpg',
//   '/Assets/banner2.jpg',
//   '/Assets/banner3.jpg',
// ];

// const featuredCategories = [
//   { name: 'Smartphones', image: '/Assets/mobiles.jpeg' },
//   { name: 'Laptops', image: '/Assets/laptops.jpeg' },
//   { name: 'Televisions', image: '/Assets/televisions.jpg' },
//   { name: 'Cameras', image: '/Assets/cameras.jpg' },
//   { name: 'Headphones', image: '/Assets/headphpones.jpg' },
// ];

// const Home = () => {
//   const carouselRef = useRef(null);
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       const nextSlide = (currentSlide + 1) % images.length;
//       setCurrentSlide(nextSlide);
//       const width = carouselRef.current.offsetWidth;
//       carouselRef.current.scrollTo({ left: nextSlide * width, behavior: 'smooth' });
//     }, 3500);
//     return () => clearInterval(interval);
//   }, [currentSlide]);

//   const handleDotClick = (index) => {
//     setCurrentSlide(index);
//     carouselRef.current.scrollTo({
//       left: index * carouselRef.current.offsetWidth,
//       behavior: 'smooth',
//     });
//   };

//   return (
//     <div className="home">
//       {/* 🌟 Carousel */}
//       <div className="carousel-wrapper">
//         <div className="carousel-container" ref={carouselRef}>
//           {images.map((src, index) => (
//             <img
//               key={index}
//               src={src}
//               alt={`Slide ${index + 1}`}
//               className="carousel-image"
//               style={{ maxHeight: '280px', objectFit: 'cover' }}
//             />
//           ))}
//         </div>
//         <div className="carousel-dots">
//           {images.map((_, index) => (
//             <span
//               key={index}
//               className={`dot ${index === currentSlide ? 'active' : ''}`}
//               onClick={() => handleDotClick(index)}
//             />
//           ))}
//         </div>
//       </div>

//       {/* 💬 Welcome Text */}
//       <h2 className="home-title">
//         Welcome to <span className="brand-name">NovaCart</span>
//       </h2>

//       {/* 🔥 Featured Categories */}
//       <section className="featured-section">
//         <h3>Featured Categories</h3>
//         <div className="featured-cards">
//           {featuredCategories.map((cat, index) => (
//             <div className="category-card" key={index}>
//               <img
//                 src={cat.image}
//                 alt={cat.name}
//                 style={{ height: '120px', objectFit: 'cover' }}
//               />
//               <p>{cat.name}</p>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;

// import React, { useEffect, useRef, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './HomePage.css';

// const images = [
//   '/Assets/banner1.jpg',
//   '/Assets/banner2.jpg',
//   '/Assets/banner3.jpg',
// ];

// const featuredCategories = [
//   { name: 'Smartphones', image: '/Assets/mobiles.jpeg' },
//   { name: 'Laptops', image: '/Assets/laptops.jpeg' },
//   { name: 'Televisions', image: '/Assets/televisions.jpg' },
//   { name: 'Cameras', image: '/Assets/cameras.jpg' },
//   { name: 'Headphones', image: '/Assets/headphpones.jpg' },
// ];

// const Home = () => {
//   const carouselRef = useRef(null);
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const interval = setInterval(() => {
//       const nextSlide = (currentSlide + 1) % images.length;
//       setCurrentSlide(nextSlide);
//       const width = carouselRef.current.offsetWidth;
//       carouselRef.current.scrollTo({ left: nextSlide * width, behavior: 'smooth' });
//     }, 3500);
//     return () => clearInterval(interval);
//   }, [currentSlide]);

//   const handleDotClick = (index) => {
//     setCurrentSlide(index);
//     carouselRef.current.scrollTo({
//       left: index * carouselRef.current.offsetWidth,
//       behavior: 'smooth',
//     });
//   };

//   const handleCategoryClick = (category) => {
//     navigate('/products', { state: { selectedCategory: category } });
//   };

//   return (
//     <div className="home">
//       {/* 🌟 Carousel */}
//       <div className="carousel-wrapper">
//         <div className="carousel-container" ref={carouselRef}>
//           {images.map((src, index) => (
//             <img
//               key={index}
//               src={src}
//               alt={`Slide ${index + 1}`}
//               className="carousel-image"
//               style={{ maxHeight: '280px', objectFit: 'cover' }}
//             />
//           ))}
//         </div>
//         <div className="carousel-dots">
//           {images.map((_, index) => (
//             <span
//               key={index}
//               className={`dot ${index === currentSlide ? 'active' : ''}`}
//               onClick={() => handleDotClick(index)}
//             />
//           ))}
//         </div>
//       </div>

//       {/* 💬 Welcome Text */}
//       <h2 className="home-title">
//         Welcome to <span className="brand-name">NovaCart</span>
//       </h2>

//       {/* 🔥 Featured Categories */}
//       <section className="featured-section">
//         <h3>Featured Categories</h3>
//         <div className="featured-cards">
//           {featuredCategories.map((cat, index) => (
//             <div
//               className="category-card"
//               key={index}
//               onClick={() => handleCategoryClick(cat.name)}
//               style={{ cursor: 'pointer' }}
//             >
//               <img
//                 src={cat.image}
//                 alt={cat.name}
//                 style={{ height: '120px', objectFit: 'cover' }}
//               />
//               <p>{cat.name}</p>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;

// import React, { useEffect, useRef, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Papa from 'papaparse';
// import './HomePage.css';

// const images = [
//   '/Assets/banner1.jpg',
//   '/Assets/banner2.jpg',
//   '/Assets/banner3.jpg',
// ];

// const featuredCategories = [
//   { name: 'Smartphones', image: '/Assets/mobiles.jpeg' },
//   { name: 'Laptops', image: '/Assets/laptops.jpeg' },
//   { name: 'Televisions', image: '/Assets/televisions.jpg' },
//   { name: 'Cameras', image: '/Assets/cameras.jpg' },
//   { name: 'Headphones', image: '/Assets/headphpones.jpg' },
// ];

// const Home = () => {
//   const carouselRef = useRef(null);
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [username, setUsername] = useState('');
//   const navigate = useNavigate();

//   // 🔁 Auto-carousel
//   useEffect(() => {
//     const interval = setInterval(() => {
//       const nextSlide = (currentSlide + 1) % images.length;
//       setCurrentSlide(nextSlide);
//       const width = carouselRef.current.offsetWidth;
//       carouselRef.current.scrollTo({ left: nextSlide * width, behavior: 'smooth' });
//     }, 3500);
//     return () => clearInterval(interval);
//   }, [currentSlide]);

//   // 📥 Load username from localStorage + CSV
//   useEffect(() => {
//     const email = localStorage.getItem("loggedInEmail");
//     if (email) {
//       Papa.parse("/sampled_users.csv", {
//         download: true,
//         header: true,
//         complete: (result) => {
//           const cleanedEmail = email.trim().toLowerCase();
//           const matchedUser = result.data.find(user =>
//             user.email?.trim().toLowerCase() === cleanedEmail
//           );

//           if (matchedUser && matchedUser.username) {
//             setUsername(matchedUser.username);
//           }
//         },
//         error: (err) => {
//           console.error("Error loading CSV:", err);
//         }
//       });
//     }
//   }, []);

//   const handleDotClick = (index) => {
//     setCurrentSlide(index);
//     carouselRef.current.scrollTo({
//       left: index * carouselRef.current.offsetWidth,
//       behavior: 'smooth',
//     });
//   };

//   const handleCategoryClick = (category) => {
//     navigate('/products', { state: { selectedCategory: category } });
//   };

//   return (
//     <div className="home">
//       {/* 🌟 Carousel */}
//       <div className="carousel-wrapper">
//         <div className="carousel-container" ref={carouselRef}>
//           {images.map((src, index) => (
//             <img
//               key={index}
//               src={src}
//               alt={`Slide ${index + 1}`}
//               className="carousel-image"
//               style={{ maxHeight: '280px', objectFit: 'cover' }}
//             />
//           ))}
//         </div>
//         <div className="carousel-dots">
//           {images.map((_, index) => (
//             <span
//               key={index}
//               className={`dot ${index === currentSlide ? 'active' : ''}`}
//               onClick={() => handleDotClick(index)}
//             />
//           ))}
//         </div>
//       </div>

//       {/* 💬 Welcome Message */}
//       <h2 className="home-title">
//         {username ? (
//           <>
//             Welcome <span style={{ color: "#28a745" }}>{username}</span> to{' '}
//           </>
//         ) : (
//           "Welcome to "
//         )}
//         <span className="brand-name">NovaCart</span>
//       </h2>

//       {/* 🔥 Featured Categories */}
//       <section className="featured-section">
//         <h3>Featured Categories</h3>
//         <div className="featured-cards">
//           {featuredCategories.map((cat, index) => (
//             <div
//               className="category-card"
//               key={index}
//               onClick={() => handleCategoryClick(cat.name)}
//               style={{ cursor: 'pointer' }}
//             >
//               <img
//                 src={cat.image}
//                 alt={cat.name}
//                 style={{ height: '120px', objectFit: 'cover' }}
//               />
//               <p>{cat.name}</p>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // ✅ Include useLocation
import Papa from 'papaparse';
import './HomePage.css';

const images = [
  '/Assets/banner1.jpg',
  '/Assets/banner2.jpg',
  '/Assets/banner3.jpg',
];

const featuredCategories = [
  { name: 'Smartphones', image: '/Assets/mobiles.jpeg' },
  { name: 'Laptops', image: '/Assets/laptops.jpeg' },
  { name: 'Televisions', image: '/Assets/televisions.jpg' },
  { name: 'Cameras', image: '/Assets/cameras.jpg' },
  { name: 'Headphones', image: '/Assets/headphpones.jpg' },
];

const Home = () => {
  const carouselRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [username, setUsername] = useState('');
  const navigate = useNavigate();
  const location = useLocation(); // ✅ Detects route changes

  // 🔁 Auto-carousel
  useEffect(() => {
    const interval = setInterval(() => {
      const nextSlide = (currentSlide + 1) % images.length;
      setCurrentSlide(nextSlide);
      const width = carouselRef.current.offsetWidth;
      carouselRef.current.scrollTo({ left: nextSlide * width, behavior: 'smooth' });
    }, 3500);
    return () => clearInterval(interval);
  }, [currentSlide]);

  // 📥 Load username from localStorage + CSV (reruns on route change)
  useEffect(() => {
    const email = localStorage.getItem("loggedInEmail");

    if (email) {
      Papa.parse("/sampled_users.csv", {
        download: true,
        header: true,
        complete: (result) => {
          const cleanedEmail = email.trim().toLowerCase();
          const matchedUser = result.data.find(user =>
            user.email?.trim().toLowerCase() === cleanedEmail
          );

          if (matchedUser && matchedUser.username) {
            setUsername(matchedUser.username);
          } else {
            setUsername('');
          }
        },
        error: (err) => {
          console.error("Error loading CSV:", err);
          setUsername('');
        }
      });
    } else {
      setUsername('');
    }
  }, [location]); // ✅ Re-run on route change

  const handleDotClick = (index) => {
    setCurrentSlide(index);
    carouselRef.current.scrollTo({
      left: index * carouselRef.current.offsetWidth,
      behavior: 'smooth',
    });
  };

  const handleCategoryClick = (category) => {
    navigate('/products', { state: { selectedCategory: category } });
  };

  return (
    <div className="home">
      {/* 🌟 Carousel */}
      <div className="carousel-wrapper">
        <div className="carousel-container" ref={carouselRef}>
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Slide ${index + 1}`}
              className="carousel-image"
              style={{ maxHeight: '280px', objectFit: 'cover' }}
            />
          ))}
        </div>
        <div className="carousel-dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </div>

      {/* 💬 Welcome Message */}
      <h2 className="home-title">
        {username
          ? <>Welcome <span style={{ color: "#28a745" }}>{username}</span> to </>
          : "Welcome to "}
        <span className="brand-name">NovaCart</span>
      </h2>

      {/* 🔥 Featured Categories */}
      <section className="featured-section">
        <h3>Featured Categories</h3>
        <div className="featured-cards">
          {featuredCategories.map((cat, index) => (
            <div
              className="category-card"
              key={index}
              onClick={() => handleCategoryClick(cat.name)}
              style={{ cursor: 'pointer' }}
            >
              <img
                src={cat.image}
                alt={cat.name}
                style={{ height: '120px', objectFit: 'cover' }}
              />
              <p>{cat.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
