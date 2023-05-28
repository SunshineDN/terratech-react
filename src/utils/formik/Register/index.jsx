import {useFormik} from 'formik';
import * as yup from 'yup';

const RegisterSchema = yup.object().shape({
  username: yup.string().required('Required'),
  email: yup.string().email('Invalid email').required('Required'),
  password: yup.string().min(8, 'A senha deve ter pelo menos 8 caracteres').required('Por favor, escreva sua senha'),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'As senhas devem ser iguais').required('Por favor, confirme sua senha'),
});

export const RegisterFormik = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: RegisterSchema,
    onSubmit: (values, {resetForm}) => {
      // enviar pro db aqui
      alert(JSON.stringify(values, null, 2));
      resetForm();
    }
  });

  return formik;
}
