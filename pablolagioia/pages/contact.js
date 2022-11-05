import Link from "next/link";
import Layout from "../components/layout"
import { FaRegEnvelope } from "react-icons/fa"

const Contact = () => <Layout>
  <article className="contact">
    <h1>Contact</h1>
    <section>
      <p>Feel free to send me an email or reach out to me on LinkedIn!</p>
      <Link className="card" href="mailto:pablo.lagioia@gmail.com">
        <FaRegEnvelope className="highlight" size={30}/>
        <span className="body">pablo.lagioia@gmail</span>
      </Link>
      <Link className="card" target="_blank" href="https://www.linkedin.com/in/pablolagioia/">
        <FaRegEnvelope className="highlight" size={30}/>
        <span className="body">LinkedIn</span>
      </Link>
    </section>
  </article>
</Layout>

export default Contact