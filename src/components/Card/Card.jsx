import React from 'react';
import logo from '../../logo.svg'
import './Card.scss';

const Card = (props) => (
  <article className='col-12 col-sm-6 col-md-4 col-lg-3'>
    <div className="card border-0 bg-transparent">
      <div className="content-faces">
        <div className="front" style={{ backgroundColor: props.color }}>
          <img src={props.img} alt={props.name} className="position-absolute mx-auto" />
          <h2>{ props.name }</h2>
        </div>
        <div className="back">
          <h2>{ props.name }</h2>
          <div className="description">
            <p dangerouslySetInnerHTML={{ __html: props.description }}></p>
          </div>
        </div>
      </div>
    </div>
    <div className="overlay-img" style={{ backgroundImage: 'url('+ props.img +')' }}></div>
</article>
);

export default Card;
