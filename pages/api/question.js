import { db } from "../../util/database";


export default async function person(req, res){

      const{method, body} =req;

      switch(method){ 
          
        case "GET":
            try {
              const query ="SELECT * FROM QUESTIONS";
              const response= await db.query(query);
              return res.status(200).json(response.rows);
            } catch (error) {
              console.log(error);
            }

        case "POST":
            try {
              const{EXAMID, ANSWER, DESCRIPTION, QUESTION1, QUESTION2,QUESTION3,QUESTION4} = body;
              const query=
              "INSERT INTO QUESTIONS(EXAMID, ANSWER, DESCRIPTION, QUESTION1, QUESTION2,QUESTION3,QUESTION4) VALUES($1,$2,$3,$4,$5,$6,$7)";
              const values=[EXAMID, ANSWER, DESCRIPTION, QUESTION1, QUESTION2,QUESTION3,QUESTION4];
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

