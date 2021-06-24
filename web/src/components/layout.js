import React, { useState } from "react";
import * as styles from "./layout.module.css";
import { useStaticQuery, graphql } from "gatsby";
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
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";

Modal.setAppElement("#___gatsby");

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      footer: sanityFooter {
        formText
        socialItems {
          icon {
            asset {
              _id
            }
          }
          title
          url
          _key
        }
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
      <NavBar />
      <div className={styles.content}>{children}</div>
      <footer className={styles.footer}>
        <div className={styles.wrapper}>
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
          <article className={styles.iconContainer}>
            {footer.socialItems.map((socialItem) => (
              <span key={socialItem._key}>
                <a href={socialItem.url}>
                  <img
                    src={imageUrlFor(buildImageObj(socialItem.icon))
                      .width(20)
                      .height(20)
                      .auto("format")}
                    className={styles.socialIcon}
                    alt="Social Icon"
                  />
                </a>
              </span>
            ))}
          </article>
        </div>
      </footer>
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

export default Layout;
