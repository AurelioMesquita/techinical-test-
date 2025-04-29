import style from './styles.module.css';
type DefaultInputProps = {
  id: string;
  labelText: string;
  placeholder: string;
} & React.ComponentProps<'input'>;

export function DefaultInput({
  id,
  type,
  placeholder,
  labelText,
}: DefaultInputProps) {
  return (
    <>
      <label htmlFor='meuInput'>{labelText}</label>
      <input
        className={style.input}
        id={id}
        type={type}
        placeholder={placeholder}
      ></input>
    </>
  );
}
