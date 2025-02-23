import { render } from "@testing-library/react";
import Layout from '.';
import { BrowserRouter } from "react-router-dom";
import Header from "../Header";

describe('Layout component', () => {

    it('Should render layout component', () => {

        const categories = ['Eletronico', 'Roupas', 'Livros'];

        render(
            <Layout>
                <BrowserRouter>
                    <Header categories={ categories } />
                </BrowserRouter>
            </Layout>
        );

    });

});