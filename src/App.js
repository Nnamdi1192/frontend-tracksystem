import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage, NewUserPage } from "./pages";
const App = () => {
  return (
    <div className="bg-red-400">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user/*">
          <Route index element={<NewUserPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
