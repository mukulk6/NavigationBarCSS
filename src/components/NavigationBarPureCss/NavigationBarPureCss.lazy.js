import React, { lazy, Suspense } from 'react';

const LazyNavigationBarPureCss = lazy(() => import('./NavigationBarPureCss'));

const NavigationBarPureCss = props => (
  <Suspense fallback={null}>
    <LazyNavigationBarPureCss {...props} />
  </Suspense>
);

export default NavigationBarPureCss;
