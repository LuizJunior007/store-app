import { render } from '@testing-library/react';
import Footer from '.';

describe('Footer component', () => {

    it('Should be render the footer component', () => {

        render(<Footer />);
        const el = document.querySelector('footer');
        expect(el).toBeInTheDocument();

    });

});