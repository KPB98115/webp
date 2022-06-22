import { useState, useEffect } from "react";

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }

function Content() {
    const [name, setName] = useState("CGU");
    useEffect(()=> {
        setName("Bye!");
    }, [name])
    return <h1>Hello, {name}</h1>
}


export {Welcome, Content};