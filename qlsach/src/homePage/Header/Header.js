import { useEffect, useState } from 'react';
import './Header.css'
import { useNavigate } from 'react-router-dom';

const Headerbar = () => {
  const navigate = useNavigate();
  const [scrollTop, setScrollTop] = useState(0);
  const onScroll = () => {
    const winScroll =
      document.documentElement.scrollTop || document.body.scrollTop;
    const height =
      document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    setScrollTop(scrolled);
    
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goToMainPage = () => {
    navigate('/');
  };
  return (
    <div className="header">
      <div style={{height: '5px', background: 'linear-gradient(to right, #4caf50, #81c784, #c8e6c9)', position: 'fixed',  borderRadius: '3px',

        top: 0,
        left: 0, width: `${scrollTop}%`,
        zIndex: 999,}}>

      </div>
      <h2 onClick={goToMainPage}>Trang Chủ</h2>
    </div>
  );
}

export default Headerbar;