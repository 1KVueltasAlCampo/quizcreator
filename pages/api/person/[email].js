import { db } from "../../../util/database";

export default async function handler(req, res) {
    const{method, query} =req;

switch(method){ 
    
  case "GET":
      try {
        const text= "SELECT * FROM PERSON WHERE EMAIL = $1";
        const values=[query.email];
        const result= await db.query(text, values);
        //console.log(result);
        if(result.rows.length===0){
          res.status(404).json("Nothing")
        }
        return res.status(200).json(result.rows[0]);
      } catch (error) {
        console.log(error);
      }

  case "POST":
      try {
        const{EMAIL, PASSWORD, TYPE} = body;
        const query=
        "INSERT INTO PERSON(EMAIL, PASSWORD, TYPE) VALUES($1,$2,$3) RETURNING *";
        const values=[EMAIL, PASSWORD, TYPE];
        const response= await db.query(query,values);
        console.log(response);
        return res.status(200).json(response.rows[0]); 
      } catch (error) {
          console.log(error);
      }

  default:
          return res.status(400).json("invalid method");
}

   
}