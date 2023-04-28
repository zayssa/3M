import { Card } from '../Card/Card';
import './index.css';

export const CardList = (props) => {

    // console.log({ props });

    return (<div className='cards'>
        {props.cards?.map((element, i) => <Card name={element.name} pictures={element.pictures} key={i} product={element} />)}
    </div>)
}