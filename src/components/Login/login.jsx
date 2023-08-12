import React, { useState } from 'react'
import { Button, Card, CardTitle, Form, FormGroup, Label, Row } from 'reactstrap'
import {Colxx} from '../../assets/styles/customStyles'
import { Field, Formik } from 'formik'
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import {signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../../config/firebase'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    
//validation schema
  const LoginSchema = Yup.object().shape({
    email: Yup.string().required('Please enter email')
      .email('Invalid email address'),
    password: Yup.string().required('Please enter password')
      .min(6, 'Password must be atleast 6 characters'),
  });


  const navigate = useNavigate()

  const onSubmit = async (values, { resetForm }) => {
    try {
      // Create user in Firebase 
      const userCredential = await signInWithEmailAndPassword(auth,values.email, values.password);
  
      // User creation successful
      const user = userCredential.user;
      console.log('User Signed In:', user);
      navigate('/home')
      
    
      // Reset the form after successful submission
      resetForm();
    } catch (error) {
      // User creation or data storage failed
      console.error('Error creating user:', error);
    }
  };

  return (
    <>
      <Row className="h-100 mx-0 vh-100">
        <Colxx lg="6 px-0 m-0" className="mx-auto my-auto">
          <Card className="auth-card">
            <div className="form-side d-flex align-items-center">
              <Colxx lg="12">

                <div>
                  <CardTitle className="mb-1">
                    <h1>Login</h1>
                  </CardTitle>
                  <div className="align-center">
                    <p className="black mb-4 text-muted">
                      Please use your credentials to login.
                    </p>
                  </div>

                    <Formik
                      initialValues={{
                        email: '',
                        password: '',
                      }}
                      onSubmit={onSubmit}
                      validationSchema={LoginSchema}
                    >
                      {({ errors, touched ,handleSubmit}) => (
                        <Form className="av-tooltip tooltip-right-bottom form-group" onSubmit={handleSubmit}>
                          <FormGroup className="form-group has-float-label  mb-2">
                            <Label>
                             Email
                            </Label>
                            <Field className="form-control" type="email" id='email' name='email' />
                            {errors.email && touched.email && (
                              <div className="invalid-feedback d-block">
                                {errors.email}
                              </div>
                            )}
                          </FormGroup>

                          <FormGroup className="form-group has-float-label  mb-4">
                            <Label>
                              Password
                            </Label>
                            <Field className="form-control" type="password" id='password' name='password' />
                            {errors.password && touched.password && (
                              <div className="invalid-feedback d-block">
                                {errors.password}
                              </div>
                            )}
                          </FormGroup>
                          <div className="d-flex justify-content-center align-items-center mb-2">
                            <Button
                              type="submit"
                              color="secondary"
                              className="btn-shadow"
                              size="lg"
                            >
                              Login
                            </Button>
                          </div>
                          <div className="align-center">
                            <p className="black mb-4 text-muted">
                              Dont have an account ? <Link to= '/signup'>SignUp</Link>
                            </p>
                          </div>
                        </Form>
                      )}
                    </Formik>
                </div>
              </Colxx>

            </div>
          </Card>
        </Colxx>
      </Row> 
    </>

  )
}

export default Login