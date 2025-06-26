import { SaveIcon } from 'lucide-react';
import { Container } from '../../components/Container';
import { DefaultButton } from '../../components/DefaultButton';
import { DefaultInput } from '../../components/DefaultInput';
import { Heading } from '../../components/Heading';
import { MainTemplate } from '../../templates/MainTemplate';

import styles from './styles.module.css';
import { useEffect, useRef } from 'react';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { showMessage } from '../../adapters/showMessage';
import { TaskActionTypes } from '../../contexts/TaskContext/taskActions';

export function Settings() {
  useEffect(() => {
    document.title = 'Configurações';
  }, []);
  const { state, dispatch } = useTaskContext();
  const workTimeInputRef = useRef<HTMLInputElement>(null);
  const shortBreakTimeInputRef = useRef<HTMLInputElement>(null);
  const longBreakTimeInputRef = useRef<HTMLInputElement>(null);

  function handleSaveSettings(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    showMessage.dismiss();
    const workTime = Number(workTimeInputRef.current?.value);
    const shortBreakTime = Number(shortBreakTimeInputRef.current?.value);
    const longBreakTime = Number(longBreakTimeInputRef.current?.value);

    if (workTime < 1 || workTime > 99) {
      showMessage.error('Digite valores entre 1 e 99 para foco.');
      return;
    }
    if (shortBreakTime < 1 || shortBreakTime > 30) {
      showMessage.error('Digite valores entre 1 e 30 para descanso curto.');
      return;
    }

    if (longBreakTime < 1 || longBreakTime > 60) {
      showMessage.error('Digite valores entre 1 e 60 para descanso longo.');
      return;
    }

    if (isNaN(workTime) || isNaN(shortBreakTime) || isNaN(longBreakTime)) {
      showMessage.error('Use apenas numeros para todos os campos.');
      return;
    }

    dispatch({
      type: TaskActionTypes.CHANGE_SETTINGS,
      payload: {
        workTime,
        shortBreakTime,
        longBreakTime,
      },
    });
    showMessage.sucess('Configurações salvas!');
  }
  return (
    <>
      <MainTemplate>
        <Container>
          <Heading>Configurações</Heading>
        </Container>

        <Container>
          <p className={styles.paragrafo}>
            Modifique as configurações para tempo de foco, descanso curto e
            descanso longo.
          </p>
        </Container>

        <Container>
          <form action='' className='form' onSubmit={handleSaveSettings}>
            <div className='formRow'>
              <DefaultInput
                id='workTime'
                type='number'
                labelText='Foco'
                ref={workTimeInputRef}
                placeholder='Foco'
                defaultValue={state.config.workTime}
              />
            </div>
            <div className='formRow'>
              <DefaultInput
                id='shortBreakTime'
                type='number'
                labelText='Descanso curto'
                ref={shortBreakTimeInputRef}
                placeholder='Descanso curto'
                defaultValue={state.config.shortBreakTime}
              />
            </div>
            <div className='formRow'>
              <DefaultInput
                id='longBreakTime'
                type='number'
                labelText='Descanso longo'
                ref={longBreakTimeInputRef}
                placeholder='Descanso longo'
                defaultValue={state.config.longBreakTime}
              />
            </div>
            <div className='formRow'>
              <DefaultButton
                icon={<SaveIcon />}
                arial-label='Salvar configurações'
                title='Salvar configuraçoes'
              />
            </div>
          </form>
        </Container>
      </MainTemplate>
      ;
    </>
  );
}
