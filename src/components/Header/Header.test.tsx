import { render, screen, fireEvent, getByLabelText, getByTestId } from '@testing-library/react';
import Header from '.';
import { BrowserRouter } from 'react-router-dom';
import ThemeContextProvider from '../../contexts/ThemeContext';

describe('Header component', () => {

    const mockCategories = ['Eletronicos', 'Roupas', 'Jóias'];

    it('Should render header component and show store name', () => {

        render(
            <ThemeContextProvider>

                <BrowserRouter>
                    <Header categories={ mockCategories } />
                </BrowserRouter>

            </ThemeContextProvider>
        );

        const el = document.querySelector('.navbar-brand');
        expect(el).toBeInTheDocument();
        expect(screen.getByText('Store-app')).toBeInTheDocument();

        const dropdowns = document.getElementById('basic-nav-dropdown');
        expect(dropdowns).toBeInTheDocument();

        const btnToggleTheme = screen.getByTestId('change-theme');
        expect(btnToggleTheme).toBeInTheDocument();


    });

});