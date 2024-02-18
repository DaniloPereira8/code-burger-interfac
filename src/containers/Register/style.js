import styled from 'styled-components'

import Background from '../../assets/background.svg'

export const Container = styled.div`
height: 100vh;
width: 100vw;
background: url('${Background}');
display: flex;
justify-content: center;
align-items: center;

`
export const RegisterImage = styled.img`
height: 100%;

`
export const ContainerItens = styled.div`
background: #373737;
border-radius: 0px 10px 10px 0px;
height: 100%;
padding: 25px 75px;
display: flex;
flex-direction: column;
justify-content: center;

form{
    display: flex;
    flex-direction: column;
}

h1{
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
    text-align: center;
    margin-top: 6px;
    color: #ffffff;


}

`

export const Label = styled.p`

font-style: normal;
font-size: 12px;
font-weight: 500;
line-height: 14px;
letter-spacing: 0em;
text-align: left;
color: #ffffff;
margin-top: ${props => (props.error ? '12px' : '28px')};
margin-bottom: 5px;
`

export const Input = styled.input`
width: 391.42px;
height: 32.32px;
background: #ffffff;
box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
border-radius: 5px;
border: ${props => (props.error ? '2px solid #cc1717' : 'none')};
outline: none;
padding-left: 10px;
`

export const SingInlink = styled.p`
font-style: normal;
font-weight: 300;
font-size: 14px;
line-height: 16px;
color: #ffffff;

a{
    cursor: pointer;
    text-decoration: underline;
}
`

export const ErrorMessage = styled.p`
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 16px;
margin-top: 2px;
color: #cc1717;
`
