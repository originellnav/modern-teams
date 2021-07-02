import React, { useState } from "react";
import * as styles from "./getlisted.module.css";
import Seo from "../components/seo";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { encode } from "../lib/helpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExclamationCircle,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import Modal from "react-modal";

const Getlisted = () => {
  const [formMsg, setFormMsg] = useState();
  const [msgIcon, setMsgIcon] = useState();
  const [msgColor, setMsgColor] = useState();
  const [modalIsOpen, setModalIsOpen] = useState();
  return (
    <>
      <Seo title="Get Listed" />
      <section className={styles.formWrapper}>
        <div className={styles.formHeading}>
          <span>
            <h2>I want to create a profile for my team!</h2>
          </span>
          <p>
            Tell us about how your company meets our criteria for being a modern
            team.
          </p>
        </div>

        <Formik
          initialValues={{
            companyName: "",
            website: "",
            email: "",
            jobOpenings: "none",
            values: "",
          }}
          validationSchema={Yup.object({
            companyName: Yup.string().required("*Required"),
            website: Yup.string().required("*Required"),
            email: Yup.string()
              .required("*Required")
              .email("*Invalid email address"),
            jobOpenings: Yup.string().required("*Required"),
            values: Yup.string().required("*Required"),
          })}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setTimeout(() => {
              fetch("/", {
                method: "POST",
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded",
                },
                body: encode({ "form-name": "subscribe-form", ...values }),
              })
                .then(() => {
                  setMsgIcon(faCheck);
                  setMsgColor(styles.modalSuccess);
                  setFormMsg("Success");
                  setModalIsOpen(true);
                  resetForm();
                })
                .catch(() => {
                  setMsgIcon(faExclamationCircle);
                  setMsgColor(styles.modalError);
                  setFormMsg("Error");
                  setModalIsOpen(true);
                })
                .finally(() => setSubmitting(false));
            }, 400);
          }}
        >
          <Form
            name="subscribe-form"
            data-netlify={true}
            className={styles.formikForm}
          >
            <div className={styles.formLabel}>
              <div>
                <label htmlFor="companyName">Company Name</label>
              </div>
              <div className={styles.errorMessage}>
                <ErrorMessage name="companyName" />
              </div>
            </div>
            <Field id="companyName" name="companyName" type="text" />

            <div className={styles.formLabel}>
              <div>
                <label htmlFor="website">Website</label>
              </div>
              <div className={styles.errorMessage}>
                <ErrorMessage name="website" />
              </div>
            </div>
            <Field id="website" name="website" type="text" />

            <div className={styles.formLabel}>
              <div>
                <label htmlFor="email">Contact Email</label>
              </div>
              <div className={styles.errorMessage}>
                <ErrorMessage name="email" />
              </div>
            </div>
            <Field id="email" name="email" type="email" />

            <div className={styles.formLabel}>
              <div>
                <label htmlFor="jobOpenings">Number of Job Openings</label>
              </div>
              <div className={styles.errorMessage}>
                <ErrorMessage name="jobOpenings" />
              </div>
            </div>
            <Field id="jobOpenings" name="jobOpenings" as="select">
              <option value="none">None</option>
              <option value="oneToFive">1 - 5</option>
              <option value="fiveToTen">5 - 10</option>
              <option value="tenToFifteen">10 - 15</option>
              <option value="fifteenToTwenty">15 - 20</option>
              <option value="twentyPlus">20+</option>
            </Field>

            <div className={styles.formLabelValues}>
              <div>
                <label htmlFor="values">
                  What values or benefits do you have in place that make you a
                  forward-thinking team?
                </label>
              </div>
              <div className={styles.errorMessage}>
                <ErrorMessage name="values" />
              </div>
            </div>
            <Field id="values" name="values" type="text" as="textarea" />

            <div>
              <button type="submit">SEND</button>
            </div>
          </Form>
        </Formik>
      </section>
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
        <div className={styles.modalContentContainer}>{formMsg}</div>
        <div className={styles.modalButtonContainer}>
          <button
            onClick={() => setModalIsOpen(false)}
            className={styles.modalButton}
          >
            Close
          </button>
        </div>
      </Modal>
    </>
  );
};

export default Getlisted;
