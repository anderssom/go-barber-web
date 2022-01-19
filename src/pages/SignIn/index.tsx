import React from 'react';
import { FiLogIn, FiMail, FiLock} from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

//componentes
import Input from '../../components/input';
import Buttton from '../../components/Button';

import { Container, Content, Background } from './style';

const SignIn: React.FC = () => (
    <Container>
        <Content>
            <img src={logoImg} alt="GoBarber" />

            <form>
                <h1>Faça seu logon</h1>

                <Input name="E-mail" icon={FiMail} placeholder="E-mail" />

                <Input name="password" icon={FiLock} type="password" placeholder="Senha" />

                <Buttton type="submit">Entra</Buttton>

                <a href="a">Esqueci minha senha</a>
            </form>
            <a href="login">
                    <FiLogIn/>
                    Criar conta</a>
        </Content>

        <Background></Background>
    </Container>
);

export default SignIn;