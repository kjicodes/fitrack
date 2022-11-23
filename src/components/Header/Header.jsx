import './Header.css';
import Logo from '../../fit-logo.png';

export default function Header(props) {
  return (
    <div className="Header">
      <img src={Logo} alt="Logo"/>
    </div>
  )
};
