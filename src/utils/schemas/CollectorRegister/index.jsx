import { useFormik } from 'formik';
import * as yup from 'yup';

export const CollectorRegisterSchema = yup.object().shape({
  name: yup.string().required('Required'),
  email: yup.string().email('Invalid email').required('Required'),
  password: yup.string().min(8, 'A senha deve ter pelo menos 8 caracteres').required('Por favor, escreva sua senha'),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'As senhas devem ser iguais').required('Por favor, confirme sua senha'),
  cpf: yup.string().required('Required'),
  phone: yup.string().required('Required'),
  cep: yup.string().required('Required'),
  street: yup.string().required('Required'),
  number: yup.string().required('Required'),
  complement: yup.string().required('Required'),
  neighborhood: yup.string().required('Required'),
  city: yup.string().required('Required'),
  state: yup.string().required('Required'),
});
