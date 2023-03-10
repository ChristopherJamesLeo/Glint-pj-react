import React from 'react';
import ReactDOM from 'react-dom/client';
// import $ from 'jquery';
import './index.css';
import {navItems,bannerBtns,bannerLinks,counters,whatwedos,recentWorks,logos,contentInfos,forminputs,footerItems} from "./items";
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
    // console.log(props);
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
        <div className='whatwedo-content-container'>
          <div className='row'>
            {
              whatwedos.map(function(whatwedo){
                return (
                  <Whatwedoitems key={whatwedo.id} whatwedo = {whatwedo}/>
                )
              })
            }
          </div>
        </div>
      </div>

    </section>
  )
  function Whatwedoitems(props){
    const {icon,title,para} = props.whatwedo;
    return (
      <div className='col-lg-6 col-md-12 d-flex justify-content-between align-items-start'>
        <div className='wedoicons' style={{"color" : "var(--primary-global-color)"}}><i className={icon}></i></div>
        <div className='text-start wedo-content'>
          <h1>{title}</h1>
          <p className='text-muted mt-5'>{para}</p>
        </div>

      </div>
    )
  }
}

function Recentwork(){
  return (
    <section className='py-5 recentwork-section'>
      <div className='container'>
        {/* start section title */}
        <div className='text-center section-title-container'>
          <div className='row'>
            <div className='col-12 mx-auto section-title'>
              <h5 className=' text-uppercase fw-semibold' style={{"color" : "var(--primary-global-color)"}}>RECENT WORKS</h5>
              <h1 className='text-dark'>We’ve got everything you need to launch and grow your business</h1>
              <hr className='mt-5'/>
            </div>
          </div>
        </div>
        {/* End section title */}
        <div className='row works-main-container'>
          {recentWorks.map(function(recentWork){
            return(
              <Worksitems key={recentWork.id} {...recentWork}/>
            )
          })}
        </div>
      </div>

    </section>
  )
  function Worksitems(props){
    const {img,title,type} = props;
    // console.log(img,title,type);
    return (
      <div className='col-6 p-0 m-0 work-img-container'>
        <div className='p-3 d-flex flex-column justify-content-end align-items-start  work-img-overlayer'>
          <a href='#' className='d-flex justify-content-center align-items-center flex-column img-link'>
            <div className='link-roap'></div>
            <div className='link-icon'><i class="fas fa-link"></i></div>
          </a>
          <div className='text-center img-plus-icon'>
            <span className='d-inline-block'><i class="fas fa-plus"></i></span>
          </div>
          <div className='overlayer-content'>
            <h4 className="text-white">{title}</h4>
            <h5 className=''>{type}</h5>
          </div>
        </div>
        <div className='work-img'>
          <img src={img} width="100%" alt={img}/>
        </div>
      </div>
    )
  }
}

function OurClients(){
  return (
    <section className='py-5 ourclients-section'>
      <div className='container'>
        {/* start section title */}
        <div className='text-center section-title-container'>
          <div className='row'>
            <div className='col-12 mx-auto section-title'>
              <h5 className=' text-uppercase fw-semibold' style={{"color" : "var(--primary-global-color)"}}>OUR CLIENTS</h5>
              <h1 className='text-dark'>Glint has been honored to partner up with these clients</h1>
              <hr className='mt-5'/>
            </div>
          </div>
        </div>
        {/* End section title */}
      </div>
      <div id='client-logos' className='client-logos'>
        <ul id='logo-slider' className='logo-slider row list-unstyled'>
          {
            logos.map(function(logo){
              return (

                  <Clients key = {logo.id} {...logo}/>


              )
            })
          }
        </ul>
      </div>
    </section>
  )
  function Clients(props){
    const {img, alt} = props;
    // console.log(img,alt);
    return (
      <li className='col-lg-2 col-md-3 col-sm-4'>
        <img src={img} width="100%" alt={alt}/>
      </li>
    )
  }
}

function ContactUs(){
  return(
    <section className='py-5 contactus-section'>
      <div className='container'>
        {/* start section title */}
        <div className='text-center section-title-container'>
          <div className='row'>
            <div className='col-12 mx-auto section-title'>
              <h5 className=' text-uppercase fw-semibold' style={{"color" : "var(--primary-global-color)"}}>CONTACT US</h5>
              <h1 className='text-white'>Reach out for a new project or just say hello</h1>
              <hr className='mt-5'/>
            </div>
          </div>
        </div>
        {/* End section title */}
        <div className='row p-5 form-container'>
          <div className='col-lg-8 col-md-12 p-3'>
            <h6 className='text-uppercase mb-5'>send us a message</h6>
            <form className='contact-form'>
              {
                forminputs.map(function(forminput){
                  return (
                    <div className='form-group mb-3'>
                      <Inputs key={forminput.id} {...forminput} />
                    </div>
                  )
                })
              }
              <div className='form-group mb-3'>
                <textarea name='message' id="message" className='form-control' placeholder='Your Message' ></textarea> 

              </div>
              <div className='d-grid'>
                <input type={'submit'} value="submit" className='text-uppercase btn '/>
              </div>
              
            </form>
          </div>
          <div className='col-lg-4 col-md-12 p-3'>
            <h6 className='text-uppercase mb-5'>send us a message</h6>
            <div className='content-item'>
              {
                contentInfos.map(function(contentInfo){
                  return (
                    <Contentitem key={contentInfo.id} {...contentInfo} />
                  )
                })
              }
            </div>
            
          </div>
        </div>
      </div>
    </section>
    
  )
  function Inputs(props){
    const {type,name,inputid,placeholder} = props;
    return(
      <input type={type} name={name} id={inputid} className="form-control" placeholder={placeholder}  autoComplete='off' />
    )
  }
  function Contentitem(props){
    return(
      <div className="content-info-item-container">
        <div className='content-info-item'>
          <h5 className='text-uppercase mb-2' style={{"color" : "var(--primary-global-color )"}}>{props.title}</h5>
          <p>{props.content}</p>
          <a href='#' className='email-links'>{props.emailone}</a>
          <a href='#' className='email-links'>{props.emailtwo}</a>
          <p>{props.phone}</p>
          <p>{props.mobile}</p>
          <p>{props.fax}</p>
          <a href="#"className='d-inline-block contact-links'><i className={props.facebook}></i></a>
          <a href="#"className='d-inline-block contact-links'><i className={props.twitter}></i></a>
          <a href="#"className='d-inline-block contact-links'><i className={props.instargram}></i></a>
          <a href="#"className='d-inline-block contact-links'><i className={props.youtube}></i></a>
        </div>
        
      </div>
    )
  }
}


function Footer(){
  return (
    <footer className='footer-section'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6 col-md-12 mb-3 p-3'>
              <img src="https://preview.colorlib.com/theme/glint/images/logo-footer.png" width="70px" className='mb-5' alt="logo"/>
              <p>
                "Proin eget tortor risus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla porttitor accumsan tincidunt. Nulla porttitor accumsan tincidunt. Quaerat voluptas autem necessitatibus vitae aut
              </p>
    
          </div>
          <div className='col-lg-6 col-md-12 mb-3 p-3'>
              <h6 className='mb-5'>Get Notified</h6>
              <p>
                Quia quo qui sed odit. Quaerat voluptas autem necessitatibus vitae aut non alias sed quia. Ut itaque enim optio ut excepturi deserunt iusto porro.
              </p>
              <form className='footer-input'>
                <div className='form-group-container d-flex'>
                  <div className='form-group email-input'>
                    <input type={"email"} name="emailtype" id="emailtype" className='form-control'/>
                  </div>
                  <div className='d-grid btn-input'>
                    <input type={"submit"} value="submit" class="btn text-uppercase" />
                  </div>
                </div>
    
              </form>
    
          </div>
        </div>
      </div>
      
      
    </footer>
  )
}




function Main(){
  return (
    <main>
      <NavBar/>
      <WeAreGlint/>
      <WhatWeDo/>
      <Recentwork/>
      <OurClients/>
      <ContactUs/>
      <Footer/>
    </main>

  )
}
root.render(<Main/>);
