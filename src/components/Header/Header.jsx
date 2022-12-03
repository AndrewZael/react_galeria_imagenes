import './Header.scss';

const Header = (props) => {
    return (
        <header id="header" className='position-sticky'>
            <h1>{ props.title }</h1>
        </header>
    )
}

export default Header;