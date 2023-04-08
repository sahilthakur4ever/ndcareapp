import React from 'react'
import Ayurveda from "./Ayurveda.png"
import happy  from "./happy.png"
import patiant  from "./patiant.png"
import "./card.css"
function Card() {
  return (
    <div>
        <div className="card-group">
        <div className="card">
          <img className="card-img-top" src={Ayurveda} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="card-title">Best Herbs for Kidney Treatment</h5>
            <p className="card-text">Kidney Treatment with herbal under one of the world's senior most Herbs Experts</p>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top" src={happy} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="card-title">Thousands of Satisfied Kidney Patients</h5>
            <p className="card-text">Thousands of satisfied patients where dialysis was prevented or stopped with herbal treatment</p>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top" src={patiant} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="card-title">Reduce Creatinine Naturally</h5>
            <p className="card-text">Best and Safest Herbs used to reduce Creatinine and Urea naturally</p>
          </div>
        </div>
      </div>
      <br/>
    <section className="pb-5 mb-3 ">
        <div className="container-xxl">
            <div className="row justify-content-center section-youtube">
                <div className="col-md-6">
                    <div className="doctor-video">
                        <iframe width="100%" height="350" src="https://www.youtube.com/embed/56GksEkH71M" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="about-kidney pb-5 mb-3">
        <div className="container-xxl">
            <div className="row">
                <div className="col-lg-12">
                    <h2></h2>
                    <p>The first and foremost step of our treatment is to repair the inflammed renal tissue to the desirable extent. When a patient of Renal Failure approaches us, his Blood Urea, S.Creatinine levels are generally elevated to dangerous levels. The patient approaches us to get these levels normalized. With the help of our herbs, these levels are gradually restored to their normal levels. Though our medicines control the elevated B.Urea and S.Creatinine levels, our key objective is to target and treat the underlying cause of kidney disorders; because as such creatinine and blood urea can be controlled temporarily with dialysis also.</p>
                    <p>Therefore, our foremost aim is to repair the damaged nephrons to the desirable extent so that the kidney filters out toxin and maintain the B.Urea levels and S.Creatinine levels naturally.</p>
                    <p>The Second step of the treatment is to maintain the levels of electrolytes like Sodium, Potassium, etc. to the required levels in the blood of the kidney patient. The importance of maintaining the levels of these electrolytes is very important because even a slight imbalance of these can cause kidney impairment and endanger life of the patient.</p>
                    <p>Unfortunately, most of the patients are unaware of these levels and they are only concerned about the the B.Urea and S.Creatinine levels, remaining oblivious of significance of electrolyte imbalance, which sometimes prove to be fatal in many kidney disorders. Understanding the importance of the electrolytes in the blood, we keep a regular check on their levels and our medication maintains their levels within normal range.</p>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Card