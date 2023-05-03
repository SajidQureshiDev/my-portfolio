import { Container } from "./styles";
import githubIcon from "../../assets/github-icon.svg"
import externalLinkIcon from "../../assets/external-link-icon.svg"
import ScrollAnimation from "react-animate-on-scroll";
import baladi from "../../assets/logo-dark.png";
import race from "../../assets/race.jpg";
import grubfund from "../../assets/grubfund.png";
import yty from "../../assets/yty.png";
import bigcareer from "../../assets/bigcareer.png";
import pte from "../../assets/pte.png";
import sahal from "../../assets/sahal.png";


export function Portfolio(){
  return(
    <Container id="portfolio">
      <h2>My Portfolio</h2>

      <div className="projects">

      <ScrollAnimation animateIn="flipInX">
        <a href="https://baladiexpress.com/">
          <div className="project">
            <header>
            <img src={baladi} alt="Baladi Express" />
            
            </header>
            <div className="body">
              <h3>Baladi Express  (E-Commerce)</h3>
              <p><a href="https://baladiexpress.com/">Baladi Express!</a> The biggest online shopping platform in Qatar. The second generation of the great Souq Al Baladi, Online shopping is made easier with our <a href="https://baladiexpress.com/">Baladi Express!</a> E-commerce platform. its full fledge system to placing order and deliver to doorstep through driver app.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Laravel</li>
                <li>Tailwind Css</li>
                <li>JavaScript</li>
                <li>Jquery Ui</li>
                <li>Axios</li>
              </ul>
            </footer>
          </div>
          </a>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <a href="https://sahl.baladiexpress.com/">
          <div className="project">
            <header>
            <img src={sahal} alt="Sahal Admin panel" height="70px" />           
            </header>
            <div className="body">
              <h3>Sahal Admin Panel</h3>
              <p>I've recently worked on <a href="https://sahl.baladiexpress.com/">Sahal</a> , a mobile app where I was responsible for developing the admin panel using React JS and Vite. I integrated CRUD operations using REST APIs from the backend to ensure seamless data management.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React Js</li>
                <li>Vite</li>
                <li>Styled Components</li>
                <li>MUI</li>
                <li>Axios</li>

              </ul>
            </footer>
          </div>
          </a>
        </ScrollAnimation>

      <ScrollAnimation animateIn="flipInX">
        <a href="https://racelookup.com/">
        <div className="project">
          <header>
          <img src={race} alt="Racelookup" height="55px" />
          </header>
          <div className="body">
            <h3>RaceLookup</h3>
            <p>A web application made for  <a href="https://racelookup.com/"> Reaclookup</a> event management company headquartered in Phoenix, Arizona for runners  . This application is to help planners and organizers, race directors, and clubs to showcase their races, activities,
            </p>
          </div>
          <footer>
            <ul className="tech-list">
              <li>Tailwind Css</li>
              <li>Laravel</li>
              <li>Jquery</li>
              <li>Js</li>
              <li>Adobe Xd</li>
            </ul>
          </footer>
        </div>
        </a>
      </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <a href="https://thegrubfund.com/">
          <div className="project">
            <header>
            <img src={grubfund} alt="GrubFund" height="70px" />           
            </header>
            <div className="body">
              <h3>GrubFund</h3>
              <p> The <a href="https://thegrubfund.com/">GrubFund</a> is made for food partner restaurants and earn free donations to any of their nonprofit partners. A % of each transaction will be donated by the partner restaurant the purchase is made at.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Html</li>
                <li>CSS</li>
                <li>Bootstrap</li>
                <li>Jquery</li>
                <li>JS</li>
                <li>Laravel</li>
              </ul>
            </footer>
          </div>
          </a>
        </ScrollAnimation>

     

        <ScrollAnimation animateIn="flipInX">
          <a href="https://youth2youthtraining.com/">
          <div className="project">
            <header>
            <img src={yty} alt="Youth to Youth" height="70px" />           
            </header>
            <div className="body">
              <h3>Youth To Youth Training</h3>
              <p><a href="https://youth2youthtraining.com/">youth2youth</a> is organization to provide sports services is USA, design this website in ADOBE XD.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Adobe XD</li>
              </ul>
            </footer>
          </div>
          </a>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <a href="https://www.bigcareergroup.com/">
          <div className="project">
            <header>
            <img src={bigcareer} alt="Big Career group" height="70px" />   
            </header>
            <div className="body">
              <h3>Big Career Group</h3>
              <p>Design website for <a href="https://www.bigcareergroup.com/">Bigcareer</a>  group in wordpress CMS , they are career counselor and they provide immigration and <a href="https://www.bigcareergroup.com/study/">Study Abroad</a> services 
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress </li>
                <li>WP Bakery</li>
                <li>Contact Form 7</li>
              </ul>
            </footer>
          </div>
          </a>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <a href="http://ptepakistan.com/">
          <div className="project">
            <header>
           <img src={pte} alt="PTE Pakistan" />
            </header>
            <div className="body">
              <h3>PTE Pakistan</h3>
              <p><a href="http://ptepakistan.com/">Career Counseling </a>Website designed for private company which provided counseling services 
              </p>
            </div>
            <footer>
              <ul className="tech-list">
              <li>Wordpress </li>
                <li>WP Bakery</li>
                <li>Contact Form 7</li>
              </ul>
            </footer>
          </div>
          </a>
        </ScrollAnimation>

  



      </div>
    </Container>
  );
}