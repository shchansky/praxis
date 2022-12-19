import React from "react";

type Request = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export const RecursiveRequest = () => {
  const [state, setState] = React.useState<string[]>([]);

  const abortController = new AbortController();

  const loadDataById = async (id: number = 1): Promise<Request | void> => {
    try {
      const request = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
        { signal: abortController.signal }
      );

      const res: Request = await request.json();

      setState((state) => {
        return [...state, JSON.stringify(res)];
      });

      return res;
    } catch (err) {
      console.log(err);
    }
  };

  const intervalTimer = React.useRef<ReturnType<typeof setInterval> | null>(
    null
  );

  const loadCollection = () => {
    intervalTimer.current = setInterval(() => loadDataById(), 1000);
  };

  const stopLoadCollection = () => {
    if (intervalTimer.current) clearInterval(intervalTimer.current);
  };

  return (
    <div>
      <h3 style={{ margin: "0", paddingBottom: "20px" }}>RecursiveRequest</h3>
      <button onClick={loadCollection}>Загрузка</button>
      <button onClick={stopLoadCollection}>Остановить загрузку</button>
      <button onClick={() => setState((prev) => (prev = []))}>
        Очистить страницу
      </button>
      <div>
        {state.map((el, index) => (
          <div key={index}>{el}</div>
        ))}
      </div>
    </div>
  );
};
