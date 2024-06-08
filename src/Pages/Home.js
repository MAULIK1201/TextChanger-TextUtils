// components/HomePage.js
import React from 'react';
import Navbar from '../components/Navbar';
import TextForm from '../components/TestForm';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <TextForm heading="Revolutionary text software that will make your life easier!" />
    </>
  );
};

export default HomePage;
