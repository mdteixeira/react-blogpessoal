import { ReactNode, createContext, useEffect, useState } from 'react';
import UsuarioLogin from '../models/UsuarioLogin';
import { login } from '../services/Service';
import { toastAlerta } from '../utils/toastAlerta';

interface AuthContextProps {
  usuario: UsuarioLogin;
  handleLogout(): void;
  handleLogin(usuario: UsuarioLogin): Promise<void>;
  isLoading: boolean;
}

interface AuthProvidersProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: AuthProvidersProps) {
  const [usuario, setUsuario] = useState<UsuarioLogin>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: '',
    token: '',
  });

  useEffect(() => {
    if (localStorage.getItem('usuario')) {
      setUsuario(JSON.parse(localStorage.getItem('usuario') ?? ''));
    }
  }, []);

  const [isLoading, setIsLoading] = useState(false);

  async function handleLogin(userLogin: UsuarioLogin) {
    setIsLoading(true);

    try {
      await login(`/usuarios/logar`, userLogin, setUsuario);
      toastAlerta('Usuário foi autenticado com sucesso!', 'sucesso');
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      toastAlerta('Os dados do Usuário estão inconsistentes!', 'erro');
      setIsLoading(false);
    }
  }

  function handleLogout() {
    setUsuario({
      id: 0,
      nome: '',
      usuario: '',
      senha: '',
      foto: '',
      token: '',
    });
    localStorage.setItem('usuario', '');
    localStorage.setItem('token', '');
  }

  return (
    <AuthContext.Provider value={{ usuario, handleLogin, handleLogout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}
