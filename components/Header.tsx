export default function Header() {
  return (
    <header className="flex items-center justify-between h-20">
      <div>
	<a className="text-xl font-semibold" href="#">Nirvax Team</a>
      </div>
      <div className="text-gray-300">
	<nav className="flex items-center justify-between">
	  <a className="px-6" href="#">About</a>
	  <a className="px-6" href="#">Services</a>
	  <a className="px-6" href="#">Team</a>
	  <a className="px-6" href="#">Contact</a>
	</nav>
      </div>
      <div>
	<button type="button" className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Contact Us</button>
      </div>
    </header>
  )
}
