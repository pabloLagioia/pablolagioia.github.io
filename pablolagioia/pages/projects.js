import Layout from "../components/layout"

const Projects = () => <Layout>
  <article>
    <h1>Projects</h1>
    <section>
      <hgroup>
        <h2>Pub/Sub</h2>
        <strong>In-house Pub/Sub</strong>
      </hgroup>
      <p>Once again we needed a custom solution to have the UI react to some events, similar to what happens in a multiplayer game...</p>
    </section>
    <section>
      <hgroup>
        <h2>Webhooks</h2>
        <strong>Rest based Pub/Sub</strong>
      </hgroup>
      <p>Before getting to know Kafka, Google Pub/Sub or RabbitMD I went ahead and used Redis to come up with a solution similar to Google Pub/Sub</p>
    </section>
    <section>
      <hgroup>
        <h2>DVI</h2>
        <strong>Picture annotation software</strong>
      </hgroup>
      <p>Using some concepts from Match I implemented a picture annotation module for one of the companies I worked for</p>
    </section>
    <section>
      <hgroup>
        <h2>Match</h2>
        <strong>Game Engine</strong>
      </hgroup>
      <p>Back in the days I created a game engine called Match in JavaScript.</p>
    </section>
  </article>
</Layout>

export default Projects