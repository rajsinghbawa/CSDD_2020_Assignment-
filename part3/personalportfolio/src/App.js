import './App.css';
import { Link } from 'react-router-dom';



function App() {
  return (
    <div className="App">
       

      <section id="about" className="section bg-gray-100 py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">About</h2>
        <p className="text-gray-700 mb-8">
           Portfolio designs showcasing modern layouts using Flexbox and Grid.
        </p>

        <nav>
          <ul className="flex justify-center gap-6">
            <li>
              <Link
                to="/portfolio_Flex"
                className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
              >
                Portfolio Flex
              </Link>
            </li>
            <li>
              <Link
                to="/portfolio_Grid"
                className="px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition"
              >
                Portfolio Grid
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
    </div>
  );
}

export default App;
