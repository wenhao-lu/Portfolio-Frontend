import { useState } from "react";

import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    reason: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form className="contactForm" id="contact" onSubmit={handleSubmit}>
      <div className="contactText">Contact Me</div>
      <label htmlFor="name" className="formLabel">
        Name
      </label>
      <input
        className="formInput"
        id="name"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
      />

      <label className="formLabel" htmlFor="email">
        Email
      </label>
      <input
        className="formInput"
        id="email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
      />

      <label htmlFor="message" className="formLabel">
        Message
      </label>
      <textarea
        className="formTextarea"
        id="message"
        name="message"
        value={formData.message}
        onChange={handleInputChange}
      />

      <label htmlFor="reason">Reason for contact</label>
      <select
        className="formSelect"
        id="reason"
        name="reason"
        value={formData.reason}
        onChange={handleInputChange}
      >
        <option value="">Select a reason</option>
        <option value="question">Question</option>
        <option value="feedback">Feedback</option>
        <option value="other">Other</option>
      </select>

      <button type="submit" className="formBtn">
        Submit
      </button>
    </form>
  );
}
