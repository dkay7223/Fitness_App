import img from "../../../images/values.jpg";
import { GiCutDiamond } from "react-icons/gi";
import { values } from "../../../data";
import SectionHead from "./SectionHead";
import Card from "../../../components/Card/Card";
import '../home.css'
const Values = () => {
  return (
    <section className="values">
        <SectionHead icon={<GiCutDiamond />} title="Values" className="cs"/>
      <div className="container values__container">
        <div className="values__left">
          <div className="values__image">
            <img src={img} alt="Values Image" />
          </div>
        </div>

        <div className="values__right">
          
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis,
            autem. Praesentium, recusandae facere eaque, ex laboriosam
            accusantium incidunt assumenda officia ea id fuga unde, vel
            perferendis alias dignissimos corrupti! Quibusdam!
          </p>
          <div className="values__wrapper">
            {values.map(({ id, icon, title, desc }) => {
              return (
                <Card key={id} className="values__value">
                  <span>{icon}</span>
                  <h4>{title}</h4>
                  <small>{desc}</small>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
