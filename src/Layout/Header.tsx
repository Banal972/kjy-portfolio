import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'

const Menu = styled.div`

  position: absolute;
  top : 0;
  width: 25px;
  height: 15px;
  right: 2.5%;
  cursor: pointer;
  z-index: 5555;
  display: none;

  span {
      position: absolute;
      background: #000;
      width: 100%;
      left: 0;
      height: 2px;
      &:nth-of-type(1){
        top: calc(50% * 0);
      }
      &:nth-of-type(2){
        top: calc(50% * 1);
      }
      &:nth-of-type(3){
        top: calc(50% * 2);
      }
  }

  &.on {
    right : 5%;
    top : 20px;
    span{
      &:nth-of-type(1){
        top : 50%;
        transform: rotate(45deg);
      }
      &:nth-of-type(2){
        opacity : 0;
      }
      &:nth-of-type(3){
        top : 50%;
        transform: rotate(-45deg);
      }
    }

  }

  @media screen and (max-width: 820px) {
      display: block;
  }

`;

interface Router{
  name : string
  link : string
}

interface MOBHEADER{
  router : Router[]
  onMenu : Boolean
  setOnMenu : React.Dispatch<React.SetStateAction<boolean>>
}

export default function Header() {

  const {pathname} = useLocation();

  // 라우터 배열처리
  const router : Router[] = [
    {
      name : "Home",
      link : "/"
    },
    {
      name : "About",
      link : "about"
    },
    {
      name : "Project",
      link : "project"
    },
    {
      name : "Contact",
      link : "contact"
    }
  ]

  // 모바일 메뉴
  const [onMenu,setOnMenu] = useState(false);

  // Resize
  useEffect(()=>{

    const resizeHandler = ()=>{
      if(window.innerWidth >= 821) {
        setOnMenu(false);
      }
    }

    window.addEventListener('resize',resizeHandler);

    return ()=>{
      window.removeEventListener('resize',resizeHandler);
    }

  },[]);

  // 라우터변경시
  useEffect(()=>{
    setOnMenu(false);
  },[pathname])

  return (
    <>
      <header className='_header'>

        <div className="name"><Link to='/'>KJY.dev</Link></div>

        <div className="gnb">
          {
            router.map((e,i)=><Link key={i} to={e.link}>{e.name}</Link>)
          }
        </div>

        <Menu 
          style={{top: "50%",transform: "translateY(-50%)"}} 
          onClick={()=>setOnMenu(true)}
        >
          <span></span>
          <span></span>
          <span></span>
        </Menu>
        
      </header>

      <MobHeader 
        router={router}
        onMenu={onMenu}
        setOnMenu={setOnMenu}
      />

    </>
  )

}

function MobHeader(
  {router, onMenu, setOnMenu} : MOBHEADER
){

  return (

    <div 
      className={`mob-header ${onMenu ? "on" : ""}`}
    >
      <Menu 
        className='on' 
        onClick={()=>{setOnMenu(false)}}
      >
        <span></span>
        <span></span>
        <span></span>
      </Menu>
      <ul>
        {
          router.map((e,i)=><li key={i}><Link to={e.link}>{e.name}</Link></li>)
        }
      </ul>
    </div>

  )

}