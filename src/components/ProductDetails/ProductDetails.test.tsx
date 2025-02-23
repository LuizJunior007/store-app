import ProductDetails from ".";
import { render } from '@testing-library/react'

describe('Product details component', () => {

    it('Should render product details component', () => {

        const mockProduct = {
            image: 'image1',
            price: 200
        };

        const mockLoading = false;

        render(<ProductDetails product={ mockProduct } loading={ mockLoading } />);
        const el = document.querySelector('.row');
        expect(el).toBeInTheDocument();
    });

});