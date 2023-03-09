import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {navItems,bannerBtns,bannerLinks,counters} from "./navbar-item";
const root = ReactDOM.createRoot(document.getElementById('root'));


function NavBar(){
  return (
    <section className="nav-container bg-info">
      <nav className='navbar nav-bar-container'>
        <a href='#' className='navbar-brand'><img src="https://preview.colorlib.com/theme/glint/images/logo.png" width={"70px"} alt="brand logo"/></a>
        <div className='d-flex justify-content-center align-items-center nav-toggle-btn' onClick={function(e){
          // console.log(e.target);
          document.querySelector("#nav-menu").classList.toggle("active");
        }}>
          <span className='d-inline-block h5'>Menu</span>
          <button className='navbar-toggler border-0' data-bs-target="" data-bs-toggle="collapse">
            <NavbtnLines/>
            <NavbtnLines/>
            <NavbtnLines/>
          </button>
        </div>
        <div id='nav-menu' className='navbar-collapse nav-items-container'>
          <ul className='navbar-nav'>
            <div className='d-flex justify-content-between nav-menu-header'>
              <span className='text-uppercase d-inline-block'>navigation</span><div className='nav-close-btn h4 text-white' onClick={()=>{
                document.querySelector("#nav-menu").classList.remove("active");
              }}>&times;</div>
            </div>
              {navItems.map(function(navItem){return (
                <li className='navbar-item'>
                  <a href='#' className='nav-link'>{navItem}</a>
                </li>
              )})}
          </ul>
        </div>
      </nav>
      <Navbanner/>
    </section>
  )
  function NavbtnLines(){
    return (
      <div className='nav-btn-lines'></div>
    )
  }
  function Navbanner(){
    return(
      <div className='container'>
        <div className='row justify-content-between aligh-items-center banner-container'>
          <div className='col-lg-7 col-md-12 banner-content-container'>
            <h6>WELCOME TO GLINT</h6>
            <h1>We are a creative group of people who design influential brands and digital experiences.</h1>
            <div className='d-flex  banner-btn-group'>
              <BannerButton/>
            </div>
          </div>
          <div className="col-3 d-md-flex flex-column justify-content-center align-items-end">
            {bannerLinks.map(function(bannerLink){
              return (
                <NavBannerlinks key={bannerLink.id} bannerLinkObj = {bannerLink}/>
              )
            })}
          </div>
        </div>
      </div>
     
    )
    function BannerButton(){
      return (
        bannerBtns.map(function(bannerBtn){
          return (
            <a href='#' className='rounded-0 text-uppercase fw-semibold banner-btn'>{bannerBtn}</a>
          )
        })
      )
    }
  }
  function NavBannerlinks(props){
    const {title,icon,display} = props.bannerLinkObj;
    return (
      <div className='banner-links-group'>
        <a href='#' className='d-flex'><span className='banner-links-title'>{title}</span><span className={display}><i className={icon}></i></span></a>
      </div>
    )
    
  }
}
function WeAreGlint(){
  return (
    <section className="py-5 weareglint-container">
      <div className='container'>
        {/* start section title */}
        <div className='text-center my-5 section-title-container'>
          <div className='row'>
            <div className='col-8 mx-auto section-title'>
              <h5 className='text-dark  fw-semibold text-uppercase'>Hello There</h5>
              <h1>We Are Glint</h1>
              <hr className='mt-5'/>
            </div>
          </div>
        </div>
        {/* End section title */}
        <div>
          <p className='text-dark h4'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.
          </p>
        </div>
        <div className='row py-4 justify-content-center align-items-center  counter-main-continer'>
          {
            counters.map(function(counter){
              return (
                <Counter key={counter.id} {...counter}/>
              
              )
            })
          }
        </div>
        
      </div>
    </section>
  )
  function Counter(props){
    console.log(props);
    const {title,count} = props;
    return (
      <div className="col-lg-3 col-md-6 col-sm-12 counter-content-container">
        <div className="text-center">
          <h1>{count}</h1>
          <h4>{title}</h4>
        </div>
      </div>
    )
  }
}

function WhatWeDo(){
  return (
    <section className='whatwedo-section'>
      <div className='container' >
        {/* start section title */}
        <div className='text-center my-5 section-title-container'>
          <div className='row'>
            <div className='col-12 mx-auto section-title'>
              <h5 className=' text-uppercase fw-semibold' style={{"color" : "var(--primary-global-color)"}}>WHAT WE DO</h5>
              <h1 className='text-dark'>We’ve got everything you need to launch and grow your business</h1>
              <hr className='mt-5'/>
            </div>
          </div>
        </div>
        {/* End section title */}
      </div>

    </section>
  )
}


function Main(){
  return (
    <main>
      <NavBar/>
      <WeAreGlint/>
      <WhatWeDo/>
    </main>

  )
}
root.render(<Main/>);
