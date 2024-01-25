import React, { useEffect, useRef } from 'react'
import { Circle, Jelly } from '../Component/component'
import gsap from 'gsap';

export default function Main() {
    
  return (

    <div className="_main">

        <div className="tbx">
            <dl>
                <dt>
                    <strong>Frontend</strong>
                    <small>Developer</small>
                </dt>
                <dd>안녕하세요 프론트엔드 주니어 개발자 김지유 입니다. <span className='emoji'>☺️</span></dd>
            </dl>
            <div className="sns">
                <Circle style={{width : 25}}> <img src="/images/github-mark.png" alt="깃헙" /> </Circle>
            </div>
            <div className="teach">
                <p>Teach Stack | </p>
                <div className="grid">
                    <Circle> <img src="/images/html.png" alt="HTML" /> </Circle>
                    <Circle> <img src="/images/css.png" alt="CSS" /> </Circle>
                    <Circle> <img src="/images/jquery.png" alt="제이쿼리" /> </Circle>
                    <Circle> <img src="/images/sass.png" alt="SASS" /> </Circle>
                    <Circle> <img src="/images/javascript.png" alt="자바스크립트" /> </Circle>
                    <Circle> <img src="/images/typescript.png" alt="타입스크립트" /> </Circle>
                    <Circle> <img src="/images/react.png" alt="리액트" /> </Circle>
                    <Circle> <img src="/images/redux.png" alt="리덕스" /> </Circle>
                    <Circle> <img src="/images/vue.png" alt="뷰" /> </Circle>
                    <Circle> <img src="/images/nextjs.png" alt="NextJS" /> </Circle>
                </div>
            </div>

            <Jelly/>

        </div>


    </div>

  )
  
}
