import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Policy = () => {
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <h1>Terms and policy</h1>
        <Row>
          <Col md={10}>
            <h6>
            Orders and Payments
            </h6>
            <p>
            - All orders are subject to acceptance and availability.
- Payment must be completed at the time of order. We accept various payment methods, including credit cards and digital wallets.
- Prices are subject to change without notice.
            </p>
            <h6>
            Allergens and Dietary Information
            </h6>
            <p>
            - We take food allergies seriously. Please inform us of any allergies or dietary restrictions when placing your order.
            - While we strive to accommodate all requests, cross-contamination may occur.
            </p>
            <h6>
            Changes to Terms
            </h6>
            <p>
            - We reserve the right to update these Terms and Conditions at any time. Changes will be posted on our website, and continued use of our services constitutes acceptance of the updated terms.
            </p>
            <h6>
            Information We Collect
            </h6>
            <p>
            - We collect personal information such as your name, address, email, and payment details when you place an order.
            </p>
            <h6>
            How We Use Your Information
            </h6>
            <p>
            - Your information is used to process orders, improve our services, and communicate with you about your order and promotions.
            </p>
            <h6>
            Data Security
            </h6>
            <p>
            - We take the security of your information seriously and implement measures to protect it.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Policy;
