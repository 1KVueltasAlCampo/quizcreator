import Layout from "../layouts/layout";
import Link from 'next/link';
import { useState} from 'react'



export default function Register(){

    const [person, setPerson]=useState({
        EMAIL:"",
        PASSWORD:"",
        TYPE:true
    })
    
    const handleChange=({target:{value,name}}) => setPerson({...person,[name]:value})
    
    const handleChange2=({target:{id}})=>
    {
       var elm = document.getElementsByTagName('input');
       for(var i = 0; i < elm.length; i++)
        {
            if(elm.item(i).type == "checkbox" && elm.item(i).id!=id)
            elm.item(i).checked=false;
        }
       if ((document.getElementById(id).id=="professor")&&(document.getElementById(id).checked)){
        setPerson({...person,TYPE:true});
       }
       else {
        setPerson({...person,TYPE:false});
       }
    }
    
    async function handleSub(){
        await fetch('http://localhost:3000/api/person',{
          method:'POST',
          headers:{
           'Content-Type':'application/json'
          },
          body:JSON.stringify(person)
        })
      }

      return(
    <Layout>  
        <title>Quiz</title>
        <h1>Register</h1>  
        <div>
         <form>
        <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input name="EMAIL" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            <small id="emailHelp" className="form-text text-muted">Choose an available email</small>
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input name="PASSWORD" type="password" className="form-control" id="exampleInputPassword1" onChange={handleChange}/>
            <small id="emailHelp" className="form-text text-muted">Choose your password</small>
        </div>
        <div className="form-group form-check">
           <label></label>
        </div>
        <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="professor" onChange={handleChange2}/>
            <label className="form-check-label" for="exampleCheck1">Professor</label>
        </div>
        <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="student" onChange={handleChange2}/>
            <label className="form-check-label" for="exampleCheck1">Student</label>
        </div>
        <div>
        <Link href="/">
        <button  type="submit" className="btn btn-primary" onClick={handleSub}>Register</button>
        </Link> 
        </div>
        
        
        </form>
                </div>

    </Layout>
      )
}



