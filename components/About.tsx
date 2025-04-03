import styles from "@/styles/about.module.css";

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.content}>
        <div>
          <h2>My Journey</h2>
          <p>
            I started programming 6 years ago. I started with some basic Scratch
            before moving onto Python. I also ventured into a bit of C++ but
            soon found it to be way too complex for me. I eventually moved onto
            web development which led me into HTML, CSS and later JavaScript. I
            made some basic apps with the knowledge I had gained, before
            venturing into fullstack development. This led me into React and
            Node.js and eventually into Next JS, which I&apos;ve been using for
            the past 2 years.
          </p>
        </div>
        <div className={styles.emoji}>&#128075;</div>
      </div>
    </section>
  );
};

export default About;
