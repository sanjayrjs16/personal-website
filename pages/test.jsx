// @ts-nocheck
import React from "react";

const Test = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="hero">
          <h1>My Name</h1>
          <p>Frontend Engineer</p>
        </section>
        <section id="about">
          <h2>About Me</h2>
          <p>
            Write a brief summary of your background and experience as a
            frontend engineer.
          </p>
        </section>
        <section id="projects">
          <h2>My Projects</h2>
          <ul>
            <li>
              <h3>Project 1</h3>
              <p>A brief description of project 1.</p>
              <a href="#">View project</a>
            </li>
            <li>
              <h3>Project 2</h3>
              <p>A brief description of project 2.</p>
              <a href="#">View project</a>
            </li>
            <li>
              <h3>Project 3</h3>
              <p>A brief description of project 3.</p>
              <a href="#">View project</a>
            </li>
          </ul>
        </section>
        <section id="contact">
          <h2>Contact Me</h2>
          <form>
            <label for="name">Name</label>
            <input type="text" id="name" name="name" />
            <label for="email">Email</label>
            <input type="email" id="email" name="email" />
            <label for="message">Message</label>
            <textarea id="message" name="message"></textarea>
            <button type="submit">Send</button>
          </form>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 My Portfolio</p>
      </footer>
    </>
  );
};

export default Test;
