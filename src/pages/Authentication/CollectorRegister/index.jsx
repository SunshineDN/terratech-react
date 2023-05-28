import { CollectorRegisterFormik } from '../../../utils/formik/CollectorRegister/index.jsx';

export const CollectorRegister = () => {
  const formik = CollectorRegisterFormik();
  return (
    <form onSubmit={ formik.handleSubmit }>
      <div>
        <label htmlFor="name">Username</label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={ formik.handleChange }
          value={ formik.values.username }
        />
        { formik.errors.name ? <div>{ formik.errors.name }</div> : null }
      </div>
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
      <div>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          onChange={ formik.handleChange }
          value={ formik.values.confirmPassword }
        />
        { formik.errors.confirmPassword ? <div>{ formik.errors.confirmPassword }</div> : null }
      </div>
      <div>
        <label htmlFor="cpf">Address</label>
        <input
          id="cpf"
          name="cpf"
          type="text"
          onChange={ formik.handleChange }
          value={ formik.values.cpf }
        />
        { formik.errors.cpf ? <div>{ formik.errors.cpf }</div> : null }
      </div>
      <div>
        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          name="phone"
          type="text"
          onChange={ formik.handleChange }
          value={ formik.values.phone }
        />
        { formik.errors.phone ? <div>{ formik.errors.phone }</div> : null }
      </div>
      <div>
        <label htmlFor="cep">CEP</label>
        <input
          id="cep"
          name="cep"
          type="text"
          onChange={ formik.handleChange }
          value={ formik.values.cep }
        />
        { formik.errors.cep ? <div>{ formik.errors.cep }</div> : null }
      </div>
      <div>
        <label htmlFor="street">Street</label>
        <input
          id="street"
          name="street"
          type="text"
          onChange={ formik.handleChange }
          value={ formik.values.street }
        />
        { formik.errors.street ? <div>{ formik.errors.street }</div> : null }
      </div>
      <div>
        <label htmlFor="number">Number</label>
        <input
          id="number"
          name="number"
          type="text"
          onChange={ formik.handleChange }
          value={ formik.values.number }
        />
        { formik.errors.number ? <div>{ formik.errors.number }</div> : null }
      </div>
      <div>
        <label htmlFor="complement">Complement</label>
        <input
          id="complement"
          name="complement"
          type="text"
          onChange={ formik.handleChange }
          value={ formik.values.complement }
        />
        { formik.errors.complement ? <div>{ formik.errors.complement }</div> : null }
      </div>
      <div>
        <label htmlFor="neighborhood">Neighborhood</label>
        <input
          id="neighborhood"
          name="neighborhood"
          type="text"
          onChange={ formik.handleChange }
          value={ formik.values.neighborhood }
        />
        { formik.errors.neighborhood ? <div>{ formik.errors.neighborhood }</div> : null }
      </div>
      <div>
        <label htmlFor="city">City</label>
        <input
          id="city"
          name="city"
          type="text"
          onChange={ formik.handleChange }
          value={ formik.values.city }
        />
        { formik.errors.city ? <div>{ formik.errors.city }</div> : null }
      </div>
      <div>
        <label htmlFor="state">State</label>
        <input
          id="state"
          name="state"
          type="text"
          onChange={ formik.handleChange }
          value={ formik.values.state }
        />
        { formik.errors.state ? <div>{ formik.errors.state }</div> : null }
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
