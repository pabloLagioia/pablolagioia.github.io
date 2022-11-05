import Link from 'next/link'
import { FaRegEnvelope } from 'react-icons/fa'
import { SlGraduation, SlHome } from "react-icons/sl"
import { BsPerson, BsBriefcase } from "react-icons/bs"
import { useRouter } from 'next/router';

const selectedClass = (pathname, expectedPathname) => pathname === expectedPathname ? "selected" : ""

const home = "/"
const about = "/about"
const resume = "/resume"
const projects = "/projects"
const contact = "/contact"

const Navbar = () => {
  const { pathname } = useRouter()

  return <nav className="center">
    <Link className={selectedClass(pathname, home)} href={home}>
      <i className="block">
        <SlHome size={35}/>
      </i>
      <span>Home</span>
    </Link>
    <Link className={selectedClass(pathname, about)} href={about}>
      <i className="block">
        <BsPerson size={35}/>
      </i>
      <span>About me</span>
    </Link>
    <Link className={selectedClass(pathname, resume)} href={resume}>
      <i className="block">
        <SlGraduation size={35}/>
      </i>
      <span>Resume</span>
    </Link>
    <Link className={selectedClass(pathname, projects)} href={projects}>
      <i className="block">
        <BsBriefcase size={35}/>
      </i>
      <span>Projects</span>
    </Link>
    <Link className={selectedClass(pathname, contact)} href={contact}>
      <i className="block">
        <FaRegEnvelope size={35}/>
      </i>
      <span>Contact</span>
    </Link>
  </nav>
  
}

export default Navbar