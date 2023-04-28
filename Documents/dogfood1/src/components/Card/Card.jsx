import './index.css';
import { ReactComponent as Like } from './like.svg'



export const Card = ({ name, pictures, product }) => {
    return <div className="card">
        <div className='card__sticky card__sticky_type_top-left'>
            {!!product.discount && <span className='card__discount'>-{product.discount}%</span>}
        </div>
        <div className='card__sticky card__sticky_type_top-right'>
            <Like />
        </div>
        <a href='/' className='card__link'>
            <img src={pictures} alt="" className='card__image' />
            <div className='card__desc'>
                <span className='card__price'>{product.price}</span>
                <span className='card__weight'>{product.wight}</span>
                <p className='card__name'>{name}</p>
            </div>
        </a>
        <span onClick={() => { }} className='card__cart btn btn_type_primary '>В корзину</span>

    </div>
}