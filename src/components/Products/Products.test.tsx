import Products from ".";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from '@testing-library/react';

describe('Products component', () => {

    it('Should render products', () => {

        const mockProducts = [
            {
                id: 1,
                title: 'produto',
                image: 'url',
                price: 200
            },
        ]

        const mockLoading = false;

        render(
            <BrowserRouter future={ { v7_relativeSplatPath: true, v7_startTransition: true } }>
                <Products products={ mockProducts } loading={ mockLoading } />
            </BrowserRouter>
        );

        const el = document.querySelector('.row');
        expect(el).toBeInTheDocument();
        expect(screen.getByText('produto')).toBeInTheDocument();
    });

});