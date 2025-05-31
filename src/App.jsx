import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/layouts/Layout';
import OrgInfoPage from './pages/OrgInfoPage';
import IntroPage from './pages/IntroPage';

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<IntroPage />} />
          <Route path="/:org" element={<OrgInfoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
