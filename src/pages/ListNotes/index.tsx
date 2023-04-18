import { useEffect, useState } from "react";

const ListNotes = () => {
  const [list, setList] = useState<{ title: string, note: string }[]>([]);


  const setMockList = () => {
    return setList([
      { title: "Banana", note: "123456789" },
      { title: "hotdog", note: "123" },
      { title: "water", note: "bla bla bla" }
    ])
  }

  useEffect(
    () => { setMockList() }
    , []);

  return (
    <>
      <h2>Im the new landing page</h2>
      <h5>There's no css in here :(</h5>
      {list.map((item)=>(
        <div>
          <p>{item.title}</p>
          <p>{item.note}</p>
        </div>
      ))}
    </>
  );
}

export default ListNotes;