interface Props {
  title: string;
  text: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setText: React.Dispatch<React.SetStateAction<string>>;
  createNewNote: ()=>void;
}

function NewNota(props: Props) {
  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.setTitle(e.target.value);
  };
  const handleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    props.setText(e.target.value);
  };
  return (
    <section>
      <div>
        <input
          value={props.title}
          onChange={(e) => handleTitle(e)}
          placeholder='Nome da Nota'
        />
        <textarea
          value={props.text}
          onChange={(e) => handleText(e)}
          placeholder='informações extras'
        />
        <button onClick={props.createNewNote}>Nova Nota</button>
      </div>
    </section>
  );
}

export default NewNota;
