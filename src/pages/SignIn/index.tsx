import React, {useCallback, useRef, useContext} from 'react';
import { FiLogIn, FiMail, FiLock} from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import {AuthContext} from '../../context/AuthContext';
import getValidationErrors from '../../utils/getValidationErrors';

import logoImg from '../../assets/logo.svg';

//componentes
import Input from '../../components/input';
import Buttton from '../../components/Button';

import { Container, Content, Background } from './style';

interface SigInFormData {
    email: string;
    password: string;
}

const SignIn: React.FC = () => {
        const formRef = useRef<FormHandles>(null);

        const { signIn } = useContext(AuthContext);
    
       const handleSubmit = useCallback( async  (data: SigInFormData)=> {
    
            try {
                formRef.current?.setErrors({});
    
                const schema = Yup.object().shape({
                    email: Yup.string().required('E-mail Obrigatório').email('Digite um e-mail válido'),
                    password: Yup.string().required('Senha Obrigatório')
                });
    
                await schema.validate(data, {
                    abortEarly: false,
                });

                signIn({
                    email: data.email,
                    password: data.password,
                });
            } catch (err: Yup.ValidationError | any){    
                const errors = getValidationErrors(err);
    
                formRef.current?.setErrors(errors);
            }
        }, [signIn] );
    return (
    <Container>
        <Content>
            <img src={logoImg} alt="GoBarber" />

            <Form ref={formRef} onSubmit={handleSubmit}>
                <h1>Faça seu logon</h1>

                <Input name="email" icon={FiMail} placeholder="E-mail" />

                <Input name="password" icon={FiLock} type="password" placeholder="Senha" />

                <Buttton type="submit">Entra</Buttton>

                <a href="a">Esqueci minha senha</a>
            </Form >
            <a href="login">
                    <FiLogIn/>
                    Criar conta</a>
        </Content>

        <Background></Background>
    </Container>
    );
}
export default SignIn;