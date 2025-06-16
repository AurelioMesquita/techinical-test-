import { TrashIcon } from 'lucide-react';
import { Container } from '../../components/Container';
import { DefaultButton } from '../../components/DefaultButton';
import { Heading } from '../../components/Heading';
import { MainTemplate } from '../../templates/MainTemplate';
import styles from './styles.module.css';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { formatedDate } from '../../utils/formatDate';
import { status } from '../../utils/Status';

export function HistoryPage() {
  const { state, dispatch } = useTaskContext();
  return (
    <MainTemplate>
      <Container>
        <Heading>
          <span>History</span>
          <span className={styles.buttonContainer}>
            <DefaultButton
              icon={<TrashIcon />}
              color='red'
              aria-label='Apagar todo o historico'
              title='Apagar todo o historico'
            />
          </span>
        </Heading>
      </Container>

      <Container>
        <div className='responsiveTable'>
          <table>
            <thead>
              <tr>
                <td>Tarefa</td>
                <td>Duração</td>
                <td>Status</td>
                <td>Tipo</td>
              </tr>
            </thead>
            {state.tasks.map(task => {
              return (
                <>
                  <tbody>
                    <tr>
                      <td>{task.name}</td>
                      <td>{task.duration}min</td>
                      <td>{status(task.completeDate)}</td>
                      <td>{task.type}</td>
                    </tr>
                  </tbody>
                </>
              );
            })}
          </table>
        </div>
      </Container>
    </MainTemplate>
  );
}
