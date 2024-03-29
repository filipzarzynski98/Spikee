import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header/Header'
import MainSection from './components/MainSection/MainSection'
import Footer from './components/Footer/Footer'
import "./scss/main.scss"

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <>
       <Header/>
       <MainSection/>
       <Footer/>
    </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

