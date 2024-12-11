import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import About from "./components/about";
import Services from "./components/services";

import LawyerProfile from "./components/Lawyerprofile"; // Ensure LawyerProfile component is imported
import ContactForm from "./components/ContactForm"; // Ensure ContactForm component is imported

const App = () => {
  const lawyers = [
    {
      name: "John Doe",
      specialization: "Criminal Lawyer",
      experience: 15,
      contact: "john.doe@example.com",
      image: "https://tse1.mm.bing.net/th?id=OIP.T_1VGAe2MAAewJutC3gMugHaE7&pid=Api&P=0&h=180/150",
    },
    {
      name: "Jancy",
      specialization: "Corporate Lawyer",
      experience: 10,
      contact: "jane.jan@example.com",
      image: "https://tse3.mm.bing.net/th?id=OIP.x3IxUpeoO1zOmEqfq9St6gHaE7&pid=Api&P=0&h=180/150",
    },
    {
      name: "Mike Johnson",
      specialization: "Family Lawyer",
      experience: 8,
      contact: "mike.johnson@example.com",
      image: "https://i.ytimg.com/vi/3zfj1zocSH8/maxres2.jpg?sqp=-oaymwEoCIAKENAF8quKqQMcGADwAQH4AbYIgAKAD4oCDAgAEAEYfyAvKBMwDw==&rs=AOn4CLDO1Xt21IjTvjDbaekkibghMxk2kA/150",
    },
  ];
  return (
    <Router>
      {/* Wrap everything in <Router> */}
      <Navbar />
      <Routes>
        {/* Route for the home page */}
        <Route
          path="/"
          element={
            <div className="container mt-5">
              <h2>Top Lawyers</h2>
              <div className="row">
                {lawyers.map((lawyer, index) => (
                  <LawyerProfile key={index} lawyer={lawyer} />
                ))}
              </div>
            </div>
          }
        />
        
        {/* About page */}
        <Route path="/about" element={<About />} />

        {/* Services page */}
        <Route path="/services" element={<Services />} />

        {/* Contact page */}
        <Route
          path="/contact"
          element={
            <div className="container mt-5">
              <ContactForm />
            </div>
          }
        />
      </Routes>
    </Router>
  );
};
   


export default App;




