import { Navbar } from './components/organisms/Navbar'
import { Slider } from './components/organisms/Slider'

function App() {
	
	return (
		<div className='App'>
			<div className='w-full h-screen bg-[#ebebeb]'>
				<Navbar />
				<Slider />
			</div>
		</div>
	)
}

export default App
