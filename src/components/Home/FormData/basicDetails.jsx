import React from 'react';
import { Button, Form, FormGroup, Label } from 'reactstrap';
import { Field, Formik } from 'formik';
import * as Yup from 'yup';
import Select from 'react-select';

const BasicDetails = () => {

  // Validation schema
  const SignupSchema = Yup.object().shape({
    name: Yup.string().required('Provide your name'),
    email: Yup.string().required('Please enter email').email('Invalid email address'),
    mobile: Yup.number().min(10).required('A phone number is required'),
    qualification: Yup.string().required('Please enter your qualification'),
  });

  // Qualification details
  const Qualification = [
    { label: 'BSC', value: 'BSC', key: 0 },
    { label: 'MSC', value: 'MSC', key: 1 },
    { label: 'B-TECH', value: 'B-TECH', key: 2 },
    { label: 'M-TECH', value: 'M-TECH', key: 3 },
    { label: 'DIPLOMA', value: 'DIPLOMA', key: 4 },
  ];

  const onSubmit = (values) => {
    // Save the form values to local storage
    localStorage.setItem('basicDetails', JSON.stringify(values));
    window.alert("Saved", values?.name)
  };

  const savedData = JSON.parse(localStorage.getItem('basicDetails'));

  //select box
  const FormikReactSelect = ({
    name,
    options,
    className,
    onChange,
  }) => {
    const handleChange = (val) => {
      onChange(name, val.value);
    };
    return (
      <Select
        className={`react-select ${className}`}
        classNamePrefix="react-select"
        options={options}
        onChange={handleChange}
      />
    );
  };

  return (
    <div>
      <h3 className="d-flex justify-content-center mt-2" style={{ color: 'ThreeDShadow' }}>
        Basic Details
      </h3>
      <Formik
        initialValues={{
          name: savedData?.name || '',
          email: savedData?.email || '',
          mobile: savedData?.mobile || '',
          qualification: savedData?.qualification || '',
        }}
        onSubmit={onSubmit}
        validationSchema={SignupSchema}
      >
        {({ errors, touched, handleSubmit, setFieldValue }) => (
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
                Qualification :
              </Label>
              <FormikReactSelect
                name="qualification"
                id="qualification"
                options={Qualification}
                onChange={setFieldValue}
              />
              {errors.qualification && touched.qualification && (
                <div className="invalid-feedback d-block">
                  {errors.qualification}
                </div>
              )}
            </FormGroup>
            <div className="d-flex justify-content-center align-items-center mb-2">
            </div>
            <div className="d-flex justify-content-center align-items-center mb-2">
              <Button type="submit" color="secondary" className="btn-shadow" size="lg">
                Save
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BasicDetails;










