import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Sidebar } from '../../Components/Sidebar'
import { Input } from "@material-tailwind/react";
import { useData } from '../../Context/DataContext';
import axios from 'axios';
function MainLayout() {
  const [query,setQuery]=useState("")
  const { data, setData,setShow } = useData();
  useEffect(() => {
    if(data.length>0){
      setShow(true) // This will log the updated data
    }
  }, [data]);

  

  
  return (
    <div className='bg-gray-4 w-full'>
        <div className='fixed flex flex-cols gap-12 place-items-center top-0 w-screen z-10 px-24 py-2 bg-gray-5'>
        <Link to="/"><h1 className='font-bold tracking-widest text-base-tertiary w-fit'>BOOKSHELF</h1></Link>
          <Input variant="outlined" label="Browse Books" placeholder="Browse Books" 
          onChange={e=>{setQuery(e.target.value)}}
          onKeyUp={event => {
            if (event.key === 'Enter') {
              axios.get(`https://openlibrary.org/search.json?q=${query}&limit=10&page=1`)
              .then(res=>{
                setData(res.data.docs)
            })
            }
          }}/>
        </div>
        <div className='flex gap-4 pt-20'>
          <Sidebar/>
          <Outlet/>
        </div>
    </div>
  )
}

export default MainLayout