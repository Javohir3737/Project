// import React, { useState } from 'react'
// import axios from 'axios'
// import {useNavigate} from "react-router-dom"

// const AddBook = () => {
//   const [title, setTitle] = useState("")
//   const [descr, setDescr] = useState("")
//   const [image, setImage] = useState("")
  

//   const navigate = useNavigate()

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     await axios.post("http://localhost:5000/api/travel/add", {
//       title,
//       descr,
//       image
//     })
//     navigate("/")
//   };


//   return (
//     <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label htmlFor="title" className="form-label">Title</label>
//           <input
//            type="text"
//            className="form-control"
//            id="title"
//            name='title'
//            onChange={e => setTitle(e.target.value)}/>
//         </div>
//         <div className="mb-3">
//           <label htmlFor="description" className="form-label">Description</label>
//           <input
//              type="text"
//              className="form-control"
//              id="descrp"
//              name='descrp'
//              onChange={e => setDescr(e.target.value)}/>
//         </div>
//         <div className="mb-3">
//           <label htmlFor="image" className="form-label">Image URL</label>
//           <input
//              type="text"
//              className="form-control"
//              id="image"
//              name='image'
//              onChange={e => setImage(e.target.value)}/>
//         </div>
//         <button type="submit" className="btn btn-primary">Submit</button>
//     </form>
//   )
// }

// export default AddBook


import React, { useState } from 'react'
import axios from 'axios'
import img1 from "../assets/1.png"
import "../all.css"

const AddBook = () => {
  const [title, setTitle] = useState('')
  const [descr, setDescr] = useState('')
  const [image, setImage] = useState('')


  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post("http://localhost:5000/api/travel/add", {
      title,
      descr,
      image
    })
  };

  return (
    <div className='wrapper'>
      <div>
        <img src={img1} alt="" />
      </div>
      <div className='left'>
    <form onSubmit={handleSubmit}>
      <div >
        <label htmlFor="title" className="form-label">Ism</label>
        <input 
          type="text" 
          className="form-control" 
          id="title" 
          name="title"
          onChange={e => setTitle(e.target.value)}
        />
      </div>
      <div >
        <label htmlFor="descr" className="form-label">Familiya</label>
        <input 
          type="text" 
          className="form-control" 
          id="descr" 
          name='descr'  
          onChange={e => setDescr(e.target.value)}
        />
      </div>
      <div className="">
        <label htmlFor="image" className="form-label">Telefon Raqam</label>
        <input 
          type="text" 
          className="form-control" 
          id="image" 
          name='image'  
          onChange={e => setImage(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </div>
    </div>
  )
}

export default AddBook