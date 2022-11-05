import Link from "next/link";
import FunFact from "../components/fun-fact"
import Layout from "../components/layout"
import React from "react"
import { FaCode, FaRegCalendarCheck, FaChild, FaTabletAlt, FaRegSun, FaPeopleArrows, FaBuilding, FaUserPlus, FaChalkboardTeacher, FaPlane } from "react-icons/fa"
import { TbFileCertificate } from "react-icons/tb"
import { IoIosBusiness } from "react-icons/io"
import Perk from "../components/perk"

const About = () => <Layout>
  <article className="about">
    <h1>About <span className="highlight">Me</span></h1>
    <section className="flex">
      <div className="summary">
        <p>
          I'm a seasoned software developer who's been working in the industry for over {new Date().getFullYear() - 2007} years.
          During the time I wore multiple hats: Fullstack developer, Tech Lead, Architect, Engineering Manager and Teacher.
        </p>
        <p>
          I'm in love with clean architecture and I'm passionate about JavaScript, the web, gaming and clean coding.
        </p>
        <p>
          I've latelly moved from running projects the agile way to running them with Shapeup with great results.
        </p>
      </div>
      <ol className="personal-data no-margin">
        <li className="mar-small-top-bot">
          <span className="highlight bold">Birthdate: </span><span>Aug 5, 1985</span>
        </li>
        <li className="mar-small-top-bot">
          <span className="highlight bold">Residence: </span><span>Buenos Aires, Argentina</span>
        </li>
        <li className="mar-small-top-bot">
          <span className="highlight bold">Email: </span><span><a href="mailto:pablo.lagioia@gmail.com">pablo.lagioia@gmail.com</a></span>
        </li>
      </ol>
    </section>
    <section>
      <h2>What <span className="highlight">I Do</span></h2>
      <ul className="left-floating-list one-third pad-0">
        <li className="mar-top-10 mar-bot-10">
          <Perk title="Fullstack developer" icon={<FaTabletAlt size={35}/>}>
            I have participated in the development of both backend and frontend projects, Windows apps and even a game engine. On my early days as a developer, I wrote apps using Visual Basic and Access (that was fun!).
          </Perk>
        </li>
        <li className="mar-top-10 mar-bot-10">
          <Perk title="Tech Lead" icon={<FaRegSun size={35}/>}>
            Having worked as a tech lead for {new Date().getFullYear() - 2014}+ years I had to not only contribute with code but also mentor team members and help spread good practices such as clean code, SOLID, functional programming principles and such.
          </Perk>
        </li>
        <li className="mar-top-10 mar-bot-10">
          <Perk title="Engineering Manager" icon={<FaPeopleArrows size={35}/>}>
            As an engineering manager I focus on the wellbeing of the team members. I plan a career path for each of them, find out strengths and improvement points and work with each individual to multiply the value they add to both the team and the product.
          </Perk>
        </li>
        <li className="mar-top-10 mar-bot-10">
          <Perk title="Architect" icon={<FaBuilding size={35}/>}>
            Architecture is one of my favorite subjects and I'm glad I've been able to work extensively with not only AWS and multiple of their products
            but also with Google Cloud. Having to migrate monoliths to microservices helped me learn technologies such as Terraform and look for practices 
            such as Clean Architecture to help produce well defined domain boundaries that scale.
            I went ahead and got certified by <Link href="https://www.chrisrichardson.net/">Chris Richardson</Link> on the <Link href="https://microservices.io/adopt/index.html">microservices subject</Link>.
          </Perk>
        </li>
        <li className="mar-top-10 mar-bot-10">
          <Perk title="Hiring" icon={<FaUserPlus size={35}/>}>
            I've been tasked to put together multiple team of developers now. I've participated in contacting, evaluating, creating a proposal and then help and mentor them while on my teams.
            I enjoy doing this as it gives me the opportunity to meet new people, help them get great jobs and it makes me proud to see them go up the ladder.
          </Perk>
        </li>
        <li className="mar-top-10 mar-bot-10">
          <Perk title="Teacher" icon={<FaChalkboardTeacher size={35}/>}>
            I've taught courses on HTML5, CSS, JavaScript and NodeJS at Coderhouse and ITMaster throughout the years. I was also lucky to have to travel to Bangalore, India, while working for Sabre to teach JavaScript, Groovy and Page Composer (Sabre propietary framework).
          </Perk>
        </li>
      </ul>
    </section>
    <section>
      <h2>Companies <span className="highlight">I worked for</span></h2>
      <ol className="clear">
        <li className="card"><Link target="_blank" rel="noreferrer" href="https://glginsights.com/">GLG</Link></li>
        <li className="card"><Link target="_blank" rel="noreferrer" href="https://www.factoryfix.com/">FactoryFix</Link></li>
        <li className="card"><Link target="_blank" rel="noreferrer" href="https://www.autoserve1.com/">AutoServe1</Link></li>
        <li className="card"><Link target="_blank" rel="noreferrer" href="https://www.toolboxtve.com/">Toolbox</Link></li>
        <li className="card"><Link target="_blank" rel="noreferrer" href="https://wunderman.com">Wunderman</Link></li>
        <li className="card"><Link target="_blank" rel="noreferrer" href="https://ford.com">Ford</Link></li>
        <li className="card"><Link target="_blank" rel="noreferrer" href="https://www.sabre.com/">Sabre</Link></li>
        <li className="card"><Link target="_blank" rel="noreferrer" href="https://ea.com">EA</Link></li>
        <li className="card"><Link target="_blank" rel="noreferrer" href="https://globant.com">Globant</Link></li>
        <li className="card"><Link target="_blank" rel="noreferrer" href="https://cognizant.com">Cognizant</Link></li>
        <li className="card"><Link target="_blank" rel="noreferrer" href="https://americanexpress.com">American Express</Link></li>
      </ol>
    </section>
    <section>
      <h2>Certicates</h2>
      <ul>
        <li className="certification">
          <h3><i className="icon"><TbFileCertificate/></i> Distributed Data Patterns for Microservices</h3>
          <p>Chris Richardson Consulting, Inc.</p>
        </li>
        <li className="certification">
          <h3><i className="icon"><TbFileCertificate/></i> Leadership in action</h3>
          <p>RMP Consulting</p>
        </li>
        <li className="certification">
          <h3><i className="icon"><TbFileCertificate/></i> Web Security and Access Management: JWT, OAuth2 & OpenId Connect</h3>
          <p>Educative, Inc.</p>
        </li>
        <li className="certification">
          <h3><i className="icon"><TbFileCertificate/></i> Object oriented programming</h3>
          <p>IBM</p>
        </li>
        <li className="certification">
          <h3><i className="icon"><TbFileCertificate/></i> JavaScript and Node.js</h3>
          <p>TestDome</p>
        </li>
      </ul>
    </section>
    <section>
      <h2>Fun Facts</h2>
      <ul className="left-floating-list">
        <li><FunFact title="Programming years" text={new Date().getFullYear() - 2002} icon={<FaRegCalendarCheck size={50}/>}/></li>
        <li><FunFact title="Technologies used" text="20+" icon={<FaCode size={50}/>}/></li>
        <li><FunFact title="Teams lead" text="4" icon={<FaRegCalendarCheck size={50}/>}/></li>
        <li><FunFact title="Work trips" text="3" icon={<FaPlane size={50}/>}/></li>
        <li><FunFact title="Children" text="2" icon={<FaChild size={50}/>}/></li>
        <li><FunFact title="Companies founded" text="1" icon={<IoIosBusiness size={50}/>}/></li>
      </ul>
    </section>
  </article>
</Layout>

export default About