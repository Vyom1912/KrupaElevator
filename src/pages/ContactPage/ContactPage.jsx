import { useState, useRef } from 'react'
import PageHero from '../../components/PageHero/PageHero'
import SectionLabel from '../../components/SectionLabel/SectionLabel'
import './ContactPage.css'

const ELEVATOR_TYPES = [
  'Passenger Elevator',
  'Hospital Elevator',
  'Goods Elevator',
  'Capsule / Panoramic Elevator',
  'Car Elevator',
  'Home Elevator',
  'MRL Elevator',
  'Hydraulic Elevator',
]

const ADDRESS = [
  { label: 'Phone',   val: '+91 82008 59171' },
  { label: 'Email',   val: 'info@krupaelevators.com' },
  { label: 'Website', val: 'www.krupaelevators.com' },
  { label: 'Address', val: 'FF-6 Sagun Enclave, Beside Nikol Community Hall,\nNr. Manohar Vill Char Rasta, Nikol,\nAhmedabad – 382430, Gujarat, India.' },
]

const EMPTY    = { name: '', phone: '', email: '', elevator_type: '', message: '' }
const REQUIRED = ['name', 'email', 'elevator_type', 'message']

export default function ContactPage() {
  const [form, setForm]     = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [sent, setSent]     = useState(false)
  const successRef          = useRef(null)

  const change = e => {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
    setErrors(er => ({ ...er, [name]: false }))
  }

  const submit = e => {
    e.preventDefault()
    const errs = {}
    let ok = true
    REQUIRED.forEach(k => { if (!form[k].trim()) { errs[k] = true; ok = false } })
    setErrors(errs)
    if (!ok) return
    setSent(true)
    setForm(EMPTY)
    setTimeout(() => successRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 50)
  }

  return (
    <main>
      <PageHero
        label="Get in Touch"
        heading="Contact Krupa Elevators"
        text="Request a quote, ask a technical question, or enquire about our Annual Maintenance Contract. We respond within one business day."
        chips={['+91 82008 59171', 'info@krupaelevators.com', 'Nikol, Ahmedabad']}
        dataBg="CONTACT"
      />

      <section className="contact-page">
        <div className="wrap">
          <div className="contact-page-inner">
            {/* ── Info column ── */}
            <div>
              <SectionLabel>Get in Touch</SectionLabel>
              <h1 className="contact-info-heading">Contact Krupa Elevators</h1>
              <p className="contact-info-lead">
                For quotations, technical queries, service requests or general enquiries —
                our team is ready to help.
              </p>
              {ADDRESS.map(a => (
                <div className="contact-detail" key={a.label}>
                  <span className="contact-detail-label">{a.label}</span>
                  <p className="contact-detail-val">{a.val}</p>
                </div>
              ))}
            </div>

            {/* ── Form column ── */}
            <form
              className="contact-form"
              onSubmit={submit}
              noValidate
              aria-label="Contact enquiry form"
            >
              <input
                className={`contact-form-field${errors.name ? ' error' : ''}`}
                type="text" name="name" placeholder="Your Name *"
                autoComplete="name" value={form.name} onChange={change}
              />
              <input
                className="contact-form-field"
                type="tel" name="phone" placeholder="Phone Number"
                autoComplete="tel" value={form.phone} onChange={change}
              />
              <input
                className={`contact-form-field${errors.email ? ' error' : ''}`}
                type="email" name="email" placeholder="Email Address *"
                autoComplete="email" value={form.email} onChange={change}
              />
              <select
                className={`contact-form-field${errors.elevator_type ? ' error' : ''}`}
                name="elevator_type" value={form.elevator_type} onChange={change}
                aria-label="Select elevator type"
              >
                <option value="" disabled>Select Elevator Type *</option>
                {ELEVATOR_TYPES.map(t => <option key={t}>{t}</option>)}
              </select>
              <textarea
                className={`contact-form-field${errors.message ? ' error' : ''}`}
                name="message" rows={5}
                placeholder="Describe your requirements — number of floors, capacity, building type… *"
                value={form.message} onChange={change}
              />
              <button type="submit" className="contact-form-submit">Send Enquiry</button>
              <div
                ref={successRef}
                className={`contact-success${sent ? ' show' : ''}`}
                role="status"
                aria-live="polite"
              >
                ✓ Thank you — we'll be in touch shortly.
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
