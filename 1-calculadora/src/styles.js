import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-image: linear-gradient(to top, #040203, #140011, #1a001d, #18032c, #010a3d);
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Content = styled.div`
    background-color: #c4c4;
    width: 60%;
    max-width: 300px;
    padding: 20px;
    border-radius: .8rem;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`

export const Row = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
`

export const Column = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 80px;
`

