import React, { FormEvent, useState } from 'react';
import { SspanText } from '../componentsStyled/Text';
import Button from '../componentsStyled/Button';
import { Box } from '../componentsStyled/Box';
import { useNavigate } from 'react-router-dom';
import IconVisibility from '../componentsStyled/icon/iconvisibility';
import IconVisibilityOff from '../componentsStyled/icon/iconvisibilityoff';

interface User {
 email: string;
 password: string;
}

interface Dados {
  customerId: number;
}

const Validation: React.FC = () => {
 const [user, setUser] = useState<User>({
  email:"", password:""
 });
 const [showPassword, setShowPassword] = useState(false);
 const [success, setSuccess] = useState(false);
 const [error, setError] = useState<string | null>(null); 
 const navigate = useNavigate();
 const [loading, setLoading] = useState(false);

 const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
 
  try {
    setLoading(true);
     const response = await fetch(`https://api.troquefuthomologacao.futfanatics.com.br/api/login`, {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify(user),
       
     });

     const responseApi = await response.json();

     if (response.status === 401 || responseApi.error) {
      setError('Senha incorreta. Por favor, verifique seus dados.');
    } else {
      localStorage.setItem('auth', JSON.stringify(responseApi));
      setSuccess(true);
      navigate('/devolution');
     } 
  } catch (error) {
     console.error('Ocorreu um erro:', error);
     setError('Senha incorreta. Por favor, verifique seus dados.');
  }finally {
    setLoading(false);
  }
 };

 const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    setError(null);
 };
 const togglePasswordVisibility = () => {
  setShowPassword(!showPassword);
};
 return (
    <form onSubmit={handleSubmit} className="col-md-6 position-relative">
      <Box margin="32px 0px " typeBox="login" className="d-flex flex-column">
        <label>Login</label>
        <input name="email" type="text" placeholder="Insira seu e-mail"  onChange={handleChange} />
      </Box>
      <Box margin="32px 0px" typeBox="login" className="d-flex flex-column position-relative">
      <label>Senha</label>
        <input
          name='password'
          type={showPassword ? 'text' : 'password'}
          placeholder="Insira sua senha"
          onChange={handleChange}
        />
        <span onClick={togglePasswordVisibility} className='btn-visibility'>
          {showPassword ? <IconVisibilityOff width={24}/> : <IconVisibility width={24}></IconVisibility>}
        </span>
        {error && <p style={{ color: 'red' }}>*{error}</p>}
      </Box>
      <div className="d-flex justify-content-end">
      <SspanText fontSize="14px" color="#192c53" fontWeight={600} ><a className='link-senha' href='https://www.futfanatics.com.br/loja/recuperar_senha.php'>
        Esqueci a senha</a></SspanText>
      </div>
      {loading && <div className="loading-spinner"></div>}
      <Button margin="32px auto 0px auto" type="submit">Confirmar</Button>
    </form>
 );
};

export default Validation;
