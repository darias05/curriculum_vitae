import React, { Component } from "react";
import profile from "./profile.jpg";
import './App.css';


class App extends Component {
  state = {
    option: "about"
  }

  logicSections(section){
    switch (section) {
      case "about":
        return this.sectionAbout()
      case "experience":
        return this.sectionExperience()
      case "education":
        return this.sectionEducation()
      case "skills":
        return this.sectionSkills()
      case "interests":
        return this.sectionInterests()
      case "contactUs":
        return this.sectionContactUs()
      default:
        return this.sectionAbout()
    }
  }

  sectionAbout() {
    return (
      <div className="resume-section-content">
        <h1 className="mb-0">
            Dylan
            <span className="text-primary"> Arias</span>
        </h1>
        <div className="subheading mb-5">
            KR 22 A # 73 - 120 Manizales(Caldas)
            <br/>
            <a href="dylanst52286@gmail.com">dylanst52286@gmail.com</a>
        </div>
        <p className="lead mb-5">Dylan is a 21-year-old boy, a lover of life, of good movies and an afternoon with the family, he dreams of traveling and getting to know many parts of Colombia and the whole world, he works every day towards his dreams and it is faithful to the fact that everything in life is possible as long as we never set limits for ourselves.</p>
        <div className="social-icons">
            <a className="social-icon" href="https://www.linkedin.com/in/dylan-arias-arenas-783988141"><i className="fab fa-linkedin-in"></i></a>
            <a className="social-icon" href="https://github.com/darias05"><i className="fab fa-github"></i></a>
        </div>
      </div>
    ); 
  }
  
  sectionExperience() {
    return (
      <div className="resume-section-content">
        <h2 className="mb-5">Experience</h2>
        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1">
                <h3 className="mb-0">Bancolombia</h3>
                <div className="subheading mb-3">Software Development Engineer at Bancolombia</div>
                <p></p>
            </div>
            <div className="flex-shrink-0"><span className="text-primary">November 2021 - Present</span></div>
        </div>
        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1">
                <h3 className="mb-0">Comdata Group</h3>
                <div className="subheading mb-3">Automation and Analytics at Comdata Spain & Latam</div>
                <p>Implementation of Bots automations with Selenium, query automation in BigQuery, Speecht to text and data cleaning with Python.</p>
            </div>
            <div className="flex-shrink-0"><span className="text-primary">August 2021 - November 2021</span></div>
        </div>
        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1">
                <h3 className="mb-0">Netactica</h3>
                <div className="subheading mb-3">Developer</div>
                <p>Implementation of vendor simulations through Flask, test automation with Selenium, security test automation with OWASP ZAP, dashboard creation with Plotly Dash in Python, database administration in SQL Server and use of Amazon S3 Buckets, use of Scrapy, ElasticSearch and Kibana for the search of logs.</p>
            </div>
            <div className="flex-shrink-0"><span className="text-primary">December 2020 – June 2021</span></div>
        </div>
      </div>
    ); 
  }
  
  sectionEducation() {
    return (
      <div className="resume-section-content">
        <h2 className="mb-5">Education</h2>
        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1">
                <h3 className="mb-0">SYSTEMS ENGINEERING AND TELECOMMUNICATIONS</h3>
                <div className="subheading mb-0">Present (Semester V)</div>
                <div className="flex-shrink-0"><span className="text-primary">University of Manizales / Manizales (Caldas) - Colombia</span></div>
            </div>
        </div>
        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1">
                <h3 className="mb-0">TECHNOLOGIST IN COMMERCIAL INFORMATION SYSTEMS FOR INTERNET</h3>
                <div className="subheading mb-0">2020</div>
                <div className="flex-shrink-0"><span className="text-primary">University of Manizales / Manizales (Caldas) - Colombia</span></div>
            </div>
        </div>
        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1">
                <h3 className="mb-0">PROFESSIONAL TECHNICIAN IN CONFIGURATION OF COMMERCIAL SERVICES WEB</h3>
                <div className="subheading mb-0">2019</div>
                <div className="flex-shrink-0"><span className="text-primary">University of Manizales / Manizales (Caldas) - Colombia</span></div>
            </div>
        </div>
      </div>
    ); 
  }

  sectionSkills() {
    return (
      <div className="resume-section-content">
        <h2 className="mb-5">Skills</h2>
        <div className="subheading mb-3">Programming Languages & Tools</div>
        <ul className="list-inline dev-icons">
            <li className="list-inline-item"><i className="fab fa-aws"></i></li>
            <li className="list-inline-item"><i className="fab fa-docker"></i></li>
            <li className="list-inline-item"><i className="fab fa-java"></i></li>
            <li className="list-inline-item"><i className="fab fa-python"></i></li>
            <li className="list-inline-item"><i className="fab fa-html5"></i></li>
            <li className="list-inline-item"><i className="fab fa-css3-alt"></i></li>
            <li className="list-inline-item"><i className="fab fa-js-square"></i></li>
            <li className="list-inline-item"><i className="fab fa-angular"></i></li>
            <li className="list-inline-item"><i className="fab fa-react"></i></li>
            <li className="list-inline-item"><i className="fab fa-node"></i></li>
            <li className="list-inline-item"><i className="fab fa-git"></i></li>
            <li className="list-inline-item"><i className="fab fa-github"></i></li>
            <li className="list-inline-item"><i className="fab fa-gitlab"></i></li>
            <li className="list-inline-item"><i className="fab fa-npm"></i></li>
        </ul>
        <div className="subheading mb-3">Workflow</div>
        <ul className="fa-ul mb-0">
            <li>
                <span className="fa-li"><i className="fas fa-check"></i></span>
                Application Design
            </li>
            <li>
                <span className="fa-li"><i className="fas fa-check"></i></span>
                Testing and debugging between languages
            </li>
            <li>
                <span className="fa-li"><i className="fas fa-check"></i></span>
                Cross-functional teams
            </li>
            <li>
                <span className="fa-li"><i className="fas fa-check"></i></span>
                Agile Development & Scrum
            </li>
        </ul>
      </div>
    );
  }

  sectionInterests() {
    return (
      <div className="resume-section-content">
          <h2 className="mb-5">Interests</h2>
          <p>Apart from being a web developer, I enjoy most of my time being outdoors. In the winter, I am an avid skier and novice ice climber. During the warmer months here in Colorado, I enjoy mountain biking, free climbing, and kayaking.</p>
          <p className="mb-0">When forced indoors, I follow a number of sci-fi and fantasy genre movies and television shows, I am an aspiring chef, and I spend a large amount of my free time exploring the latest technology advancements in the front-end web development world.</p>
      </div>
    );
  }

  sectionContactUs() {
    return (
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Me</h2>
        <div className="divider-custom">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
            <div className="divider-custom-line"></div>
        </div>
        <div className="row justify-content-center">
            <div className="col-lg-8 col-xl-7">
                <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                    <div className="form-floating mb-3">
                        <input className="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                        <label for="name">Full name</label>
                        <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                    </div>
                    <div className="form-floating mb-3">
                        <input className="form-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" />
                        <label for="email">Email address</label>
                        <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                        <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                    </div>
                    <div className="form-floating mb-3">
                        <input className="form-control" id="phone" type="tel" placeholder="(123) 456-7890" data-sb-validations="required" />
                        <label for="phone">Phone number</label>
                        <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                    </div>
                    <div className="form-floating mb-3">
                        <textarea className="form-control" id="affair" type="text" placeholder="Enter your affair here..." data-sb-validations="required"></textarea>
                        <label for="affair">Affair</label>
                        <div className="invalid-feedback" data-sb-feedback="affair:required">A affair is required.</div>
                    </div>
                    <div className="form-floating mb-3">
                        <textarea className="form-control" id="message" type="text" placeholder="Enter your message here..." data-sb-validations="required"></textarea>
                        <label for="message">Message</label>
                        <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                    </div>
                    <div className="d-none" id="submitSuccessMessage">
                        <div className="text-center mb-3">
                            <div className="fw-bolder">Form submission successful!</div>
                            To activate this form, sign up at
                            <br />
                            <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                        </div>
                    </div>
                    <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
                    <button className="btn btn-primary btn-xl disabled" id="submitButton" type="submit">Send</button>
                </form>
            </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
              <a className="navbar-brand js-scroll-trigger" href="#page-top">
                  <span className="d-block d-lg-none">Dylan Arias Arenas</span>
                  <span className="d-none d-lg-block"><img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={profile} alt="..." /></span>
              </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                  <ul className="navbar-nav">
                      <button className="nav-item nav-link js-scroll-trigger" onClick={() => this.setState({option: "about"})}>ABOUT</button>
                      <button className="nav-item nav-link js-scroll-trigger" onClick={() => this.setState({option: "experience"})}>EXPERIENCE</button>
                      <button className="nav-item nav-link js-scroll-trigger" onClick={() => this.setState({option: "education"})}>EDUCATION</button>
                      <button className="nav-item nav-link js-scroll-trigger" onClick={() => this.setState({option: "skills"})}>SKILLS</button>
                      <button className="nav-item nav-link js-scroll-trigger" onClick={() => this.setState({option: "interests"})}>INTERESTS</button>
                      <button className="nav-item nav-link js-scroll-trigger" onClick={() => this.setState({option: "contactUs"})}>CONTACT US</button>
                  </ul>
              </div>
          </nav>
          <div className="container-fluid p-0">
              <section id="root_section" className="resume-section">
                {this.logicSections(this.state.option)}
              </section>
          </div>
      </div>
    );
  }
}

export default App;
