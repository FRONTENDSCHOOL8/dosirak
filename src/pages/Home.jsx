import { useState, useEffect } from 'react';

export const Component = () => {
  const [name, setName] = useState('');

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem('pocketbase_auth'));
    console.log(auth);
    if (auth) {
      setName(auth.model.name);
    }
  }, []);

  return (
    <section>
      <h2>홈</h2>
      <span>{name}님 안녕하세요!</span>
    </section>
  );
};

Component.displayName = 'Home';
