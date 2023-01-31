import logo from './images/logo.svg';
import illustration from './images/illustration-mockups.svg';

import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

function App() {

  return (
    <main className="min-h-screen bg-violet-600 bg-[url(./images/bg-mobile.svg)] sm:bg-[url(./images/bg-desktop.svg)] bg-cover px-10 sm:px-20 py-4 sm:py-8">
      <header>
        <h1 title='logo'>
          <img src={logo} alt="logo" />
        </h1>
      </header>
      <section className='sm:flex my-6 sm:my-12'>
        <div className='sm:w-1/2'>
          <img src={illustration} alt="hero" />
        </div>
        <div className='sm:w-1/2 text-white sm:p-16 text-center sm:text-left'>
          <h1 className='text-2xl sm:text-4xl font-bold'>Build The Community Your Fans Will Love</h1>
          <p className='my-4'>
            Huddle re-imagines the way we build communities. You have a voice, but so does your audience. 
            Create connections with your users as you engage in genuine discussion. 
          </p>
          <div>
            <button className='bg-white hover:bg-pink-400/80 py-3 px-16 rounded-full text-violet-600 hover:text-white cursor-pointer text-xl shadow-[1px_6px_15px_5px_rgba(0, 0, 0, 40%)]'>Register</button>
          </div>
        </div>
      </section>
      <footer>
        <div className='flex gap-3 justify-center sm:justify-end'>
          <div className='border-2 border-white hover:border-pink-400/80 rounded-full p-2 flex items-center justify-center text-white hover:text-pink-400/80 cursor-pointer'><FacebookOutlinedIcon /></div>
          <div className='border-2 border-white hover:border-pink-400/80 rounded-full p-2 flex items-center justify-center text-white hover:text-pink-400/80 cursor-pointer'><TwitterIcon /></div>
          <div className='border-2 border-white hover:border-pink-400/80 rounded-full p-2 flex items-center justify-center text-white hover:text-pink-400/80 cursor-pointer'><InstagramIcon /></div>
        </div>
      </footer>
    </main>
  )
}

export default App
