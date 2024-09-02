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