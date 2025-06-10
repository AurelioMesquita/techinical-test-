import { Link } from 'react-router';
import style from './styles.module.css';
export function Footer() {
  return (
    <footer className={style.footer}>
      <Link to='about-pomodoro'>
        Chronos Pomodoro &copy; {new Date().getFullYear()}
      </Link>
    </footer>
  );
}
