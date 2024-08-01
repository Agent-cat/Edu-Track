import React, { useState } from 'react'
import { useEffect } from 'react'
const App = () => {
  const [data, setData] = useState([])
  const username="Agent-Cat"
  const repo="ERP"
  const getdata=()=>{
    fetch(`https://api.github.com/repos/${username}/${repo}/commits?sha=main`)
      .then((response) => response.json())
      .then((json) => setData(json))
  }
 {
 /* useEffect(() => {
    fetch('https://api.github.com/repos/Agent-Cat/university-Studio/commits?sha=main')
      .then((response) => response.json())
      .then((json) => setData(json))
      
  })*/
 } 
  return (
    <div className=''>
      
      <button onClick={getdata} className='px-6 py-3 rounded-lg bg-orange-500'> Get Commit data</button>
      <h1 className='text-2xl font-bold ' >{data.length} Contributions are made </h1>
      
      
      {
        
        data.map((info,index) => {
          return (
            <div className='border-2 border-black' key={index}>
              <h2>Made By : {info.commit.author.name}</h2>
              <img className='w-10 h-10' src={data[0].author.avatar_url} alt="vishnu" />
              <p> {info.commit.message}</p>
            </div>
          )
        })
      }
      
    </div>
  )
}

export default App
