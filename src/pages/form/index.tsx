import Input from '@/components/input';
import React from 'react';

const Form = () => {
  const handleSubmit = (e: any) => {
    e?.preventDefault?.();
    console.log(e.target);
  };
  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Patient Details</legend>
        <Input name='First name' />
        <Input name='Last name' />
        <Input name='Phone number' type="number" />
        <Input name='Email' type="email" />
        <Input name='Age' type='number' />
      </fieldset>
      <button type='submit'>Submit</button>
    </form>
  );
};

export default Form;
