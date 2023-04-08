import React from 'react'
import herbel from "./herbel.jpg"
import "./sectiontwo.css"
function Sectiontwo() {
  return (
    <div>
         <section className="sectionTwo">
        <div className="container-xxl">
            <div className="row">
                <div className="col-lg-6 cure-heading">
                    <h1 style={{color: "#006633",fontSize: "43px"}}>Healing Kidneys Possible Now</h1>
                    <h2 className='rues-heading'>REUS</h2>
                    <div className="ulist">
                    <ul className="list-group list-style myUL">
                        <li><span className="first-letter"> <strong>R</strong></span>Renal tissue repair</li>
                        <li><span className="first-letter"> <strong>E</strong></span>Electrolyte imbalance management</li>
                        <li><span className="first-letter"> <strong>U</strong></span>Blood Urea level management</li>
                        <li><span className="first-letter"> <strong>E</strong></span>Serum Creatinine level management</li>
                    </ul>
                    </div>
                    <p>In Kidney patients the Repair and Management of Kidney Cells are most important. If a Kidney
                        Patient really has to get rid of High Creatinine, High Urea etc and wants to repair Renal Cells
                        then the REUS Therapy is the best as there is no need of Dialysis, Transplant & in most cases
                        the Dialysis also slowly and gradually phased-out and only Ayurvedic medicines for Kidney are
                        given which have no Side Effects and pain.</p>
                    <p>Therefore, our foremost aim is to repair the damaged nephrons to the desirable extent so that the
                        kidney filters out toxin and maintain the B.Urea levels and S.Creatinine levels naturally.</p>
                        <a href="tel:+917087301056" className="get-btn">Talk To Kidney Experts Now</a>
                </div>




                <div className="col-lg-6">
                   <div className="about-img">
                        <img src={herbel} className="img-fluid" alt='img'/>
                    </div>
                </div>
            </div>
            </div>
    </section>
    <br />
    </div>
  )
}

export default Sectiontwo