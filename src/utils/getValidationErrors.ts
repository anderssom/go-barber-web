import {ValidationError} from 'yup';

interface Errors {
    [key: string]: string;
}

export default function getValidationErrors(err: ValidationError): Errors {
    const validationErrors: Errors = {};
//https://app.rocketseat.com.br/h/forum/gostack-11/f234c89c-d627-401d-b706-aff0cd4e3eeb
    err.inner.forEach((error) => {
        if(error.path){
            validationErrors[error.path] = error.message;
        }
    });

    return validationErrors;
}