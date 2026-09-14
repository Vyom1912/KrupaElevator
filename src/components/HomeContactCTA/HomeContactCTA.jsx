import React from "react";
import { Link } from "react-router-dom";
function HomeContactCTA() {
  const CONTACT_INFO = [
    { icon: "📞", label: "Phone", val: "+91 82008 59171" },
    { icon: "✉️", label: "Email", val: "info@krupaelevators.com" },
    { icon: "🌐", label: "Website", val: "www.krupaelevators.com" },
    {
      icon: "📍",
      label: "Address",
      val: "FF-6 Sagun Enclave, Beside Nikol Community Hall,\nNr. Manohar Vill Char Rasta, Nikol,\nAhmedabad – 382430, Gujarat",
    },
  ];
  return (
    <section className='contact-cta' aria-labelledby='cta-h'>
      <div className='wrap'>
        <div className='contact-cta-inner'>
          <div>
            <div className='section-label contact-cta-label'>
              <span className='section-label-dash' />
              Get In Touch
            </div>
            <h2 className='contact-cta-heading' id='cta-h'>
              Ready to Install?
              <br />
              Let's Talk.
            </h2>
            <p className='contact-cta-body'>
              From initial consultation to installation and long-term
              maintenance — our team is ready to help with every step of your
              elevator project.
            </p>
            <div className='contact-cta-btns'>
              <Link to='/contact' className='btn-primary'>
                Request a Quote
              </Link>
              <Link to='/products' className='btn-outline'>
                View Products
              </Link>
            </div>
          </div>
          <div className='contact-info-list'>
            {CONTACT_INFO.map((item) => (
              <div className='contact-info-item' key={item.label}>
                <span className='contact-info-icon'>{item.icon}</span>
                <div>
                  <div className='contact-info-label'>{item.label}</div>
                  <div
                    className='contact-info-val'
                    style={{ whiteSpace: "pre-line" }}>
                    {item.val}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeContactCTA;
