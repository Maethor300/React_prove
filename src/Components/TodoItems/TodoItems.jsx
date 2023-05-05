 import "./TodoItems.css"
function TodoItems(props) {
    return (
          <li className="TodoItem">
            <span className={`Icon Icon-check ${props.status && "Icon-check--active"}`}>V</span>
            <p className={`TodoItem-p ${props.status && "TodoItem-p--complete"} `}> {props.action}</p>
            <span className="Icon Icon-delete">X</span>
          </li>
    )
  }
export default TodoItems;