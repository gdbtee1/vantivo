import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ArrowUpRight, ArrowLeft, X, Check, LoaderCircle } from 'lucide-react'
import { CONTACT_EMAIL } from './contact-config'

const projectTypes = [
  'Website Design',
  'Website Development',
  'E-Commerce',
  'Creative Digital Experience',
  'Something Else'
]

const budgets = [
  'Under $2,000',
  '$2,000–$5,000',
  '$5,000–$10,000',
  '$10,000+',
  'Not sure yet'
]

const timelines = [
  'ASAP',
  'Within 1 month',
  '1–3 months',
  'Flexible'
]

const initialForm = {
  name: '',
  email: '',
  company: '',
  phone: '',
  projectType: '',
  budget: '',
  timeline: '',
  message: ''
}

export default function ProjectInquiry({ open, onClose }) {
  const [form, setForm] = useState(initialForm)
  const [step, setStep] = useState(1)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  useEffect(() => {
    if (!open) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const keydown = event => {
      if (event.key === 'Escape' && status !== 'sending') onClose()
    }

    window.addEventListener('keydown', keydown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', keydown)
    }
  }, [open, onClose, status])

  const update = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }))
  }

  const close = () => {
    if (status === 'sending') return
    onClose()
  }

  const submit = async event => {
    event.preventDefault()
    setError('')

    if (!form.projectType || !form.budget || !form.timeline) {
      setError('Please complete your project preferences.')
      return
    }

    if (!CONTACT_EMAIL || CONTACT_EMAIL.includes('REPLACE_')) {
      setError('The studio contact email has not been configured.')
      return
    }

    setStatus('sending')

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${encodeURIComponent(CONTACT_EMAIL)}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            company: form.company,
            phone: form.phone,
            project_type: form.projectType,
            project_budget: form.budget,
            project_timeline: form.timeline,
            message: form.message,
            _subject: 'New Project Inquiry — Vantivo',
            _template: 'table',
            _honey: ''
          })
        }
      )

      const result = await response.json()

      if (!response.ok || result.success === false || result.success === 'false') {
        throw new Error(result.message || 'Submission failed')
      }

      setStatus('success')
    } catch (err) {
      setStatus('idle')
      setError('We could not submit your inquiry. Please try again.')
    }
  }

  const resetAndClose = () => {
    setForm(initialForm)
    setStep(1)
    setStatus('idle')
    setError('')
    onClose()
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Start a project with Vantivo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="vi-modal"
        >
          <div className="vi-topbar">
            <span className="display text-3xl md:text-4xl">
              vantivo<span className="text-[#f0643b]">✳</span>
            </span>
            <span className="hidden text-xs font-black tracking-widest md:block">
              YOUR NEXT BIG THING STARTS HERE
            </span>
            <button type="button" className="vi-close" onClick={close} aria-label="Close inquiry">
              <X size={25}/>
            </button>
          </div>

          <div className="vi-modal-scroll">
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                className="mx-auto flex min-h-[70vh] max-w-4xl flex-col items-start justify-center px-6 py-20"
                role="status"
              >
                <div className="mb-9 flex h-24 w-24 items-center justify-center border-2 border-[#25231f] bg-[#c6ed86] shadow-[7px_7px_0_#25231f]">
                  <Check size={52}/>
                </div>
                <h2 className="display text-[clamp(3.8rem,9vw,9rem)] leading-[.95]">
                  INQUIRY<br/>RECEIVED<span className="text-[#f0643b]">!</span>
                </h2>
                <p className="mt-8 max-w-lg text-lg font-semibold leading-relaxed">
                  Thanks for reaching out. Your project details have been submitted.
                  We'll review your inquiry and follow up by email.
                </p>
                <button className="vi-next mt-10" onClick={resetAndClose}>
                  BACK TO VANTIVO <ArrowUpRight size={23}/>
                </button>
              </motion.div>
            ) : (
              <div className="vi-form-layout">
                <aside className="vi-intro">
                  <div>
                    <p className="mb-7 text-xs font-black tracking-[.18em]">
                      THE START OF SOMETHING GOOD ↘
                    </p>
                    <h2 className="display text-[clamp(3.5rem,6vw,7.5rem)] leading-[.96]">
                      LET'S<br/>BUILD<br/>
                      <span className="text-[#3255e8]">SOME-</span><br/>
                      THING<br/>
                      <span className="vi-outline">BOLD.</span>
                    </h2>
                  </div>

                  <div className="mt-12">
                    <div className="mb-5 h-[2px] w-full bg-[#25231f]"/>
                    <p className="max-w-sm text-lg font-semibold leading-relaxed">
                      Good projects start with a conversation.
                      Tell us what you have in mind and we'll take it from there.
                    </p>
                    <div className="mt-10 inline-block -rotate-3 border-2 border-[#25231f] bg-[#f0643b] px-5 py-3 text-sm font-black shadow-[5px_5px_0_#25231f]">
                      MAKE THE INTERNET INTERESTING ✳
                    </div>
                  </div>
                </aside>

                <div className="vi-form-panel">
                  <div className="mb-12 flex items-center justify-between border-b-2 border-[#25231f] pb-6">
                    <span className="text-xs font-black tracking-widest">
                      PROJECT INQUIRY
                    </span>
                    <span className="display text-2xl">
                      {step === 1 ? '01' : '02'} / 02
                    </span>
                  </div>

                  <form onSubmit={submit}>
                    {step === 1 ? (
                      <motion.div initial={{opacity:0,x:20}} animate={{opacity:1,x:0}}>
                        <p className="vi-eyebrow">FIRST, THE BIG PICTURE</p>
                        <h3 className="vi-form-heading">
                          WHAT ARE<br/>WE MAKING?
                        </h3>

                        <div className="vi-field">
                          <span className="vi-label">I'M LOOKING FOR...</span>
                          <div className="vi-options">
                            {projectTypes.map(item => (
                              <button key={item} type="button"
                                aria-pressed={form.projectType === item}
                                onClick={() => update('projectType',item)}
                                className={`vi-option ${form.projectType === item ? 'vi-selected' : ''}`}>
                                {item}
                                {form.projectType === item && <Check size={16}/>}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="vi-field">
                          <span className="vi-label">MY BUDGET IS AROUND...</span>
                          <div className="vi-options">
                            {budgets.map(item => (
                              <button key={item} type="button"
                                aria-pressed={form.budget === item}
                                onClick={() => update('budget',item)}
                                className={`vi-option ${form.budget === item ? 'vi-selected' : ''}`}>
                                {item}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="vi-field">
                          <span className="vi-label">IDEAL TIMELINE</span>
                          <div className="vi-options">
                            {timelines.map(item => (
                              <button key={item} type="button"
                                aria-pressed={form.timeline === item}
                                onClick={() => update('timeline',item)}
                                className={`vi-option ${form.timeline === item ? 'vi-selected' : ''}`}>
                                {item}
                              </button>
                            ))}
                          </div>
                        </div>

                        <button
                          type="button"
                          className="vi-next mt-9"
                          disabled={!form.projectType || !form.budget || !form.timeline}
                          onClick={() => setStep(2)}
                        >
                          NEXT: YOUR DETAILS <ArrowUpRight size={24}/>
                        </button>
                      </motion.div>
                    ) : (
                      <motion.div initial={{opacity:0,x:20}} animate={{opacity:1,x:0}}>
                        <p className="vi-eyebrow">NOW, LET'S GET ACQUAINTED</p>
                        <h3 className="vi-form-heading">
                          TELL US<br/>ABOUT YOU.
                        </h3>

                        <div className="grid gap-6 sm:grid-cols-2">
                          <label className="vi-field">
                            <span className="vi-label">YOUR NAME *</span>
                            <input className="vi-input" required name="name"
                              autoComplete="name"
                              placeholder="Full name" value={form.name}
                              onChange={e => update('name',e.target.value)}/>
                          </label>
                          <label className="vi-field">
                            <span className="vi-label">EMAIL ADDRESS *</span>
                            <input className="vi-input" type="email" required name="email"
                              autoComplete="email"
                              placeholder="you@company.com" value={form.email}
                              onChange={e => update('email',e.target.value)}/>
                          </label>
                          <label className="vi-field">
                            <span className="vi-label">COMPANY / BRAND *</span>
                            <input className="vi-input" required name="company"
                              placeholder="Your business" value={form.company}
                              onChange={e => update('company',e.target.value)}/>
                          </label>
                          <label className="vi-field">
                            <span className="vi-label">PHONE (OPTIONAL)</span>
                            <input className="vi-input" type="tel" name="phone"
                              autoComplete="tel"
                              placeholder="Your phone" value={form.phone}
                              onChange={e => update('phone',e.target.value)}/>
                          </label>
                        </div>

                        <label className="vi-field">
                          <span className="vi-label">TELL US ABOUT THE PROJECT *</span>
                          <textarea className="vi-input min-h-[170px] resize-y"
                            required name="message"
                            placeholder="Tell us what you're imagining, your goals, and anything we should know..."
                            value={form.message}
                            onChange={e => update('message',e.target.value)}/>
                        </label>

                        {error && <p role="alert" className="my-5 font-bold text-red-700">{error}</p>}

                        <div className="mt-9 flex flex-wrap items-center justify-between gap-5">
                          <button className="flex items-center gap-3 text-sm font-black"
                            type="button" onClick={() => setStep(1)}>
                            <ArrowLeft size={20}/> GO BACK
                          </button>
                          <button className="vi-next" type="submit" disabled={status === 'sending'}>
                            {status === 'sending' ? <>SENDING <LoaderCircle className="animate-spin" size={23}/></> :
                              <>SEND INQUIRY <ArrowUpRight size={24}/></>}
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </form>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
