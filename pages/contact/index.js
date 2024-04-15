import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./index.module.css"
import { motion, useInView } from "framer-motion";
import { useRouter } from "next/router";
import { useRef } from "react";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import Social from "../components/Social";
import { Assistant } from '@next/font/google'


const merriweather = Assistant({
  subsets: ['latin'],
  weight: ['400']
})

function Section({ children, translateStyle }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <motion.div
        style={{
          transform: isInView ? "none" : translateStyle,
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
      >
        {children}
      </motion.div>
    </section>
  );
}


const Contact = () => {
  const router = useRouter();
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "47772d95-1a04-4142-ba31-34d773c16d15");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    });
    const result = await response.json();
    if (result.success) {
      console.log(result);
      router.push('/thanks');
    }
  }

  return (
    <motion.section
      exit={{ opacity: 0 }}
      className={`text-gray-700 ${merriweather.className}`}
    >
      <motion.div
        className="py-24 mx-auto"
      >
        <motion.div
          className="flex flex-col w-full mb-12 text-center"
        >
          <Section translateStyle={"translateY(200px)"}>

            <div className={`flex flex-row text-4xl font-semibold py-2 justify-center items-center rounded-lg ${classes.bg}`}>
              <h1 className="text-3xl font-medium text-slate-100">
                Get in touch
              </h1>
            </div>
            <p className="mx-auto mt-4 text-xl leading-relaxed">
              Thank you for taking the time to get to know me<br />
              You can contact me this way
            </p>
          </Section>

        </motion.div>
        <Section translateStyle={"translateY(200px)"}>
          <motion.div
            className="w-full flex justify-center items-center"
          >
            <div className={classes.container}>
              <form className={`pr-8 flex flex-col gap-4 ${classes.form}`} autocomplete="off" onSubmit={handleSubmit}>
                <p className=" text-slate-100 font-extralight text-4xl">Write To Me</p>
                <div className={`${classes.name} ${classes.block}`}>
                  <div>
                    <input
                      id="frm-first"
                      type="text"
                      name="name"
                      placeholder="Name"
                      required
                    />
                  </div>
                </div>
                <div className={`${classes.email} ${classes.block}`}>
                  <input
                    id="frm-email"
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </div>

                <div className={`${classes.message} ${classes.block}`}>
                  <textarea className={classes.textarea} id="frm-message" rows="6" name="message" placeholder="Message"></textarea>
                </div>
                <div className=" w-1/2">
                  <button type="submit" className={`${classes.btn} ${classes.third}`}>Send</button>
                </div>
              </form>
              <div className={`flex flex-col gap-6 ${classes.information}`}>
                <p className=" text-slate-100">Contact information</p>
                <p className=" text-gray-400 text-base">I'm open for any suggestion or just to have a chat</p>
                <div className="flex flex-row gap-3 text-gray-500 items-center">
                  <div className=" flex justify-center items-center p-3 lg:p-0 ">
                    <FontAwesomeIcon icon={faLocationDot} />
                  </div>
                  IRAN , TEHRAN
                </div>
                <Link className={`flex font-semibold flex-row gap-3 text-gray-400 items-center ${classes.textsize}`} href="mailto:Hosein.mazinani.1998@gmail.com">
                  <div className=" flex justify-center items-center p-3 lg:p-0 ">
                    <FontAwesomeIcon icon={faEnvelope} className="fa-solid" />
                  </div>
                  Hosein.mazinani.1998@gmail.com
                </Link>
                <Link href="tel:+989358203460" className={`flex font-semibold text-gray-400 flex-row gap-3 items-center ${classes.textsize}`}>
                  <div className=" flex justify-center items-center p-3 lg:p-0 ">
                    <FontAwesomeIcon icon={faPhone} />
                  </div>
                  +989358203460
                </Link>
                <div className='flex'>
                  <Social />
                </div>
              </div>
            </div>
          </motion.div>
        </Section>
      </motion.div>
    </motion.section>
  );
};

export default Contact;







