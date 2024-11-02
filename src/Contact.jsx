import emailjs from '@emailjs/browser';
import { useRef } from 'react';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_7g50pea', 'template_gbtfbs7', form.current, {
        publicKey: 'gJaJp5N76WSvdNRh4',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
<div className='container'>    
<h3>Complain Box</h3>
<form ref={form} onSubmit={sendEmail}>
  <label>Name</label>
  <input type="text" name="from_name" placeholder='user email' />
  <label>Email</label>
  <input type="email" name="email_name" />
  <label>Message</label>
  <textarea name="message" />
  <input type="submit" value="Send" />
</form>
</div>
  );
};
