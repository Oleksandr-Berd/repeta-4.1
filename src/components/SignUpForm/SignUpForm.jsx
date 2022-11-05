import css from './SignUpForm.module.css';
import { useState } from 'react';

export default function SignUpForm() {
  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const handleChange = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  return (
    <form className={css.form} autoComplete="off">
      <label className={css.label}>
        <span>Mail</span>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
        />
      </label>
      <label className={css.label}>
        <span>Password</span>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
        />
      </label>
      <button type="submit">to register</button>
    </form>
  );
}
