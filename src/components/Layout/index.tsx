import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Header from '../Header';
import { ReactNode, useEffect, useState } from 'react';
import { baseUrl } from '../../config';
import Footer from '../Footer';

type LayoutProps = {
    children: ReactNode
}

const Layout = ({ children } : LayoutProps ) => {

    const [ categories, setCategories ] = useState<string[]>([]);

    const getAllCategories = async () => {
    
            try{
    
                const res = await fetch(baseUrl + '/products/categories');
    
                if(!res.ok){
    
                    throw new Error('Erro ao tentar fazer requisição');
                }
    
                const data = await res.json();
    
                setCategories(data);
    
            } catch(error){
    
                console.log(error);
            }
    
    
        }

    useEffect(() => {

        getAllCategories();

    }, []);

    return(
        <>
            <div className='main'>
                <div>
                    <Header categories={categories} />

                    <Container fluid="xxl">
                        <Row className='mt-5'>
                            <Col>
                                {children}
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>

            <Footer />
        </>
    );

}

export default Layout;