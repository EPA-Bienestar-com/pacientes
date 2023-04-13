import { Anchor } from '@mantine/core';
import { Document } from '@medplum/react';
import React from 'react';
import { Link } from 'react-router-dom';

export function LandingPage(): JSX.Element {
  return (
    <Document>
      <h1>Bienvenido!</h1>
      <p>
        Aquí encontrará usuarios/pacientes desde la API. Si no está registrado, haga <a href="https://app.medplum.epa-bienestar.com/register"> click aquí</a>.
	Una vez dado de alta, podrá ingresar en su proyecto, haciendo click en el siguiente enlace.
      </p>
      <p>
        <Anchor to="/signin" component={Link}>
          Login
        </Anchor>
      </p>
    </Document>
  );
}
