import './Card.scss';

const Card = (props) => (
  <article className='col-12 col-sm-6 col-md-4 col-lg-3 mb-3'>
    <div className="card border-0 bg-transparent">
      <div className="content-faces">
        <div className="front" style={{ backgroundColor: props.color }}>
          <img src={props.img} alt={'Personaje ' + props.name + ' original de ' + props.origin} className="position-absolute mx-auto" />
          <h2 className="text-truncate h3">{ props.name }</h2>
        </div>
        <div className="back">
          <h2 className="text-truncate">{ props.name }</h2>
          <h3 className="small text-uppercase mb-3">{ props.origin }</h3>
          <div className="description">
            <p dangerouslySetInnerHTML={{ __html: props.description }}></p>
          </div>
        </div>
      </div>
    </div>
    <div role="img" className="overlay-img" style={{ backgroundImage: 'url('+ props.img +')' }}></div>
</article>
);

export default Card;
