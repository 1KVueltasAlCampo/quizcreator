import Layout from "./layouts/layout";
import Link from 'next/link';


let studentsData=require('./json/students.json');
console.log(studentsData);
console.log(typeof(studentsData));


function handleRegister(){
   
    
    let value = {
        email:document.getElementById('exampleInputEmail1').value,
        password: document.getElementById('exampleInputPassword1').value
    }

    studentsData.students.push(value);
    console.log(studentsData);
    
    
}

const Register=()=>(
    <Layout>  
        <h1>Register</h1>  
        <div>
         <form>
        <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            <small id="emailHelp" className="form-text text-muted">Choose an available email</small>
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1"/>
            <small id="emailHelp" className="form-text text-muted">Choose your password</small>
        </div>
        <div className="form-group form-check">
           <label></label>
        </div>
        <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label" for="exampleCheck1">Professor</label>
        </div>
        <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label" for="exampleCheck1">Student</label>
        </div>
        <div>
        <Link href="/">
        <button onClick={handleRegister} type="submit" className="btn btn-primary">Register</button>
        </Link> 
        </div>
        
        
        </form>
                </div>

    </Layout>
)



export default Register;