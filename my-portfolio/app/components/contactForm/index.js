"use client";

import React from "react";
import styles from "./contactForm.module.scss";

const ContactForm = () => {
  const initialFormData = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const [formData, setFormData] = React.useState(initialFormData);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send data here
  };

  return (
    <section id='contact'>
      <div className={styles.contactForm_container}>
        <div className={styles.in_touch}>
          <h2>Get in touch with me</h2>
          <p>Reach out to me for any code or design requests you may have.</p>
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor='name' className={styles.label}>
            Name:
          </label>
          <input
            type='text'
            id='name'
            name='name'
            // placeholder='Name'
            value={formData.name}
            onChange={handleChange}
            className={styles.inputField}
            required
          />

          <label htmlFor='email' className={styles.label}>
            Email:
          </label>
          <input
            type='email'
            id='email'
            name='email'
            // placeholder='Email'
            value={formData.email}
            onChange={handleChange}
            className={styles.inputField}
            required
          />

          <label htmlFor='subject' className={styles.label}>
            Subject:
          </label>
          <input
            type='text'
            id='subject'
            name='subject'
            // placeholder='Subject'
            value={formData.subject}
            onChange={handleChange}
            className={styles.inputField}
            required
          />

          <label htmlFor='message' className={styles.label}>
            Message:
          </label>
          <textarea
            id='message'
            name='message'
            // placeholder='Message'
            value={formData.message}
            onChange={handleChange}
            className={styles.textareaField}
            required
          />

          <button type='submit' className={styles.submitButton}>
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
