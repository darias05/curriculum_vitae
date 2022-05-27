import React, { Component } from "react";
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
                <h3 className="mb-0">Senior Web Developer</h3>
                <div className="subheading mb-3">Intelitec Solutions</div>
                <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>
            </div>
            <div className="flex-shrink-0"><span className="text-primary">March 2013 - Present</span></div>
        </div>
        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1">
                <h3 className="mb-0">Web Developer</h3>
                <div className="subheading mb-3">Intelitec Solutions</div>
                <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>
            </div>
            <div className="flex-shrink-0"><span className="text-primary">December 2011 - March 2013</span></div>
        </div>
        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1">
                <h3 className="mb-0">Junior Web Designer</h3>
                <div className="subheading mb-3">Shout! Media Productions</div>
                <p>Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.</p>
            </div>
            <div className="flex-shrink-0"><span className="text-primary">July 2010 - December 2011</span></div>
        </div>
        <div className="d-flex flex-column flex-md-row justify-content-between">
            <div className="flex-grow-1">
                <h3 className="mb-0">Web Design Intern</h3>
                <div className="subheading mb-3">Shout! Media Productions</div>
                <p>Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.</p>
            </div>
            <div className="flex-shrink-0"><span className="text-primary">September 2008 - June 2010</span></div>
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
                <h3 className="mb-0">University of Colorado Boulder</h3>
                <div className="subheading mb-3">Bachelor of Science</div>
                <div>Computer Science - Web Development Track</div>
                <p>GPA: 3.23</p>
            </div>
            <div className="flex-shrink-0"><span className="text-primary">August 2006 - May 2010</span></div>
        </div>
        <div className="d-flex flex-column flex-md-row justify-content-between">
            <div className="flex-grow-1">
                <h3 className="mb-0">James Buchanan High School</h3>
                <div className="subheading mb-3">Technology Magnet Program</div>
                <p>GPA: 3.56</p>
            </div>
            <div className="flex-shrink-0"><span className="text-primary">August 2002 - May 2006</span></div>
        </div>
      </div>
    ); 
  }

  sectionSkills() {
    return (
      <div class="resume-section-content">
        <h2 class="mb-5">Skills</h2>
        <div class="subheading mb-3">Programming Languages & Tools</div>
        <ul class="list-inline dev-icons">
            <li class="list-inline-item"><i class="fab fa-html5"></i></li>
            <li class="list-inline-item"><i class="fab fa-css3-alt"></i></li>
            <li class="list-inline-item"><i class="fab fa-js-square"></i></li>
            <li class="list-inline-item"><i class="fab fa-angular"></i></li>
            <li class="list-inline-item"><i class="fab fa-react"></i></li>
            <li class="list-inline-item"><i class="fab fa-node-js"></i></li>
            <li class="list-inline-item"><i class="fab fa-sass"></i></li>
            <li class="list-inline-item"><i class="fab fa-less"></i></li>
            <li class="list-inline-item"><i class="fab fa-wordpress"></i></li>
            <li class="list-inline-item"><i class="fab fa-gulp"></i></li>
            <li class="list-inline-item"><i class="fab fa-grunt"></i></li>
            <li class="list-inline-item"><i class="fab fa-npm"></i></li>
        </ul>
        <div class="subheading mb-3">Workflow</div>
        <ul class="fa-ul mb-0">
            <li>
                <span class="fa-li"><i class="fas fa-check"></i></span>
                Mobile-First, Responsive Design
            </li>
            <li>
                <span class="fa-li"><i class="fas fa-check"></i></span>
                Cross Browser Testing & Debugging
            </li>
            <li>
                <span class="fa-li"><i class="fas fa-check"></i></span>
                Cross Functional Teams
            </li>
            <li>
                <span class="fa-li"><i class="fas fa-check"></i></span>
                Agile Development & Scrum
            </li>
        </ul>
      </div>
    );
  }

  sectionInterests() {
    return (
      <div class="resume-section-content">
          <h2 class="mb-5">Interests</h2>
          <p>Apart from being a web developer, I enjoy most of my time being outdoors. In the winter, I am an avid skier and novice ice climber. During the warmer months here in Colorado, I enjoy mountain biking, free climbing, and kayaking.</p>
          <p class="mb-0">When forced indoors, I follow a number of sci-fi and fantasy genre movies and television shows, I am an aspiring chef, and I spend a large amount of my free time exploring the latest technology advancements in the front-end web development world.</p>
      </div>
    );
  }

  sectionContactUs() {
    return (
      <div class="container">
        <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Me</h2>
        <div class="divider-custom">
            <div class="divider-custom-line"></div>
            <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
            <div class="divider-custom-line"></div>
        </div>
        <div class="row justify-content-center">
            <div class="col-lg-8 col-xl-7">
                <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                    <div class="form-floating mb-3">
                        <input class="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                        <label for="name">Full name</label>
                        <div class="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                    </div>
                    <div class="form-floating mb-3">
                        <input class="form-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" />
                        <label for="email">Email address</label>
                        <div class="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                        <div class="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                    </div>
                    <div class="form-floating mb-3">
                        <input class="form-control" id="phone" type="tel" placeholder="(123) 456-7890" data-sb-validations="required" />
                        <label for="phone">Phone number</label>
                        <div class="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                    </div>
                    <div class="form-floating mb-3">
                        <textarea class="form-control" id="affair" type="text" placeholder="Enter your affair here..." data-sb-validations="required"></textarea>
                        <label for="affair">Affair</label>
                        <div class="invalid-feedback" data-sb-feedback="affair:required">A affair is required.</div>
                    </div>
                    <div class="form-floating mb-3">
                        <textarea class="form-control" id="message" type="text" placeholder="Enter your message here..." data-sb-validations="required"></textarea>
                        <label for="message">Message</label>
                        <div class="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                    </div>
                    <div class="d-none" id="submitSuccessMessage">
                        <div class="text-center mb-3">
                            <div class="fw-bolder">Form submission successful!</div>
                            To activate this form, sign up at
                            <br />
                            <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                        </div>
                    </div>
                    <div class="d-none" id="submitErrorMessage"><div class="text-center text-danger mb-3">Error sending message!</div></div>
                    <button class="btn btn-primary btn-xl disabled" id="submitButton" type="submit">Send</button>
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
                  <span className="d-none d-lg-block"><img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="assets/img/profile.jpg" alt="..." /></span>
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
