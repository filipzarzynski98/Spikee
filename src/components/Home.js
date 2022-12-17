import React from 'react';
import Header from './Header/Header';
import MainSection from './MainSection/MainSection';
import Footer from './Footer/Footer';


const Home = () => {
    return (
        <div className='page__wrapper'>
          <div>
            <Header/>
            <MainSection/>
          </div>
          <Footer/> 
        </div>
    );
};

export default Home;