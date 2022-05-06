import React from 'react';

import { Card, Button, Container } from 'react-bootstrap';

//component import
import NavBar from '../components/navbar';

import books from '../book';
import GridSystem from '../components/Gridsys';

function truncateString(str, num) {
  if (str.length <= num) {
    return str;
  }

  return str.slice(0, num) + '...';
}

truncateString('A-tisket a-tasket A green and yellow basket', 8);

const All = () => {
  return (
    <div>
      <NavBar />
      <h1
        style={{
          textAlign: 'center',
          marginTop: '3rem'
        }}
      >
        Available books
      </h1>
      
      <GridSystem colCount={4} md={3} >
        {books.map((key) => {
          return (
            <Card style={{
              margin: '2rem',
              marginTop:'0rem',
              width: '16rem',
            }}>
              <Card.Img
                style={{
                  maxHeight: '15rem',
                }}
                variant="top"
                src={key.thumbnailUrl}
              />
              <Card.Body>
                <Card.Title style={{
                  textAlign:'center'
                }}>{truncateString(key.title, 18)}</Card.Title>
                <Button 
                  onClick={(e) => alert('You can collect your book in library')}
                  variant="btn btn-outline-primary"
                  style={{
                    marginLeft:'4rem'
                  }}
                >
                  Issue this
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </GridSystem>
      <Container style={{
        padding: '2rem',
        textAlign:'center',
        width:'50rem'
      }}>
        Did not find what you're looking for? Give us feedback on how we can improvise.
      </Container>

    </div>

  );
};
export default All;
