const Experience = ({
  dates,
  company,
  role,
  children
}) => <div className="experience clear">
  <div className="left-side">
    <h3 className="date-range">{dates}</h3>
    <p className="company-name">{company}</p>
  </div>
  <div className="divider"></div>
  <div className="right-side">
    <h3 className="role">{role}</h3>
    <p className="description">{children}</p>
  </div>
</div>

export default Experience;