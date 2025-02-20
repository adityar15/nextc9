import Counter from "@/components/Counter";
import TodoList from "@/components/TodoList";
import Image from "next/image";

export default function Home() {
  // node js
  return (
   <div>
    This is my page
    <Counter />
    <TodoList />
 
   </div>
  );
}
