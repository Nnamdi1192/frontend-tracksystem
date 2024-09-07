import { createContext, useState } from "react";

const UiContext = createContext();

export const UiContextProvider = ({ children }) => {
  const [displayError, setDisplayError] = useState(true);
  const [error, setError] = useState([]);

  const showError = () => {
    setDisplayError(false);

    setTimeout(() => hideError(), 4000);
  };

  const hideError = () => {
    setDisplayError(true);
    clearErrorMessage();
  };

  const writeError = (error) => {
    setError(error);
  };

  const clearErrorMessage = () => {
    setError([]);
  };

  return (
    <UiContext.Provider
      value={{ displayError, error, showError, hideError, writeError }}
    >
      {children}
    </UiContext.Provider>
  );
};

export default UiContext;
