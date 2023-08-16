import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/navbar'
import Home from './components/Home'
import Service from './components/service'
import Footer from './components/footer'
import Features from './components/inro'
import Price from './components/pricing'
import Contact from './components/form'
import Blog from './components/blog'
import Start from './components/start'
import Behind from './components/behind';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
    <Home/>
    <Service/>
    <Features/>
    <Price/>
    <Behind/>
    <Start/>
    <Blog/>
    <Contact/>
    <Footer/>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
