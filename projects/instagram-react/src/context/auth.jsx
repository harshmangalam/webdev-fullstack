import { useContext, useState, createContext } from "react";

const initialState = {
  isAuthenticated: false,
  user: null,
};
const AuthContext = createContext(initialState);

export default function AuthProvider({ children }) {
  const [state, setState] = useState(initialState);

  const handleAuthenticate = (user) => {
    setState({ ...state, isAuthenticated: true, user });
  };

  return (
    <AuthContext.Provider
      value={{
        state,
        handleAuthenticate,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// use context

export const useAuthContext = () => useContext(AuthContext);
