import Head from 'next/head'
import Link from 'next/link'
import Layout from '../layouts/layout'
import { useState} from 'react'
import { useRouter } from 'next/router'


export default function login(props){

    const router =useRouter();
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

     function handleSub(){
        console.log(props.person[1].email)
        console.log(props.person.length+'a')
        let checkEmail=false;
        let checkPass=false;
        for (let i=0;i<props.person.length;i++) {
                if (props.person[i].email==person.EMAIL) {
                        checkEmail=true;
                }
                if (props.person[i].password==person.EMAIL) {
                    checkPass=true;
                }
        }

        if(checkEmail==true){
            if(checkPass==true){
               
                if(person.TYPE==true){
                    router.push('../exam/editor')
                }
                else{
                    router.push('../exam/test')
                }
               
            }
        }
        
        else{
            alert('holaaa')
        }
      
    }
       
    return(
        <div>
           <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"
          /> 
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    
          <Head>
             <title>Quiz</title>
          </Head>
          <Layout></Layout>
            
                    <div >
                      <h1>Log in</h1>
                      <form>
                      <div className="form-group">
                          <label htmlFor="exampleInputEmail1">Email address</label>
                          <input name="EMAIL" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleChange}/>
                          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                      </div>
                      <div className="form-group">
                          <label htmlFor="exampleInputPassword1">Password</label>
                          <input name="PASSWORD" type="password" className="form-control" id="exampleInputPassword1" onChange={handleChange} />
                      </div>
                      <div className="form-group form-check">
                        <label></label>
                      </div>
                      <div className="mb-3 form-check">
                          <input name="professor" type="checkbox" className="form-check-input" id="professor" onClick={handleChange2}/>
                          <label className="form-check-label" htmlFor="exampleCheck1">Professor</label>
                      </div>
                      <div className="mb-3 form-check">
                          <input name="student" type="checkbox" className="form-check-input" id="student" onClick={handleChange2}/>
                          <label className="form-check-label" htmlFor="exampleCheck1">Student</label>
                      </div>
                      <div>
                          <button  type="submit" className="btn btn-primary" onClick={handleSub}>Log in</button>
                      </div>
                      <br></br>
                      <small id="emailHelp" className="form-text text-muted" >If you don't have an account, you can register yourself </small>
                      <div>
                         <Link href="/register"><button type="submit" className="btn btn-primary">Register</button></Link> 
                      </div>
    
                      
                      </form>
                              </div>
                    </div>
      )
}
export const getServerSideProps= async () =>{
    const res=await fetch("http://localhost:3000/api/person")
    const person=await res.json();
      return{
          props:{ 
            person: person,
        },
      };
  };
  
