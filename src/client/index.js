/* globals document */
import React from 'react';
import { render } from 'react-dom';
import ClientRoot from './ClientRoot';

const doRender = Component => render(<Component />, document.getElementById('react-root'));

doRender(ClientRoot);
