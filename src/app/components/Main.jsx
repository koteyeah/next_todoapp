"use client"
import { CreateTask } from "@/app/components/CreateTask";
import { Display } from "@/app/components/Display";
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