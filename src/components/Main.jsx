"use client"
import { CreateTask } from "@/components/CreateTask";
import { Display } from "@/components/Display";
import { useState } from "react"

export function Main(){
    const [array,setArray]=useState([]);
    return(
        <>
        <CreateTask array={[...array]} setArray={setArray} />
        <Display array={[...array]}/>
        </>
    )
}