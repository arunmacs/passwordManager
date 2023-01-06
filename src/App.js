import {useState, useRef, useEffect} from 'react'
import AddNewPassword from './components/AddNewPassword'
import YourPasswords from './components/YourPasswords'
import './App.css'

const usePasswordManager = () => {
  //   const timerRef = useRef(null)
  const [state, setState] = useState({
    formData: {
      website: '',
      username: '',
      password: '',
    },
    search: '',
    showPasswords: false,
    filteredPasswords: [],
    passwords: [
      {
        website: 'youtube.com',
        username: 'johnny',
        password: 'dsc293n20n02ncp',
      },
      {
        website: 'google.com',
        username: 'reacher',
        password: '*&6qjncoasnoqwi00',
      },
      {
        website: 'gmail.com',
        username: 'im iron man',
        password: 'ao39*39cnoapnac&',
      },
      {
        website: 'youtube.com',
        username: 'johnny',
        password: 'dsc293n20n02ncp',
      },
      {
        website: 'google.com',
        username: 'reacher',
        password: '*&6qjncoasnoqwi00',
      },
    ],
  })

  const resetForm = () => {
    const formData = {
      website: '',
      username: '',
      password: '',
    }
    setState(prevState => ({...prevState, formData}))
  }

  const getFilteredPasswords = () => {
    const {search, passwords} = state
    // console.log(!search)

    const filteredPasswords = passwords.filter(item =>
      item.website.toLowerCase().includes(search.toLowerCase()),
    )
    setState(prevState => ({
      ...prevState,
      passwords: filteredPasswords,
    }))
  }

  const handleSearchInput = () => event => {
    const updatedState = {...state}
    updatedState[event.target.name] = event.target.value
    setState(updatedState)
  }

  const handleForm = key => event => {
    const updatedState = {...state}
    updatedState[key][event.target.name] = event.target.value
    setState(updatedState)
  }

  const handleCheckbox = () => {
    setState(prevState => ({
      ...prevState,
      showPasswords: !prevState.showPasswords,
    }))
  }

  const handleSubmit = () => event => {
    event.preventDefault()
    const {formData} = state
    setState(prevState => ({
      ...prevState,
      passwords: [...prevState.passwords, formData],
    }))
    resetForm()
  }

  const handleDeletes = key => () => {
    const updatedPasswords = state.passwords.filter(
      (item, index) => index !== key,
    )
    setState(prevState => ({...prevState, passwords: updatedPasswords}))
  }

  return {
    state,
    handleForm,
    handleSubmit,
    handleCheckbox,
    handleSearchInput,
    getFilteredPasswords,
    handleDeletes,
  }
}

const App = () => {
  const {
    state,
    handleForm,
    handleSubmit,
    handleCheckbox,
    handleSearchInput,
    getFilteredPasswords,
    handleDeletes,
  } = usePasswordManager()

  //   useEffect(() => {
  //     getFilteredPasswords()
  //     return () => {}
  //   }, [state.search])

  return (
    <div className="appContainer">
      <Header />
      <AddNewPassword
        formData={state.formData}
        handleForm={handleForm}
        handleSubmit={handleSubmit}
      />
      <YourPasswords
        state={state}
        handleCheckbox={handleCheckbox}
        handleSearchInput={handleSearchInput}
        getFilteredPasswords={getFilteredPasswords}
        handleDeletes={handleDeletes}
      />
    </div>
  )
}

const Header = () => (
  <div className="header">
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
      alt="app logo"
      className="appLogo"
    />
  </div>
)

export default App
