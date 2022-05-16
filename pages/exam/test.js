export default function(){


    return(
       <h1>Test</h1>
       
    
    )
}
export const getServerSideProps= async () =>{
    const res=await fetch("http://localhost:3000/api/exam")
    const exam=await res.json();
      return{
          props:{ 
            exam: exam,
        },
      };
  };