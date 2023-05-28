import { useFormik } from 'formik';
import * as yup from 'yup';

const LoginSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Required'),
  password: yup.string().min(8, 'A senha deve ter pelo menos 8 caracteres').required('Por favor, escreva sua senha'),
});

export const LoginFormik = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: LoginSchema,
    onSubmit: (values, {resetForm}) => {
      // enviar pro db aqui
      alert(JSON.stringify(values, null, 2));
      resetForm();
    }
  });

  return formik;
}
