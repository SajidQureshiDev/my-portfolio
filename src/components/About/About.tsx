import { Container } from "./styles";

import profileImage from "../../assets/profile-image.jpg"
import cssIcon from "../../assets/css-icon.svg";
import htmlIcon from "../../assets/html-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
// import typescriptIcon from "../../assets/typescript-icon.svg";
// import vueIcon from "../../assets/vue-icon.svg";
import figma from "../../assets/figma.svg";
import tailwind from "../../assets/tailwind.svg";
import git from "../../assets/git.svg";
import xd from "../../assets/adobe-xd.svg";
import saas from "../../assets/sass-icon.svg";
import wordpress from "../../assets/wordpress.svg";
import boostrapicon from "../../assets/bootstrap-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";


export function About() {
return (
<Container id="sobre">
  <div className="about-text">
    <ScrollAnimation animateIn="fadeInLeft">
      <h2>About ME</h2>
    </ScrollAnimation>
    <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000}>
      <p>
        "Hi, I'm Sajid Qureshi, a skilled front-end developer with over three years of experience working on a variety of
        projects. I specialize in building responsive and user-friendly web applications using technologies such as
        Laravel and React JS and have command on different Css frameworks like Tailwind css MUI Chakra UI and so on.
        I have hands-on experience in developing RESTful APIs and building admin panels to manage web application data.
      </p>
    </ScrollAnimation>
    <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>

      <p>
        I'm also proficient in using design tools such as XD and Figma to create prototypes that accurately reflect the
        final product.

        Throughout my career, I've worked on projects across a range of industries, including
        e-commerce, healthcare, and finance, and have consistently delivered high-quality work that meets or exceeds
        client expectations.

      </p>
    </ScrollAnimation>
    <ScrollAnimation animateIn="fadeInLeft" delay={0.6 * 1000}>

      <p>
        In addition to my technical skills, I'm a strong communicator and a collaborative team player. I'm always eager
        to learn new technologies and techniques to stay at the forefront of my field. If you're looking for a talented
        front-end developer with a proven track record of success, I'd love to hear from you."
      </p>
    </ScrollAnimation>

    <ScrollAnimation animateIn="fadeInLeft" delay={0.7 * 1000}>
      <h3>Here are my main skills:</h3>
    </ScrollAnimation>
    <div className="hard-skills">

      <div className="hability">
        <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
          <img src={reactIcon} alt="React" />
        </ScrollAnimation>
      </div>

      <div className="hability">
        <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
          <img src={boostrapicon} alt="Bootstrap" />
        </ScrollAnimation>
      </div>

      <div className="hability">
        <ScrollAnimation animateIn="fadeInUp" delay={0.3 * 1000}>
          <img src={tailwind} alt="Tailwind" />
        </ScrollAnimation>
      </div>

      <div className="hability">
        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
          <img src={git} alt="Git" />
        </ScrollAnimation>
      </div>



      <div className="hability">
        <ScrollAnimation animateIn="fadeInUp" delay={0.5 * 1000}>
          <img src={jsIcon} alt="JavaScript" />
        </ScrollAnimation>
      </div>

      <div className="hability">
        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
          <img src={htmlIcon} alt="Html" />
        </ScrollAnimation>
      </div>

      <div className="hability">
        <ScrollAnimation animateIn="fadeInUp" delay={0.7 * 1000}>
          <img src={cssIcon} alt="Css" />
        </ScrollAnimation>
      </div>

      <div className="hability">
        <ScrollAnimation animateIn="fadeInUp" delay={0.7 * 1000}>
          <img src={saas} alt="Sass " />
        </ScrollAnimation>
      </div>
      <div className="hability">
        <ScrollAnimation animateIn="fadeInUp" delay={0.7 * 1000}>
          <img src={nodeIcon} alt="Node" />
        </ScrollAnimation>
      </div>

      <div className="hability">
        <ScrollAnimation animateIn="fadeInUp" delay={0.7 * 1000}>
          <img src={figma} alt="figma" />
        </ScrollAnimation>
      </div>

      <div className="hability">
        <ScrollAnimation animateIn="fadeInUp" delay={0.8 * 1000}>
          <img src={wordpress} alt="Wordpress" />
        </ScrollAnimation>
      </div>

      <div className="hability">
        <ScrollAnimation animateIn="fadeInUp" delay={0.8 * 1000}>
          <img src={xd} alt="xd" />
        </ScrollAnimation>
      </div>
      {/* <div className="hability">
        <ScrollAnimation animateIn="fadeInUp" delay={0.7 * 1000}>
          <img src={typescriptIcon} alt="Typescript" />
        </ScrollAnimation>
      </div> */}


    </div>
  </div>
  <div className="about-image">
    <ScrollAnimation animateIn="fadeInRight" delay={0.6 * 1000}>
      <img src={profileImage} alt="Imagem de perfil" />
    </ScrollAnimation>
  </div>
</Container>
)
}