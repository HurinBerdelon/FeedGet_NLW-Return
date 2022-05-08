import { useTheme } from "../../hooks/useTheme"
import { BsLightbulbFill } from 'react-icons/bs'
import { MdDarkMode } from 'react-icons/md'

export function ChangeThemeButton(): JSX.Element {

    const { theme, setTheme } = useTheme()

    async function handleChangeTheme() {
        if (theme === 'dark') setTheme('light')
        else setTheme('dark')
    }

    return (
        <div className="flex gap-2">
            <h3 className="dark:text-zinc-100 text-zinc-800">
                Mudar Tema
            </h3>
            <button
                className="dark:text-zinc-100 text-zinc-800"
                type='button'
                onClick={handleChangeTheme}
            >
                {theme === 'dark' ? <BsLightbulbFill /> : <MdDarkMode />}
            </button>
        </div>
    )
}