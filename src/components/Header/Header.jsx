import './Header.scss';

const Header = (props) => {
    return (
        <header id="header">
            <h1>{ props.title }</h1>
        </header>
    )
}

export default Header;