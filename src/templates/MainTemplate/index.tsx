import { Container } from '../../components/Container';
import { CountDown } from '../../components/CountDown';
import { Footer } from '../../components/Footer';
import { Logo } from '../../components/Logo';
import { MainForm } from '../../components/mainForm';
import { Menu } from '../../components/Menu';

type MainTemplateProps = {
  children: React.ReactNode;
};
export function MainTemplate({ children }: MainTemplateProps) {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>
      {children}
      <Container>
        <Footer />
      </Container>
    </>
  );
}
