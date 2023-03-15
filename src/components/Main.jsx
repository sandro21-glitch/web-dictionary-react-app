import React, { useState, useEffect } from 'react';
import { FaBook,FaMoon,FaSearch } from 'react-icons/fa';
import Content from './Content';
import '../darkMode.css';
const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/'

const Main = () => {

  const [words, setWords] = useState([])
  const [value, setValue] = useState('')
  const [selectedFont, setFont] = useState('serif')
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      if (prevMode) {
        document.body.classList.remove('dark');
      } else {
        document.body.classList.add('dark');
      }
      return !prevMode;
    });
  };

    const handleSearch = async (name) => {
        try {
            const res = await fetch(`${url}${name}`)
            const data = await res.json()
            setWords([data[0]])
            // console.log(data[0])
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
      handleSearch('keyboard')
    },[])

    const searchWord = (e) => {
      e.preventDefault();
      handleSearch(value)
      setValue('')
    }

    const changeFont = (e) => {
      setFont(e.target.value)
    }

  return (
    <main className='max-w-[40rem] mx-auto p-10 md:p-5' style={{ fontFamily: selectedFont }}>
        <header className='flex items-center justify-between mb-10'>
          <div>
            <FaBook className='text-3xl text-boldPurple'/>
          </div>
          <div className='flex items-center space-x-5'>
            <select className='text-boldPurple outline-none text-lg bg-transparent' onChange={changeFont}>
              <option value={'serif'} className='bg-transparent'>Serif</option>
              <option value={'sans-serif'} className='bg-transparent'>Sans-serif</option>
              <option value={'monospace'} className='bg-transparent'>Monospace</option>
            </select>
            <div className='h-[2rem] w-[.1px] bg-gray-500'></div>
            <form onSubmit={(e) => searchWord(e)}>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" onClick={() => toggleDarkMode()} />
                  <div className="w-11 h-6 bg-boldPurple peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:boldPurple rounded-full peer dark:bg-boldPurple peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:boldPurple"></div>
                  <button type='submit' className="ml-3 text-xl font-medium text-boldPurple dark:text-gray-300"><FaMoon /></button>
                </label>
            </form>
          </div>
        </header>
        <div className='mb-5'>
    <form onSubmit={searchWord}>
      <div className="relative">
        <input
          type="search"
          id="default-search"
          className="block w-full outline-boldPurple border border-lightPurple transition-colors ease-in p-4 pl-10 text-md text-gray-900   rounded-lg bg-gray-50"
          placeholder="Search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          type="submit"
          className="text-white absolute right-2.5 bottom-3 bg-lightPurple hover:bg-boldPurple transition-colors ease-in focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2"
        >
          <FaSearch />
        </button>
      </div>
    </form>
  </div>
        <section>
          <Content words={words} />
        </section>
    </main>
  )
}

export default Main
