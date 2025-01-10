import React, { useContext } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from "motion/react"
import { easeOut } from 'motion';
import { Typewriter } from 'react-simple-typewriter';
import ThemeProvider, { ThemeContext } from '../AuthProvider/ThemeProvider';

export default function MakeQuestions() {
    const {theme} = useContext(ThemeContext)
    const handleMessage = (e) => {
        e.preventDefault();
        toast.success('Message sent successfully!', {
        
        });
      };

    return (
      <div>
        <div className='pb-6'>
        <motion.h1
            animate={{ x:30 }}
            transition={{ duration: 2, delay: 1, ease: easeOut, repeat: Infinity }}
            className={`text-2xl lg:text-5xl font-bold text-center ${theme === 'dark'?'text-white':''}`}>What Questions Do Our Customers<br /><span
            className='text-purple-600'
             >
                <Typewriter
                    words={[' Ask Most Often?']}
                    loop={Infinity}
                    cursor
                    cursorStyle={<span style={{ color: 'purple', fontSize: '30px' }}>_</span>}
                    typeSpeed={100}
                    delaySpeed={1000}
                    className="text-purple-600"
                  />
                </span>
        </motion.h1>
        {/* <h1 className='text-2xl font-bold text-center'>  </h1> */}
        <p></p>
        </div>
          <div className='w-full  lg:grid  lg:grid-cols-2 gap-2 items-center' >
            <motion.div 
            animate={{ y: [200,0] }}
            transition={{duration: 10}} className='space-y-3'>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" defaultChecked />
                    <div className="collapse-title text-xl font-medium">How Much Does it Cost</div>
                    <div className="collapse-content">
                        <p>The Lost and Found App is free of charge for up to 1,000 new registered items per year.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">Can I Import My Exiting Data</div>
                    <div className="collapse-content">
                        <p>Yes! We integrate your historic lost and found data for free.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">Will My Team Need Training</div>
                    <div className="collapse-content">
                        <p>We've had lots of customers participate in the beta for the Lost and Found App, and the feedback we've received is that it is incredibly intuitive. However, we do realize that new things take some getting used to. This is why you can schedule webinars that help your team make the move to the new Lost and Found App.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">Who Can I Hlep Me Set Everything Up?</div>
                    <div className="collapse-content">
                        <p>Our team can guide you through the entire process. Just get in touch and let us know what you need.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>
            </motion.div>
            {/* Cotact us */}
            <div>

            <h2 className={`text-center text-3xl font-semibold pb-5 tracking-tight ${theme === 'dark'?'text-white':'text-black'}`}>Do You Have Any 
                <span
                className='text-purple-600'
                >
                <Typewriter
                    words={[' Question?']}
                    loop={Infinity}
                    cursor
                    cursorStyle={<span style={{ color: 'purple', fontSize: '30px' }}>_</span>}
                    typeSpeed={100}
                    delaySpeed={1000}
                    className="text-purple-600"
                  />
                </span>
               </h2>
            <motion.div 
            animate={{ y: [200,0] }}
            transition={{duration: 10}}
            className="w-full max-w-md mx-auto rounded-lg  px-10 pb-10 pt-8 shadow-md bg-base-200">
                <form className="w-full space-y-6">
                    <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-400">
                        <label className="block font-medium" htmlFor="name">
                            Name
                        </label>
                        <input
                            className="h-10 w-full rounded border px-3 py-2 text-sm leading-tight focus:outline-none focus:ring-1 dark:border-zinc-700"
                            id="name"
                            placeholder="Your Name"
                            name="name"
                            type="text"
                            required
                        />
                    </div>
                    <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-400">
                        <label className="block font-medium" htmlFor="_email">
                            Email
                        </label>
                        <input
                            className="h-10 w-full rounded border px-3 py-2 text-sm leading-tight focus:outline-none focus:ring-1 dark:border-zinc-700"
                            id="_email"
                            placeholder="Your Email"
                            name="email"
                            type="email"
                            required
                        />
                    </div>
                    <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-400">
                        <label className="block font-medium" htmlFor="_message">
                            Message
                        </label>
                        <textarea
                            className="min-h-[80px] w-full rounded border px-3 py-2 leading-tight focus:outline-none focus:ring-1 dark:border-zinc-700"
                            id="_message"
                            placeholder="what's in your mind"
                            name="message"
                        />
                    </div>
                    <button 
                    onClick={handleMessage}
                    className="rounded-md bg-purple-700 px-4 py-2 text-white transition-colors hover:bg-purple-600 ">Send Message</button>
                </form>
            </motion.div>
            </div>

        </div>
        <ToastContainer></ToastContainer>
      </div>
    )
}
