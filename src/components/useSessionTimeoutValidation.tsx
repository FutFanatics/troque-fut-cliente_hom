
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useSessionTimeoutValidation = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const lastLoginTime = localStorage.getItem('lastLoginTime');
    if (lastLoginTime) {
      const elapsedTime = Date.now() - parseInt(lastLoginTime, 10);
      const oneHourInMillis = 60 * 60 * 1000; 

      if (elapsedTime >= oneHourInMillis) {
        alert('Você está inativo há muito tempo, refaça o login')
        navigate('/login');
      }
    } else {
      navigate('/login');
    }
  }, [navigate]);

  return null; 
};

export default useSessionTimeoutValidation;
