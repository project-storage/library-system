import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import BorrowBook_main from './components/BorrowBook/BorrowBook_main.jsx'


import { createBrowserRouter, RouterProvider, Route, Link } from "react-router-dom";
import BorrowBook_borrow from './components/BorrowBook/BorrowBook_borrow.jsx'
import BorrowBook_return from './components/BorrowBook/ฺBorrowBook_return.jsx'
import BorrowBook_data from './components/BorrowBook/BorrowBook_data.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/borrowbook",
    element: <BorrowBook_main />
  },
  {
    path: "/borrowbook_borrow",
    element: <BorrowBook_borrow />
  },
  {
    path: "/borrowbook_return",
    element: <BorrowBook_return />
  },
  {
    path: "/borrowbook_data",
    element: <BorrowBook_data />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)




// ( รอแก้ Router )

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <BorrowBook_main/>
//   },
  
// ])

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>,
// )