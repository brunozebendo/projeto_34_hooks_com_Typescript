/**Aula 571 implanta esse componente para substituir 
 * props por useContext 
 */

import React from "react";
import {useState}from "react";
import Todo from "../models/todo";
//a declaração de tipos exigida pelo TS foi feita no começo
type TodosContextObj = {
    items: Todo[],
    addTodo: (text: string) => void,
    removeTodo: (id: string) => void,
}
/**Na aula 568 é inserido o state para receber o newTodo
   * e depois inseri-lo no array. Na declaração do useState
   * é passado entre o <> Todo q é importado do Todos.tsx
   * e define q ali serão aceitos os objetos naquele formato.
   *   */
export const TodosContext = React.createContext <TodosContextObj>({
    
const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler
};


const TodosContextProvider: React.FC = (props) => {
    const [todos, setTodos] = useState<Todo[]>([]),
  /**Aqui o código para lidar com a inserção de uma nova
   * tarefa (todo), novamente estabelecendo q vai ser no
   * formato string, o onAddTodo é o prop passado no NewTodo
   * q aqui vira addTodoHandler
   */
const addTodoHandler = (todoText: string) => {
const newTodo = new Todo(todoText);
    /**aqui é o código para incluir o newTodo no array
     * mantendo o anterior, para isso foi usado o método
     * concat q cria um novo array concatenando o antigo
     * e o novo
     */
setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });    
  };
    items: [],
    addTodo: () => {},
    removeTodo: (id: string) => {}
});
 /**essa é a função para remover o item quando se clica em cima,
   * é a mesma lógica já usada anteriormente, acrescentando só
   * a necessidade de definição do tipo do id
   */
 const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.id !== todoId);
    });
  };



    return <TodosContext.Provider value={contextValue}>{props.children}</TodosContext.Provider>
};

export default TodosContextProvider;