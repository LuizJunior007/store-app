import { render, screen } from '@testing-library/react';
import Products from '../../components/Products';
import { BrowserRouter } from 'react-router-dom';

describe('Category component', () => {

    it('Should render category component', async () => {

        const category = 'Eletronicos';
        const products = [
            {
                id: 1,
                title: 'Produto',
                image: '',
                price: 200
            }
        ];
        const loading = false;

        render(
            <BrowserRouter>
                <h1>{ category }</h1>
                <Products products={ products } loading={ loading } />
            </BrowserRouter>
        );

        const el = document.querySelector('h1');
        const row = document.querySelector('.row');

        expect(el).toBeInTheDocument();
        expect(row).toBeInTheDocument();
        expect(screen.getByText('Eletronicos')).toBeInTheDocument();
        
    });

});