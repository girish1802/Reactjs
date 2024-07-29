import Input from "./Input"
var loged=true;
export default function Form(){
    return(
        <main>
            <h1>hello</h1>
            <Input  type="text" placeholder="username"/>
            {loged?null:<Input  type="Password" placeholder="confirm password"/>}
            <Input  type="Password" placeholder="password"/>
            <button>{loged?"login":"register"}</button>
        </main>
    )

}