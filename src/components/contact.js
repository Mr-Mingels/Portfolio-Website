import React, { useState, useEffect, useRef} from "react";
import '../styles/contact.css'
import emailjs from '@emailjs/browser';

const Contact = () => {

    const [name, setName] = useState({
        value: '',
        placeholder: 'Name'
      });
    const [email, setEmail] = useState({
        value: '',
        placeholder: 'Email'
      });
    const [subject, setSubject] = useState({
        value: '',
        placeholder: 'Subject'
      });
      const [message, setMessage] = useState({
        value: '',
        placeholder: 'Message...'
      });
    const [showAnimation, setShowAnimation] = useState(false)
    const [showLoader, setShowLoader] = useState(false)
    const [redNamePlaceHolder, setRedNamePlaceHolder] = useState(false)
    const [redEmailPlaceHolder, setRedEmailPlaceHolder] = useState(false)
    const [redSubjectPlaceholder, setRedSubjectPlaceHolder] = useState(false)
    const [redMessagePlaceHolder, setRedMessagePlaceHolder] = useState(false)
    const [messageSent, setMessageSent] = useState(false)
    const [messageTextContent, setMessageTextContent] = useState('')
    const [borderColor, setBorderColor] = useState('')
    const [mobile, setMobile] = useState(false)
    const contentRef = useRef(null);
    const form = useRef();

    useEffect(() => {
      if(window.innerWidth <= 500) {
        setMobile(true)
      } else {
        setMobile(false)
      }
    },[window.innerWidth])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowAnimation(true);
          } else {
            setShowAnimation(false);
          }
        });
      },
      {
        root: null,
        threshold: mobile ? 0.02 : 0.1,
      }
    );
    observer.observe(contentRef.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  const checkInputValues = () => {
    if (name.value === '') {
        setRedNamePlaceHolder(true)
        setName({ ...name, placeholder: 'Please Fill Out This Field' })
    }
    if (email.value === '') {
        setRedEmailPlaceHolder(true)
        setEmail({ ...email, placeholder: 'Please Fill Out This Field' })
    }
    if (subject.value === '') {
        setRedSubjectPlaceHolder(true)
        setSubject({ ...subject, placeholder: 'Please Fill Out This Field' })
    }
    if (message.value === '') {
        setRedMessagePlaceHolder(true)
        setMessage({ ...message, placeholder: 'Please Fill Out This Field' })
    }
  }

  useEffect(() => {
    if(name.value !== '') {
        setRedNamePlaceHolder(false)
        setName({ ...name, placeholder: 'Name' })
    }
  },[name.value, email.value, subject.value, message.value])
  
  useEffect(() => {
    if (email.value !== '') {
        setRedEmailPlaceHolder(false)
        setEmail({ ...email, placeholder: 'Email' })
    }
  }, [email.value])

  useEffect(() => {
    if (subject.value !== '') {
        setRedSubjectPlaceHolder(false)
        setSubject({ ...subject, placeholder: 'Subject' })
    }
  }, [subject.value])

  useEffect(() => {
    if (message.value !== '') {
        setRedMessagePlaceHolder(false)
        setMessage({ ...message, placeholder: 'Message...' })
    }
  }, [message.value])

  const sendEmail = async (e) => {
    e.preventDefault();
    if (name.value === '' || email.value === '' || subject.value === '' || message.value === ''){
        console.log('fill out fields');
        return;
    }
    try {
      setShowLoader(true)
      const result = await emailjs.sendForm('service_jga4lmc', 'template_ad07c07', form.current, 'kS_vyrWbg598t75I-');
      console.log(result.text);
      console.log('message sent');
      e.target.reset();
      setShowLoader(false)
      setBorderColor('green')
      setMessageTextContent('Message sent!')
      setMessageSent(true)
      setTimeout(() => {
        setMessageSent(false)
    }, 4000);
    } catch (error) {
      setShowLoader(true)
      console.log(error.text);
      console.log('error');
      e.target.reset();
      setShowLoader(false)
      setBorderColor('red')
      setMessageTextContent('Error: Message not sent!')
      setMessageSent(true)
      setTimeout(() => {
        setMessageSent(false)
    }, 4000);
    }
  };
  
    return (
        <section 
        ref={contentRef}
        className="contactWrapper" name='contact'>
          <div className="contactContentWrapper">
            <div className="contactContent">
                <h3 className={`contactTitle ${showAnimation ? 'show' : ''}`}>Contact</h3>
                    <span className={`contactTitleBottomBorder ${showAnimation ? 'show' : ''}`}></span>
                    <div className="contactFormWrapper">
                        <form className="contactFormContent" ref={form} onSubmit={sendEmail}>
                        <div className="nameEmailInputWrapper">
                            <input type='text' className={`nameInput ${showAnimation ? 'show' : ''} ${redNamePlaceHolder ? 'field' : ''}`} 
                            placeholder={name.placeholder} onChange={(e) => setName({ ...name, value: e.target.value })}
                            name="user_name"></input>
                            <input type='email' className={`emailInput ${showAnimation ? 'show' : ''} ${redEmailPlaceHolder ? 'field' : ''}`} 
                            placeholder={email.placeholder} onChange={(e) => setEmail({ ...email, value: e.target.value })}
                            name="user_email"></input>
                            <input type='text' className={`subjectInput ${showAnimation ? 'show' : ''} ${redSubjectPlaceholder ? 'field' : ''}`} 
                            placeholder={subject.placeholder} name="subject" 
                            onChange={(e) => setSubject({ ...subject, value: e.target.value })}></input>
                        </div>
                        <div className="enterMessageInputWrapper">
                            <textarea type='text' className={`enterMessageInput ${showAnimation ? 'show' : ''} 
                            ${redMessagePlaceHolder ? 'field' : ''}`} onChange={(e) => setMessage({ ...message, value: e.target.value })}
                            placeholder={message.placeholder}  name="message"></textarea>
                            <button className={`contactFormSendBtn ${showAnimation ? 'show' : ''}`} 
                            onClick={checkInputValues}>Send</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
            {showLoader &&(
            <div className="loader-wrapper">
                <span className="loader"><span className="loader-inner"></span></span>
            </div>
            )}
            <div className={`messageSentWrapper ${messageSent ? 'show' : ''} ${borderColor}`}>
                <p className="confirmationTxt">{messageTextContent}</p>
            </div>
        </section>
    )
}

export default Contact