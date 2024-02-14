import { useState } from 'react';
import { Circle, Jelly, PageTitle, Wrap } from '../Component/component'
import emailjs from '@emailjs/browser';

export default function Contact() {

  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [text,setText] = useState('');

  const onInputHanlder = (e : React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,fun : React.Dispatch<React.SetStateAction<string>>)=>{
    const input = e.currentTarget.value;
    fun(input);
  }

  const sendMail = ()=>{

    const templateParams = {
      user_name: name,
      user_email : email,
      message : text
    };

    emailjs
    .send( process.env.REACT_APP_EMAIL_SERVICE_ID || "",process.env.REACT_APP_EMAIL_TEMPLATE_ID || "", templateParams,{
      publicKey : process.env.REACT_APP_EMAIL_PUBLIC_KEY
    })
    .then(
      (result) => {
        alert('메일을 전송했습니다.');
        setName('');
        setEmail('');
        setText('');
      },
      (error)=>{
        alert('전송에 실패하였습니다.');
      }
    )

    
  }

  return (
    <Wrap className="_contact">
        
        <PageTitle>Contact</PageTitle>

        <ul className='address'>
          <li>
            <Circle style={{width : 25}}><img src="/images/github-mark.png" alt="깃허브" /></Circle>
            <a href="https://github.com/Banal972" target='_blank' rel='noopener noreferrer'>Banal972</a>
          </li>
          <li>
            <em>Email</em> - <a href="mailto:spbabo97@naver.com">spbabo97@naver.com</a>
          </li>
          <li>
            <em>Blog</em> - <a href="https://banal7.tistory.com" target='_blank' rel='noopener noreferrer'>https://banal7.tistory.com</a>
          </li>
        </ul>

        <div className="mail-box">
          <Jelly color='#CEF5BC'/>
          <div className="mail-send">
              <div className="input-box">
                <label htmlFor="Name">Name</label>
                <input type="text" id='Name' placeholder='이름을 입력해주세요.' value={name} onInput={(e)=>onInputHanlder(e,setName)}/>
              </div>
              <div className="input-box">
                <label htmlFor="Email">Email</label>
                <input type="text" id='Email' placeholder='이메일을 입력해주세요.' value={email} onInput={(e)=>onInputHanlder(e,setEmail)}/>
              </div>
              <div className="input-box">
                <label htmlFor="Message">Message</label>
                <textarea id="Message" placeholder='내용을 입력해주세요.' value={text} onInput={(e)=>onInputHanlder(e,setText)}></textarea>
              </div>
              <button onClick={sendMail}> Send </button>
            </div>
        </div>

    </Wrap>
  )
}
