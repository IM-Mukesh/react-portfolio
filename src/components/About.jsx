import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Hello! I'm <span className="text-orange-500">Mukesh Kumar</span>, a
          Full Stack Developer with over 2+ years of experience specializing in
          MERN (MongoDB, Express.js, React.js, Node.js) development. I create
          efficient, scalable, and user-friendly applications, excelling in both
          front-end and back-end development.
        </p>

        <br />

        <p className="text-xl">
          I craft responsive interfaces with React.js and manage robust
          server-side applications with Node.js and Express.js. My expertise
          includes RESTful API development, database management with MongoDB,
          and effective version control with Git.
        </p>
        <br />
        <p className="text-xl">
          I am committed to writing clean, maintainable code and delivering
          high-quality software solutions focused on user experience,
          performance, and scalability. I thrive in collaborative environments
          and am dedicated to continuous learning.
        </p>
        <br />
        <p className="text-xl text-center text-cyan-500">
          If you're looking for a skilled developer to bring your ideas to life,
          let's connect!
        </p>
      </div>
    </div>
  );
};

export default About;
