import React from 'react'
import drnavdeepsharma from "./drnavdeepsharma.webp"
import "./sectionone.css"
function Sectionone() {
  return (
    <div>
        <section className="sectionOne">
        <div className="container-xxl">
            <div className="row">
                <div className="col-lg-7 order-2 order-md-1">
                    <div className="innercol">
                            
                                <h1 className="color-green">Best Kidney Treatment </h1>
                            
                        
                        <h4>Want To Repair Your Kidney Without Pain Or Side Effects?</h4>
                        <p>How <strong>Dr. Navdeep Sharma</strong> with his team of Hundreds of Doctors Globally Has Treated Millions Of
                            Patients Successfully in <strong>Last 22+ Years</strong></p>
                    </div>
                    <div className="innercol">
                        <ul className="list-group list-style d-flex flex-wrap flex-row">
                            <li className="w-50">Kidney Damage</li>
                            <li className="w-50">Acute Kidney Disease</li>
                            <li className="w-50">Polycystic Kidney Disease</li>
                            <li className="w-50">Nephrotic Syndrome</li>
                            <li className="w-50">High Creatinine</li>
                            <li className="w-50">Chronic Kidney Disease</li>
                            <li className="w-50">Kidney Failure</li>
                            <h5> and all other Kidney related problems</h5>
                        </ul>
                    </div>
                    <br />
                    <a href="tel:+917087301056" className="get-btn">Talk To Kidney Experts Now</a>
                </div>
                <div className="col-lg-5 order-1 order-md-2">
                    <div className="d-flex align-items-center justify-content-center hero-img">
                        <img src={drnavdeepsharma}/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Sectionone