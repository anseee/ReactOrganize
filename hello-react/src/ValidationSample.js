import React, { useState } from 'react';
import './ValidationSample.css';

const ValidationSample = () => {
  let input = React.createRef();

  const [form, setForm] = useState({
    password: '',
    clicked: false,
    validated: false,
  });
  const { password, clicked, validated } = form;
  const onChange = (e) => {
    setForm({
      password: e.target.value,
    });
  };

  const onClick = () => {
    setForm({
      clicked: true,
      validated: password === '0000',
    });
    input.focus();
  };

  return (
    <div>
      <input
        ref={(ref) => (input = ref)}
        type="password"
        value={password}
        onChange={onChange}
        className={clicked ? (validated ? 'success' : 'failure') : ''}
      />
      <button onClick={onClick}>검증하기</button>
    </div>
  );
};

export default ValidationSample;
