import {useFormik} from 'formik';
import * as yup from 'yup';

export const RegisterSchema = yup.object().shape({
  username: yup.string().required('Required'),
  email: yup.string().email('Invalid email').required('Required'),
  password: yup.string().min(8, 'A senha deve ter pelo menos 8 caracteres').required('Por favor, escreva sua senha'),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'As senhas devem ser iguais').required('Por favor, confirme sua senha'),
});
