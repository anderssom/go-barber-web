// framework react e funcao callback
import React,  {useCallback, useRef } from 'react';
// icones
import {  FiMail, FiLock, FiUser, FiArrowDownLeft} from 'react-icons/fi';
//form 
import {FormHandles} from '@unform/core';
import { Form } from '@unform/web';
//Biblioteca de validação
import * as Yup from 'yup';

import getValidationErrors from '../../utils/getValidationErrors';

//logo da pagina
import logoImg from '../../assets/logo.svg';

//componentes do formulario
import Input from '../../components/input';
import Buttton from '../../components/Button';

//style da pagina
import { Container, Content, Background } from './style';

const SignUp: React.FC = () => {
    const formRef = useRef<FormHandles>(null);

    console.log(formRef);

   const handleSubmit = useCallback( async  (data: object)=> {

        try {
            formRef.current?.setErrors({});

            const schema = Yup.object().shape({
                name: Yup.string().required('Nome Obrigatório'),
                email: Yup.string().required('E-mail Obrigatório').email('Digite um e-mail válido'),
                password: Yup.string().min(6, 'No mínimo 6 dígitos')
            });

            await schema.validate(data, {
                abortEarly: false,}
                );
        } catch (err: Yup.ValidationError | any){
            console.log(err);         

            const errors = getValidationErrors(err);

            formRef.current?.setErrors(errors);
        }
    }, [] );
    
    return (
        <Container>
            <Background></Background>
    
            <Content>
                <img src={logoImg} alt="GoBarber" />
    
                <Form ref={ formRef} initialData={{name: 'Anderson silva'}} onSubmit={handleSubmit}>
                    <h1>Faça seu Cadastro</h1>
    
                    <Input name="name" icon={FiUser} placeholder="name" />
    
                    <Input name="email" icon={FiMail} placeholder="E-mail" />
    
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