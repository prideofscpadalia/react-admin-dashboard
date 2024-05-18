import React, { useState,useEffect } from 'react'
import './Dashboard.css'
import Card from './Card'


export default function Dashboard() {
   const [card, setCard] = useState([])

   const fetchData = () =>{
    const baseUrl = "http://localhost:3000/cards";
    
    try {
      fetch(baseUrl)
    .then(res => res.json())
    .then(data => {
      setCard(data);
    })
    } catch (error) {
      console.log(error.message);
    }

   }
   useEffect(()=>{
      fetchData();
   },[])
  return (
    <section className="dashboard section">
        <div className="row">
            <div className="col-lg-8">
                <div className="innerRow">
                  {
                    card && card.length > 0 &&
                    card.map(card => <Card key={card._id} card={card} />)
                  }
                </div>
            </div>
            <div className="col-lg-8"></div>
        </div>
    </section>
  )
}
