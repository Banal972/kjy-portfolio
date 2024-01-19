import React from 'react'
import { Circle, PageTitle, Wrap } from '../Component/component'

export default function Contact() {

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

        <div className="mail-send">
          개발중 입니다.
        </div>

    </Wrap>
  )
}
