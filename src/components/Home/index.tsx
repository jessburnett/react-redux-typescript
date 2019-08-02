import * as React from 'react';

import ApiCallExample from 'containers/ApiCallExample/index';

export const Home = (): JSX.Element => (
  <div>
    <h1>HOME</h1>
    <img src="/assets/images/flower.jpg" />
    <h3>API call example:</h3>
    <ApiCallExample />
  </div>
);

export default Home;
