import React from 'react'
import Header from './Header'

const Viewbook = () => {
    var booklist=[]
  return (
    <div>
        <Header/>
           <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
            <table class="table"> 
            <thead>
    <tr>
      
      <th scope="col">Name</th>
      <th scope="col">Fname</th>
      <th scope="col">Fnickname</th>
      <th scope="col">Dyf</th>
    
    </tr>
  </thead>
   
    <tbody>
            
  {booklist.map((value,key)=>{
                    return <tr>
      
      <td>{value.Name}</td>
      <td>{value.Fname}</td>
      <td>{value.Fnickname}</td>
      <td>{value.dyf}</td>
      
    </tr>
    
  
    
                    
                })}
                </tbody>
  </table>

            </div>
        </div>
    </div>
</div>

    </div>
  )
}

export default Viewbook