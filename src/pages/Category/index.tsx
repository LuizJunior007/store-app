import { useParams } from "react-router-dom";
import { baseUrl, siteName } from "../../config";
import { useEffect, useState } from "react";
import Products from "../../components/Products";
import { handleFormatTitle } from "../../helpers/produtctsHelper";

const Category = () => {

    const { category } = useParams();
    const [ products, setProducts ] = useState([]);
    const [ loading, setLoading ] = useState(false);

    const getProductsByCategory = async () =>{

        setLoading(true);
        setProducts([]);

        try{

            const res = await fetch(baseUrl + '/products/category/' + handleFormatTitle(category));

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

    const handleFirstLetterUpper = (string : string) => {

        return string.charAt(0).toUpperCase() + string.slice(1);

    }

    useEffect(() => {

        getProductsByCategory();
        document.title = siteName + handleFirstLetterUpper(handleFormatTitle(category));

    }, [category]);

    return(
        <>
            <h1>{handleFirstLetterUpper(handleFormatTitle(category))}</h1>
            <Products products={products} loading={loading} />
        </>
    );

}

export default Category;