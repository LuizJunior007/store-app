import About from ".";
import { render } from '@testing-library/react';

describe('About component', () => {

    it('should be render about component', () => {

        render(<About />);
        const el = document.querySelector('section');
        expect(el).toBeInTheDocument();
    });

});
