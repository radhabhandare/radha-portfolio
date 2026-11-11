import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { profile } from "../data/content";
import { FiSend, FiLinkedin, FiGithub, FiMail, FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export default function Contact() {
  const formRef = useRef(null);
  const [state, setState] = useState({ name: "", email: "", subject: "", message: "", honeypot: "" });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  // ✅ Initialize public key globally, only run once
  useEffect(() => {
    emailjs.init({
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    });
  }, []);

  const onChange = (e) => setState((s) => ({ ...s, [e.target.name]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    if (state.honeypot) return;
    if (!state.name || !state.email || !state.subject || !state.message) {
      return setError("Please fill in all fields.");
    }
    if (!isEmail(state.email)) {
      return setError("Please enter a valid email address.");
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (!serviceId || !templateId || !publicKey) {
      setError("Contact form is not configured yet.");
      return;
    }

    setStatus("sending");
    try {
      // ✅ send() only passes three parameters, public key has already been initialized via init()
      await emailjs.send(serviceId, templateId, {
        from_name: state.name,
        from_email: state.email,
        subject: state.subject,
        message: state.message,
      });
      setStatus("success");
      setState({ name: "", email: "", subject: "", message: "", honeypot: "" });
      formRef.current?.reset();
    } catch (err) {
      console.error("EmailJS error:", err); // ✅ Log the real error
      setStatus("error");
      setError(`Send failed: ${err?.text || err?.message || "Please try again."}`);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionHeading eyebrow="CONTACT" title="Let's Connect & Build Something Great." subtitle="I'm always open to meaningful conversations, development opportunities, collaborations and new challenges." />
        <div className="row g-4">
          <div className="col-lg-5">
            <Reveal>
              <div className="glass p-4 h-100">
                <h4 className="skill-category mb-3">Direct Contact</h4>
                <a className="contact-row" href={`mailto:${profile.email}`}><FiMail /> {profile.email}</a>
                <a className="contact-row" href={`tel:+91${profile.phone}`}><FiPhone /> +91 {profile.phone}</a>
                <a className="contact-row" href={profile.linkedin} target="_blank" rel="noreferrer"><FiLinkedin /> LinkedIn</a>
                <a className="contact-row" href={profile.github} target="_blank" rel="noreferrer"><FiGithub /> GitHub</a>
                <a className="contact-row" href={`https://wa.me/${profile.whatsapp}`} target="_blank" rel="noreferrer"><FaWhatsapp /> WhatsApp</a>
              </div>
            </Reveal>
          </div>
          <div className="col-lg-7">
            <Reveal delay={0.1}>
              <form ref={formRef} onSubmit={submit} className="glass p-4 contact-form">
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">Full Name</label>
                    <input className="form-control-custom" name="name" value={state.name} onChange={onChange} required />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Email Address</label>
                    <input className="form-control-custom" type="email" name="email" value={state.email} onChange={onChange} required />
                  </div>
                  <div className="col-12">
                    <label className="form-label">Subject</label>
                    <input className="form-control-custom" name="subject" value={state.subject} onChange={onChange} required />
                  </div>
                  <div className="col-12">
                    <label className="form-label">Message</label>
                    <textarea className="form-control-custom" rows="5" name="message" value={state.message} onChange={onChange} required />
                  </div>
                  <input type="text" name="honeypot" value={state.honeypot} onChange={onChange} style={{ display: "none" }} tabIndex={-1} autoComplete="off" />
                  <div className="col-12 d-flex flex-wrap gap-3 align-items-center">
                    <button className="btn-primary-custom" type="submit" disabled={status === "sending"}>
                      <FiSend /> {status === "sending" ? "Sending..." : "Send Message"}
                    </button>
                    {status === "success" && <span className="text-success">✓ Message sent successfully.</span>}
                    {error && <span className="text-danger">{error}</span>}
                  </div>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}