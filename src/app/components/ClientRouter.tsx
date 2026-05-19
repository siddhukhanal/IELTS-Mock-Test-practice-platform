'use client'; // Essential for Next.js

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';
import Grid from './Dashboard/Grid';

export default function ClientRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/grid" element={<Grid />} />
        {/* Add more routes here */}
      </Routes>
    </BrowserRouter>
  );
}