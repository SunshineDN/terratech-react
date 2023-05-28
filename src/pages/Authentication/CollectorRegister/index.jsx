import { CollectorRegisterSchema } from '../../../utils/schemas/CollectorRegister/index.jsx';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

export const CollectorRegister = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(CollectorRegisterSchema),
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data, null, 2));
  };



  return (
    <form onSubmit={ handleSubmit(onSubmit) } style={ { backgroundColor: 'springgreen' } }>
      <input type="text" placeholder="Nome" { ...register('name') } />
      <p>{ errors.name?.message }</p>
      <input type="text" placeholder="Email" { ...register('email') } />
      <p>{ errors.email?.message }</p>
      <input type="password" placeholder="Senha" { ...register('password') } />
      <p>{ errors.password?.message }</p>
      <input type="password" placeholder="Confirmar senha" { ...register('confirmPassword') } />
      <p>{ errors.confirmPassword?.message }</p>
      <input type="text" placeholder="CPF" { ...register('cpf') } />
      <p>{ errors.cpf?.message }</p>
      <input type="text" placeholder="Telefone" { ...register('phone') } />
      <p>{ errors.phone?.message }</p>
      <input type="text" placeholder="CEP" { ...register('cep') } />
      <p>{ errors.cep?.message }</p>
      <input type="text" placeholder="Rua" { ...register('street') } />
      <p>{ errors.street?.message }</p>
      <input type="text" placeholder="Número" { ...register('number') } />
      <p>{ errors.number?.message }</p>
      <input type="text" placeholder="Complemento" { ...register('complement') } />
      <p>{ errors.complement?.message }</p>
      <input type="text" placeholder="Bairro" { ...register('neighborhood') } />
      <p>{ errors.neighborhood?.message }</p>
      <input type="text" placeholder="Cidade" { ...register('city') } />
      <p>{ errors.city?.message }</p>
      <input type="text" placeholder="Estado" { ...register('state') } />
      <p>{ errors.state?.message }</p>
      <button type="submit">Cadastrar</button>
    </form>
  );
};
