
import './App.css';



function App(props) {
 
 const {name,Location,BloodGroup,Age,profileImg}=props.employee
 return(
 
  <div className="container">
  {}
  <div className='Image'>
    <img src={profileImg} alt='img'></img>
  </div>
  <div className='biodata'>
    <h1>{name}</h1>
    <p>Location</p>
    <h3>{Location}</h3>
    <p>BloodGroup</p>
    <h3>{BloodGroup}</h3>
    <p>Age</p>
    <h3>{Age}</h3>
  </div>
  
  </div>
)
}

export default App;
