import ProjectInquiry from './ProjectInquiry.jsx'
import { CreativeCursor, Reveal, StudioClock, FloatingProjectCTA } from './components.jsx'
import { useState } from 'react'
import { motion } from 'motion/react'
import { ArrowUpRight, ArrowDownRight, Menu, X, Asterisk, Plus, MoveUpRight } from 'lucide-react'

const projects = [
  {
    id: '01',
    name: 'GOODFORM',
    type: 'BRAND EXPERIENCE / WEB DESIGN',
    background: '#f3a2bc',
    foreground: '#862951',
    image:
      'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=1600&q=85',
    kicker: 'A DIFFERENT KIND OF GOOD',
    headline: 'goodform.',
    cta: 'MAKE IT MEAN SOMETHING ↗',
    align: 'center'
  },
  {
    id: '02',
    name: 'OBJECTS',
    type: 'E-COMMERCE / DEVELOPMENT',
    background: '#c6ed86',
    foreground: '#284a28',
    image:
      'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=1600&q=85',
    kicker: 'MODERN PRODUCT STORIES',
    headline: 'OBJECTS',
    cta: 'EVERYDAY, REIMAGINED.',
    align: 'center'
  },
  {
    id: '03',
    name: 'OFFBEAT',
    type: 'CREATIVE DIRECTION / WEB DESIGN',
    background: '#b8c9ff',
    foreground: '#293da0',
    image:
      'https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1800&q=85',
    kicker: 'NEVER ORDINARY',
    headline: 'OFFBEAT!',
    cta: 'CREATIVE CHAOS, ORGANIZED.',
    align: 'left'
  }
]

const services = [
  ['01', 'WEBSITE DESIGN', 'Distinctive digital experiences designed to stand out, communicate clearly, and make an impression.'],
  ['02', 'WEB DEVELOPMENT', 'Fast, responsive, custom-built websites with thoughtful interactions and clean functionality.'],
  ['03', 'DIGITAL EXPERIENCES', 'Memorable motion, interactive storytelling, and unexpected details that make a website feel alive.'],
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [inquiryOpen, setInquiryOpen] = useState(false)

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
        <a
          href="#contact"
          onClick={e => { e.preventDefault(); setInquiryOpen(true) }}
          className="hidden items-center gap-3 border-2 border-[#25231f] bg-[#f8e54b] px-5 py-3 text-xs font-extrabold transition-transform hover:-translate-y-1 md:flex"
        >
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
          <a href="#contact" onClick={e => { e.preventDefault(); setInquiryOpen(true) }}>START A PROJECT ↗</a>
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
                  <div
                    className={`relative flex h-[340px] overflow-hidden border-2 border-[#25231f] md:h-[490px] ${index===2?'lg:h-[560px]':''}`}
                    style={{background:project.background,color:project.foreground}}
                  >
                    <img
                      src={project.image}
                      alt={project.name}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(20,20,20,.58),rgba(20,20,20,.12))]" />
                    <div className="absolute left-0 right-0 top-0 z-20 flex h-12 items-center justify-between border-b-2 border-[#25231f] bg-[#f7f3e9] px-4 text-[#25231f]">
                      <div className="flex gap-1.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-[#f0643b]"/>
                        <span className="h-2.5 w-2.5 rounded-full bg-[#f8e54b]"/>
                        <span className="h-2.5 w-2.5 rounded-full bg-[#c6ed86]"/>
                      </div>
                      <span className="text-[10px] font-extrabold tracking-wider">
                        {project.name.toLowerCase()} / WEBSITE CONCEPT
                      </span>
                      <span className="text-sm font-black">↗</span>
                    </div>


                    <div className="absolute left-6 top-6 z-10 border-2 border-[#25231f] bg-[#f7f3e9] px-3 py-2 text-xs font-black text-[#25231f]">
                      V / {project.id}
                    </div>

                    <div className={`project-visual relative z-10 flex h-full w-full flex-col justify-end p-8 text-white md:p-10 ${project.align === 'center' ? 'items-start' : 'items-start'}`}>
                      <span className="text-[11px] font-black tracking-[.35em] text-white/90">
                        {project.kicker}
                      </span>
                      <span className="display mt-4 text-[clamp(3.2rem,8vw,8rem)] leading-[.92] text-white drop-shadow-[0_2px_0_rgba(0,0,0,.22)]">
                        {project.headline}
                      </span>
                      <span className="mt-5 inline-flex w-fit border-2 border-white bg-white/12 px-6 py-3 text-xs font-black tracking-[.08em] backdrop-blur-[2px]">
                        {project.cta}
                      </span>
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
          <a
            href="#contact"
            onClick={e => { e.preventDefault(); setInquiryOpen(true) }}
            className="inline-flex items-center gap-5 border-2 border-[#25231f] bg-[#f7f3e9] px-7 py-5 text-sm font-black shadow-[6px_6px_0_#25231f] transition-transform hover:-translate-y-1"
          >
            TELL US ABOUT YOUR PROJECT <ArrowUpRight size={23}/>
          </a>
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
          <a href="#contact" onClick={e => { e.preventDefault(); setInquiryOpen(true) }}>CONTACT</a>
        </div>
        <span className="text-xs font-bold">© {new Date().getFullYear()} VANTIVO</span>
      </footer>

      <ProjectInquiry open={inquiryOpen} onClose={() => setInquiryOpen(false)} />
    </div>
  )
}

export default App
