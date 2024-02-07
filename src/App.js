import React from 'react';


import { Navbar, Header, ScrollTop, ChooseUs, Visualise, Featured, Testimonials, Homey, Footer } from './container';
import { DataProvider } from './context/DataContext';
import './App.css';

const App = () => {

  return (
    <div>
      <DataProvider>
        <Navbar />
        <Header />
        <ScrollTop />
        <ChooseUs />
        <Visualise />
        <Featured />
        <Testimonials />
        <Homey />
        <Footer />
      </DataProvider>
    </div>
  )
};



export default App;
