import Meta from "@/components/Meta";
import styles from "@/styles/Contact.module.css";
import emailjs from "@emailjs/browser";
import { useRef, useState, useEffect } from "react";

const contact = () => {
  const form = useRef();
  const [submitted, setSubmitted] = useState("");

  useEffect(() => {
    const sentFormCookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("sentForm="));

    if (sentFormCookie && sentFormCookie.split("=")[1] === "1") {
      setSubmitted(true);
    }
  }, []);

  async function submitForm(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formValues = Object.fromEntries(formData.entries());
    setSubmitted(true);
    const res = await fetch("/api/sendEmail", {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        email: formValues.email,
        name: `${formValues.firstname} ${formValues.lastname}`,
        message: formValues.message
      })
    })
    const data = await res.json()
    if(data.message === "Too many requests from this IP") {
      setSubmitted("Only 1 request per hour")
    }
    else {
      setSubmitted("Thanks for submitting a message")
    }
  }

  return (
    <div>
      <Meta title="Contact Me" />
      {submitted !== "" ? (
        <p className={styles.endMessage}>{submitted}</p>
      ) : (
        <div className={styles.container}>
          <h4 className={styles.contact}>Contact Me</h4>
          <form onSubmit={submitForm} ref={form} className={styles.form}>
            <div className={styles.name}>
              <input
                name="firstname"
                className={styles.firstname}
                required
                type="text"
                placeholder="First Name"
              />
              <input
                name="lastname"
                className={styles.lastname}
                required
                type="text"
                placeholder="Last Name"
              />
            </div>
            <input
              name="email"
              className={styles.email}
              type="text"
              placeholder="Email"
            />
            <textarea
              name="message"
              placeholder="Your message"
              required
              className={styles.message}
            ></textarea>
            <input className={styles.submit} type="Submit" />
          </form>
        </div>
      )}
    </div>
  );
};

export default contact;
