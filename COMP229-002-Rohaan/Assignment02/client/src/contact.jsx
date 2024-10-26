//Rohaan Talpur, 301372121, and 28th September 2024
export default function Contact() {

    return (

      <>
        <div style={{border:"2px solid black", marginLeft:"70px", marginRight:"500px"}}>
        <p style={{fontWeight:"bold"}}>Contact Information</p>
        <p style={{fontWeight:"bold"}}>Email: rohaan201mir@gmail.com</p>
        <p style={{fontWeight:"bold"}}>Number: 444-444-4444</p>
        </div>
        
        <br></br>
        <form style={{display: 'flex', justifyContent: 'center', paddingLeft:"70px"}}>
          <fieldset style={{width: '100%', marginRight:'500px', backgroundColor:"#ffffff"}}>
          <legend>Contact Form</legend>
          <label for="fname" style={{display: 'block'}}>First Name:</label>
          <input type="text" id="fname" name="fname" style={{width:"200px", height:"25px"}}></input>

          
          <label for="fname" style={{display: 'block', marginTop: '1em'}}>Last Name:</label>
          <input type="text" id="lname" name="lname" style={{width:"200px", height:"25px"}}></input>

          
          <label for="cnumber" style={{display: 'block', marginTop: '1em'}}>Contact Number:</label>
          <input type="text" id="cnumber" name="cnumber" style={{width:"200px", height:"25px"}}></input>

          
          <label for="email" style={{display: 'block', marginTop: '1em'}}>Email:</label>
          <input type="text" id="email" name="email"style={{width:"200px", height:"25px"}}></input>

          
          <label for="message" style={{display: 'block', marginTop: '1em'}}>Message:</label>
          <textarea id="message" name="message"style={{width:"300px", height:"70px"}}></textarea>

          <br></br>
          <input type="submit" value="Submit"></input>
          </fieldset>
        </form>
      </>

    );

  }