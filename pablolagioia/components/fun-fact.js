const FunFact = ({
  title,
  text,
  icon
}) => <section className="fun-fact">
  <i className="highlight">{icon}</i>
  <h3>{title}</h3>
  <p>{text}</p>
</section>

export default FunFact