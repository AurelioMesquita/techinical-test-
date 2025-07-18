import gravitational_beep from '../assets/audios/gravitational_beep.mp3';

export function loadBeep() {
  const audio = new Audio(gravitational_beep);
  audio.load();

  return () => {
    audio.currentTime = 0;
    audio.play().catch(error => {
      console.log('Erro ao pegar o audio', error);
    });
  };
}
