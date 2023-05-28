import { RegisterSchema } from '../../../utils/schemas/Register/index.jsx';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

export const Register = () => {

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(RegisterSchema),
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <form onSubmit={ handleSubmit(onSubmit) } style={ { backgroundColor: 'springgreen' } }>
      <input type="text" placeholder="Username" { ...register('username') } />
      <p>{ errors.name?.message }</p>
      <input type="text" placeholder="Email" { ...register('email') } />
      <p>{ errors.email?.message }</p>
      <input type="password" placeholder="Senha" { ...register('password') } />
      <p>{ errors.password?.message }</p>
      <input type="password" placeholder="Confirmar senha" { ...register('confirmPassword') } />
      <p>{ errors.confirmPassword?.message }</p>
      <button type="submit">Cadastrar</button>
    </form>
  );
};
