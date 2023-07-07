import React,{useState} from 'react'
import  './Textform.css';
export   const Textform =(props) => {


  
  const [user,setUser] = useState({
    Email : "",
    Password : "",
  });
  const handleChange = (event) => {
    const { name , value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
    
  //   console.log(user);
  return (
    <html>
    <head>
      <title>Login Page</title>
    </head>
    <body>
    <section className="vh-50 gradient-custom">

    <form onSubmit={handleChange}> 

  <div className="container py-5 h-75">
    <div className="row d-flex justify-content-center align-items-center h-50">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div  className="card bg-dark text-white" style={{borderradius:" 2rem"}}>
          <div className="card-body p-4 text-center">

            <div className="mb-md-5 mt-md-4 pb-5">

              <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
              <p className="text-white-50 mb-5">Please enter your login and password!</p>

             

              {/* <input
          type="email"
          name="Email"
          value={user.Email}
          onChange={handleChange}
        /> */}


 <div className="form-outline form-white mb-4">
                <input type="Email" id="typeEmailX" name = "Email"  value = {user.Email} onChange = {handleChange} className="form-control form-control-lg" />
                <label className="form-label" htmlFor="typeEmailX">Email</label>
              </div>   

              <div className="form-outline form-white mb-4">
                <input type="Password" id="typePasswordX" name = "Password" value = {user.Password} onChange = {handleChange} className="form-control form-control-lg" />
                <label className="form-label" htmlFor="typePasswordX">Password</label>
              </div>

              <div className="small mb-1 pb-lg-1"><a className="text-white-50" href="#!">Forgot password?</a></div>
              <button className ="btn btn-outline-light btn-lg px-5" href="#!"  type="submit">Login</button>

              {/* <button className="btn btn-outline-light btn-lg px-5" > <a href="home"  type="submit">Login</a></button> */}
             <div className="d-flex justify-content-center text-center mt-2 pt-0">
                {/* <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
                <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                <a href="#!" className="text-white"><i className="fab fa-google fa-lg"></i></a> */}
              </div>

            </div>

            <div>
              <p className="mb-0">Don't have an account? <a href = "Signup" className="text-white-50 fw-bold">Sign Up</a>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
  </form>

</section>

    </body>
    </html>
    
  )}
                   
              
