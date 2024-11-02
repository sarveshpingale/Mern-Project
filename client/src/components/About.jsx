import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <h1>Who are we</h1>
        <p>Welcome to Pizza Store, where passion for pizza comes to life! Our team of pizza enthusiasts is dedicated to crafting the perfect pie using only the freshest ingredients and time-honored techniques. We believe in bringing people together over delicious, handmade pizzas that cater to every taste. Whether you’re a fan of classic flavors or adventurous toppings, we have something for everyone. Join us in our welcoming pizzeria or order online for a slice of happiness delivered to your door. At Pizza Store, every pizza is a labor of love!        </p>
        <h1>Our Speciality</h1>
        <Row>
          <Col >
            <p>
            At Pizza Store, our specialty is crafting artisanal pizzas that delight every palate! We take pride in our signature dough, made fresh daily, and top it with high-quality, locally sourced ingredients. Our menu features unique combinations, like our gourmet truffle mushroom pizza and spicy buffalo chicken pie, alongside classic favorites. We also offer a range of gluten-free and vegan options, ensuring everyone can enjoy the perfect slice. Whether you're craving a traditional Margherita or an adventurous seasonal special, our pizzas are designed to elevate your dining experience!
            </p>
          </Col>
          
        </Row>
        <Row>
          <h1>Our Vision for the Future</h1>
          <Col>
          <p>
          

At Pizza Store, our vision is to become a beloved cornerstone of the community, where great pizza brings people together. We aspire to continuously innovate our menu by introducing seasonal ingredients and exciting flavor combinations that celebrate local produce. 

We also aim to expand our reach, making our handcrafted pizzas accessible to even more pizza lovers through new locations and convenient delivery options. Sustainability is at the heart of our mission; we are committed to implementing eco-friendly practices in our operations, from sourcing ingredients to packaging.

Ultimately, we envision creating a welcoming space where everyone can gather, enjoy delicious food, and make lasting memories. Join us on this journey as we strive to elevate the pizza experience and foster a sense of community!
</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
