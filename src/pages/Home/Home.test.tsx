import { render, screen, waitFor } from "@testing-library/react";
import Home from ".";
import Products from "../../components/Products";
import { BrowserRouter } from "react-router-dom";

describe('Home component', () => {

    global.fetch = jest.fn(() => 
    
        Promise.resolve({
            ok: true,
            json: () => Promise.resolve([
                {
                    id: 1,
                    title: 'produto1',
                    image: 'src',
                    price: 100
                }
            ])
        } as Response)

    );

    it('Should render Home component', async () => {

        const title = 'Produtos';
        const products = [
            {
                id: 1,
                title: 'produto1',
                image: 'src',
                price: 100
            },
        ];
        const loading = false;

        render(
            <BrowserRouter>
                <h1>{title}</h1>
                <Products products={ products } loading={loading} />
            </BrowserRouter>
        );

        expect(screen.getByText(title)).toBeInTheDocument();

        await waitFor(() => expect(screen.getByText('produto1')).toBeInTheDocument());
    });

});