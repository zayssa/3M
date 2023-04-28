import { Logo } from "../Logo/Logo"
import { Search } from "../Search/Search"
import './index.css'

export const Header = ({setSearch}) => {
    return <div className="header">
        <div className="header__wrapper">

            <div className="header__left">
                <Logo></Logo>
                <Search setValue={setSearch} />
            </div>
            <div className="header__icons"></div>
        </div>
    </div>
}