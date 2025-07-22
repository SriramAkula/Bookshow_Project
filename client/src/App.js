import { Routes, Route } from "react-router";
import React from "react";

import Pages from "./pages";
import Layout from "./layouts";
import Login from "./pages/auth/login";
import Signup from "./pages/auth/signup";

function App() {
  return (
    <Routes>
      {/* Public auth routes without layout */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* App routes with layout */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Pages.Home />} />
        <Route path="/:id" element={<Pages.MovieDetails />} />
        <Route path="/:id/:date" element={<Pages.Booking />} />
      </Route>
    </Routes>
  );
}

export default App;
