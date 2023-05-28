import { LoginFormik } from '../../../utils/formik/Login';


export const Login = () => {
  const formik = LoginFormik();

  return (
    <form onSubmit={ formik.handleSubmit }>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={ formik.handleChange }
          value={ formik.values.email }
        />
        { formik.errors.email ? <div>{ formik.errors.email }</div> : null }
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={ formik.handleChange }
          value={ formik.values.password }
        />
        { formik.errors.password ? <div>{ formik.errors.password }</div> : null }
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
