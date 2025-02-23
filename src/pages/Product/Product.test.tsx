import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ProductDetails from "../../components/ProductDetails";

describe('Product component', () => {

    global.fetch = jest.fn(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve({ title: 'Produto' }),
        } as Response)
      ) as jest.Mock;

    it('Should render product component', async () => {

        const title = 'Produto';
        const product = {
            id: 1,
            title: 'HD',
            price: 200
        };
        const loading = false;

        render(
            <BrowserRouter>
                <h1>{ title }</h1>
                <ProductDetails product={ product } loading={ loading } />
            </BrowserRouter>
        );

        const el = document.querySelector('h1');
        expect(el).toBeInTheDocument();
        await waitFor(() => expect(screen.getByText('Produto')).toBeInTheDocument());

    });

}); 