import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { BsFillSunFill, BsFillMoonStarsFill, BsFillGearFill, BsFillTelephoneFill, BsInfoCircleFill, BsPinterest, BsTwitter, BsMailbox2 } from "react-icons/bs";
import { GoHomeFill } from "react-icons/go";
import { SiYourtraveldottv } from "react-icons/si";
import { AiFillInstagram } from "react-icons/ai";

const size = {
    width: "100%",
    height: "650px"
}
const sizeIcons1 = {
    fontSize: "30px",
    marginRight: "5px",
    color: "#c8232c"
}
const sizeIcons2 = {
    fontSize: "30px",
    marginLeft: "30px",
    color: "#E4405F"
}
const sizeIcons3 = {
    fontSize: "30px",
    marginLeft: "30px",
    color: "#00acee"
}
const sizeServices1 = {
    fontSize: "70px",

    color: "#ADD8E6 "
}
const sizeServices2 = {
    fontSize: "70px",

    color: "#D9544D "
}
const sizeServices3 = {
    fontSize: "70px",

    color: "#3b4875 "
}

const bttnColor = {
    color: 'rgb(128, 128, 176)'
}
export default function Head(props) {

    const [mode, setMode] = useState({
        // color: 'rgb(25, 39, 52)',
        backgroundColor: 'white'

    })
    const darkMode = () => {
        if (mode.backgroundColor === 'white') {
            const dMode = {
                color: 'rgb(161, 151, 151)',
                backgroundColor: 'rgb(25, 39, 52)'
            }
            setMode(dMode)
            console.log('enables dark')
        }
    }

    const lightMode = () => {
        if (mode.backgroundColor === 'rgb(25, 39, 52)') {
            const lMode = {
                //color: 'rgb(25, 39, 52)',
                backgroundColor: 'white'

            }
            setMode(lMode)
            console.log('enabled light')
        }
    }

    return (
        <>
            <div className="" style={mode}>
                {/* navbar */}

                <nav className="navbar navbar-expand-lg  ">
                    <div className="container-fluid " style={mode}>
                        <a className="navbar-brand logo" href="/"><SiYourtraveldottv /> Gypsy</a>
                        <button className="navbar-toggler " style={bttnColor} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" style={mode}></span>
                        </button>
                        <div className="collapse navbar-collapse  justify-content-end" style={mode} id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto mb-2 mb-lg-0 ">
                                <li className="nav-item">
                                    <Link to='/' className="nav-link  fnt mx-3  " style={mode} aria-current="page" > <GoHomeFill /> Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/about' className="nav-link fnt mx-3 " style={mode} ><BsInfoCircleFill /> About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/services' className="nav-link fnt mx-3" style={mode} ><BsFillGearFill /> Services</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/contacts' className="nav-link fnt mx-3" style={mode} ><BsFillTelephoneFill /> Contacts</Link>
                                </li>
                                <li className="nav-item dropdown mx-3 " >
                                    <a className="nav-link dropdown-toggle fnt" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={mode}>
                                        Mode
                                    </a>
                                    <ul className="dropdown-menu " style={mode}>
                                        <li><a className="dropdown-item  fnt" onClick={darkMode} style={mode} href="javascript:void(0)"><BsFillMoonStarsFill /> Dark</a></li>
                                        <li><a className="dropdown-item fnt" onClick={lightMode} style={mode} href="javascript:void(0)">< BsFillSunFill /> Light</a></li>

                                    </ul>
                                </li>
                                <li className='nav-item mx-3' >
                                    <button type="button" className="btn btn-primary fnt-1" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                        Log In
                                    </button>
                                    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true" >
                                        <div className="modal-dialog" >
                                            <div className="modal-content" style={mode}>
                                                <div className="modal-header">
                                                    <h1 className="modal-title fs-5 fnt-1" id="staticBackdropLabel">Already a member ?</h1>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
                                                    <div className="mb-3 row">
                                                        <label htmlFor="email" className="col-sm-2 col-form-label ">Email-id</label>
                                                        <div className="col-sm-10">
                                                            <input type="password" className="form-control" id="inputPassword" />
                                                        </div>
                                                    </div>
                                                    <div className="mb-3 row">
                                                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                                                        <div className="col-sm-10">
                                                            <input type="password" className="form-control" id="inputPassword" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                    <button type="button" className="btn btn-primary">Log In</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className='nav-item'>


                                    <button type="button" className="btn btn-primary fnt-1" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        Sign Up
                                    </button>


                                    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="modal-content" style={mode}>
                                                <div className="modal-header">
                                                    <h1 className="modal-title fs-5 fnt-1" id="exampleModalLabel">Create an account</h1>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
                                                    <div className="mb-3 row">
                                                        <label className="col-sm-2 col-form-label">Name</label>
                                                        <div className="col-sm-10">
                                                            <input type="name" className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="mb-3 row">
                                                        <label htmlFor="email" className="col-sm-2 col-form-label">Email-id</label>
                                                        <div className="col-sm-10">
                                                            <input type="password" className="form-control" id="inputPassword" />
                                                        </div>
                                                    </div>
                                                    <div className="mb-3 row">
                                                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                                                        <div className="col-sm-10">
                                                            <input type="password" className="form-control" id="inputPassword" />
                                                        </div>
                                                    </div>
                                                    <div className="mb-3 row">
                                                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Confirm Password</label>
                                                        <div className="col-sm-10">
                                                            <input type="password" className="form-control" id="inputPassword" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                    <button type="button" className="btn btn-primary">Save </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>




{/* hero carousel */}

                <div id="carouselExampleIndicators" className="carousel slide carousel-fade">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner ">
                        <div className="carousel-item active">
                            <img src="/images/home.jpeg" className="float-start d-block w-100" height="650" alt="..." />
                            <div className="carousel-caption d-none d-md-block" >
                                <h5 className='logo-car'><SiYourtraveldottv />Gypsy</h5>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/road.jpg" className="float-start d-block w-100" height="650" alt="..." />
                            <div className="carousel-caption d-none d-md-block" >
                                <h5 className='logo-car'><SiYourtraveldottv />Gypsy</h5>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/mount.jpg" className="float-start d-block w-100" height="650" alt="..." />
                            <div className="carousel-caption d-none d-md-block" >
                                <h5 className='logo-car'><SiYourtraveldottv />Gypsy</h5>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>


            <img src="/images/2s.jpg" className=" float-start" height="500" style={size} alt="" />

            <div className="container ">
                <div className="row ">
                    <div className="col-md-6 offset-md-3  ">
                        <div className="text-block" style={mode}>
                            <h1 className='fnt-1'>About</h1>
                            <hr />
                            <p className='fnt-1'>Welcome to our website, your ultimate companion for thrilling adventures and immersive cultural experiences.
                                Whether you're a seasoned traveler or a first-time explorer, we are here to inspire, inform, and guide you on your journey.
                                Discover awe-inspiring destinations, unravel hidden gems, and delve into local traditions and cuisines.
                                Let us be your trusted source of wanderlust. </p> <br /> <p className='fnt-1'>We are your trusted companion on your globetrotting escapades
                                    helping you create memories that will last a lifetime. Start your extraordinary travel tale with us today!</p>
                            <hr />
                            <div className='container' >
                                <a href="/"><BsPinterest style={sizeIcons1} /></a> <a href="/"><AiFillInstagram style={sizeIcons2} /></a> <a href="/"><BsTwitter style={sizeIcons3} /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container-fluid border " style={mode}>
                <div className="container text-center my-5">
                    <h1 className='fnt-1 my-4'>Services</h1>
                    <div className="row">
                        <div className="col-lg-4 ">

                            <img className="bd-placeholder-img rounded-circle " width="140" height="140" src="/images/air.jpg" alt="" />
                            {/* <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="https://www.freepik.com/free-vector/blank-plane-tickets_4553457.htm#query=boarding%20pass%20svg&position=1&from_view=search&track=ais" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg>  */}
                            <h2 className="fw-normal fnt-1 my-3">Board Flights</h2>
                            <p className='fnt-1'>Discover seamless travel experiences with our website, simplifying your flight boarding process with efficiency and convenience.</p>
                            <p className='fnt-1'><a className="btn btn-secondary" href="/">View details »</a></p>
                        </div>
                        <div className="col-lg-4">
                            <img className="bd-placeholder-img rounded-circle " width="140" height="140" src="/images/pass.jpg" alt="" />
                            {/* <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg> */}
                            <h2 className="fw-normal fnt-1 my-3">Book Tickets</h2>
                            <p className='fnt-1'>Book your tickets effortlessly and embark on your dream journey through our user-friendly travel website.</p>
                            <p className='fnt-1'><a className="btn btn-secondary" href="/">View details »</a></p>
                        </div>
                        <div className="col-lg-4">
                            <img className="bd-placeholder-img rounded-circle " width="140" height="140" src="/images/hotels.jpg" alt="" />
                            {/* <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg> */}
                            <h2 className="fw-normal fnt-1 my-3">Choose Hotels</h2>
                            <p className='fnt-1'>Indulge in unforgettable stays with our travel website, offering a wide range of handpicked hotels to suit every preference.</p>
                            <p className='fnt-1'><a className="btn btn-secondary" href="/">View details »</a></p>
                        </div>
                        {/* <hr className="featurette-divider"></hr> */}
                    </div>
                </div>
            </div>

            <div className="conatainer-fluid border " style={mode}>
                <div className="container text-center my-5">
                    <div className="row featurette">
                        <div className="col-md-7">
                            <h2 className="featurette-heading fw-normal lh-1 fnt-1 my-4">Contacts</h2>
                            <p className="fnt-1">Need assistance or have questions? Our dedicated team is here to help!
                                Contact us for prompt and reliable support on all your travel needs. Reach out to us for personalized assistance and
                                reliable support to make your travel experience extraordinary.</p>
                            <hr className="featurette-divider"></hr>
                            <div className="mb-3 row">
                                <label htmlFor="staticEmail" className="col-sm-2 col-form-label fnt-1"><BsMailbox2 /> Email :</label>
                                <div className="col-sm-10">
                                    <p className='fnt-1'>nomadgypsy@gmail.com</p>
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label htmlFor="inputPassword" className="col-sm-2 col-form-label fnt-1"><BsFillTelephoneFill /> Call-Us :</label>
                                <div className="col-sm-10">
                                    <p className='fnt-1'>033-xxxx-xxxx</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <img className="bd-placeholder-img rounded img-fluid" width="600" height="500" src="/images/gate1.jpg" alt="" />

                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid border" style={mode}>
                <div className="container my-5">

                    <div className="row text-center">
                        <div className="col-6 col-md-2 mb-3 ml-3 text-center my-4">
                            <ul className="nav flex-column fnt-1">
                                <li className="nav-item mb-2"><a href="/" className=" link-style p-0  logo-footer"><SiYourtraveldottv /></a></li>
                                <li className="nav-item mb-2"><a href="/" className=" link-style p-0  logo-footer">Gypsy</a></li>
                            </ul>
                        </div>

                        <div className="col-6 col-md-2 mb-3 my-4">
                            <h4 className='fnt-1'>Links</h4>
                            <ul className="nav flex-column fnt-1">
                                <li className="nav-item mb-2"><a href="/" className=" link-style p-0 ">Home</a></li>
                                <li className="nav-item mb-2"><a href="/" className=" link-style p-0 ">About Us</a></li>
                                <li className="nav-item mb-2"><a href="/" className=" link-style p-0 ">Services</a></li>
                                <li className="nav-item mb-2"><a href="/" className=" link-style p-0 ">Contacts</a></li>

                            </ul>
                        </div>

                        <div className="col-6 col-md-2 mb-3 text-center my-4">
                            <h4 className='fnt-1 text-center'>Find Us</h4>
                            <ul className="nav flex-column text-center my-4">
                                <li className="nav-item mb-2"><a href="/" className=" link-style p-0 "><BsPinterest style={sizeIcons1} /><AiFillInstagram style={sizeIcons2} /><BsTwitter style={sizeIcons3} />   </a></li>
                            </ul>
                        </div>

                        <div className="col-md-5 offset-md-1 mb-3 my-4">
                            <form className='fnt-1'>
                                <h5>Explore, Discover, Create Memories</h5>
                                <p>Connect with us and travel Beyond your Ordinary Boundaries.</p>
                                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                                    <label for="newsletter1" className="visually-hidden">Email address</label>
                                    <input id="newsletter1" type="text" className="form-control" placeholder="Email address"></input>
                                </div>
                            </form>
                        </div>
                        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top ">
                            <p className='fnt-1'>© 2023 Company, Inc. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
