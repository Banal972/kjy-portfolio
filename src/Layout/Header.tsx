import React from 'react'
import { Link, useParams } from 'react-router-dom'

export default function Header() {

  const router = [
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

  return (
    <header className='_header'>
        <div className="name"><Link to='/'>KJY.dev</Link></div>

        <div className="gnb">
          {
            router.map((e,i)=><Link key={i} to={e.link}>{e.name}</Link>)
          }
        </div>

        <div className="menu">
          {
            Array.from({length : 3}).map((e,i)=>
              <span key={i}></span>
            )
          }
        </div>

    </header>
  )

}
