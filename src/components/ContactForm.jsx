import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Typography, Container, Grid } from '@mui/material';

const ContactForm = () => {
    const initialValues = {
        name: '',
        email: '',
        message: '',
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        message: Yup.string().required('Message is required'),
    });

    const handleSubmit = (values, { resetForm }) => {
        console.log(values);
        const { name, email, message } = values;
        alert(`Message sent successfully!\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
        resetForm();
    };


    return (
        <Container maxWidth="sm">
            <Typography variant="h4" align="center" gutterBottom>Contact Form</Typography>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                <Form>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Field
                                as={TextField}
                                variant="outlined"
                                fullWidth
                                id="name"
                                name="name"
                                label="Name"
                                autoComplete="off"
                                sx={{
                                    '& .MuiInputBase-input': {
                                        color: 'white !important',
                                    },
                                    '& .MuiInputLabel-root': {
                                        color: 'white !important',
                                    },
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: 'white !important',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: 'white !important',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: 'white !important',
                                        },
                                    },
                                }}
                                error
                                helperText={<ErrorMessage name="name" />}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Field
                                as={TextField}
                                variant="outlined"
                                fullWidth
                                id="email"
                                name="email"
                                label="Email"
                                autoComplete="off"
                                sx={{
                                    '& .MuiInputBase-input': {
                                        color: 'white !important',
                                    },
                                    '& .MuiInputLabel-root': {
                                        color: 'white !important',
                                    },
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: 'white !important',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: 'white !important',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: 'white !important',
                                        },
                                    },
                                }}
                                error
                                helperText={<ErrorMessage name="email" />}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Field
                                as={TextField}
                                variant="outlined"
                                fullWidth
                                id="message"
                                name="message"
                                label="Message"
                                autoComplete="off"
                                multiline
                                rows={4}
                                sx={{
                                    '& .MuiInputBase-input': {
                                        color: 'white !important',
                                    },
                                    '& .MuiInputLabel-root': {
                                        color: 'white !important',
                                    },
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: 'white !important',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: 'white !important',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: 'white !important',
                                        },
                                    },
                                }}
                                error
                                helperText={<ErrorMessage name="message" />}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Button type="submit" variant="contained" color="primary">Submit</Button>
                        </Grid>
                    </Grid>
                </Form>
            </Formik>
        </Container>
    );
};

export default ContactForm;
