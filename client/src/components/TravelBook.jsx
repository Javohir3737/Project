// import React, { useEffect, useState } from 'react'
// import axios from "axios"
// import {Link} from "react-router-dom"

// const TravelBook = () => {
//   const [travel, settravel] = useState([])
//   const [id, setId] = useState("")
  
//   const fetchData = async () => {
//     const { data } = await axios.get("http://localhost:5000/api/travel")
//     console.log(data.data);
//     settravel(data.travels)
//   }

//   const deleteHandler = async (e) => {
//     e.preventDefault()
//     await axios.delete(`http://localhost:5000/api/travel/${id}`)
//     fetchData()
//   }
  
//   useEffect(() => {
//     fetchData()
//   }, [])
//   return (
//     <div>
//       {travel.map(tb => (
//         <div key={tb._id} className="card mb-3 mt-3">
//         <img src={tb.image} className="card-img-top" alt={tb.title}/>
//         <div className="card-body">
//             <h5 className="card-title">{tb.title}</h5>
//             <p className="card-text">{tb.descr}</p>
//             <div className='d-flex justify-content-start'>
//               <Link className='btn btn-primary' to={`/update/${tb._id}`}>Update</Link>
//               <form onSubmit={deleteHandler}>
//                 <button
//                  type='submit'
//                   className='btn btn-danger mx-2'
//                   onClick={()=> setId(tb._id)}>Delete</button>
//               </form>
//             </div>
//         </div>
//        </div>
//       ))}
      
//     </div>
//   )
// }

// export default TravelBook



import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from "react-router-dom"
import "../all.css"

const TravelBook = () => {
  const [travelBook, setTravelBook] = useState([])
  const [id, setId] = useState('')
  const [keldi, setKeldi] = useState(false)

  const fetchData = async () => {
    const { data } = await axios.get("http://localhost:5000/api/travel")
    setTravelBook(data.travels)
  }

  const deleteHandler = async (e) => {
    e.preventDefault()
    await axios.delete(`http://localhost:5000/api/travel/${id}`)
    fetchData()
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      {/* {travelBook.map(tb => (
        <div key={tb._id} className="card mb-3 mt-3">
          <img src={tb.image} className="card-img-top" alt={tb.title} />
          <div className="card-body">
            <h5 className="card-title">{tb.title}</h5>
            <p className="card-text">{tb.descr}</p>
            <div className='d-flex justify-content-start'>
              <Link className='btn btn-primary' to={`/update/${tb._id}`}>Update</Link>
              <form onSubmit={deleteHandler}>
                <button 
                  type='submit' 
                  className='btn btn-danger mx-2'
                  onClick={() => setId(tb._id)}>Delete</button>
              </form>
            </div>
          </div>
        </div>
      ))} */}
        {/* <table border={1} >
          <tr>
            <th>ism</th>
            <th>familya</th>
            <th>telefon</th>
            <th>davomat</th> 
          </tr>
       {
        travelBook.map((item)=>(
          <tr>
            <td className='Ism'>{item.title}</td>
            <td>{item.descr}</td>
            <td>{item.image}</td>
            <td><button>keldi</button>   <button>kelmadi</button></td>
          </tr>
        ))
       }
        </table> */}
        <table className="table">
        <thead>
          <tr>
            <th scope="col">Ism</th>
            <th scope="col">Familiya</th>
            <th scope="col">Telefon</th>
            <th scope="col">Davomat</th>
          </tr>
        </thead>
    {
        travelBook.map((item)=>(
        <tbody>
          <tr>
            <td>{item.title}</td>
            <td>{item.descr}</td>
            <td>{item.image}</td>
            <td><button >keldi</button>   <button>kelmadi</button></td>
          </tr>
        </tbody>
        ))
    }
    
      </table>
    </div>
  )
}

export default TravelBook