import React, { useState } from 'react'

import { Link } from 'react-router-dom';
import { BsFillSunFill, BsFillMoonStarsFill, BsFillGearFill, BsFillTelephoneFill, BsInfoCircleFill, BsPinterest, BsTwitter, BsMailbox2 } from "react-icons/bs";
import { GoHomeFill } from "react-icons/go";
import { SiYourtraveldottv } from "react-icons/si";

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




export default function About() {


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
                               

                            </ul>
                        </div>
                    </div>
                </nav>



                <div className="container text-center my-4">
                    <div className="row">
                        <div className="col">
                            <div className="p-4 p-md-5 mb-4 text-white rounded bg-dark">
                                <div className="col-md-6 px-0">
                                    <h1 className="display-4 fst-italic">About</h1>
                                    <p className="lead my-3">We are your trusted companion on your globetrotting escapades helping you create memories that will last a lifetime. Start your extraordinary travel tale with us today!</p>
                                    <p className="lead my-3" > we are here to inspire, inform, and guide you on your journey.
                                        Discover awe-inspiring destinations, unravel hidden gems, and delve into local traditions and cuisines.</p>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col">
                            <img className="bd-placeholder-img rounded-circle " width="200" height="250" src="/images/6m.jpg" alt="" />
                        </div> */}
                        <div className="row mb-2">
                            <div className="col-md-6">
                                <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                    <div className="col p-4 d-flex flex-column position-static">
                                        <strong className="d-inline-block mb-2 text-primary">Escape</strong>
                                        <h3 className="mb-0 fnt-1">Featured post</h3>
                                        <p className="card-text mb-auto fnt-1">Unleash your spirit of adventure, and let the world become your greatest teacher. With every step, travel reveals its boundless gifts, leaving an indelible mark on your soul.</p>
                                        <a href="#" className="stretched-link">Continue reading</a>
                                    </div>
                                    <div className="col-auto d-none d-lg-block">
                                        <img className="bd-placeholder-img  " width="200" height="250" src="/images/6m.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                    <div className="col p-4 d-flex flex-column position-static">
                                        <strong className="d-inline-block mb-2 text-success">Solo</strong>
                                        <h3 className="mb-0 fnt-1">Featured post</h3>
                                        <p className="mb-auto fnt-1"> Each sunset paints the sky with a symphony of colors, reminding you of the vast beauty that exists beyond the boundaries of everyday life.</p>
                                        <a href="#" className="stretched-link">Continue reading</a>
                                    </div>
                                    <div className="col-auto d-none d-lg-block">
                                        <img className="bd-placeholder-img  " width="200" height="250" src="/images/5.jpg" alt="" />


                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>




                <ul className="nav justify-content-center border-bottom pb-3 mb-3" style={mode}>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary" style={mode}>Home</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary" style={mode}>About</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary" style={mode}>Contacts</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary" style={mode}>FAQs</a></li>  
                </ul>
                <p className="text-center text-body-secondary">© 2023 Company, Inc</p>

            </div>






        </>
    )
}
