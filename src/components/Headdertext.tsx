import ButtonAdd from "./ButtonAdd";

export default function Headdertext(
    {title, txtsize, status}:
     {title:string, txtsize: string, status : boolean}){
   // const [count, setCount] = useState(50)
   // const title:string = "CSMJU"
   // const status  = false; //true=green ,false=red
   return(  
    <>
        <h1 style={{ fontSize: `${txtsize}px` }} 
        className={status ? "green-txt" : "red-txt"}> {title}</h1>
        <ButtonAdd /> 
    </>
    ) ;
}