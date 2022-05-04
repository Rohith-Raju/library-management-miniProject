import React from 'react';

import { FilterByCategory } from '../book';

import Card from 'react-bootstrap/Card';

import Button from 'react-bootstrap/button';

//component import
import NavBar from '../components/navbar';

import GridSystem from '../components/Gridsys';

import { useParams } from 'react-router-dom';

function truncateString(str, num) {
  if (str.length <= num) {
    return str;
  }

  return str.slice(0, num) + '...';
}

const Query = () => {
  const { id } = useParams();

  const data = FilterByCategory(id);
  return (
    <div>
      <NavBar />

      <h3
        style={{
          marginTop: '5rem',
          textAlign: 'center',
        }}
      >
        Search results based on {id}
      </h3>
      <GridSystem colCount={4} md={3}>
        {data.map((key) => {
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
export default Query;
