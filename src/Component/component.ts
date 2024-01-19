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
    font-size : 32px;
    font-weight : bold;
`;