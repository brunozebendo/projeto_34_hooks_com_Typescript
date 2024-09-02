/**Seção 30 vai ensinar typescript q é um superset do JS
 * q não roda no browser, mas em tempo de compilação
 *  * 
 * para instalar npm install typescript
 * para instlar o compilador que vai alertar sobre possíveis
 * erros digitar npx tsc ou npx tsc with-typescript.ts q é
 * para quando ainda não se configurou o ts
 * 
 * os tipos básicos de TS estão no componente basics.ts com a explicação
 * 
 * Na aula 560 é feita a criação de um projeto React 
 * com o nome react-ts utilizando TS através do comando:
 * npx create-react-app react-ts --template typescript
 * com isso os arquivos estão com a extensão .tsx ao invés de .jsx
 */

/**O código vaicriar um todolist com ts */

//components/Todos.tsx
import React, { useContext } from "react";
//import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import { TodosContext } from "../store/todos-context";
import classes from './Todos.module.css'
/**O React.FC (Function Component) é um tipo genérico em
 *  TypeScript que facilita a definição de componentes
 *  funcionais no React. Ele oferece várias vantagens, como:

Segurança de Tipos: Garante que as propriedades (props)
 passadas para o componente sejam do tipo correto, ajudando
  a evitar erros.
Propriedade children: Inclui automaticamente a propriedade
 children, que representa o conteúdo entre as tags do componente.
Facilidade de Refatoração: Facilita a renomeação e a
 modificação das propriedades do componente, pois o compilador
  TypeScript ajuda a identificar todos os lugares onde essas
   propriedades são usadas
   Em resumo, ele define q o componente vai ser uma função
   react e diz qual prop vai ser obrigatório, e q tem
   ser passado nos outros componentes, se não dá erros
   Na aula 570 é recebido o props para remover o item q é passado
   para o App.tsx sendo necessário passar o id q será o determinante 
   para a exclusão. O bind aqui liga o id para a futura função q é chamada no App
   Aula 571 inclui o context, antes dele, estava assim com o props
   const Todos: React.FC <{items: Todo[]; onRemoveTodo: (id: string) => void}>=
 (props) => {

   */
const Todos: React.FC = () => {
    const todosCtx = useContext(TodosContext);

    return( <ul className={classes.todos}>
        {todosCtx.items.map((item)=>
            (<TodoItem key={item.id} text={item.text}
             onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}/>))}
    </ul>);
};

export default Todos;


//models/todo.ts
/**Aula 563 é criado esse arquivo dentro de uma pasta models
 * denominado todo.ts e não tsx pois não é funcional 
 * para criar um modelo das tarefas (todos) foi usado
 * class mas também poderia ser interface ou type. Se fosse
 * só JS usaria só a parte do constructor, mas o typescript
 * exige q se defina antes o tipo
 */
//aqui a classe é setada
class Todo{
    id: string;
    text: string;
//aqui ela é instanciada
    constructor(todoText: string){
        this.text = todoText;
        this.id = new Date().toISOString();
    }
}

export default Todo;

//components/TodoItem.tsx
import classes from "./TodoItem.module.css"
/**Aula 564 cria esse componente somente separar
 * a lógica do item q será passado no map usando o TS
 * e tendo q definir antes o tipo. text é o nome do props.
 * O id foi passado direto no componente q recebe o props
 */

/**Na aula 570 é incluído o onClick q permitirá q o item seja removido
 * ao se clicar, para isso ele também teve q ser passado como um props sinalizando
 * q é uma função. O props vai ser recebido no Todo.tsx e repassado para o App.jsx
 */

const TodoItem: React.FC<{text: string; onRemoveTodo: () => void}> = (props) => {
    return <li className={classes.item} onClick={props.onRemoveTodo}>{props.text}</li>
};

export default TodoItem

//components/NewTodo.tsx

/**esse componente é um form simples para mostrar com usar o useRef com
 * o typescript
 */
import classes from './NewTodo.module.css'
import { useRef, useContext } from "react";
import { TodosContext } from '../store/todos-context';
/**Na aula 567 é adicionado o código para passar o texto obtido como
 * uma função para o App.tsx. Primeiro, o NewTodo é estabelecido como
 * uma react function, dentro do <> é passado o props, definido mais abaixo,
 * como uma function cujo tipo vai ser uma string e q não vai retornar nada
 * já q não se está fazendo nada com o valor retornado, somente repassando
 * Antes de usar context estava assim:
 * const NewTodo: React.FC <{onAddTodo: (text: string) => void}> = (props) => {
 */
const NewTodo: React.FC = () => {
    const todosCtx = useContext(TodosContext);
    /**como o TS exige o tipo, aqui é passado o tipo interno do input */
    const todoTextInputRef = useRef<HTMLInputElement>(null);
    //aqui para prevenir a submissão automática
    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
    /*/essa linha pega o texto do input, a diferença aqui é a ! q deve ser
    usado caso se tenha certeza q o valor do input não vai ser nulo, ou seja,
    q quando o formulário for submetido haverá um valor preenchido, caso
    não se tenha certeza, deve usar o ? q diz basicamente q se não houver
    valor, será usado o null*/

        const enteredText = todoTextInputRef.current!.value;

        if (enteredText.trim().length === 0) {
            //aqui poderia ser adicionado um código para dar erro por não preenchimento
            return;
        }
        //props.onAddTodo(enteredText);
        todosCtx.addTodo(enteredText);
    };
    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <label htmlFor="text">Todo text</label>
            <input type='text' id="text" ref={todoTextInputRef} />
            <button>Add Todo</button>
        </form>
    )
};

export default NewTodo;

/**store/todos-context.tsx */
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

/**App.tsx */

//import { useState } from 'react';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import TodosContextProvider from './store/todos-context';
//import Todo from './models/todo';

function App() {
  
 
  return (
    <TodosContextProvider>
      <NewTodo  />
      <Todos />      
    </TodosContextProvider>
  );
}

export default App;
