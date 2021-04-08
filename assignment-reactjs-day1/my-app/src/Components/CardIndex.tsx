import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './Card.css';
import { FoodList } from '../Foodlist';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface CardProp {
  iconfont: string;
  text: string;
  price: number;
  desc: string;
  list?: FoodList[];
}

function CardIndex(props: CardProp) {
  const { iconfont, text, price, desc, list = [] } = props;
  return (
    <div>
      <Card bg='light' style={{ width: '20rem' }}>
        <div className="icon click">
          <i className={iconfont} style={{fontSize: '50px'}}></i>
        </div>
        <Card.Body>
          <Card.Title>
            <h1 className='text-color click'>{text}</h1>
          </Card.Title>
          <Card.Text>
            <h2 className='price-color'>{price}$</h2>
            <p className='desc-color'>{desc}</p>
          </Card.Text>
        </Card.Body>
        <div className="check-list">
          {list.map((item) => (
            <div  key={item.name}>
              {item.flag ? (
                <span>
                  <FontAwesomeIcon icon={faCheck} />
                </span>
              ) : (
                <span>
                  <FontAwesomeIcon icon={faTimes} />
                </span>
              )}
                <span style={!item.flag ? { opacity: 0.3 } : { opacity: 1 }}>&ensp;{item.name}</span>
            </div>
          ))}
        </div>
        <Card.Body>
          <Button className="button click" variant='dark' size='lg' block>
            Buy now
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
export default CardIndex;
