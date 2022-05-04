// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { db } from "../../../util/database";


export default async function person(req, res){

      const{method, body} =req;

      switch(method){ 
          
        case "GET":
            try {
              const query ="SELECT * FROM PERSON";
              const response= await db.query(query);
              return res.status(200).json(response.rows);
            } catch (error) {
              console.log(error);
            }

        case "POST":
            try {
              const{EMAIL, PASSWORD, TYPE} = body;
              const query=
              "INSERT INTO PERSON(EMAIL, PASSWORD, TYPE) VALUES($1,$2,$3)";
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
    //d0 = q1wq0 = [q1+q0]w
}

