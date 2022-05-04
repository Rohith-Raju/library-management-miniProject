import React from 'react';

import Card from 'react-bootstrap/Card';

import Button from 'react-bootstrap/button';

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
          marginTop: '3rem',
        }}
      >
        Available books
      </h1>
      <GridSystem colCount={4} md={3}>
        {books.map((key) => {
          return (
            <Card style={{ width: '15rem' }}>
              <Card.Img
                style={{
                  maxHeight: '15rem',
                }}
                variant="top"
                src={key.thumbnailUrl}
              />
              <Card.Body>
                <Card.Title>{truncateString(key.title, 18)}</Card.Title>
                <Button
                  onClick={(e) => alert('You can collect your book in library')}
                  variant="primary"
                >
                  Issue this
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </GridSystem>
    </div>
  );
};
export default All;
