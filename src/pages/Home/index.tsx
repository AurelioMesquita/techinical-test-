import { useEffect } from 'react';
import { Container } from '../../components/Container';
import { CountDown } from '../../components/CountDown';
import { MainForm } from '../../components/mainForm';
import { MainTemplate } from '../../templates/MainTemplate';

export function Home() {
  useEffect(() => {
    document.title = 'Chronos Pomodoro';
  }, []);
  return (
    <MainTemplate>
      <Container>
        <CountDown fomattedSecondsRemaining='01' />
      </Container>

      <Container>
        <MainForm />
      </Container>
    </MainTemplate>
  );
}
