import {HelmetProvider} from 'react-helmet-async'
import {BrowserRouter} from 'react-router-dom'

import {NavBar} from '@components/NavBar'
import {AppRouter} from '@router/AppRouter'

function App() {
	return (
		<HelmetProvider>
			<BrowserRouter>
				<div className="site-container">
					<NavBar />
					<AppRouter />
				</div>
			</BrowserRouter>
		</HelmetProvider>
	)
}

export default App
