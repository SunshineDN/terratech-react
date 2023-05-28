import { useFormik } from 'formik';
import * as yup from 'yup';

export const LoginSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Required'),
  password: yup.string().min(8, 'A senha deve ter pelo menos 8 caracteres').required('Por favor, escreva sua senha'),
});
