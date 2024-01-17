"use client"
import { CreateTask } from "@/components/CreateTask";
import { useState } from "react"

export function Display(props){
    return(
        <>
        <div class="list-none m-7 bg-slate-200 rounded-md shadow-md">
        <ul class="p-3 min-h-60">
            {props.array.map(item=>{
                return <li key={item} class="p-1 m-3 text-4xl text-neutral-700 bg-slate-50 rounded-md shadow-lg hover:-translate-x-3 transform duration-300">{item}</li>;
            })}
        </ul>
        </div>
        </>
    )
}