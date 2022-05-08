import { ChangeThemeButton } from "./components/ChangeThemeButton"
import { Widget } from "./components/Widget"
import { ThemeProvider } from "./hooks/useTheme"

function App() {

	return (
		<ThemeProvider>
			<div className="flex flex-col justify-center items-center h-screen w-sceen">
				<ChangeThemeButton />
				<Widget />
			</div>
		</ThemeProvider>
	)
}

export default App
