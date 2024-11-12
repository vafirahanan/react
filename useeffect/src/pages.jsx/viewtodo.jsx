import React from 'react';
import { TodoContext } from '../providers.jsx/todoproviders';

const Viewtodo = () => {
    
    const { id } = useParams()
    const { todoList } = useContext(TodoContext)
    const [ todo ] = useState(todoList.find(item => item.id == id))
    
    return  <div>
       {todo?.task}
            
        </div>
}

export default Viewtodo;
