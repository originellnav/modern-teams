import React from "react";
import * as styles from "./layout.module.css";
import "../styles/layout.css";
import NavBar from "./navBar";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import addToMailchimp from "gatsby-plugin-mailchimp";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <div className={styles.content}>{children}</div>
      <footer className={styles.footer}>
        <div className={styles.wrapper}>
          <div className={styles.formContainer}>
            <Formik
              initialValues={{ email: "" }}
              validationSchema={Yup.object({
                email: Yup.string().email("Invalid email address"),
              })}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  addToMailchimp(values, null, 2);
                  setSubmitting(false);
                }, 400);
              }}
            >
              <Form>
                <div className={styles.formWrapper}>
                  <div className={styles.inputContainer}>
                    <Field
                      id="email"
                      name="email"
                      type="email"
                      placeholder="What's your email?"
                      className={styles.emailField}
                    />

                    <button type="submit" className={styles.formButton}>
                      Subscribe
                    </button>
                  </div>
                  <div className={styles.errorContainer}>
                    <ErrorMessage name="email" />
                  </div>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Layout;
