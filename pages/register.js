import Layout from "./layouts/layout";
import Link from 'next/link';


let studentsData=require('./json/students.json');
console.log(studentsData);
console.log(typeof(studentsData));

let professorData=require('./json/professor.json');
console.log(professorData);
console.log(typeof(professorData));

function handleRegister(){

    let value = {
        email:document.getElementById('exampleInputEmail1').value,
        password: document.getElementById('exampleInputPassword1').value
    }

    let confirmation= true;

        if(document.getElementById('professor').checked){
            for(let i=0;i<professorData.professor.length;i++){
                if(value.email==professorData.professor.at(i).email){
                    alert("This email is already in use");
                    confirmation=false;
                }
                else if(value.password==professorData.professor.at(i).password){
                    alert("this password is already in use")
                    confirmation=false;
                }
                else if((value.password||value.email)==""){
                    alert("Don't enter void values")
                    confirmation=false
                }
            }
        }
            else if(document.getElementById('student').checked){

                for(let i=0;i<studentsData.students.length;i++){
                    if(value.email==studentsData.students.at(i).email){
                        alert("This email is already in use");
                        confirmation=false;
                    }
                    else if(value.password==studentsData.students.at(i).password){
                        alert("this password is already in use")
                        confirmation=false;
                    }
                    else if((value.password||value.email)==""){
                        alert("Don't enter void values")
                        confirmation=false
                    }
                }

            
        }
                if((document.getElementById('student').checked)&&(document.getElementById('professor').checked)){
                    alert("Choose just one role, professor or student");
                }
                else if(!((document.getElementById('student').checked)||(document.getElementById('professor').checked))){
                    alert("Choose a role to be registered, professor or student");
                }
                else if(confirmation&&(document.getElementById('student').checked)){
                studentsData.students.push(value);
                console.log(studentsData);
                }
                else if(confirmation&&(document.getElementById('professor').checked)){
                    professorData.professor.push(value);
                }
                else{
                    alert("Please enter valid values")
                }       
        
}

const Register=()=>(
    <Layout>  
        <title>Quiz</title>
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
            <input type="checkbox" className="form-check-input" id="professor"/>
            <label className="form-check-label" for="exampleCheck1">Professor</label>
        </div>
        <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="student"/>
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