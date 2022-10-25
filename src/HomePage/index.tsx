interface nota {
    id: string;
    title: string;
    text: string;
}

interface Props {
    noteList: nota[]
}

function HomePage(props:  Props) {
  return (
    <section>
      <h1>Home</h1>
      <div>
        {props.noteList.map((nota) => 
          <div key={nota.id}>
            <h2>{nota.title}</h2>
            <p>{nota.text}</p>
          </div>)}
      </div>
    </section>
  );
}

export default HomePage;
