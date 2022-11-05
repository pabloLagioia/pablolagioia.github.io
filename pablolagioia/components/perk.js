const Perk = ({
  title,
  children,
  icon
}) => <section className="perk">
  <i className="highlight">{icon}</i>
  <h3>{title}</h3>
  <p>{children}</p>
</section>

export default Perk