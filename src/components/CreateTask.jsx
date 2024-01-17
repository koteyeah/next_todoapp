"use client"
import { useState } from "react"

export function CreateTask(props){
    const [todoText,setTodoText]=useState("");
    const onChangeTodoText = ((event) => setTodoText(event.target.value));
    const handleArray=()=>{
        if(todoText!=""){
            props.setArray([...props.array,todoText]);
            setTodoText("")
        }
    }
    return(
    <div className="flex mt-3 mx-3 justify-center">
        <div className="mx-3">
            <p className="text-3xl text-neutral-700">Let's make cocktail !!</p>
            <p className="text-xl text-neutral-700">タスクを作成すると下に表示されます</p>
        </div>
        <div className="mx-3">
            <input type="text" value={todoText} onChange={onChangeTodoText} placeholder="タスクを入力してください"
            className="p-2 border-neutral-700 text-2xl"
            />
            <button
            onClick={handleArray}
            className="bg-sky-300 text-white text-xl font-bold m-1 p-4 rounded-md hover:bg-sky-400 hover:ring-2 ring-amber-200 transform duration-300"
            >タスクを追加</button>
        </div>
    </div>
    )
}