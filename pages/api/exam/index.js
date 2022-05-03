import { db } from "../../../util/database";

export default async function exam(req, res){
    const{method, body} =req;

    switch(method){
     case "GET":
         try {
            const query="SELECT * FROM EXAM";
            const response= await db.query(query);       
           return res.status(200).json(response.rows);
         } catch (error) {
             console.log("error");
         }
        
     case "POST":
         try {
             const{ID,CODE,DESCRIPTION,AMOUNT}=body;
             const query= "INSERT INTO EXAM (ID,CODE,DESCRIPTION,AMOUNT) VALUES($1,$2,$3,$4)";
             const values=[ID,CODE,DESCRIPTION,AMOUNT];
             const response= await db.query(query,values);
             return res.status(200).json(response.rows[0])
         } catch (error) {
             console.log(error);
         }       
     }
}