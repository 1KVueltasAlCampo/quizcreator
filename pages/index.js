import Head from 'next/head'
import Link from 'next/link'
import Layout from './layouts/layout'
import { useState } from "react";


export default function Home(){

  return(
    <div>
       <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"
      /> 
      <Head>
         <title>Quiz</title>
      </Head>
      <Layout></Layout>
        
                <div>
                  <h1>Log in</h1>
                  <form>
                  <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Email address</label>
                      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                      <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                  </div>
                  <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Password</label>
                      <input type="password" className="form-control" id="exampleInputPassword1"/>
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
                      <button type="submit" className="btn btn-primary">Log in</button>
                  </div>
                  <br></br>
                  <small id="emailHelp" className="form-text text-muted">If you don't have an account, you can register yourself </small>
                  <div>
                     <Link href="/register"><button type="submit" className="btn btn-primary">Register</button></Link> 
                  </div>

                  
                  </form>
                          </div>
                </div>
  )
}

