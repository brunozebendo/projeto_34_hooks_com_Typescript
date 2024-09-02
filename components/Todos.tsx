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