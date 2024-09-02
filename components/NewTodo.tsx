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