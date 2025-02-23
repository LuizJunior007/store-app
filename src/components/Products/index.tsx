import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { formatPrice, formatUrl } from '../../helpers/produtctsHelper';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

type Product = {

    id: number
    title: string
    image: string
    price: number

}

type ProductsProps = {

    products: Product[]
    loading: boolean;

}   

const Products = ({ products, loading } : ProductsProps) => {

    if(loading){

        return(
            <Spinner animation="grow" className='mt-3' />
        );

    }

    return(

        <>
            <Row className='g-2 mt-3'>
                { products.map((p) => 
                    <Col sm="6" md="4" lg="2" key={p.id}>
                        <Link to={formatUrl(`/produto/${p.title}/${p.id}`)} title={ p.title }>
                            <div className='card'>
                                <div className='product-img'>
                                    <img src={p.image} alt="photo" className='img-fluid' />
                                </div>

                                <div className='card-body'>
                                    <h2 className='title'>{p.title}</h2>
                                    <span className='price'>{formatPrice(p.price)}</span>
                                    <div className='mt-2'>
                                        <Button variant='primary' className='w-100'>
                                            Ver produto
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </Col>
                ) }
            </Row>
        </>

    );

}

export default Products;