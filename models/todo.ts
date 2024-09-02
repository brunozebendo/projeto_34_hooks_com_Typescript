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