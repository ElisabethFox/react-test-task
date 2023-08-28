import { createContext, useState } from 'react';

export const ToggleContext = createContext({});

const ToggleContextProvider = ({ children }) => {
  const [isHeaderToggleActive, setHeaderToggleActive] = useState(false);
  const [isImgToggleActive, setImgToggleActive] = useState(false);

  return (
    <ToggleContext.Provider
      value={{
        isHeaderToggleActive,
        setHeaderToggleActive,
        isImgToggleActive,
        setImgToggleActive,
      }}
    >
      {children}
    </ToggleContext.Provider>
  );
};

export default ToggleContextProvider;
