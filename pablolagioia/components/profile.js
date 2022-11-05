import Link from "next/link";
import { FaLinkedin, FaNpm, FaGithub } from 'react-icons/fa'
import Image from "next/image"

const Profile = ({ large } = { large: false }) => <aside className={`profile ${large ? "large" : ""}`}>
  <header>
    <Image src="https://media-exp1.licdn.com/dms/image/C5603AQGDBGka9xO9Gw/profile-displayphoto-shrink_200_200/0/1639353370234?e=1672272000&v=beta&t=rX0xexOvjeUkKwnCKOc7Ax_Dy6aT7gxm6KhGvqNnjZU" />
    <h1>Pablo Lagioia</h1>
    <p>Solutions Architect</p>
  </header>
  <section className="third-party">
    <ul className="unstyled">
      <li><Link target="_blank" href="https://www.linkedin.com/in/pablolagioia/"><FaLinkedin size={25}/></Link></li>
      <li><Link target="_blank" href="https://www.npmjs.com/~pablolagioia"><FaNpm size={25}/></Link></li>
      <li><Link target="_blank" href="https://github.com/pabloLagioia"><FaGithub size={25}/></Link></li>
    </ul>
  </section>
</aside>

export default Profile