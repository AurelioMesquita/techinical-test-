import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import style from './styles.module.css';

export function Cycles() {
  const { state } = useTaskContext();

  const cycleSteps = Array.from({ length: state.currentCycle });
  console.log(cycleSteps);

  const cycleDescriptionMap = {
    workTime: 'trabalho',
    shortBreakTime: 'descanso curto',
    longBreakTime: 'descanso longo',
  };

  return (
    <div className={style.cycles}>
      <span>Ciclos:</span>

      <div className={style.cycleDots}>
        {cycleSteps.map((__, index) => {
          const type = getNextCycleType(getNextCycle(index));
          console.log(type);
          return (
            <span
              key={`${type}`}
              className={`${style.cycleDot} ${style[type]}`}
              aria-label={`Indicador de ciclo de ${cycleDescriptionMap[type]}`}
              title={`Indicador de ciclo de ${cycleDescriptionMap[type]}`}
            ></span>
          );
        })}
      </div>
    </div>
  );
}
