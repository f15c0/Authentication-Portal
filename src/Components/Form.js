import { useState } from "react";

const Pillarform = () => {

    const names=["Michael", "Dennis", "Mavis", "Simon"];

    const [name, setName]=useState('');
    const [country, setCountry]= useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
        const user={
            name:name,
            country:country
        }
        console.log(user)
    }

    return (  

        <div>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input  type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
                
                <br/>
                <br/>
                <label>country</label>
                <input  type="text" value={country} onChange={(e)=>setCountry(e.target.value)}/>
                <br/>
                <br/>
                <button className="btn btn-warning" type="submit">submit</button>
            </form>  
        </div>
    );
}
 
export default Pillarform
