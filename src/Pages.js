import React, { useState } from "react";

import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import People from './components/People';
import Pet from './components/Pet';

function Pages() {
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <Routes>
          <Route path="/owners" element={<People />} />
          <Route path="/pets" element={<Pet />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default Pages;
