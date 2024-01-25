import React, { useEffect, useState } from 'react'
import { PageTitle, Wrap } from '../Component/component'
import styled from 'styled-components'
import axios from 'axios';

const Grid = styled.div`
  display : grid;
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

  border : 1px solid #ccc;
  margin : -1px;
  display : flex;
  flex-direction: column;

  .background {
    background-color : #000;
    &::after {
      content: '';
      display: block;
      padding-bottom: 56.25%;
    }
  }

  .cont {

    padding : 25px 3%;
    box-sizing: border-box;
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
      display : flex;
      flex-wrap: wrap;
      margin : 50px -5px 0;
      font-size : 14px;

      a {
        
        flex : 1 1 calc(50% - 10px);
        text-align: center;
        margin : 10px 5px 0;
        padding : 7.5px 0;
        border-radius: 10px;
        box-sizing: border-box;
        border : 2px solid #000;
        
        &.github{
          /* flex : 0 0 calc(100% - 10px);
          margin-top : 0; */
        }

        &.memoir {
          border-color : #b782fd;
        }

        &.demo {
          border-color : #ff4f4f;
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


interface Result {
  id : number
  img : string
  title : string
  desc : string
  skill : string[]
  link? : {
    gitub? : string
    memoir? : string
    demo? : string
  }
}


export default function Project() {

  const [result,setResult] = useState<Result[]>([]);

  useEffect(()=>{

    axios.get('http://localhost:9000/data')
    .then(({data})=>{
      setResult(data);
    })
    .catch(e=>{
      alert('에러가 발생했습니다.');
    })

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
                      <div className="link">
                        {
                          e.link.gitub && <a href={e.link.gitub} target='_blank' className='github'>Github</a>
                        }
                        {
                          e.link.memoir && <a href={e.link.memoir} target='_blank' className='memoir'>Memoir</a>
                        }
                        {
                          e.link.demo && <a href={e.link.demo} target='_blank' className='demo'>Demo</a>
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
