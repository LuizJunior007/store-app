import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { formatPrice } from '../../helpers/produtctsHelper';
import Spinner from 'react-bootstrap/Spinner';

type ProductDetailsProps = {
    product: {
        image?: string;
        price?: number;
    }
    loading: boolean
}

const ProductDetails = ({ product, loading } : ProductDetailsProps) => {

    if(loading){

        return(
            <Spinner animation="grow" className='mt-3' />
        );

    }

    return(
        <Row className="mt-3">
            <Col md="6">
                <div className="product-img card p-3">
                    <img src={product.image} alt="product img" />
                </div>
            </Col>

            <Col md="6" className='mt-3 mt-md-0'>

                <div>
                    <span className='price-details'>{formatPrice(product.price)}</span>
                </div>

                <div className="mt-3">
                    <button className="btn btn-primary">Adicionar ao carrinho</button>
                </div>
            </Col>
        </Row>
    );

}

export default ProductDetails;