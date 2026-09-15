import { useState } from "react";
import PageHero from "../../components/PageHero/PageHero";
import SectionLabel from "../../components/SectionLabel/SectionLabel";
import "./ContactPage.css";

const ELEVATOR_TYPES = [
  "Passenger Elevator",
  "Hospital Elevator",
  "Goods Elevator",
  "Capsule / Panoramic Elevator",
  "Car Elevator",
  "Home Elevator",
  "MRL Elevator",
  "Hydraulic Elevator",
];

const ADDRESS = [
  {
    label: "Phone",
    val: "+91 82008 59171",
  },
  {
    label: "Email",
    val: "info@krupaelevators.com",
  },
  {
    label: "Website",
    val: "www.krupaelevators.com",
  },
  {
    label: "Address",
    val: `FF-6 Sagun Enclave, Beside Nikol Community Hall,
Nr. Manohar Vill Char Rasta, Nikol,
Ahmedabad – 382430, Gujarat, India.`,
  },
];

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    elevator_type: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.elevator_type ||
      !formData.message
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    console.log("Form Data:", formData);

    setSubmitted(true);

    setFormData({
      name: "",
      phone: "",
      email: "",
      elevator_type: "",
      message: "",
    });
  };

  return (
    <main>
      <PageHero
        label='Get in Touch'
        heading='Contact Krupa Elevators'
        text='Request a quote, ask a technical question, or enquire about our Annual Maintenance Contract. We respond within one business day.'
        chips={[
          "+91 82008 59171",
          "info@krupaelevators.com",
          "Nikol, Ahmedabad",
        ]}
        dataBg='CONTACT'
      />

      <section className='contact-page'>
        <div className='wrap'>
          <div className='contact-page-inner'>
            {/* Contact Information */}
            <div>
              <SectionLabel>Get in Touch</SectionLabel>

              <h1 className='contact-info-heading'>Contact Krupa Elevators</h1>

              <p className='contact-info-lead'>
                For quotations, technical queries, service requests or general
                enquiries — our team is ready to help.
              </p>

              {ADDRESS.map((item) => (
                <div className='contact-detail' key={item.label}>
                  <span className='contact-detail-label'>{item.label}</span>

                  <p className='contact-detail-val'>{item.val}</p>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <form
              className='contact-form'
              onSubmit={handleSubmit}
              aria-label='Contact enquiry form'>
              <input
                className='contact-form-field'
                type='text'
                name='name'
                placeholder='Your Name *'
                value={formData.name}
                onChange={handleChange}
                required
              />

              <input
                className='contact-form-field'
                type='tel'
                name='phone'
                placeholder='Phone Number'
                value={formData.phone}
                onChange={handleChange}
              />

              <input
                className='contact-form-field'
                type='email'
                name='email'
                placeholder='Email Address *'
                value={formData.email}
                onChange={handleChange}
                required
              />

              <select
                className='contact-form-field'
                name='elevator_type'
                value={formData.elevator_type}
                onChange={handleChange}
                required>
                <option value=''>Select Elevator Type *</option>

                {ELEVATOR_TYPES.map((type) => (
                  <option value={type} key={type}>
                    {type}
                  </option>
                ))}
              </select>

              <textarea
                className='contact-form-field'
                name='message'
                rows='5'
                placeholder='Describe your requirements — number of floors, capacity, building type… *'
                value={formData.message}
                onChange={handleChange}
                required
              />

              <button type='submit' className='contact-form-submit'>
                Send Enquiry
              </button>

              {submitted && (
                <div className='contact-success show' role='status'>
                  ✓ Thank you — we'll be in touch shortly.
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ContactPage;
