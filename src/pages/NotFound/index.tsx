import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { siteName } from '../../config';

const NotFound = () => {

    const [ title ] = useState('Página não encotrada');

    useEffect(() => {

        document.title = siteName + title;

    }, []);

    return(
        <div className="d-flex align-items-center justify-content-center flex-column">
            <h1>{ title }</h1>
            <div className='fs-5'>Voltar para o <Link to="/">início</Link></div>
        </div>
    );

}

export default NotFound;