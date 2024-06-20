import { useFormik } from 'formik';
import * as Yup from 'yup';

const esquema = Yup.object().shape({
  user: Yup.string().min(5,'Su nombre debe tener un caracter como minimo').max(15, 'Su nombre no debe exceder de 15' ).required(),
  edad: Yup.number().positive().integer().max(120).required(),
  email: Yup.string().email('Su Email no es valido').required(),
  password: Yup.string().min(5).required()
})

export const FormuLogin = () => {

  const submitForm = () => { }

  const {handleSubmit, handleChange, handleReset, errors, values} = useFormik({
    initialValues:{
      user: '',
      edad: '',
      email:'',
      password:'',
    },
    onSubmit: submitForm,
    validationSchema: esquema,
  });

  const divStyle = {
    width: '10000px',
    height: '30000px'
  };

  console.log(values);

  return (
    
    <div  >
      
      <form onSubmit={handleSubmit} onReset={handleReset} >
        <div style={{ divStyle, position:'absolute', top:'50%',left:'50%', transform: 'translate(-50%, -97%)', width:'200px', height:'200px' }}>
          <input style={{width: '162px', height: '30px'}}
          type='text' 
          placeholder='user' 
          name='user'
          value={values.user} 
          onChange={handleChange}/>
          <div style={{position:'absolute', top:'50%',left:'50%', transform: 'translate(-20%, -35%)', width:'500px', height:'200px' }}>
          {errors.user && <span>Su nombre no es valido</span>}
          </div>
        </div>
        <div style={{position:'absolute', top:'50%',left:'50%', transform: 'translate(-50%, -71%)', width:'200px', height:'200px' }}>
          <input type='number' style={{width: '162px', height: '30px'}} 
          placeholder='edad' 
          name='edad' 
          value={values.edad} 
          onChange={handleChange}/>
          <div style={{position:'absolute', top:'50%',left:'50%', transform: 'translate(-18%, -35%)', width:'500px', height:'200px' }}>
          {errors.edad && <span>Su edad no es valido</span>}
          </div>
        </div>
        <div style={{position:'absolute', top:'50%',left:'50%', transform: 'translate(-50%, -45%)', width:'200px', height:'200px' }}>
          <input type='email' style={{width: '162px', height: '30px'}}
          placeholder='email' 
          name='email' 
          value={values.email} 
          onChange={handleChange}/>
          <div style={{position:'absolute', top:'50%',left:'50%', transform: 'translate(-18%, -35%)', width:'500px', height:'200px' }}>
          {errors.email && <span>Su Email no es valida</span>}
          </div>
        </div>
        <div style={{position:'absolute', top:'50%',left:'50%', transform: 'translate(-50%, -19%)', width:'200px', height:'200px' }}>
          <input type='password' style={{width: '162px', height: '30px'}}
          placeholder='password'
          name='password' 
          value={values.password} 
          onChange={handleChange}/>
          <div style={{position:'absolute', top:'50%',left:'50%', transform: 'translate(-50%, -35%)', width:'500px', height:'200px' }}>
          {errors.password && <span>Su contraseña debe tener 5 caracter como minimo y 6 como maximo</span>}
          </div>
        </div >
        <div style={{position:'absolute', top:'50%',left:'50%', transform: 'translate(-50%, 28%)', width:'200px', height:'200px' }}>
          <button type='submit'>Introducir valores</button>
        </div>
        <div style={{position:'absolute', top:'50%',left:'50%', transform: 'translate(-30%, 52%)', width:'200px', height:'200px' }}>
        <button type='reset'>Vaciar</button>
        </div>
      </form>
    </div>
)}
