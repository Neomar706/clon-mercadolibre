import { Navbar } from './components/organisms/Navbar'
import { Slider } from './components/organisms/Slider'

function App() {
	
	return (
		<div className='App'>
			<div className='w-full h-[50rem] bg-[#ebebeb]'>
				<Navbar />
				<Slider />
			</div>
		</div>
	)
}

export default App
