import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainLayout from './Page/More/MainLayout';
import Home from './Page/Home/Home';
import BookShelf from './Page/BookShelf/BookShelf';
function App() {
  const router = createBrowserRouter([
    {
      element:<MainLayout/>,
      children: [
        {
          path: "/",
          element:<Home/>
        },
        {
          path: "/my_bookshelf",
          element:<BookShelf/>
        }
      ],
    },
  ]);
  return (
    <div>
        <RouterProvider router={router} />
    </div>
  )
}

export default App
