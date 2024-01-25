import React, { useEffect, useState } from 'react'
import { PageTitle, Wrap } from '../Component/component'
import styled from 'styled-components'
import axios from 'axios';

const Grid = styled.div`
  display : grid;
  gap : 5px;
  grid-template-columns: repeat(3,1fr);
  margin-top : 25px;

  @media screen and (max-width:1024px) {
    grid-template-columns: repeat(2,1fr);
  }

  @media screen and (max-width:820px) {
    grid-template-columns: repeat(1,1fr);
  }

`;

const Card = styled.div`

  display : flex;
  flex-direction: column;
  border : 1px solid #ccc;

  .background {
    background-color : #000;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top center;
    &::after {
      content: '';
      display: block;
      padding-bottom: 56.25%;
    }
  }

  .cont {

    padding : 25px 3%;
    box-sizing: border-box;
    border-top : 1px solid #ccc;
    flex : 1;
    display : flex;
    flex-direction: column;
    justify-content: space-between;

    dl {
      dt {
        font-weight : bold;
        font-size : 20px;
      }
      dd {
        margin-top : calc(15/14*1em);
        line-height : 1.5;
        font-size : 14px;
      }
    }
  
    .link {
      display: grid;
      grid-template-columns: repeat(2,1fr);
      margin : 50px 0 0;
      font-size : 14px;
      gap : 0 10px;

      &.one {
        grid-template-columns: repeat(1,1fr);
      }

      a {

        text-align: center;
        padding : 7.5px 0;
        border-radius: 10px;
        box-sizing: border-box;
        border : 2px solid #000;
        transition: .4s;
        transition-property: color,background;

        &:hover {
          color : #fff;
        }
        
        &.github{
          grid-area: 2/span;
          &:hover {
            background : #000;
          }
        }

        &.memoir {
          border-color : #b782fd;
          &:hover {
            background : #b782fd;
          }
        }

        &.Notion {
          border-color : #55cdff;
          &:hover {
            background : #55cdff;
          }
        }

        &.demo {
          border-color : #ff4f4f;
          &:hover {
            background : #ff4f4f;
          }
        }

      }

    }


    @media screen and (max-width:820px) {
        
        dl {
            dt {
                font-size: 18px;
            }
            dd {
                font-size: 14px;
            }
        }

        .link {
            margin-top: 30px;
        }

    }

  }

`;

interface Link {
  name : string
  link : string
}

interface Result {
  id : number
  img : string
  title : string
  desc : string
  skill : string[]
  link : Link[]
}


export default function Project() {

  const [result,setResult] = useState<Result[]>([]);

  useEffect(()=>{

    const api : string | undefined = process.env.REACT_APP_AJAX_API;

    if(api){
      axios.get(api)
      .then(({data})=>{
        setResult(data);
      })
      .catch(e=>{
        console.log('통신 에러');
      })

    }

  },[]);
  
  return (
    
    <Wrap className="project">
        
        <PageTitle>My Project !</PageTitle>

        <Grid>
          {
            result.map((e,i)=>
              <Card key={i}> 
                  <div 
                    className="background"
                    style={{backgroundImage : `url(${e.img})`}}
                  ></div>

                  <div className="cont">
                    <dl>
                      <dt>{e.title}</dt>
                      <dd>{e.desc}</dd>
                    </dl>
                    {
                      e.link &&
                      <div className={`link ${e.link.length === 1 ? "one" : ''}`}>
                        {
                          e.link.map((e,i)=>
                            <a 
                              key={i} 
                              href={e.link}
                              target='_blank' 
                              rel="noreferrer"
                              className={e.name}
                            >{e.name}</a>
                          )
                        }
                      </div>
                    }
                  </div>
              </Card>
            )
          }
        </Grid>

    </Wrap>

  )
  
}
