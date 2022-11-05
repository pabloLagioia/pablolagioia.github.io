import Experience from "../components/experience"
import Layout from "../components/layout"

const Resume = () => <Layout>
  <article>
    <h1 className="fun">Resume</h1>
    <section>
      <h2>Experience</h2>
      {/* <Experience
        dates="Feb, 2021 - Present day"
        company="GLG"
        role="Engineering Manager"
        >
          Tasked with building a team of contractors to join the ranks of GLG I went ahead to assemble and lead a team of 6 developers to produce value for internal GLG clients on our quest to enhance the number one insights network.
          Our success on creating apps from scratch and improve existing apps lead to the growth of the contractor based team.
        </Experience> */}
      <Experience
        dates="Nov, 2021 - Present day"
        company="FactoryFix"
        role="Engineering Manager"
        >
          With a team of eight developers, one designer and one PM we improved the messaging experience for professionals looking to get a better job and employers who want to hire the best candidates.
        </Experience>
      <Experience
        dates="Sep, 2014 - Nov, 2021"
        company="AutoServe1"
        role="Tech lead"
        >
          Assembled a team of four developers to improve the auto service experience by designing and developing the AutoServe1 application which became the number one DVI software on the market at the time.
        </Experience>
        <Experience
        dates="Mar, 2014 - Sep, 2014"
        company="Toolbox"
        role="Tech lead"
        >
          With a team of two developers we went ahead to build the next gen streaming site for cable providers and their customers.
        </Experience>
        <Experience
        dates="Mar, 2012 - Sep, 2014"
        company="Wunderman / Ford"
        role="Developer"
        >
          Worked on the Ford.com site helping to make the site responsive, adding new features and developing jQuery plugins as well as internal desktop apps to increase productivity.
        </Experience>
        <Experience
        dates="Feb, 2010 - Mar, 2012"
        company="Sabre"
        role="Developer"
        >
          Worked as a front end developer for the LastMinute and Travelocity projects. Travelled to India to teach the team javascript and how to use the propietary framework.
        </Experience>
        <Experience
        dates="Jan, 2009 - Feb, 2010"
        company="Globant / EA"
        role="Developer"
        >
          Worked as a backend developer for Electronic Arts.
        </Experience>
        <Experience
        dates="Aug, 2008 - Jan, 2009"
        company="Cognizant"
        role="Developer"
        >
          Developer after being trainee in the following technologies:
          J2SE, design patterns, JDBC, Oracle, SQL server, JUnit, J2EE (Servlets, JSPs, web design patterns), Oracle 10g (SQL queries, Oracle architecture, SQL*PLUS, SQL Developer, stored procedures), PL/SQL, JavaScript, XML, HTML, CSS.
        </Experience>
        <Experience
        dates="Nov, 2006 - Aug, 2008"
        company="American Express"
        role="Corporate help desk support and Developer"
        >
          Developed internal apps with Visual Basic as a solo developer while working on the Corporate Helpdesk. One of the apps I built helped double the amount of companies signing up to ePayment.
        </Experience>
        <Experience
        dates="Mar, 2003 - Nov, 2006"
        company="Freelancer"
        role="Developer"
        >
          Using Visual Basic and Access created applications that allowed users to manage, for example, available resources, employee attendance or data printing from forms.
        </Experience>
    </section>
    <section className="row margin-top-s margin-bottom-md">
      <div className="col-3">
      <h2 className="no-margin">Latest Techs used</h2>
        <ul className="unstyled highlight-labels floating clear">
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>NodeJS</li>
          <li>NestJS</li>
          <li>NextJS</li>
          <li>ReactJS</li>
          <li>Vue</li>
          <li>Redux</li>
          <li>SQL</li>
          <li>MongoDB</li>
          <li>Redis</li>
          <li>Algolia</li>
          <li>FireStore</li>
          <li>AWS</li>
          <li>Google Cloud</li>
          <li>Terraform</li>
        </ul>
      </div>
      <div className="col-3">
        <h2 className="no-margin">Methodologies</h2>
        <ul className="unstyled highlight-labels floating clear">
          <li>Scrum</li>
          <li>Kanban</li>
          <li>Shapeup</li>
        </ul>
      </div>
      <div className="col-3">
        <h2 className="no-margin">Other things I like</h2>
        <ul className="unstyled highlight-labels floating clear">
          <li>Functional Programming</li>
          <li>Object Oriented</li>
          <li>Project estimation</li>
          <li>Management</li>
          <li>Architecture</li>
          <li>Hiring</li>
          <li>Play the guitar</li>
          <li>Spend time with family</li>
          <li>Watch moviews</li>
        </ul>
      </div>
    </section>
  </article>
</Layout>

export default Resume