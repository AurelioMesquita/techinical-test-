import style from './styles.module.css';
import { RouterLink } from '../RouterLink';
export function Footer() {
  return (
    <footer className={style.footer}>
      <RouterLink href='about-pomodoro'>
        Chronos Pomodoro &copy; {new Date().getFullYear()}
      </RouterLink>
    </footer>
  );
}
