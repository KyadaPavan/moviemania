import React from 'react';
import Contactcard from "@/app/components/Contactcard";
import styles from "./contact.module.css";
import Contactform from "@/app/components/Contactform";

const Contact = () => {
  return (
    <>
      <div className={styles.container}>
        <h1>Contact Us</h1>
        <Contactcard />

        <section className={styles.contact_section}>
          <h2>We'd love to hear <span> from you </span></h2>

          <Contactform />
        </section>
      </div>

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14738.773379602346!2d72.90744742610516!3d22.553157289511056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e4e7431cdda27%3A0xa99d2367673787fa!2sVallabh%20Vidyanagar%2C%20Anand%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1709150211787!5m2!1sen!2sin" width={100} height={450} style={{ border: 0 }} allowFullScreen="" loading="lazy" className={styles.mapping}
        referrerPolicy="no-referrer-when-downgrade"></iframe>

    </>
  );
};

export default Contact;