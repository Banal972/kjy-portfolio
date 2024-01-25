import React from 'react'
import { Jelly, MaxWrap, PageTitle, Wrap } from '../Component/component'
import styled from 'styled-components'

const Layout = styled.ul`

    margin-top : 200px;
    line-height: 1.5;

    > li {
        + li {
            margin-top : 100px;
        }

        h2 {
            font-size : 24px;
            font-weight : bold;
        }

        > p {
            font-size : 16px;
            margin-top : 30px;
        }

        dl {
            margin-top : 30px;
            + dl {
                margin-top : 40px;
            }
            dt {
                font-size : 18px;
                font-weight : bold;
            }
            dd {
                margin-top : 20px;
                > p {
                    font-size : 16px;
                }
                ul {
                    margin-top : 15px;
                    li {
                        font-size : 16px;
                        display: flex;
                        &::before {
                            display: block; 
                            width: 5px; 
                            height: 5px;
                            border-radius: 100px;
                            background: #000;
                            content: '';
                            margin-right : 5px;
                            flex : 0 0 auto;
                            transform: translateY(180%);
                        }
                        + li {
                            margin-top : 10px;
                        }
                    }
                }
            }
        }

    }

    @media screen and (max-width:820px) {
        
        margin-top : 100px;

        > li {

            h2 {
                font-size : 20px;
            }
    
            > p {
                font-size : 14px;
            }
    
            dl {
                dt {
                    font-size : 16px;
                }
                dd {
                    > p {
                        font-size : 14px;
                    }
                    ul {
                        li {
                            font-size : 14px;
                        }
                    }
                }
            }

        }

    }

`;


export default function About() {

  return (
    <Wrap className="_about">

        <Jelly class='jelly1' color="#78afdd"/>
        <Jelly class='jelly2' color='#78afdd'/>
        
        <MaxWrap>

            <div className="center">
                <div className="img">
                </div>
                <dl>
                    <dt>안녕하세요!</dt>
                    <dd>프론트엔드 개발자 김지유입니다!</dd>
                </dl>
            </div>

            <Layout>
                <li>
                    <h2>자기소개</h2>
                    <p>
                        안녕하세요!<br/>
                        <br/>
                        저는 도전을 좋아하는 주니어 개발자 입니다.<br/>
                        새로운 기술을 배우고 활용하는 것에 큰 흥미를 느끼며, 다양한 기술과 스택에 관심을 가지고 있습니다.<br/>
                        <br/>
                        학습한 내용을 실제 프로젝트에 적용해보면서 더 나은 시스템을 구축하는 것을 좋아합니다.<br/>
                        <br/>
                        디자이너, 기획자, 개발자와의 소통을 통해 프로젝트의 시작과 끝까지 참여하며 팀원들과의 협업 경험을 쌓아갔습니다.
                        부족한 부분을 파악하고 개발 공부를 통해 성장하기 위해 항상 노력하며, 터득한 지식을 팀원들과 나누어 협업을 강조하는
                        가치를 중시합니다.<br/>
                        <br/>
                        코드의 가독성과 유지보수성을 항상 고려하고 프로젝트에 성공적으로 기여하며, 새로운 도전에 열려 있어 함께 일하며 배우고
                        성장하고 싶습니다.<br/>
                    </p>
                </li>
                <li>
                    <h2>기술과 경험</h2>
                    <dl>
                        <dt>JavaScript, TypeScript</dt>
                        <dd>
                            <ul>
                                <li>Ajax를 이용해 데이터를 가져와 가공하거나 다룰 수 있습니다.</li>
                                <li>Props에 올바른 타입이 들어갈수 있게 TypeScript를 사용합니다.</li>
                                <li>Type 와 Interface의 차이에 대한 이해가 있습니다.</li>
                            </ul>
                        </dd>
                    </dl>
                    <dl>
                        <dt>React, NextJS, Vue</dt>
                        <dd>
                            <ul>
                                <li>React 의 Hook을 능숙하게 다뤄, 컴포넌트를 함수형으로 개발합니다.</li>
                                <li>프로젝트를 고려하여 폴더의 아키텍쳐를 구상합니다.</li>
                                <li>styled-components 와 SCSS를 이용하여 디자인 전처리기와 라이브러리를 다룹니다.</li>
                                <li>재사용성이 높은 컴포넌트들을 이용하여 생상선을 향상 시킵니다.</li>
                                <li>React-router-dom 라이브러리를 이용해 라우터를 능숙하게 정리합니다.</li>
                                <li>리렌더링을 방지하여 useMemo와 useCallback 등을 적절하게 사용합니다.</li>
                                <li>NextJS의 SSR 와 CSR에 대한 이해도와 차이점을 알고있습니다.</li>
                                <li>NextJS의 Dynamic Route에 대한 이해가 있습니다.</li>
                            </ul>
                        </dd>
                    </dl>
                    <dl>
                        <dt>Recoli, Redux, Vuex</dt>
                        <dd>
                            <ul>
                                <li>상태관리 라이브러리를 사용해 다양한 컴포넌트 간의 상태를 공유 합니다.</li>
                                <li>컴포넌트의 순수성을 유지 시켜줍니다.</li>
                            </ul>
                        </dd>
                    </dl>
                    <dl>
                        <dt>GSAP</dt>
                        <dd>
                            <ul>
                                <li>GSAP의 Tween, Timeline, ScrollTrigger 등을 활용해 인터랙티브 웹 개발을 할 수 있습니다.</li>
                            </ul>
                        </dd>
                    </dl>
                </li>
                <li>
                    <h2>아직 부족한 부분</h2>
                    <dl>    
                        <dt>Jest / react-testing-library</dt>
                        <dd>
                            <ul>
                                <li>Javascript 테스트 유틸리티 와 테스트 프레임워크의 사용법을 익히고 있습니다.</li>
                            </ul>
                        </dd>
                    </dl>
                    <dl>    
                        <dt>NodeJS / MongoDB</dt>
                        <dd>
                            <ul>
                                <li>백엔드와의 통신을 위해 배우고 있지만 아직 부족한 부분이 많습니다.</li>
                            </ul>
                        </dd>
                    </dl>
                </li>
                <li>
                    <h2>교육 및 경력</h2>
                    <dl>    
                        <dt>경력</dt>
                        <dd>
                            <p>잇다소프트 (2020.12 - 2023.07)</p>
                            <ul>
                                <li>웹에이전시로 여러 회사 사이트의 웹페이지를 개발하고 유지보수 하며 관리하였습니다.</li>
                            </ul>
                        </dd>
                    </dl>
                    <dl>    
                        <dt>교육</dt>
                        <dd>
                            <ul>
                                <li>한양사이버대학교 컴퓨터공학과 2학년 (2023.02 입학 ~)</li>
                                <li>연희직업전문학교 웹퍼블리셔 과정 수료 (~~)</li>
                            </ul>
                        </dd>
                    </dl>
                </li>
            </Layout>

        </MaxWrap>

    </Wrap>
  )
}
