// import logo from "./logo.svg";
import "./App.css";
import Data from "./data.json";

// これで JSON 構造の型が取れる
type UsersType = typeof Data;

// object types
interface NameProps {
  first: string;
  last: string;
}

let name: NameProps = {
  first: "Yamada",
  last: "Taro",
};

// Intersection Types
type ProfileProps = {
  age: number;
  city: string;
};

type LoginProps = {
  userName: string;
  password: string;
};

type UserProps = ProfileProps & LoginProps;

const userA: UserProps = {
  age: 30,
  city: "Tokyo",
  userName: "xxx",
  password: "yyy",
};

// Union Types
let value: boolean | number;
value = true; // OK
value = 10; // OK
value = "xxx"; // NG

let company: "Facebook" | "Google" | "Amazon";
company = "Amazon"; // OK
company = "Apple"; // NG

// typeof
let msg: string = "Hi";
let msg2: typeof msg;

// keyof
type KeysProps = {
  primary: string;
  secondary: string;
};

let key: keyof KeysProps;
key = "primary"; // OK
key = "xxx"; // NG

function App() {
  return <h2>Hello</h2>;
}

// typeof + keyof
const Sports = {
  soccer: "Soccer",
  baseball: "Baseball",
};

let keySports: keyof typeof Sports;
keySports = "soccer"; // OK

// より抽象度の高い string 型に具体的な文字列リテラルを代入するのは問題ない
const comp1 = "test";
let comp2: string = comp1;

// その逆はできない
let comp3: string = "test";
"test"型に string 型を代入...NG
let comp4: "test" = comp3;

let funcComp1 = (x: number) => {};
let funcComp2 = (x: string) => {};

// Generics ジェネリクス
// テンプレートだけ用意し、型は動的に変えることができる
// T...エイリアス
// エイリアスで受け取った型がそのまま属性の型になる
// ジェネリクスを定義した時点では型は定まっていない
interface Gen1<T> {
  item: T;
}
// string 型を指定し、string 型の値を定義
const gen0: Gen1<string> = { item: "hello" };
// 指定しないと「型引数が必要」というエラーになる
const gen1: Gen1<> = { item: "xxx" };

// 型のデフォルトを指定可能
interface Gen2<T = string> {
  item: T;
}
const gen2: Gen2 = { item: "hello" };
const gen3: Gen2<number> = { item: 10 };

// 特定の型だけを引数として受け取れるようにする
interface Gen3<T extends string | number> {
  item: T;
}
const gen4: Gen3<string> = { item: "hello" };

// 関数へのジェネリクス適用
function funcGen1<T>(props: T) {
  return { item: props };
}
const gen5 = funcGen1<string>("test");
// 明示的に T を書かなくても推論してくれる
const gen6 = funcGen1("test");
const gen7 = funcGen1<string | null>(null);

// extends も使える
function funcGen2<T extends string | null>(props: T) {
  return { value: props };
}
const gen8 = funcGen2("hello");

// 引数がオブジェクトの関数の場合
interface Props {
  price: number;
}
function funcGen3<T extends Props>(props: T) {
  return { value: props.price };
}
const gen9 = funcGen3({ price: 10 });

// アロー関数で書く場合
const funcGen4 = <T extends Props>(props: T) => {
  return { value: props.price };
}

export default App;
