import useAuth from "../../context/AuthProvider/useAuth";

export const ProtectedLayout = ({ children }: { children: JSX.Element }) => {
  const auth = useAuth();

  if (!auth.email) {
    return <h1>Acesso negado! verifique seu cadastro.</h1>;
  }

  return children;
};
