import { db } from "../../../util/database";

export default async function handler(req, res) {
    const{method, query} =req;

switch(method){ 
    
  case "GET":
      try {
        const text= "SELECT * FROM EXAM WHERE ID = $1";
        const values=[query.id];
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
        const{ID,CODE,DESCRIPTION,AMOUNT}=body;
        const query= "INSERT INTO EXAM (ID,CODE,DESCRIPTION,AMOUNT) VALUES($1,$2,$3,$4)";
        const values=[ID,CODE,DESCRIPTION,AMOUNT];
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