import Layout from "../layouts/layout";
import Link from 'next/link';
import { useState} from 'react'

export default function(){
    const [exam, setExam]=useState({
        ID:null,
        CODE:null,
        DESCRIPTION:"",
        AMOUNT:null
    })

    const [question, setQuestion]=useState({
        EXAMID:null,
        ANSWER:null,
        DESCRIPTION:"",
        QUESTION1:"",
        QUESTION2:"",
        QUESTION3:"",
        QUESTION4:""
    })
    const handleChange3=({target:{id,value,name}})=>
    {
       var elm = document.getElementsByTagName('input');
       for(var i = 0; i < elm.length; i++)
        {
            if(elm.item(i).type == "checkbox" && elm.item(i).id!=id)
            elm.item(i).checked=false;
        }
        setQuestion({...question,[name]:parseInt(value)})
    }


    const handleChange=({target:{value,name}}) => setExam({...exam,[name]:value})
    const handleChange2=({target:{value,name}}) => setQuestion({...question,[name]:value,EXAMID:exam.ID})

    async function handleSub2(){
        await fetch('http://localhost:3000/api/question',{
            method:'POST',
            headers:{
             'Content-Type':'application/json'
            },
            body:JSON.stringify(exam)
          })
    }

    async function handleSub(){
        await fetch('http://localhost:3000/api/exam',{
          method:'POST',
          headers:{
           'Content-Type':'application/json'
          },
          body:JSON.stringify(exam)
        })
        var question=document.getElementById("questions");
        question.innerHTML+=      
        '<div>'+
        '<br></br>'+
        '<div id="listEditor">'+
        '</div>'+
        '<form>'+
        '<div className="form-group">'+
        
        '<textarea name="DESCRIPTION" placeHolder="Write your question one by one" className="form-control" id="exampleFormControlTextarea1" rows="3" onChange="{handleChange2}" ></textarea>'+
        '<h3>Write the multiple answers and pick a correct answer with the checkbox</h3>'+
        '</div>'+
        '</form>'+
        '<br></br>'+
               '<div name="1" className="input-group mb-3">'+
                '<div className="input-group-prepend">'+
                    '<div className="input-group-text">'+
                    '<input id="test1" value="1" name="ANSWER" onChange="{handleChange3}" type="checkbox" aria-label="Checkbox for following text input"/>'+
                    '</div>'+
                '</div>'+
                '<input name="QUESTION1" type="text" className="form-control" aria-label="Text input with checkbox" onChange="{handleChange2}"/>'+
                '</div>'+
                '<div name="2" className="input-group mb-3">'+
                '<div className="input-group-prepend">'+
                    '<div className="input-group-text">'+
                    '<input id="test2" value="2" name="ANSWER" onChange="{handleChange3}" type="checkbox" aria-label="Checkbox for following text input" />'+
                    '</div>'+
                '</div>'+
                '<input name="QUESTION2" type="text" className="form-control" aria-label="Text input with checkbox" onChange="{handleChange2}" />'+
                '</div>'+
                '<div name="3" className="input-group mb-3">'+
                '<div className="input-group-prepend">'+
                    '<div className="input-group-text">'+
                    '<inputid="test3" value="3" name="ANSWER" onChange="{handleChange3}" type="checkbox" aria-label="Checkbox for following text input"/>'+
                    '</div>'+
                '</div>'+
                '<input name="QUESTION3" type="text" className="form-control" aria-label="Text input with checkbox" onChange="{handleChange2}" />'+
                '</div>'+
                '<div name="4" className="input-group mb-3">'+
                '<div className="input-group-prepend">'+
                    '<div className="input-group-text">'+
                    '<input id="test4" value="4" name="ANSWER" onChange="{handleChange3}"  type="checkbox" aria-label="Checkbox for following text input"/>'+
                    '</div>'+
                '</div>'+
                '<input name="QUESTION4" onChange="{handleChange2}" type="text" className="form-control" aria-label="Text input with checkbox"/>'+
                '</div>'+
                '<button type="button" className="btn btn-primary btn-lg btn-block" onClick="{handleSub2}">CREATE A QUESTION</button>'+
                
        '</div>';
      }



    return(
       <div>
            <Layout></Layout>
            <h1>Create your exam</h1>
            <h2>Fill the blanks</h2>
            <input  name="ID" className="form-control" type="text" placeholder="ID" onChange={handleChange}/>
            <br></br>
            <input name="CODE" className="form-control" type="text" placeholder="Access code" onChange={handleChange}/>
            <br></br>
            <input name="DESCRIPTION" className="form-control" type="text" placeholder="Description" onChange={handleChange}/>
            <br></br>
            <div className="form-group">
                <label htmlFor="exampleFormControlSelect2">How many question it will have? </label>
                <select name="AMOUNT" multiple className="form-control" id="exampleFormControlSelect2" onChange={handleChange}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                </select>
            </div>
            <br></br>
                    <button type="button" className="btn btn-primary btn-lg btn-block" onClick={handleSub}>CREATE EXAM</button>
                    <br></br>
                    <br></br>
                    <div id="questions">

                    </div>
               
        </div>
    
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