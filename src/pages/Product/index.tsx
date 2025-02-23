import { useParams } from "react-router-dom";
import { baseUrl, siteName } from "../../config";
import { useEffect, useState } from "react";
import ProductDetails from "../../components/ProductDetails";
import { handleFormatTitle } from "../../helpers/produtctsHelper";

const Product = () => {

    const { id, title } = useParams();
    const [ product, setProduct ] = useState({});
    const [ loading, setLoading ] = useState(false);
    
    document.title = siteName + handleFormatTitle(title);

    const getProductById = async () => {

        setLoading(true);

        try{

            const res = await fetch(baseUrl + '/products/' + id);

            if(!res.ok){

                throw new Error('Erro ao tentar fazer requisição');
            }   
            
            const data = await res.json();

            setProduct(data);
            setLoading(false);

        } catch(error){

            console.log(error);
        }

    }

    useEffect(() => {

        getProductById();

        window.scrollTo({
            top: 0
        });

    }, []);

    return(
        <>
            <h1>{handleFormatTitle(title)}</h1>
            <ProductDetails product={product} loading={loading} />
        </>
    );

}

export default Product;