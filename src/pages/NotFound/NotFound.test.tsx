import { fireEvent, render, screen } from "@testing-library/react";
import NotFound from ".";
import { BrowserRouter } from "react-router-dom";

describe('Notfound component', () => {

    it('Should render notfound component', () => {

        const title = 'Página não encotrada';

        render(
            <BrowserRouter>
                <NotFound />
            </BrowserRouter>
        );

        const el = document.querySelector('div');
        const h1 = document.querySelector('h1');
        const a  = document.querySelector('a');

        expect(el).toBeInTheDocument();
        expect(h1).toBeInTheDocument();
        expect(a).toBeInTheDocument();

        expect(screen.getByText(title)).toBeInTheDocument();

        if(a){
            fireEvent.click(a);
        }

        expect(window.location.pathname).toBe('/');
    });

});