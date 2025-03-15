import React, { useState } from "react";
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send data to an API or email service)
    alert("Message Sent Successfully!");
  };

  return (
    <section id="contact" className="contact container">
      <h2>Contact</h2>
      <p>If you'd like to reach out, feel free to drop a message!</p>
      <p>Email: <a href="mailto:mdzunayed02@gmail.com">mdzunayed02@gmail.com</a></p>
      <p>GitHub: <a href="https://github.com/mdzunayed" target="_blank" rel="noopener noreferrer">mdzunayed</a></p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
