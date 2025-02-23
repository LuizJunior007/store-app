import { render, screen } from "@testing-library/react";
import Contact from ".";
import { siteName } from "../../config";

describe('Contact component', () => {

    it('Should render contact component', () => {

        const title = 'Contato';
        document.title = siteName + title;

        render(<Contact />);

        const el = document.querySelector('h1');
        const section = document.querySelector('section');

        expect(el).toBeInTheDocument();
        expect(screen.getByText(title)).toBeInTheDocument();
        expect(section).toBeInTheDocument();

    });

});