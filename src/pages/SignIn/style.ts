import styled from 'styled-components';
import { shade } from 'polished'

import signInBackground from '../../assets/sign-in-background.png';

export const Container = styled.div`
    height: 100vh;

    display: flex; //pra ficar um do lado do outro
    align-items: stretch; //pra ter 100% da tela
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    place-content: center;

    width: 100%;
    max-width: 700px; 

    form {
        margin: 80px 0;
        width: 340px;
        text-align: center;
    

        h1 {
            margin-bottom: 24px;
        }

        a {
            color: #F4EDE8;
            display: block;
            margin-top: 24px;
            text-decoration: none;
            transition: color 0.2s;

            &:hover {
                color: ${shade(0.2, '#F4EDE8')};
            }
        }
    
    }
    >a {
        color: #ff9000;
        display: block;
        margin-top: 4px;
        text-decoration: none;
        transition: color 0.2s;

        display: flex;
        align-items: center;

        svg{
            margin-right: 16px;
        }

        &:hover {
            color: ${shade(0.2, '#ff9000')};
        }
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${signInBackground}) no-repeat center;
    background-size: cover; //ocupa todo espaço sobrando
`;


