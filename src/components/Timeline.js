import React, { useState, useRef, useEffect } from 'react'
import '../assets/styles/index.css'

const Timeline = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContRef = useRef(null);

  useEffect(() => {
    if (showLinks) {
      linksContRef.current.style.transform = `translateX(${0}px)`;
    } else {
      linksContRef.current.style.transform = `translateX(${338}px)`;
    }
  }, [showLinks])

  return (
    <div className="container" ref={linksContRef} >
      <div className="button" onClick={() => setShowLinks(!showLinks)}>
        <a>{showLinks ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>}</a>
      </div>
      <div className="wrapper">
        <div className="header">
          <h3>Timeline</h3>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="18px" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </div>
        <ul className="timeline">
          <li className="blue">
            <div className="">
              <p><span className="name">Puru Thakkar</span> surpassed their daily news target! Keep going!</p>
              <h6 className="time">3h ago</h6>
            </div>
          </li>
          <li className="green">
            <div className="">
              <p><span className="name">Manasi Verma</span> surpassed their daily news target! Keep going!</p>
              <h6 className="time">17h ago</h6>
            </div>
          </li>
          <li className="red">
            <div className="">
              <p><span className="name">Hema Priya</span> surpassed their daily news target! Keep going!</p>
              <h6 className="time">21h ago</h6>
            </div>
          </li>
        </ul>
      </div>
    </div >
  )
}

export default Timeline
