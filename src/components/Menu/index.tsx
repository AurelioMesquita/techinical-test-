import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from 'lucide-react';
import styles from './styles.module.css';
import { useEffect, useState } from 'react';
import { RouterLink } from '../RouterLink';

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
      <RouterLink className={styles.menuLink} href='/'>
        <HouseIcon />
      </RouterLink>
      <RouterLink className={styles.menuLink} href='/history'>
        <HistoryIcon />
      </RouterLink>
      <RouterLink className={styles.menuLink} href='/settings'>
        <SettingsIcon />
      </RouterLink>
      <RouterLink
        className={styles.menuLink}
        href='#'
        onClick={handleClickTheme}
      >
        {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
      </RouterLink>
    </nav>
  );
}
