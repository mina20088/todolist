import React, {Component, Fragment} from 'react';
import "./ToDoList.css"
import SelectItems from "./SelectItems";
import DeSelectAllItems from "./DeSelectAllItems";
import DeleteSelectedItems from "./DeleteSelectedItems";
class Todolist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ToDos: [
                {id: 1, title: "exercise", selected: false,select:""},
                {id: 2, title: "laundry", selected: false,select:""},
                {id: 3, title: "dishes", selected: false,select:""},
                {id: 4, title: "study", selected: false,select:""}
            ]
        }
        this.Select =this.Select.bind(this)
        this.Deselect =this.Deselect.bind(this)
        this.Delete =this.Delete.bind(this)
        this.DeselectAll = this.DeselectAll.bind(this)
    }

    Select(id){
        this.setState((prevState)=>{
            return{
                ToDos: prevState.ToDos.map((todo)=>{
                    if(todo.id === id){
                        return {
                            ...todo,
                            selected: true,
                        }
                    }
                    return todo
                })
            }
        })
    }

    Deselect(id){
        this.setState((prevState)=>{
            return{
                ToDos: prevState.ToDos.map((todo)=>{
                    if(todo.id === id){
                        return {
                            ...todo,
                            selected: false,
                        }
                    }
                    return todo
                })
            }
        })
    }

    Delete() {
        let Filtered = this.state.ToDos.filter((data)=>data.selected === false)
        this.setState({
            ToDos: Filtered
        })
    }

    DeselectAll(){
        this.setState((prevState)=>{
            return{
                ToDos: prevState.ToDos.map((items)=>{
                        return {
                            ...items,
                            selected: false
                        }
                })
            }
        })
    }

    render() {
        let toDos = this.state.ToDos.map((items)=> {
            return (
                <SelectItems
                    key={items.id}
                    items={items}
                    Select={this.Select}
                    Deselect={this.Deselect}
                />
            )
        })
        return (
            <Fragment>
                <div className={'itemsContainer'}>
                    {toDos}
                    <div className={'btn-group'} role="group">
                        <DeleteSelectedItems Delete={this.Delete}/>
                        <DeSelectAllItems items={this.state.ToDos} DeselectAll={this.DeselectAll}/>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Todolist;