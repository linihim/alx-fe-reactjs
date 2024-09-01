import React from 'react'
import RegistrationForm from './components/RegistrationForm'
import FormikForm from './components/FormikForm'

function App() {
  return (
    <div className="App">
      <h1>User Registration Forms</h1>
      
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div>
          <h2>Controlled Components Form</h2>
          <RegistrationForm />
        </div>
        
        <div>
          <h2>Formik Form</h2>
          <FormikForm />
        </div>
      </div>
    </div>
  );
}

export default App;