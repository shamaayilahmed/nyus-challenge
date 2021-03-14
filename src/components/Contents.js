import React from 'react'
import '../assets/styles/index.css'
import { useFetch } from '../api/useFetch'
import Content from './Content'

const url = 'https://api.mocki.io/v1/8b369506';

const Contents = () => {
  const { loading, data } = useFetch(url);

  return <div className="contents">
    {
      loading
        ? <h1 style={{ color: "#fff" }}>Loading...</h1>
        : <>
          {data.map((d) => (
            <Content d={d} />
          ))}
        </>
    }
  </div >
}

export default Contents
