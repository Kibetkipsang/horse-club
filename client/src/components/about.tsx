import "./styles/about.css"
import aboutImg from "../assets/aboutimg.jpg"

function About(){
    return(
        <>
        <section className="about-section" id="about">
          <div className="about-box">
            <p className="about-par">We are here to take care of your horses</p>
        <h2 className="about-title">
          we are your horses' best friend now and forever
        </h2>
        <p className="about-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem magnam iure quibusdam odit commodi soluta at expedita reiciendis nesciunt. Autem aliquam culpa doloremque nihil libero rerum omnis doloribus porro consequatur!
        </p>
        <a href="https://github.com/kibetkipsang" target="_blank" className="about-btn">get started now</a>
          
        
      </div>
      <div className="about-img-box">
        <img
          src={aboutImg}
          alt="horse image"
          className="about-image"
        />
      </div>
    </section>
        </>
    )
}

export default About;