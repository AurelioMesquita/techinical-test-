import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from 'lucide-react';
import styles from './styles.module.css';
import { useEffect, useState } from 'react';

type availableTheme = 'dark' | 'light';
export function Menu() {
  const [theme, setTheme] = useState<availableTheme>(() => {
    const storageTheme =
      (localStorage.getItem('theme') as availableTheme) || 'dark';
    return storageTheme;
  });

  const handleClickTheme = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    e.preventDefault();
    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return nextTheme;
    });
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <nav className={styles.menu}>
      <a className={styles.menuLink} href='#'>
        <HouseIcon />
      </a>
      <a className={styles.menuLink} href='#'>
        <HistoryIcon />
      </a>
      <a className={styles.menuLink} href='#'>
        <SettingsIcon />
      </a>
      <a className={styles.menuLink} href='#' onClick={handleClickTheme}>
        {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
      </a>
    </nav>
  );
}
