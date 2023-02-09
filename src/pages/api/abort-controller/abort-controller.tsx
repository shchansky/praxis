import React from "react";

export const FetchAbortController = () => {
  const [page, setPage] = React.useState<string>("0");
  const [content, setContent] = React.useState<string[]>([]);

  React.useEffect(() => {
    const abortController = new AbortController();

    const promise = new Promise((resolve, reject) => {
      if (Number(page) > 0) {
        fetch(`https://jsonplaceholder.typicode.com/todos/${page}`)
          .then((res) => res.json())
          .then((res) => resolve(res));

        if (Number(page) % 2) {
          abortController.abort();
          reject("Вызов оборван");
        }
      } else {
        reject("Нет данных");
      }
    });

    promise
      .then((res) => setContent([...content, JSON.stringify(res)]))
      .catch((err) => setContent([...content, JSON.stringify(err)]));

    /** Обязательно обрываем вызов после размонтироания компонента */
    return () => abortController.abort();
    // eslint-disable-next-line
  }, [page]);

  return (
    <div>
      <h3 style={{ margin: "0", paddingBottom: "20px" }}>
        FetchAbortController
      </h3>
      <input type="number" onChange={(ev) => setPage(ev.target.value)} />
      <div>
        {content.map((el, index) => (
          <div key={index}>{el}</div>
        ))}
      </div>
    </div>
  );
};
