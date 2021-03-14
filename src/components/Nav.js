import React, { useState, useEffect, useRef } from 'react'
import { FaBars } from 'react-icons/fa'
import { links } from '../assets/data/links'
import { Link } from 'react-router-dom';

import '../assets/styles/index.css'

const Nav = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {

    if (showLinks) {
      linksContRef.current.style.height = `92.4vh`
      linksContRef.current.style.width = `20vw`
    } else {
      linksContRef.current.style.height = `0px`
    }
  }, [showLinks])
  return (
    <>
      <div className="nav">
        <div className="flex">
          <button className='nav-toggle' onClick={() => setShowLinks(!showLinks)}><FaBars /></button>
          <svg>
            <text y="80" style={{ "stroke": '#eee', "fill": "#eee", "font-size": '20px' }}>
              MEME HQ</text>
          </svg>
        </div>


        <a href="">Discord</a>
      </div>
      <div className="sidebar" ref={linksContRef}>
        <ul ref={linksRef}>
          {links.map((link) => (
            <li className="">
              <Link to={`${link.split(" ").join('')}`}>{link}</Link>
            </li>
          ))}
        </ul>
      </div >
    </>
  )
}

export default Nav
