import Layout from "./layouts/layout"


const Exam= ()=>(
    <div>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"
      /> 
    <Layout>
       
    </Layout>
    <form>

<div className="form-group"> 
    <label for="full_name_id" className="control-label">Question</label>
    <input type="text" className="form-control" id="full_name_id" name="full_name" />
</div>    

<div className="form-group"> 
    <label for="street1_id" className="control-label">Question</label>
    <input type="text" className="form-control" id="street1_id" name="street1" />
</div>                    
                        
<div className="form-group"> 
    <label for="street2_id" className="control-label">Question</label>
    <input type="text" className="form-control" id="street2_id" name="street2" />
</div>    

<div className="form-group"> 
    <label for="city_id" className="control-label">Question</label>
    <input type="text" className="form-control" id="city_id" name="city" />
</div>                                    
                        
<div className="form-group"> 
    <label for="state_id" className="control-label">Question</label>
    <select className="form-control" id="state_id">
        <option value="AL">Option</option>
        <option value="AK">Option</option>
        <option value="AZ">Option</option>
        <option value="AR">Option</option>
        <option value="CA">Option</option>
        <option value="CO">Option</option>
        <option value="CT">Option</option>
        <option value="DE">Option</option>
        <option value="DC">Option </option>
     
        
    </select>                    
</div>

<div className="form-group"> 
    <label for="zip_id" className="control-label">Question</label>
    <input type="text" className="form-control" id="zip_id" name="zip" placeholder="#####"/>
</div>        

<div className="form-group"> 
    <button type="submit" className="btn btn-primary">Create</button>
</div>     

</form>
  </div>
)

export default Exam;