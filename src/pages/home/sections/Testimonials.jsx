import React, { useState } from "react";
import SectionHead from "./SectionHead";
import { ImQuotesLeft } from "react-icons/im";
import Card from "../../../components/Card/Card";
import { testimonials } from "../../../data";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import "../home.css";
const Testimonials = () => {
  const [index, setIndex] = useState(2);
  const { name, quote, job, avatar } = testimonials[index];

  const prev_testimonial = () => {
    if (index <= 0) setIndex(5);
    setIndex((prev) => prev - 1);
  };

  const next_testimonial = () => {
    
    setIndex((prev) => prev + 1);
    if (index >= 4) setIndex(0);
  };

  return (
    <section className="testimonials">
      <div className="container testimonials__container">
        <SectionHead
          icon={<ImQuotesLeft />}
          title="Testimonials"
          className="testimonials__head"
        />
        <Card className="testimonial">
          <div>
            <img className="testimonial__avatar" src={avatar} alt="" />
          </div>

          <p className="testimonial__quote">{`"${quote}`}</p>
          <h5>{name}</h5>
          <small className="testimonial__quote">{job}</small>
        </Card>

        <div className="testimonials__btn-container">
          <button className="testimonials-btn">
            <IoIosArrowDropleftCircle onClick={prev_testimonial} />
          </button>
          <button className="testimonials-btn">
            <IoIosArrowDroprightCircle onClick={ next_testimonial } />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
