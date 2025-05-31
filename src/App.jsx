import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layouts/Layout';
import OrgInfoPage from './pages/OrgInfoPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={
              <div style={{ fontSize: '5rem' }}>
                스페이드컴퍼니 과제 - 황채원
              </div>
            }
          />
          <Route path="/:org" element={<OrgInfoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
