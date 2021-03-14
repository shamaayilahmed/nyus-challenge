import React from 'react'

const content = ({ d: { title, points: { odd, even }, predict } }) => {

  return (
    <div className="content">
      <h5>{title}</h5>
      <h3>{predict}</h3>
      <div className="data">
        <div className="odd">
          <h1>{odd.count}</h1>
          <h4>{odd.name}</h4>
          <p>{odd.percent}%</p>
        </div>
        <div className="even">
          <h1>{even.count}</h1>
          <h4>{even.name}</h4>
          <p>{even.percent}%</p>
        </div>
      </div>
    </div>
  )
}

export default content
