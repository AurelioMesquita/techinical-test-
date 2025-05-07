import styles from './styles.module.css';
import { useTaskContext } from '../../contexts/TaskContext';

type CountDownProps = {
  fomattedSecondsRemaining: string;
};
export function CountDown({ fomattedSecondsRemaining }: CountDownProps) {
  const taskContext = useTaskContext();
  console.log(taskContext);
  return <div className={styles.container}>{fomattedSecondsRemaining}</div>;
}
