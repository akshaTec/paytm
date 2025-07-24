import { useState } from "react";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import axios from "axios"

export function SignUp(){

    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    return <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
            <Heading label={"Sign Up"}/>
            <SubHeading label={"Enter your information for creating an account"}/>
            <InputBox label={"First Name"} placeholder={"John"} onChange={e=>{setFirstname(e.target.value)}}/>
            <InputBox label={"Last Name"} placeholder={"Cartor"} onChange={e=>{setLastname(e.target.value)}}/>
            <InputBox label={"Email"} placeholder={"john.cartor@email.com"} onChange={e=>{setUsername(e.target.value)}}/>
            <InputBox label={"Password"} placeholder={"Password"} onChange={e=>{setPassword(e.target.value)}}/>
            <div className="pt-4">
                <Button label={"Sign up"} onClick={async ()=>{
                    await axios.post("http://localhost:3000/api/v1/user/signup" ,
                        {
                            "username": username,
                            "password": password,
                            "firstname": firstname,
                            "lastname": lastname
                        }
                    )
                }}/>
            </div>
            <BottomWarning label={"Already a user?"} buttonText={"Sign In"} to={"/signin"}/>
            </div>
        </div>
    </div>
}