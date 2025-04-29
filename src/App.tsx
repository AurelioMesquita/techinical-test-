import { Container } from './components/Container';
import { Footer } from './components/Footer';
import { Heading } from './components/Heading';
import './styles/global.css';
import './styles/theme.css';
export function App() {
  return (
    <>
      <Container>
        <Heading>Heading</Heading>
      </Container>
      <Container>
        <Footer />
      </Container>
    </>
  );
}
