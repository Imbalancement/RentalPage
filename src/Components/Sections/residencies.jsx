import React from 'react'
import './residencies.css'
export const Residencies = () => {
  return (
   
    <section id="residencies">
      <div className=" property">
        <div>
          <h1>Available Properties</h1>
        </div>

        <div className="b-wrapper">
          <div className="paddings innerWidth flexCenter propertypicture">
            <img src="./r1.png" alt="" />
            <img src="./r2.png" alt="" />
            <img src="./r3.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
  
}
