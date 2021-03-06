import React, { useEffect, useState } from 'react';
import { enquireScreen } from 'enquire-js';
import ReactGA from 'react-ga';

import Banner from './banner';
import Feature from './features';
import Use from './use';
import Download from './download';
import Screenshot from './screenshot';
import Footer from './footer';
import '../assets/style/style';

let _isMobile;

enquireScreen((e) => {
  _isMobile = e;
});

export default () => {
  const [isMobile, setIsMobile] = useState(_isMobile || false);

  useEffect(() => {
    enquireScreen((e) => {
      setIsMobile(e);
    });

    if (process.env.NODE_ENV === 'production') {
      ReactGA.initialize('UA-179823339-1', {
        debug: false,
        testMode: false,
      });

      ReactGA.pageview(window.location.href);
    }
  }, []);
  
  return (
    <div>
      <div className="home-wrapper">
        <Banner isMobile={isMobile} />
        <Download />
        <Feature isMobile={isMobile} />
        <Screenshot />
        <Use />
      </div>
      <Footer />
    </div>
  );
};
