import React from 'react';
import { useRouter } from 'next/router';

const AboutId = () => {
  const { query: { id } } = useRouter();
  return (
    <div>AboutId: {id}</div>
  );
};

export default AboutId;
