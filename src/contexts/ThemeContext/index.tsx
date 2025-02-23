import { createContext, ReactNode, useState } from 'react';

interface ThemeContextType{
    theme: string;
    toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextType>({
    theme: 'light',
    toggleTheme: () => {}
});

interface ThemeContextProviderProps{
    children: ReactNode;
}

const ThemeContextProvider = ({ children } : ThemeContextProviderProps) => {

    const [ theme, setTheme ] = useState<string>(localStorage.getItem('theme') || 'light');
    const html = document.querySelector('html');

    const toggleTheme = () => {

        if(theme === 'light'){

            setTheme('dark');
            localStorage.setItem('theme', 'dark');
            html?.classList.add('dark');
            html?.classList.remove('light');

        } else{
            
            setTheme('light');
            localStorage.setItem('theme', 'light');
            html?.classList.add('light');
            html?.classList.remove('dark');
        }

    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeContextProvider;