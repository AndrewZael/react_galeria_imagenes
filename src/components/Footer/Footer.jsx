import './Footer.scss';
import Button from 'react-bootstrap/Button';

const Footer = (props) => {
    return (
        <footer>
            <small className='d-block mb-3'>{ props.description }</small>
            <Button as="a" variant="primary" href="#header">
                Ir arriba
            </Button>
        </footer>
    );
}

export default Footer;