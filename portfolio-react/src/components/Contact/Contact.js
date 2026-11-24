import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import emailConfig from "../../emailConfig";
import "./Contact.css";

const CONTACT_EMAIL = "gopisri200729@gmail.com";
const isConfigured =
  emailConfig.serviceId !== "YOUR_SERVICE_ID" &&
  emailConfig.templateId !== "YOUR_TEMPLATE_ID" &&
  emailConfig.publicKey !== "YOUR_PUBLIC_KEY";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const sendViaMailto = () => {
    const subject = encodeURIComponent(
      form.subject || `Portfolio message from ${form.name || "a visitor"}`
    );
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // If EmailJS credentials haven't been set up yet (see src/emailConfig.js),
    // fall back to opening the visitor's own email app so the form still works.
    if (!isConfigured) {
      sendViaMailto();
      return;
    }

    setStatus("sending");
    try {
      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        {
          name: form.name,
          email: form.email,
          subject: form.subject || `Portfolio message from ${form.name}`,
          message: form.message,
        },
        { publicKey: emailConfig.publicKey }
      );
      setStatus("sent");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("EmailJS send failed:", error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container contact__inner">
        <div className="contact__intro">
          <span className="section-label">contact --send</span>
          <h2 className="section-heading">Let's Connect</h2>
          <p className="contact__description">
            I'd love to hear from you! Whether it's a project, an
            opportunity, or just a conversation about cybersecurity — reach
            out anytime.
          </p>

          <ul className="contact__links">
            <li>
              <a href={`mailto:${CONTACT_EMAIL}`}>
                ✉ {CONTACT_EMAIL}
              </a>
            </li>
            <li>
              <a
                href="https://github.com/gopisri200729-hue"
                target="_blank"
                rel="noreferrer"
              >
                ⌥ GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/gopisri-m-a1a82b390/"
                target="_blank"
                rel="noreferrer"
              >
                in LinkedIn
              </a>
            </li>
          </ul>
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="contact__field">
            <label htmlFor="name">Your Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Jane Doe"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="contact__field">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="jane@example.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="contact__field">
            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="Let's collaborate"
              value={form.subject}
              onChange={handleChange}
            />
          </div>

          <div className="contact__field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Tell me a bit about what you have in mind..."
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn--primary contact__submit"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending..." : "Send Message →"}
          </button>

          {status === "sent" && (
            <p className="contact__status contact__status--success">
              ✓ Message sent! I'll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="contact__status contact__status--error">
              Something went wrong — please email me directly at{" "}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
