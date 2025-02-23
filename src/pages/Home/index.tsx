import { useEffect, useState } from "react";
import { baseUrl, siteName } from "../../config";
import Products from "../../components/Products";

const Home = () => {

    const [ products, setProducts ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    const [ title ] = useState('Produtos');

    document.title = siteName + title;

    const getAllProducts = async () => {

        setLoading(true);

        try{

            const res = await fetch(baseUrl + '/products');

            if(!res.ok){

                throw new Error('Erro ao tentar fazer requisição');
            }

            const data = await res.json();
            
            setLoading(false);
            setProducts(data);
            
        } catch(error){

            console.log(error);
        }


    }

    useEffect(() => {

        getAllProducts();
        
    }, []);

    return(
        <>
            <h1>{ title }</h1>
            <Products products={ products } loading={loading} />
        </>
    );

}

export default Home;