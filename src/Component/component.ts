import styled from "styled-components"

// 메인의 아이콘 원형들
export const Circle = styled.div`
    width: 30px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: relative;
    border-radius: 1000px;
    &::after {
        content: '';
        display: block;
        padding-bottom: 100%;
    }

    > * {
        position: absolute; 
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 100%;
        object-fit:cover;
    }
`;


// project , contact 페이지 타이틀
export const PageTitle = styled.h1`
    font-size : 24px;
    font-weight : bold;

    @media screen and (max-width:820px) {
        font-size : 20px;
    }

`;


export const Wrap = styled.div`
    padding: 125px 2.5%;
    
    @media screen and (max-width:820px) {
        padding: 125px 2.5% 100px;
    }

`

export const MaxWrap = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    width : 90%;
    position: relative;
    z-index : 3;
`;


export const Jelly = styled.div`
    width: 500px;
    background: rgb(218, 154, 218);
    border-radius: 60% 40% 50% 40% / 30% 40% 30% 50%;
    position: absolute; transform: translateX(50%);
    
    &::after {
        content: ''; 
        display: block;
        padding-bottom: 100%;
    }

    border-radius: 50% 50% 50% 50% / 50% 50% 50% 50%;
`;