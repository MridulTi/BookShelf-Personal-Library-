import { Button, Card, CardBody, CardFooter, Typography } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react'

function BookShelf() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const booksFromStorage = localStorage.getItem('bookshelf');
    if (booksFromStorage) {
      setBooks(JSON.parse(booksFromStorage));
    }
    console.log(books)
  }, []);

  function handleRemove(index){
    let cookie = JSON.parse(localStorage.getItem("bookshelf")) || [];
  
    try {
      cookie.splice(index,1);
      localStorage.setItem("bookshelf", JSON.stringify(cookie));
      window.location.reload();
    } catch (error) {
      console.error("Error while parsing or storing data in localStorage:", error);
    }
  }
  return (
    <div className=''>
      <div className=''>
        <h1 className='p-4 pt-0 text-gray-1 font-bold tracking-wider'>MY BOOKSHELF.</h1>
        <div className='grid grid-cols-4 gap-6 place-items-center'>
        {books.length > 0 ? (
        books.map((d, index) => (
          <Card variant='' className="w-72 aspect-square grid place-items-center">
                <CardBody>
                  <Typography variant="h6" color="blue-gray" className="mb-2">
                    {d.title}
                  </Typography>
                  <p><b>Author Name: </b>{d.author_name}</p><br />
                  <p><b>Language: </b>{d.language}</p>
                </CardBody>
                <CardFooter className="mt-auto pt-0">
                  <Button className='' onClick={()=>handleRemove(index)}>Remove from My BookShelf</Button>
                </CardFooter>
              </Card>
        ))
      ) : (
        <p>No books available</p>
      )}
          {/* {books.map(d => {
            return (
              
            )
          })}
          */}
          </div></div> 
    </div>
  )
}

export default BookShelf