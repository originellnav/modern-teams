import React from "react";
import * as styles from "./companyPageCarousel.module.css";
import Carousel, {
  slidesToShowPlugin,
  arrowsPlugin,
} from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const companyPageCarousel = ({ children }) => {
  return (
    <Carousel
      className={styles.jobCarousel}
      plugins={[
        "infinite",
        {
          resolve: slidesToShowPlugin,
          options: {
            numberOfSlides: 4,
          },
        },
        {
          resolve: arrowsPlugin,
          options: {
            arrowLeft: (
              <button className={styles.carouselButtonLeft}>
                <FontAwesomeIcon icon={faAngleLeft} size="2x" />
              </button>
            ),
            arrowRight: (
              <button className={styles.carouselButtonRight}>
                <FontAwesomeIcon icon={faAngleRight} size="2x" />
              </button>
            ),
            addArrowClickHandler: true,
          },
        },
      ]}
      breakpoints={{
        550: {
          plugins: [
            "centered",
            "infinite",
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 2,
              },
            },
          ],
        },
        700: {
          plugins: [
            "centered",
            "infinite",
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 3,
              },
            },
          ],
        },
        900: {
          plugins: [
            "centered",
            "infinite",
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 4,
              },
            },
          ],
        },
      }}
    >
      {children}
    </Carousel>
  );
};

export default companyPageCarousel;
