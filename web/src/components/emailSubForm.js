import React, { useState } from "react";
import * as styles from "./emailSubForm.module.css";
import { useStaticQuery, graphql } from "gatsby";
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

const EmailSubForm = () => {
  const data = useStaticQuery(graphql`
    query {
      footer: sanityFooter {
        formText
      }
    }
  `);
  const footer = (data || {}).footer;
  const [formMsg, setFormMsg] = useState();
  const [msgIcon, setMsgIcon] = useState();
  const [msgColor, setMsgColor] = useState();
  const [modalIsOpen, setModalIsOpen] = useState();
  return (
    <>
      <Formik
        initialValues={{ email: "" }}
        validationSchema={Yup.object({
          email: Yup.string().email("*Invalid email address"),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            addToMailchimp(values.email).then((data) => {
              console.log(data);
              if (data.result === "error") {
                setMsgIcon(faExclamationCircle);
                setMsgColor(styles.modalError);
                setFormMsg(data.msg);
                setModalIsOpen(true);
                resetForm();
              } else if (data.result === "success") {
                setMsgIcon(faCheck);
                setMsgColor(styles.modalSuccess);
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
          <div className={styles.formContainer}>
            <div className={styles.inputContainer}>
              <span className={styles.signupText}>{footer.formText}</span>
              <div className={styles.inputAndButtonWrapper}>
                <Field
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter email address"
                  className={styles.emailField}
                />

                <button type="submit" className={styles.formButton}>
                  Subscribe
                </button>
              </div>
            </div>
            <div className={styles.messageContainer}>
              <ErrorMessage name="email" />
            </div>
          </div>
        </Form>
      </Formik>
      <Modal
        isOpen={modalIsOpen}
        className={styles.modal}
        overlayClassName={styles.modalOverlay}
        bodyOpenClassName={styles.modalBody}
        contentLabel="Form Modal"
      >
        <div className={styles.modalIconContainer}>
          <FontAwesomeIcon icon={msgIcon} size="4x" className={msgColor} />
        </div>
        <div className={styles.modalContentContainer}>
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

export default EmailSubForm;
