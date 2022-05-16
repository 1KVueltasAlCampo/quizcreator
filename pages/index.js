import Head from 'next/head'
import Link from 'next/link'
import Layout from './layouts/layout'




export default function Home(){
  

  
  return(
    
    
    <div>
       <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"
      /> 
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

      <Head>
         <title>Quiz</title>
      </Head>
      <Layout></Layout>

        <div className="card" style={{width: "30rem"}}>
        <div className="card-body">
          <h5 className="card-title">Exams</h5>
          <p className="card-text">Here u can create or resolve exams, come on, let's try</p>
         <Link href="/person/login"><a  className="btn btn-primary">Login</a></Link>
          <br/>
          <br/>
          <Link href="/person/register"><a  className="btn btn-primary">Register</a></Link>
        </div>
      </div>
      
    </div>
  )
}



