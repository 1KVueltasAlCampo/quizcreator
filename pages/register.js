import Layout from "./layouts/layout"

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
            <button type="submit" className="btn btn-primary">Register</button>
        </div>
        
        
        </form>
                </div>

    </Layout>
)

export default Register;