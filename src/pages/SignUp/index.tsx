import React from 'react';
import {  FiMail, FiLock, FiUser, FiArrowDownLeft} from 'react-icons/fi';
import { Form } from '@unform/web';


import logoImg from '../../assets/logo.svg';

//componentes
import Input from '../../components/input';
import Buttton from '../../components/Button';

import { Container, Content, Background } from './style';

const SignUp: React.FC = () => {
    function handleSubmit(data: object): void {
        console.log(data);

    }

    return (
        <Container>
            <Background></Background>
    
            <Content>
                <img src={logoImg} alt="GoBarber" />
    
                <Form initialData={{name: 'Anderson'}} onSubmit={handleSubmit}>
                    <h1>Faça seu Cadastro</h1>
    
                    <Input name="name" icon={FiUser} placeholder="name" />
    
                    <Input name="E-mail" icon={FiMail} placeholder="E-mail" />
    
                    <Input name="password" icon={FiLock} type="password" placeholder="Senha" />
    
                    <Buttton type="submit">Cadastrar</Buttton>
    
                    
                </Form>
                <a href="login">
                        <FiArrowDownLeft/>
                        Volta para logon</a>
            </Content>
    
        </Container>
    );
    
}
export default SignUp;