import { ChangeEvent, useState } from "react";
import styles from "./home.module.css";
import { Data } from "./interfaces";
import { data } from "./constants";

const App = (): JSX.Element => {
  const [title, setTitle] = useState<string>();
  const [arr, setArr] = useState<Data[]>(data);

  const changeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    setTitle(evt.target.value);
  };
  const handleSubmit = (): void => {
    if (!title?.length) return;
    const newData = {
      title: title,
      id: new Date().getTime(),
      desc: "desciption",
    };
    setArr([...arr, newData]);
    setTitle("");
  };
  const deleteItem = (id: number): void => {
    const newData = arr.filter((i) => i.id !== id);
    setArr(newData);
  };
  return (
    <div className={styles.todo}>
      <h1 className={styles.title}>APP Todo</h1>
      <div>
        <input
          type="text"
          placeholder="Enter text"
          className={styles.input}
          name=""
          value={title}
          onChange={changeHandler}
          id=""
        />
        <button onClick={handleSubmit} className={styles.button}>
          Add Todo
        </button>
      </div>
      <div className={styles.card}>
        {arr.map((item) => (
          <div key={item.id} className={styles.cardItem}>
            <p>{item.title}</p>
            <div className={styles.delBtn}>
              <button onClick={() => deleteItem(item.id)}>Del</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
