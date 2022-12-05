import './Header.scss';

const Header = (props) => {
    return (
        <header className="position-sticky">
            <h1 className="h2">{ props.title }</h1>
        </header>
    )
}

export default Header;