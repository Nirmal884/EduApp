import React from 'react'
import { Button, Card, CardTitle, Form, FormGroup, Label, Row } from 'reactstrap'
import {Colxx} from '../../assets/styles/customStyles'
import { Field, Formik } from 'formik'
import * as Yup from 'yup';
import { Link } from 'react-router-dom';;
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../../config/firebase'

const SignUp = () => {
    
//validation schema
  const SignupSchema = Yup.object().shape({
    name:Yup.string().required('Provide your name'),
    email: Yup.string().required('Please enter email')
      .email('Invalid email address'),
    mobile:Yup.number()
    .min(10)
    .required('A phone number is required'),
    password: Yup.string().required('Please enter password')
      .min(6, 'Password must be atleast 6 characters'),
  });

  const onSubmit = async (values, { resetForm }) => {
    try {
      // Create user in Firebase 
      const userCredential = await createUserWithEmailAndPassword(auth,values.email, values.password);
  
      // User creation successful
      const user = userCredential.user;
      console.log('User created:', user);
      window.alert('User Created',user.email)
  
    
      // Reset the form after successful submission
      resetForm();
    } catch (error) {
      // User creation or data storing in firebase database failed
      console.error('Error creating user:', error.message);
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
                    <h1>SignUp</h1>
                  </CardTitle>
                  <div className="align-center">
                    <p className="black mb-4 text-muted">
                      Please proivide your details.
                    </p>
                  </div>

                    <Formik
                      initialValues={{
                        name:'',
                        email: '',
                        mobile:'',
                        password: '',
                      }}
                      onSubmit={onSubmit}
                      validationSchema={SignupSchema}
                    >
                      {({ errors, touched ,handleSubmit}) => (
                        <Form className="av-tooltip tooltip-right-bottom form-group" onSubmit={handleSubmit}>

                            <FormGroup className="form-group mb-2">
                            <Label className='d-flex justify-content-start'>
                             Name :
                            </Label>
                            <Field className="form-control" type="text" id='name' name='name' />
                            {errors.name && touched.name && (
                              <div className="invalid-feedback d-block">
                                {errors.name}
                              </div>
                            )}
                          </FormGroup>

                          <FormGroup className="form-group mb-2">
                            <Label className='d-flex justify-content-start'>
                             Email :
                            </Label>
                            <Field className="form-control" type="email" id='email' name='email' />
                            {errors.email && touched.email && (
                              <div className="invalid-feedback d-block">
                                {errors.email}
                              </div>
                            )}
                          </FormGroup>

                          <FormGroup className="form-group mb-4">
                            <Label className='d-flex justify-content-start'>
                              Mobile :
                            </Label>
                            <Field className="form-control" type="number" id='mobile' name='mobile' />
                            {errors.mobile && touched.mobile && (
                              <div className="invalid-feedback d-block">
                                {errors.mobile}
                              </div>
                            )}
                          </FormGroup>

                          <FormGroup className="form-group mb-4">
                            <Label className='d-flex justify-content-start'>
                              Password :
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
                              Signup
                            </Button>
                          </div>
                          <div className="align-center">
                            <p className="black mb-4 text-muted">
                              Already have an account ? <Link to= '/'>Signin</Link>
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

export default SignUp