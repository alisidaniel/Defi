import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <svg
            className="fill-current h-8 w-8 mr-2"
            width="54"
            height="54"
            viewBox="0 0 54 54"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
          </svg>
          <span className="font-semibold text-xl text-black tracking-tight">
            Dapp
          </span>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Tab 1
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Tab 2
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
            >
              Tab 3
            </a>
          </div>
          <div>
            <a
              href="#"
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            >
              Download
            </a>
          </div>
        </div>
      </nav>
      <section className="flex justify-center">
        <form className="w-full max-w-lg">
          <div className="flex flex-row justify-between w-full px-3">
            <div class="text-gray-900 text-center px-4 py-2 m-2">
              <p>Staking Balance</p>
              <p>0 mDAI</p>
            </div>
            <div class="text-gray-900 text-center px-4 py-2 m-2">
              <p>Reward Balance</p>
              <p>0 DAPP</p>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6 border pt-3 pb-4">
            <div className="flex flex-row justify-between w-full px-3">
              <div class="text-gray-900 text-center px-4 py-2 m-2">
                Stake Tokens
              </div>
              <div class="text-gray-700 text-center px-4 py-2 m-2">
                Balance: 100
              </div>
            </div>
            <div className="w-full px-3">
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="number"
                placeholder="0"
              />
            </div>
            <div class="w-full px-3">
              <button
                class="shadow bg-purple-500 w-full hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="button"
              >
                Stake
              </button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}

export default App;
