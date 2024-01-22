import React from 'react'
import { PageTitle, Wrap } from '../Component/component'
import styled from 'styled-components'

const Grid = styled.div`
  display : grid;
  grid-template-columns: repeat(3,1fr);
  margin-top : 25px;
`;

const Card = styled.div`

  border : 1px solid #000;
  margin : -1px;

  .background {
    background-color : #000;
    &::after {
      content: '';
      display: block;
      padding-bottom: 56.25%;
    }
  }

  .cont {
    padding : 5% 2.5%;
    box-sizing: border-box;

    dl {
      dt {
        font-weight : bold;
        font-size : 24px;
      }
      dd {
        margin-top : 15px;
        line-height : 1.5;
      }
    }
  
    .link {
      display : flex;
      margin-top : 50px;
      flex-wrap: wrap;
      margin : 30px -15px 0;
      a {
        flex : 1 1 calc(50% - 30px);
        text-align: center;
        background : #acf;
        margin : 15px 15px 0;
        padding : 5px 0;
        &:nth-of-type(1){
          flex : 0 0 calc(100% - 30px);
          margin-top : 0;
        }
      }
    }

  }

`;



export default function Project() {
  return (
    <Wrap className="project">
        <PageTitle>
            My Project !
        </PageTitle>
        <Grid>
          {
            Array.from({length : 4}).map((e,i)=>
              <Card> 
                  <div className="background"></div>
                  <div className="cont">
                    <dl>
                      <dt>타이틀</dt>
                      <dd>내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.</dd>
                    </dl>
                    <div className="link">
                      <a href="">123213</a>
                      <a href="">213213213</a>
                      <a href="">12321321321</a>
                    </div>
                  </div>
              </Card>
            )
          }
        </Grid>

    </Wrap>
  )
}
