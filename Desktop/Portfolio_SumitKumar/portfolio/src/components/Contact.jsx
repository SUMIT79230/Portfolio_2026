import { useState } from 'react';
import './Contact.css';

const CONTACT_EMAIL = 'sumitkumar79230@gmail.com';
const CONTACT_PHONE = '+91 8969030576';
const CONTACT_ADDRESS = 'Bengaluru, Karnataka, India';

const initialFormState = {
  name: '',
  email: '',
  message: '',
  company: '',
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function getFieldErrors(values) {
  const errors = {};
  const name = values.name.trim();
  const email = values.email.trim();
  const message = values.message.trim();

  if (!name) errors.name = 'Please enter your name.';
  if (!email) {
    errors.email = 'Please enter your email.';
  } else if (!emailPattern.test(email)) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!message) {
    errors.message = 'Please write a message.';
  } else if (message.length < 20) {
    errors.message = 'Please add at least 20 characters.';
  }

  return errors;
}

function buildMailtoUrl(values) {
  const subject = 'Portfolio contact message';
  const body = [
    `Name: ${values.name.trim()}`,
    `Email: ${values.email.trim()}`,
    '',
    values.message.trim(),
  ].join('\n');

  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export default function Contact() {
  const [formValues, setFormValues] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: 'idle', message: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormValues((current) => ({ ...current, [name]: value }));

    if (errors[name]) {
      setErrors((current) => {
        const next = { ...current };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formValues.company.trim()) {
      setStatus({ type: 'success', message: 'Thanks, your message is ready to send.' });
      return;
    }

    const validationErrors = getFieldErrors(formValues);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setStatus({ type: 'error', message: 'Please fix the highlighted fields.' });
      return;
    }

    window.location.href = buildMailtoUrl(formValues);
    setStatus({
      type: 'success',
      message: `Email draft opened. You can also mail me directly at ${CONTACT_EMAIL}.`,
    });
  };

  return (
    <section id="contact" className="contact" aria-label="Contact section">
      <div className="contact__section-header">
        <p className="contact__section-label">Say Hello</p>
        <h2 className="contact__section-title">Get in Touch</h2>
        <p className="contact__section-sub">
          Got a project in mind? Let&apos;s talk — I&apos;m just a message away.
        </p>
      </div>

      <div className="contact__container">
        <aside className="contact__details" aria-label="Contact details">
          <div className="contact__detail">
            <span className="contact__detail-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M12 21s7-5.1 7-11a7 7 0 0 0-14 0c0 5.9 7 11 7 11z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
            </span>
            <div>
              <h3>Address</h3>
              <p>{CONTACT_ADDRESS}</p>
            </div>
          </div>

          <a className="contact__detail" href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`}>
            <span className="contact__detail-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.4 2.1L8.1 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.6 1.9z" />
              </svg>
            </span>
            <div>
              <h3>Phone Number</h3>
              <p>{CONTACT_PHONE}</p>
            </div>
          </a>

          <a className="contact__detail" href={`mailto:${CONTACT_EMAIL}`}>
            <span className="contact__detail-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M4 6.5h16v11H4z" />
                <path d="m4 7 8 6 8-6" />
              </svg>
            </span>
            <div>
              <h3>Contact Email</h3>
              <p>{CONTACT_EMAIL}</p>
            </div>
          </a>
        </aside>

        <div className="contact__divider" aria-hidden="true" />

        <form className="contact__form" onSubmit={handleSubmit} noValidate>
          <div className="contact__field-group">
            <label htmlFor="contact-name">Name</label>
            <input
              id="contact-name"
              name="name"
              type="text"
              value={formValues.name}
              onChange={handleChange}
              autoComplete="name"
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? 'contact-name-error' : undefined}
              required
            />
            {errors.name && (
              <span className="contact__error" id="contact-name-error">
                {errors.name}
              </span>
            )}
          </div>

          <div className="contact__field-group">
            <label htmlFor="contact-email">Email</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              value={formValues.email}
              onChange={handleChange}
              autoComplete="email"
              inputMode="email"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'contact-email-error' : undefined}
              required
            />
            {errors.email && (
              <span className="contact__error" id="contact-email-error">
                {errors.email}
              </span>
            )}
          </div>

          <div className="contact__field-group contact__field-group--full">
            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              name="message"
              rows="6"
              value={formValues.message}
              onChange={handleChange}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? 'contact-message-error' : undefined}
              required
            />
            {errors.message && (
              <span className="contact__error" id="contact-message-error">
                {errors.message}
              </span>
            )}
          </div>

          <div className="contact__honeypot" aria-hidden="true">
            <label htmlFor="contact-company">Company</label>
            <input
              id="contact-company"
              name="company"
              type="text"
              tabIndex="-1"
              value={formValues.company}
              onChange={handleChange}
              autoComplete="off"
            />
          </div>

          <button className="contact__submit" type="submit">
            Send Message
          </button>

          <p
            className={`contact__status contact__status--${status.type}`}
            role="status"
            aria-live="polite"
          >
            {status.message}
          </p>
        </form>
      </div>
    </section>
  );
}