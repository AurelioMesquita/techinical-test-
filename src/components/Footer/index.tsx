import style from './styles.module.css';
export function Footer() {
  return (
    <footer className={style.footer}>
      <a href=''>Chronos Pomodoro &copy; {new Date().getFullYear()}</a>
    </footer>
  );
}
