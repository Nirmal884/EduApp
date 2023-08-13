import React from 'react';
import { Button, Form, FormGroup, Label, Row } from 'reactstrap';
import { Field, Formik } from 'formik';
import * as Yup from 'yup';
import Select from 'react-select';
import { Colxx } from '../../../assets/styles/customStyles';

const AdditionalDetails = () => {
    // Validation schema
    const SignupSchema = Yup.object().shape({
        address: Yup.string().required('Enter your Address'),
        zip: Yup.string().required('Please enter zip code').min(6),
        street: Yup.string().required('Enter street'),
    });

    // dropdown details
    const City = [
        { label: 'Calicut', value: 'Calicut', key: 0 },
        { label: 'Kochi', value: 'Kochi', key: 1 },
        { label: 'Trivandrum', value: 'Trivandrum', key: 2 },
    ];

    const Admission = [
        { label: 'Online', value: 'Online', key: 0 },
        { label: 'Ofline', value: 'Ofline', key: 1 },
        { label: 'Hybrid', value: 'Hybrid', key: 2 },
    ];

    const Service = [
        { label: 'IELTS', value: 'IELTS', key: 0 },
        { label: 'OET', value: 'OET', key: 1 },
        { label: 'TOFEL', value: 'TOFEL', key: 2 },
    ];

    const Entrance = [
        { label: 'Yes', value: 'Yes', key: 0 },
        { label: 'No', value: 'No', key: 1 },
    ];

    const Afiliation = [
        { label: 'Yes', value: 'Yes', key: 0 },
        { label: 'No', value: 'No', key: 1 },
    ];

    const Docs = [
        { label: 'Previous Mark Sheet', value: 'Previous Mark Sheet', key: 0 },
        { label: 'Consolidate', value: 'Consolidate', key: 1 },
        { label: 'Higher Secondary', value: 'Higher Secondary', key: 2 },
    ];

    const Intakes = [
        { label: 'January', value: 'January', key: 0 },
        { label: 'February', value: 'February', key: 1 },
        { label: 'March', value: 'March', key: 2 },
        { label: 'April', value: 'April', key: 3 },
        { label: 'May', value: 'May', key: 4 },
        { label: 'June', value: 'June', key: 5 },
        { label: 'July', value: 'July', key: 6 },
        { label: 'August', value: 'August', key: 7 },
        { label: 'September', value: 'September', key: 8 },
        { label: 'October', value: 'October', key: 9 },
        { label: 'November', value: 'November', key: 10 },
        { label: 'December', value: 'December', key: 11 },
      ];

    const onSubmit = (values) => {

        const savedData = JSON.parse(localStorage.getItem('basicDetails'));

        const newData = {
            ...savedData,
            address: values.address || savedData?.address || '',
            zip: values.zip || savedData?.zip || '',
            street: values.street || savedData?.street || '',
            city: values.city || savedData?.city || '',
            admission: values.admission || savedData?.admission || '',
            services: values.services || savedData?.services || '',
            affiliation: values.affiliation || savedData?.affiliation || '',
            entrance: values.entrance || savedData?.entrance || '',
            document: values.document || savedData?.document || '',
            intakes: values.intakes || savedData?.intakes || '',
            duration1: values.duration1 || savedData?.duration1 || '',
            duration2: values.duration2 || savedData?.duration2 || '',
        };

        localStorage.setItem('basicDetails', JSON.stringify(newData));

        alert("Saved")

        console.log('Form data saved:', newData);
       
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
                Additional Details
            </h3>
            <Formik
                initialValues={{
                    address: savedData?.address || '',
                    zip:savedData?.zip ||  '',
                    street:savedData?.street || '',
                    city:savedData?.city || '',
                    admision:savedData?.admision || '',
                    services:savedData?.services || '',
                    affiliation: savedData?.affiliation || '',
                    entrance:savedData?.entrance || '' ,
                    document:savedData?.document || '',
                    intakes:savedData?.intakes || '',
                    duration1:savedData?.duration1 || '',
                    duration2:savedData?.duration2 || '',

                    
                }}
                onSubmit={onSubmit}
                validationSchema={SignupSchema}
            >
                {({ errors, touched, handleSubmit, setFieldValue }) => (
                    <Form className="av-tooltip tooltip-right-bottom form-group" onSubmit={handleSubmit}>
                        <Row>


                            <h6>Personal:</h6>


                            <Colxx lg={4}>
                                <FormGroup className="form-group mb-2 ">
                                    <Label className='d-flex justify-content-start'>
                                        Address *:
                                    </Label>
                                    <Field className="form-control" type="text" id='address' name='address' />
                                    {errors.address && touched.address && (
                                        <div className="invalid-feedback d-block">
                                            {errors.address}
                                        </div>
                                    )}
                                </FormGroup>
                            </Colxx>
                            <Colxx lg={4}>
                                <FormGroup className="form-group mb-2">
                                    <Label className='d-flex justify-content-start'>
                                        Zip Code *:
                                    </Label>
                                    <Field className="form-control" type="text" id='zip' name='zip' />
                                    {errors.zip && touched.zip && (
                                        <div className="invalid-feedback d-block">
                                            {errors.zip}
                                        </div>
                                    )}
                                </FormGroup>
                            </Colxx>
                            <Colxx lg={4}>
                                <FormGroup className="form-group mb-4">
                                    <Label className='d-flex justify-content-start'>
                                        Street *:
                                    </Label>
                                    <Field className="form-control" type="text" id='street' name='street' />
                                    {errors.street && touched.street && (
                                        <div className="invalid-feedback d-block">
                                            {errors.street}
                                        </div>
                                    )}
                                </FormGroup>
                            </Colxx>
                            <Colxx lg={4}>
                                <FormGroup className="form-group mb-4">
                                    <Label className='d-flex justify-content-start'>
                                        City :
                                    </Label>
                                    <FormikReactSelect
                                        name="city"
                                        id="city"
                                        options={City}
                                        onChange={setFieldValue}
                                    />
                                </FormGroup>
                            </Colxx>
                        </Row>
                        <hr />
                        <Row>


                            <h6>Accadamic Details:</h6>


                            <Colxx lg={4}>
                                <FormGroup className="form-group mb-2">
                                    <Label className='d-flex justify-content-start'>
                                        Admission :
                                    </Label>
                                    <FormikReactSelect
                                        name="admission"
                                        id="admission"
                                        options={Admission}
                                        onChange={setFieldValue}
                                    />
                                </FormGroup>
                            </Colxx>
                            <Colxx lg={4}>
                                <FormGroup className="form-group mb-2">
                                    <Label className='d-flex justify-content-start'>
                                        Services :
                                    </Label>
                                    <FormikReactSelect
                                        name="services"
                                        id="services"
                                        options={Service}
                                        onChange={setFieldValue}
                                    />
                                </FormGroup>
                            </Colxx>
                            <Colxx lg={4}>
                                <FormGroup className="form-group mb-2">
                                    <Label className='d-flex justify-content-start'>
                                        Afiliation :
                                    </Label>
                                    <FormikReactSelect
                                        name="affiliation"
                                        id="affiliation"
                                        options={Afiliation}
                                        onChange={setFieldValue}
                                    />
                                </FormGroup>
                            </Colxx>
                            <Colxx lg={4}>
                                <FormGroup className="form-group mb-2">
                                    <Label className='d-flex justify-content-start'>
                                        Entrance Required:
                                    </Label>
                                    <FormikReactSelect
                                        name="entrance"
                                        id="entrance"
                                        options={Entrance}
                                        onChange={setFieldValue}
                                    />
                                </FormGroup>
                            </Colxx>
                            <Colxx lg={4}>
                                <FormGroup className="form-group mb-2">
                                    <Label className='d-flex justify-content-start'>
                                        Document Submitted:
                                    </Label>
                                    <FormikReactSelect
                                        name="document"
                                        id="document"
                                        options={Docs}
                                        onChange={setFieldValue}
                                    />
                                </FormGroup>
                            </Colxx>
                        </Row>
                        <hr />
                        <Row className='border p-1'>

                            <h6>Intakes:</h6>

                            <Colxx lg={6}>
                                <div className="d-flex justify-content-center align-items-center">
                                    <FormGroup className="form-group mt-4 input-group">
                                    <FormikReactSelect
                                        name="intakes"
                                        id="intakes"
                                        options={Intakes}
                                        onChange={setFieldValue}
                                    />
                                        <span className="input-group-text">+</span>
                                    </FormGroup>
                                </div>
                            </Colxx>
                            <Colxx lg={6}>
                                <Colxx lg={12}>
                                    <FormGroup className="form-group mb-2 input-group">
                                        <Field className="form-control" type="text" id='duration1' name='duration1' placeholder='1 Year' />
                                        <span className="input-group-text">+</span>
                                    </FormGroup>
                                </Colxx>
                                <Colxx lg={12}>
                                    <FormGroup className="form-group mb-2 input-group">
                                        <Field className="form-control" type="text" id='duration2' name='duration2' placeholder='2 Year'/>
                                        <span className="input-group-text">+</span>
                                    </FormGroup>
                                </Colxx>
                            </Colxx>
                        </Row>
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

export default AdditionalDetails;
