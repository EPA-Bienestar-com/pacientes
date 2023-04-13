import { Logo, SignInForm } from '@medplum/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export function SignInPage(): JSX.Element {
  const navigate = useNavigate();
  return (
    <SignInForm
      googleClientId="923362767297-c5pvdo9utd6ldmfv2i12cpclbo3hu5kp.apps.googleusercontent.com"
      onSuccess={() => navigate('/')}
    >
      <Logo size={32} />
      <h1>MVP | PROFESIONALES</h1>
	<h3>LISTADO DE PACIENTES</h3>
    </SignInForm>
  );
}
