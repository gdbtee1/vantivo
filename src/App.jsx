import { CreativeCursor, Reveal, StudioClock, FloatingProjectCTA } from './components.jsx'
import { useState } from 'react'
import { motion } from 'motion/react'
import { ArrowUpRight, ArrowDownRight, Menu, X, Asterisk, Plus, MoveUpRight } from 'lucide-react'

const projects = [
  {
    id: '01',
    name: 'GOODFORM',
    type: 'BRAND EXPERIENCE / WEB DESIGN',
    className: 'goodform',
    background: '#f3a2bc',
    foreground: '#862951',
  },
  {
    id: '02',
    name: 'OBJECTS',
    type: 'E-COMMERCE / DEVELOPMENT',
    className: 'objects',
    background: '#c6ed86',
    foreground: '#284a28',
  },
  {
    id: '03',
    name: 'OFFBEAT',
    type: 'CREATIVE DIRECTION / WEB DESIGN',
    className: 'offbeat',
    background: '#b8c9ff',
    foreground: '#293da0',
  }
]

const services = [
  ['01', 'WEBSITE DESIGN', 'Distinctive digital experiences designed to stand out, communicate clearly, and make an impression.'],
  ['02', 'WEB DEVELOPMENT', 'Fast, responsive, custom-built websites with thoughtful interactions and clean functionality.'],
  ['03', 'DIGITAL EXPERIENCES', 'Memorable motion, interactive storytelling, and unexpected details that make a website feel alive.'],
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [inquiry, setInquiry] = useState({
    name: '',
    email: '',
    company: '',
    service: 'Website Design',
    budget: '$2,000–$5,000',
    message: ''
  })

  const updateInquiry = (field, value) => {
    setInquiry(previous => ({ ...previous, [field]: value }))
  }

  const submitInquiry = (event) => {
    event.preventDefault()
    const subject = 'New Vantivo Project Inquiry — ' + inquiry.company
    const body = [
      'Name: ' + inquiry.name,
      'Email: ' + inquiry.email,
      'Company: ' + inquiry.company,
      'Service: ' + inquiry.service,
      'Budget: ' + inquiry.budget,
      '',
      'Project Details:',
      inquiry.message
    ].join('\\n')

    window.location.href =
      'mailto:hello@vantivo.com?subject=' +
      encodeURIComponent(subject) +
      '&body=' +
      encodeURIComponent(body)
  }

  return (
    <div className="overflow-hidden bg-[#f7f3e9]">
      <CreativeCursor />
      <FloatingProjectCTA />
      <header className="relative z-50 flex min-h-[82px] items-center justify-between border-b-2 border-[#25231f] px-5 md:px-12">
        <a href="#home" className="display text-[29px] tracking-[-.09em] md:text-[38px]">
          vantivo<span className="text-[#f0643b]">✳</span>
        </a>
        <nav className="hidden items-center gap-10 text-[12px] font-extrabold tracking-[.05em] md:flex">
          <a className="hover:text-[#f0643b]" href="#work">OUR WORK</a>
          <a className="hover:text-[#f0643b]" href="#services">WHAT WE DO</a>
          <a className="hover:text-[#f0643b]" href="#about">ABOUT US</a>
        </nav>
        <a href="mailto:hello@vantivo.com" className="hidden items-center gap-3 border-2 border-[#25231f] bg-[#f8e54b] px-5 py-3 text-xs font-extrabold transition-transform hover:-translate-y-1 md:flex">
          START A PROJECT <ArrowUpRight size={17}/>
        </a>
        <button className="md:hidden" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={30}/> : <Menu size={30}/>}
        </button>
      </header>

      {menuOpen && (
        <nav className="relative z-40 flex flex-col gap-5 border-b-2 border-[#25231f] bg-[#f8e54b] p-7 text-xl font-extrabold md:hidden" onClick={() => setMenuOpen(false)}>
          <a href="#work">OUR WORK</a>
          <a href="#services">WHAT WE DO</a>
          <a href="#about">ABOUT US</a>
          <a href="mailto:hello@vantivo.com">START A PROJECT ↗</a>
        </nav>
      )}

      <main>
        <section id="home" className="relative min-h-[680px] border-b-2 border-[#25231f] px-5 pb-12 pt-14 md:min-h-[790px] md:px-12 md:pt-20">
          <div className="mb-8 flex items-center justify-between text-[11px] font-extrabold uppercase tracking-[.14em] md:mb-12">
            <span>INDEPENDENT CREATIVE WEB STUDIO</span>
            <StudioClock />
          </div>

          <motion.div initial={{opacity:0,y:55}} animate={{opacity:1,y:0}} transition={{duration:.8,ease:[.2,.7,.2,1]}} className="relative">
            <h1 className="display relative z-10 text-[clamp(4.2rem,11.8vw,12.3rem)] leading-[.91]">
              WE MAKE<br/>
              <span className="relative">THE WEB<span className="text-[#3255e8]">.</span></span><br/>
              <span className="outline-text">WEIRDLY</span><br/>
              GOOD<span className="text-[#f0643b]">!</span>
            </h1>
            <motion.div
              initial={{rotate:-25,scale:0}}
              animate={{rotate:12,scale:1}}
              transition={{delay:.5,type:'spring',stiffness:100}}
              className="absolute right-[0%] top-[24%] z-20 flex h-[90px] w-[90px] rotate-12 items-center justify-center rounded-full border-2 border-[#25231f] bg-[#f8e54b] shadow-[6px_6px_0_#25231f] md:right-[13%] md:top-[17%] md:h-[150px] md:w-[150px]"
            >
              <Asterisk className="h-14 w-14 md:h-24 md:w-24" strokeWidth={1.6}/>
            </motion.div>
          </motion.div>

          <div className="mt-12 flex flex-col items-start justify-between gap-10 md:mt-14 md:flex-row md:items-end">
            <p className="max-w-[420px] text-lg font-semibold leading-[1.45] md:text-[23px]">
              We're a creative web development studio building bold digital experiences for brands that refuse to blend in.
            </p>
            <a href="#work" className="group flex items-center gap-5 text-sm font-extrabold">
              EXPLORE THE GOOD STUFF
              <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#25231f] bg-[#c6ed86] transition-transform group-hover:translate-y-1">
                <ArrowDownRight size={25}/>
              </span>
            </a>
          </div>
        </section>

        <div className="overflow-hidden border-b-2 border-[#25231f] bg-[#f8e54b] py-4">
          <div className="marquee">
            {[0,1,2,3,4,5,6,7].map(i=>(
              <span key={i} className="display flex items-center gap-8 whitespace-nowrap px-4 text-[26px] md:text-[38px]">
                DESIGN THAT DOES SOMETHING <Asterisk size={28}/>
              </span>
            ))}
          </div>
        </div>

        <section id="work" className="px-5 py-20 md:px-12 md:py-28">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-8 border-b-2 border-[#25231f] pb-9">
            <div>
              <p className="mb-5 text-xs font-extrabold tracking-[.14em]">THE PROOF IS IN THE PIXELS ↘</p>
              <h2 className="display text-[clamp(3.6rem,8vw,8.5rem)] leading-[.94]">SELECTED<br/>WORK<span className="text-[#f0643b]">®</span></h2>
            </div>
            <span className="max-w-[230px] text-sm font-semibold">A collection of concepts exploring expressive digital design.</span>
          </div>

          <Reveal>
          <div className="grid gap-10 lg:grid-cols-2">
            {projects.map((project,index)=>(
              <article key={project.id} className={`project-link group ${index===2?'lg:col-span-2':''}`}>
                <div className={`relative flex h-[340px] overflow-hidden border-2 border-[#25231f] md:h-[490px] ${index===2?'lg:h-[540px]':''}`} style={{background:project.background,color:project.foreground}}>
                  <div className="absolute left-6 top-6 z-10 border-2 border-current bg-[#f7f3e9] px-3 py-2 text-xs font-black text-[#25231f]">V / {project.id}</div>
                  <div className="project-visual flex h-full w-full flex-col items-center justify-center">
                    {index===0&&<>
                      <span className="text-[11px] font-black tracking-[.4em]">A DIFFERENT KIND OF GOOD</span>
                      <span className="display mt-5 -rotate-6 text-[clamp(3.5rem,8vw,8rem)]">goodform.</span>
                      <span className="mt-4 rounded-full border-2 border-current px-7 py-2 text-xs font-black">MAKE IT MEAN SOMETHING ↗</span>
                    </>}
                    {index===1&&<>
                      <div className="mb-6 flex gap-2">
                        {[0,1,2].map(n=><div key={n} className="h-12 w-12 rotate-12 border-[8px] border-current md:h-20 md:w-20"/>)}
                      </div>
                      <span className="display text-[clamp(3.5rem,8vw,7rem)]">OBJECTS</span>
                      <span className="text-xs font-black tracking-[.28em]">EVERYDAY, REIMAGINED.</span>
                    </>}
                    {index===2&&<>
                      <div className="absolute left-[8%] top-[20%] h-20 w-20 rotate-12 rounded-full bg-[#f8e54b] md:h-32 md:w-32"/>
                      <div className="absolute bottom-[13%] right-[11%] h-20 w-20 -rotate-12 bg-[#f0643b] md:h-36 md:w-36"/>
                      <span className="display relative z-10 -rotate-3 text-[clamp(4rem,14vw,13rem)] italic">OFFBEAT!</span>
                      <span className="relative z-10 bg-[#f7f3e9] px-5 py-2 text-xs font-black tracking-widest">NEVER ORDINARY</span>
                    </>}
                  </div>
                </div>
                <div className="flex items-center justify-between gap-4 border-b-2 border-[#25231f] py-5">
                  <div>
                    <h3 className="display text-2xl md:text-3xl">{project.name}</h3>
                    <p className="mt-2 text-[11px] font-bold tracking-wider">{project.type}</p>
                  </div>
                  <MoveUpRight size={28}/>
                </div>
              </article>
            ))}
          </div>
          </Reveal>
          <p className="mt-6 text-xs font-semibold text-[#655e54]">* Featured concepts are illustrative design explorations, not client commissions.</p>
        </section>

        <section id="services" className="border-y-2 border-[#25231f] bg-[#b8c9ff] px-5 py-20 md:px-12 md:py-28">
          <p className="mb-5 text-xs font-extrabold tracking-[.15em]">WHAT WE BRING TO THE PARTY</p>
          <h2 className="display mb-14 text-[clamp(3.5rem,9vw,9rem)] leading-[.95]">BIG IDEAS.<br/>BETTER <span className="italic">WEBSITES.</span></h2>
          <div className="border-t-2 border-[#25231f]">
            {services.map(([number,name,description])=>(
              <div key={number} className="group grid gap-5 border-b-2 border-[#25231f] py-8 transition-all hover:bg-[#c9d5ff] md:grid-cols-[80px_1fr_1fr_40px] md:items-center md:gap-8 md:py-11">
                <span className="text-xs font-black">/{number}</span>
                <h3 className="display text-[clamp(2rem,4vw,4rem)] leading-tight">{name}</h3>
                <p className="max-w-[350px] text-sm font-semibold leading-7">{description}</p>
                <Plus size={29} className="transition-transform group-hover:rotate-90"/>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="grid border-b-2 border-[#25231f] lg:grid-cols-2">
          <div className="flex flex-col justify-between px-5 py-20 md:px-12 md:py-28">
            <div>
              <p className="mb-7 text-xs font-extrabold tracking-[.15em]">A LITTLE ABOUT US</p>
              <h2 className="display text-[clamp(3.6rem,7vw,7rem)] leading-[.98]">NOT HERE<br/>TO PLAY<br/><span className="text-[#3255e8]">IT SAFE.</span></h2>
            </div>
            <p className="mt-12 max-w-[520px] text-xl font-semibold leading-[1.55]">We believe the internet has enough forgettable websites. Vantivo exists to build expressive, thoughtfully engineered experiences that give ambitious brands their own digital personality.</p>
          </div>
          <div className="relative flex min-h-[390px] items-center justify-center overflow-hidden border-t-2 border-[#25231f] bg-[#f0643b] lg:border-l-2 lg:border-t-0">
            <motion.div animate={{rotate:360}} transition={{duration:30,ease:'linear',repeat:Infinity}} className="flex h-[270px] w-[270px] items-center justify-center rounded-full border-[18px] border-[#25231f] bg-[#f8e54b] md:h-[410px] md:w-[410px]">
              <Asterisk className="h-[65%] w-[65%]" strokeWidth={1.4}/>
            </motion.div>
            <span className="display absolute bottom-10 left-8 -rotate-6 bg-[#f7f3e9] px-5 py-3 text-xl shadow-[5px_5px_0_#25231f] md:text-3xl">BUILT TO STAND OUT!</span>
          </div>
        </section>

        <section id="contact" className="bg-[#f8e54b] px-5 py-20 md:px-12 md:py-28">
          <div className="flex flex-wrap items-start justify-between gap-8">
            <p className="text-xs font-extrabold tracking-[.15em]">GOT SOMETHING IN MIND?</p>
            <span className="text-xs font-extrabold">YOUR NEXT BIG THING STARTS HERE ↘</span>
          </div>
          <h2 className="display my-14 text-[clamp(4rem,12vw,13rem)] leading-[.89]">LET'S MAKE<br/>SOME <span className="outline-text">NOISE.</span></h2>
          <div className="mt-16 grid gap-12 border-t-2 border-[#25231f] pt-12 lg:grid-cols-[.65fr_1fr]">
            <div>
              <div className="display mb-8 text-[clamp(2.5rem,5vw,5rem)] leading-none">
                YOUR IDEA.<br/>OUR NEXT<br/>OBSESSION.
              </div>
              <p className="max-w-sm text-lg font-semibold leading-relaxed">
                Tell us a little about what you're building. The more interesting the challenge, the better.
              </p>
              <div className="mt-12 inline-flex -rotate-6 border-2 border-[#25231f] bg-[#f0643b] px-6 py-4 text-lg font-black shadow-[6px_6px_0_#25231f]">
                NO BORING WEBSITES ALLOWED ✳
              </div>
            </div>

            <form onSubmit={submitInquiry} className="space-y-8">
              <div className="grid gap-7 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-3 block text-xs font-black tracking-widest">YOUR NAME *</span>
                  <input required value={inquiry.name} onChange={e => updateInquiry('name', e.target.value)}
                    placeholder="Your name" className="vantivo-input" />
                </label>
                <label className="block">
                  <span className="mb-3 block text-xs font-black tracking-widest">EMAIL ADDRESS *</span>
                  <input type="email" required value={inquiry.email} onChange={e => updateInquiry('email', e.target.value)}
                    placeholder="you@company.com" className="vantivo-input" />
                </label>
              </div>

              <label className="block">
                <span className="mb-3 block text-xs font-black tracking-widest">COMPANY / BRAND *</span>
                <input required value={inquiry.company} onChange={e => updateInquiry('company', e.target.value)}
                  placeholder="What is your brand called?" className="vantivo-input" />
              </label>

              <div>
                <span className="mb-4 block text-xs font-black tracking-widest">WHAT ARE WE BUILDING?</span>
                <div className="flex flex-wrap gap-3">
                  {['Website Design','Web Development','Digital Experience','Not Sure Yet'].map(service => (
                    <button type="button" key={service} onClick={() => updateInquiry('service', service)}
                      aria-pressed={inquiry.service === service}
                      className={`vantivo-choice ${inquiry.service === service ? 'vantivo-choice-active' : ''}`}>
                      {service}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <span className="mb-4 block text-xs font-black tracking-widest">ESTIMATED PROJECT BUDGET</span>
                <div className="flex flex-wrap gap-3">
                  {['Under $2,000','$2,000–$5,000','$5,000–$10,000','$10,000+'].map(budget => (
                    <button type="button" key={budget} onClick={() => updateInquiry('budget', budget)}
                      aria-pressed={inquiry.budget === budget}
                      className={`vantivo-choice ${inquiry.budget === budget ? 'vantivo-choice-active' : ''}`}>
                      {budget}
                    </button>
                  ))}
                </div>
              </div>

              <label className="block">
                <span className="mb-3 block text-xs font-black tracking-widest">TELL US ABOUT YOUR IDEA *</span>
                <textarea required rows="5" value={inquiry.message}
                  onChange={e => updateInquiry('message', e.target.value)}
                  placeholder="The big idea, the weird idea, the ambitious idea. We're listening."
                  className="vantivo-input resize-y" />
              </label>

              <button type="submit"
                className="group flex w-full items-center justify-between border-2 border-[#25231f] bg-[#f7f3e9] px-6 py-6 text-left text-sm font-black shadow-[6px_6px_0_#25231f] transition-transform hover:-translate-y-1">
                PREPARE MY PROJECT INQUIRY
                <ArrowUpRight size={28} className="transition-transform group-hover:rotate-45"/>
              </button>
              <p className="text-xs font-semibold">
                Your email application will open with your inquiry prefilled. Review and send it to complete your inquiry.
              </p>
            </form>
          </div>
        </section>
      </main>

      <footer className="flex flex-col gap-7 bg-[#f7f3e9] px-5 py-9 md:flex-row md:items-end md:justify-between md:px-12">
        <div>
          <div className="display text-5xl">vantivo<span className="text-[#f0643b]">✳</span></div>
          <p className="mt-3 text-xs font-bold">GOOD IDEAS DESERVE BETTER WEBSITES.</p>
        </div>
        <div className="flex flex-wrap gap-7 text-xs font-extrabold">
          <a href="#home">BACK TO TOP ↑</a>
          <a href="#work">WORK</a>
          <a href="#services">SERVICES</a>
          <a href="mailto:hello@vantivo.com">CONTACT</a>
        </div>
        <span className="text-xs font-bold">© {new Date().getFullYear()} VANTIVO</span>
      </footer>
    </div>
  )
}

export default App
