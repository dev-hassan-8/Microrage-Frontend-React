import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import homeData from "../../data/home.json";
import contactData from "../../data/contact.json";
import formManImg from "../../assets/form-man.png";
import "./ContactForm.css";

const contactForm = homeData.contactForm || contactData.contactForm || {};

function ContactForm() {
  const sectionRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    description: "",
    file: null,
  });

  const [touched, setTouched] = useState({});
  const [fileError, setFileError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const items = el.querySelectorAll(".cf-animate");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("cf-animate--visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone) => /^[\d\s\+\-\(\)]{7,20}$/.test(phone.trim());

  const errors = {
    name: !formData.name.trim() ? contactForm.fields.name.errorMessage : "",
    email: !formData.email.trim()
      ? contactForm.fields.email.errorMessage
      : !validateEmail(formData.email)
        ? contactForm.fields.email.errorMessage
        : "",
    phone: !formData.phone.trim()
      ? contactForm.fields.phone.errorMessage
      : !validatePhone(formData.phone)
        ? contactForm.fields.phone.errorMessage
        : "",
    service: !formData.service ? contactForm.fields.service.errorMessage : "",
    budget: !formData.budget ? contactForm.fields.budget.errorMessage : "",
    description: !formData.description.trim()
      ? contactForm.fields.description.errorMessage
      : "",
  };

  const isFormValid =
    !errors.name &&
    !errors.email &&
    !errors.phone &&
    !errors.service &&
    !errors.budget &&
    !errors.description &&
    !fileError;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) {
      setFormData((prev) => ({ ...prev, file: null }));
      setFileError("");
      return;
    }

    const isPdf =
      selectedFile.type === "application/pdf" ||
      selectedFile.name.toLowerCase().endsWith(".pdf");
    const isUnder10Mb = selectedFile.size <= 10 * 1024 * 1024;

    if (!isPdf) {
      setFileError(contactForm.fields.file.errorMessage);
      setFormData((prev) => ({ ...prev, file: null }));
    } else if (!isUnder10Mb) {
      setFileError(contactForm.fields.file.errorMessage);
      setFormData((prev) => ({ ...prev, file: null }));
    } else {
      setFileError("");
      setFormData((prev) => ({ ...prev, file: selectedFile }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({
      name: true,
      email: true,
      phone: true,
      service: true,
      budget: true,
      description: true,
    });

    if (!isFormValid) return;

    console.log("Form Submitted successfully:", formData);
    setIsSubmitted(true);
  };

  return (
    <section
      id="contact-form"
      className="contact-form-section"
      ref={sectionRef}
      aria-label="Contact Form Section"
    >
      <div className="contact-form-container">
        <div className="contact-form-layout">
          <div className="contact-form-card cf-animate">
            <h2 className="contact-form-title">{contactForm.title}</h2>

            <form
              onSubmit={handleSubmit}
              noValidate
              className="contact-form-element"
            >
              <div className="form-group full-width">
                <input
                  type={contactForm.fields.name.type}
                  name="name"
                  placeholder={contactForm.fields.name.placeholder}
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={() => handleBlur("name")}
                  className={`form-input ${touched.name && errors.name ? "form-input-error" : ""}`}
                />
                {touched.name && errors.name && (
                  <span className="error-message">{errors.name}</span>
                )}
              </div>

              <div className="form-row">
                <div className="form-group">
                  <input
                    type={contactForm.fields.email.type}
                    name="email"
                    placeholder={contactForm.fields.email.placeholder}
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={() => handleBlur("email")}
                    className={`form-input ${touched.email && errors.email ? "form-input-error" : ""}`}
                  />
                  {touched.email && errors.email && (
                    <span className="error-message">{errors.email}</span>
                  )}
                </div>

                <div className="form-group">
                  <input
                    type={contactForm.fields.phone.type}
                    name="phone"
                    placeholder={contactForm.fields.phone.placeholder}
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={() => handleBlur("phone")}
                    className={`form-input ${touched.phone && errors.phone ? "form-input-error" : ""}`}
                  />
                  {touched.phone && errors.phone && (
                    <span className="error-message">{errors.phone}</span>
                  )}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    onBlur={() => handleBlur("service")}
                    className={`form-select ${touched.service && errors.service ? "form-input-error" : ""}`}
                  >
                    <option value="" disabled hidden>
                      {contactForm.fields.service.placeholder}
                    </option>
                    {contactForm.serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  {touched.service && errors.service && (
                    <span className="error-message">{errors.service}</span>
                  )}
                </div>

                <div className="form-group">
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    onBlur={() => handleBlur("budget")}
                    className={`form-select ${touched.budget && errors.budget ? "form-input-error" : ""}`}
                  >
                    <option value="" disabled hidden>
                      {contactForm.fields.budget.placeholder}
                    </option>
                    {contactForm.budgetOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  {touched.budget && errors.budget && (
                    <span className="error-message">{errors.budget}</span>
                  )}
                </div>
              </div>

              <div className="form-group full-width">
                <textarea
                  name="description"
                  placeholder={contactForm.fields.description.placeholder}
                  value={formData.description}
                  onChange={handleChange}
                  onBlur={() => handleBlur("description")}
                  rows={5}
                  className={`form-textarea ${touched.description && errors.description ? "form-input-error" : ""}`}
                />
                {touched.description && errors.description && (
                  <span className="error-message">{errors.description}</span>
                )}
              </div>

              <div className="form-group full-width">
                <div className="file-upload-wrapper">
                  <input
                    type="file"
                    id="file-input"
                    accept=".pdf,application/pdf"
                    onChange={handleFileChange}
                    className="file-input-hidden"
                  />
                  <label htmlFor="file-input" className="file-upload-btn">
                    {contactForm.fields.file.buttonText}
                  </label>
                  <span className="file-upload-name">
                    {formData.file
                      ? formData.file.name
                      : contactForm.fields.file.placeholder}
                  </span>
                </div>
                {fileError && (
                  <span className="error-message">{fileError}</span>
                )}
                <p className="upload-note">{contactForm.uploadNote}</p>
              </div>
              <button
                type="submit"
                disabled={!isFormValid}
                className={`form-submit-btn ${!isFormValid ? "form-submit-btn-disabled" : ""}`}
              >
                {contactForm.submitButton}
              </button>
            </form>
          </div>
          <div className="contact-sidebar-card cf-animate">
            <h2 className="sidebar-title">{contactForm.sidebar.title}</h2>

            <ol className="sidebar-steps">
              {contactForm.sidebar.steps.map((step) => (
                <li key={step.id} className="sidebar-step-item">
                  <span className="step-num">{step.id}. </span>
                  <span className="step-text">
                    {step.textPrefix}
                    {step.linkText && (
                      <Link to={step.linkHref} className="sidebar-link">
                        {step.linkText}
                      </Link>
                    )}
                    {step.textSuffix}
                  </span>
                </li>
              ))}
            </ol>

            <div className="sidebar-illustration-wrapper">
              <img
                src={formManImg}
                alt={contactForm.illustration.alt}
                className="sidebar-illustration-img"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
