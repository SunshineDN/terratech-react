import { LoginSchema } from '../../../utils/schemas/Login';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';


export const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(LoginSchema)
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data, null, 2));
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{backgroundColor: "springgreen"}}>
      <input type="text" placeholder="Email" {...register("email")} />
      <p>{errors.email?.message}</p>
      <input type="password" placeholder="Senha" {...register("password")} />
      <p>{errors.password?.message}</p>
      <button type="submit">Entrar</button>
    </form>
);
};
