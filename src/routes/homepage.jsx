import React, { useState } from 'react';

//ui imports
import NavBar from '../components/navbar';
import "../Styles/homepage.css";


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
          marginTop: '7rem',
          paddingBottom: '5rem',
          textAlign:'center'
        }}
        fluid="md"
      >
        <Row>
          <Col
            style={{
              fontSize: '3rem',
              textAlign: 'center',
            }}
          >
           What are you looking for today ?
          </Col>
        </Row>
        <Row
          style={{
            paddingTop: '4rem',
          }}
        >
          <Col>
            <InputGroup className="mb-3">
              <FormControl
                onChange={(e) => setInput(e.target.value)}
                size="lg"
                placeholder="Enter any Category"
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
            marginTop: '2rem',
            paddingBottom: '3rem',
          }}
        >
          <hr></hr>
          <Row style={{
            marginTop: '3rem',
            textAlign: 'center',
          }}>
            <Col>
              <h3><b>Java </b></h3>
  
            </Col>
            <Col>
              <h3><b>Internet</b></h3>
            </Col>
            <Col>
              <h3><b>Microsoft</b></h3>
            </Col>
            <Col>
              <h3><b>Web Development</b></h3>
            </Col>
          </Row>
          <Container style={{
            backgroundColor:'#D4ECDD'
          }}>
          <Row
            style={{
              paddingTop: '3rem',
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
            <Col>
              <img
                src="https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/deshmukh2.jpg"
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
        </Container >
        <hr style={{
         margin:'2rem'
        }}></hr>
        <Row>
          <Col >
            <a href="/all">
              <h3
                style={{
                  textAlign: 'center',
                  backgroundColor: '#345B63'
                }}
              ><button type="button" class="btn  btn-lg btn-block"><h3  style={{
                textAlign: 'center',
                  color: 'white',
              }}>Explore more</h3></button>
                
              </h3>
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Homepage;
