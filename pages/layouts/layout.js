import Link from "next/link";



export default function Layout(props) {    
   
    return(

    <div >
        <title>Quiz</title>


                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"></link>
                    <div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" >Menu</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                        <li className="nav-item active">
                           <Link href="/"><a className="nav-link" >Home </a></Link> 
                        </li>
                        <li className="nav-item active">
                           <Link href="/exam"><a className="nav-link" >Exams example </a></Link> 
                        </li>
                        <li className="nav-item active">
                           <Link href="/editor"><a className="nav-link" >Editor example </a></Link> 
                        </li>
                        </ul>
                    </div>
                    </nav>
        
                    </div>

    {props.children}
    </div>
    )
    
}
