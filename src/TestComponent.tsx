import React, { useState } from "react";

interface Props {
  text: string;
}

// interface UserData {
//   id: number;
//   name: string;
// }

// ジェネリクスで<Props>を指定することで、引数のpropsの型を指定できる
const TestComponent: React.FC<Props> = (props) => {
  // number も null も許容したい場合、ジェネリクスで指定
  // const [count, setCount] = useState<number | null>(0);
  // const [user, setUser] = useState<UserData>({ id: 1, name: "suzuki" });
  const [inputData, setInputData] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputData(e.target.value);
  };

  return (
    <div>
      <h1>{props.text}</h1>
      <input type="text" value={inputData} onChange={handleInputChange}></input>
      <h1>{inputData}</h1>
    </div>
  );
};

export default TestComponent;
