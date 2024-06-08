import React, { useState } from 'react'
import { useData } from '../../Context/DataContext'
import { Button, Card, CardBody, CardFooter, CardHeader, Typography } from '@material-tailwind/react'

function Home() {
  const { Show, data } = useData();
  const[book,setBook]=useState({
    title:"",
    author:"",
    language:""
  })

  function SetCookie() {
    let cookie = JSON.parse(localStorage.getItem("bookshelf")) || [];
  
    try {
      cookie.push(book);
      localStorage.setItem("bookshelf", JSON.stringify(cookie));
    } catch (error) {
      console.error("Error while parsing or storing data in localStorage:", error);
    }
  }  


  return (
    <div className='w-full text-gray-10 pb-6'>
      {!Show && <h1 className='p-4 text-gray-1 font-bold tracking-wider'>ADD BOOKS BY SEARHCHING THEM.</h1>}
      {Show && <div className=''> 
        <h1 className='p-4 text-gray-1 font-bold tracking-wider'>SEARCH RESULT.</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4  gap-6 place-items-center '>

      {data.map(d => {
        return (
          <Card variant='' className="w-full md:w-64 lg:w-72 aspect-square grid place-items-center">
        <CardBody>
          <Typography variant="h6" color="blue-gray" className="mb-2">
            {d.title}
          </Typography>
          <p><b>Author Name: </b>{d.author_name}</p><br/>
          <p><b>Language: </b>{d.language[0]}</p>
        </CardBody>
        <CardFooter className="mt-auto pt-0">
          <Button className='' onClick={()=>{
            setBook({
              title:d.title,
              author:d.author_name,
              language:d.language[0]
            });
            SetCookie();
          }}>Add to My BookShelf</Button>
        </CardFooter>
      </Card>
        )
      })}</div></div>}
      
    </div>
  )
}

export default Home