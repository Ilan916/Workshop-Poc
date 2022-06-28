import React from 'react'
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className='d-flex justify-content-center'>
         <Link to={`/coins/ethereum`} className="text-decoration-none my-1 coin">
         <button type="button" class="btn btn-primary">Commencez</button>
         </Link>
 
    </div>
  )
}

export default Home