import React, { useState } from 'react';

//ui imports
import NavBar from '../components/navbar';

//bootstrap imports
import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Button,
} from 'react-bootstrap';

import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  let navigate = useNavigate();

  const [input, setInput] = useState('');

  const handleclick = () => {
    navigate(`book/${input}`);
  };

  return (
    <>
      <NavBar />
      <Container
        style={{
          marginTop: '10rem',
          paddingBottom: '5rem',
        }}
        fluid="md"
      >
        <Row>
          <Col
            style={{
              fontSize: '2rem',
              textAlign: 'center',
            }}
          >
            What are you looking for today ?
          </Col>
        </Row>
        <Row
          style={{
            paddingTop: '5rem',
          }}
        >
          <Col>
            <InputGroup className="mb-3">
              <FormControl
                onChange={(e) => setInput(e.target.value)}
                size="lg"
                placeholder="Enter any Categoty"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <Button
                type="submit"
                variant="outline-success"
                id="button-addon2"
                onClick={(e) => handleclick()}
              >
                Search
              </Button>
            </InputGroup>
          </Col>
        </Row>
        <Container
          style={{
            marginTop: '8rem',
            paddingBottom: '4rem',
          }}
        >
          <Row>
            <Col>
              <h3>Java</h3>
            </Col>
            <Col>
              <h3>Internet</h3>
            </Col>
            <Col>
              <h3>Microsoft</h3>
            </Col>
            <Col>
              <h3>Web Development</h3>
            </Col>
          </Row>
          <Row
            style={{
              paddingTop: '5rem',
            }}
          >
            <Col>
              <img
                src="https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/davis.jpg"
                alt="java"
              />
            </Col>
            <Col>
              <img
                src="https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/deshmukh2.jpg"
                alt="java"
              />
            </Col>
            <Col>
              <img
                src="https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/azher.jpg"
                alt="java"
              />
            </Col>
            <Col>
              <img
                src="https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/begin.jpg"
                alt="java"
              />
            </Col>
          </Row>
          <Row
            style={{
              paddingTop: '5rem',
            }}
          >
            <Col>
              <img
                src="https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/cogoluegnes.jpg"
                alt="java"
              />
            </Col>
            <Col>
              <img
                src="https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/cervenka.jpg"
                alt="java"
              />
            </Col>
            <Col>
              <img
                src="https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/colledge.jpg"
                alt="java"
              />
            </Col>
            <Col>
              <img
                src="https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/cooper.jpg"
                alt="java"
              />
            </Col>
          </Row>
        </Container>
        <Row>
          <Col>
            <a href="/all">
              <h5
                style={{
                  textAlign: 'center',
                }}
              >
                Explore more ➡️
              </h5>
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Homepage;
