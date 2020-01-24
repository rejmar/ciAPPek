import React from 'react';
import { Mast } from './component/mast';
import Content from './container/content';
import { Footer } from './component/footer';

import './style/app.sass';

const App = () => {
  return (
    <div className="container">
      <Mast />
      <Content />
      <Footer />
    </div>
  );
};

export default App;
