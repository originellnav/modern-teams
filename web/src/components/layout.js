import React, { useState } from "react";
import * as styles from "./layout.module.css";
import "../styles/layout.css";
import NavBar from "./navBar";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import addToMailchimp from "gatsby-plugin-mailchimp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExclamationCircle,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import Modal from "react-modal";

Modal.setAppElement("#___gatsby");

const Layout = ({ children }) => {
  const [formMsg, setFormMsg] = useState();
  const [msgIcon, setMsgIcon] = useState();
  const [modalIsOpen, setModalIsOpen] = useState();
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
              onSubmit={(values, { setSubmitting, resetForm }) => {
                setTimeout(() => {
                  addToMailchimp(values.email).then((data) => {
                    console.log(data);
                    if (data.result === "error") {
                      setMsgIcon(faExclamationCircle);
                      setFormMsg(data.msg);
                      setModalIsOpen(true);
                    } else if (data.result === "success") {
                      setMsgIcon(faCheck);
                      setFormMsg(data.msg);
                      setModalIsOpen(true);
                      resetForm();
                    }
                  });
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
                  <div className={styles.messageContainer}>
                    <ErrorMessage name="email" />
                  </div>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </footer>
      <Modal
        isOpen={modalIsOpen}
        className={styles.modal}
        overlayClassName={styles.modalOverlay}
        bodyOpenClassName={styles.modalBody}
        contentLabel="Form Modal"
      >
        <div className={styles.modalContentContainer}>
          <FontAwesomeIcon
            icon={msgIcon}
            size="2x"
            className={styles.formIcon}
          />
          <div dangerouslySetInnerHTML={{ __html: formMsg }} />
        </div>
        <div className={styles.modalButtonContainer}>
          <button
            onClick={() => setModalIsOpen(false)}
            className={styles.modalButton}
          >
            Okay
          </button>
        </div>
      </Modal>
    </>
  );
};

export default Layout;
