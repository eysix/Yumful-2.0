import React from 'react'

const About = () => {
  return (
    <section className="section about-section">
      <h1 className="section-title">about Yumful</h1>
      <p>
        Hi there! 👋 Thanks for checking out Yumful 2.0!{" "}
      </p>
      <p>
        You'll find plenty of exotic and classic recipes graciously provided by
        TheMealDB database.{" "}
        <a href="https://www.themealdb.com/" target="_blank">
          Check them out here!
        </a>{" "}
      </p>
      <p>
        Yumful 2.0 allows you to search the database for what you want to eat
        and provides fantastic recipes from all over the web so that you can
        polish your palette and eat like a king! 👑
      </p>
    </section>
  );
}

export default About
