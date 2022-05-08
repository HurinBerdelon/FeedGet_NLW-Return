import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface ThemeContextData {
    theme: string
    setTheme(theme: string): void
}

interface ThemeProviderProps {
    children: ReactNode
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData)

export function ThemeProvider({ children }: ThemeProviderProps) {

    const [theme, setTheme] = useState(localStorage.getItem('FeedGet-Screen-Theme') || 'dark')

    useEffect(() => {

        const root = window.document.documentElement

        localStorage.setItem('FeedGet-Screen-Theme', theme)
        if (theme === 'dark') {
            root.classList.add(theme)
        } else {
            root.classList.remove('dark')
        }


    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    return useContext(ThemeContext)
}