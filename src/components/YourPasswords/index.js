import './index.css'

const YourPasswords = props => {
  const {
    state,
    handleCheckbox,
    handleSearchInput,
    getFilteredPasswords,
    handleDeletes,
  } = props
  const {
    passwords,
    // filteredPasswords ,
    showPasswords,
    search,
  } = state

  //   const passwordsArray = !search ? passwords : filteredPasswords

  function debounce(func, delay) {
    let timer
    return (...args) => {
      clearTimeout(timer)
      timer = setTimeout(() => {
        func.apply(this, args)
      }, delay)
    }
  }

  const debounceOnChange = debounce(getFilteredPasswords, 500)

  return (
    <div className="cardBackgroundStyle yourPasswords">
      <header>
        <div className="yourPasswordsTitleDiv">
          <h5 className="yourPasswordsTitle">Your Passwords</h5>
          <div className="passwordsCount">
            <span>{passwords?.length}</span>
          </div>
        </div>

        <div className="inputDiv">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
            alt="search"
            className="inputImg"
          />
          <input
            type="search"
            onChange={handleSearchInput()}
            onKeyDown={debounceOnChange}
            value={search}
            placeholder="Search"
            className="inputTag"
            name="search"
          />
        </div>
      </header>
      <hr />
      <div className="checkboxDiv">
        <input
          type="checkbox"
          className="checkbox"
          name="showPasswords"
          onChange={handleCheckbox}
          checked={showPasswords}
        />
        <label htmlFor="showPasswords" className="checkboxLabel">
          Show Passwords
        </label>
      </div>
      <div className="passwordsContainer">
        {passwords?.map((item, index) => (
          <div key={item.website + index.toString(2)} className="passwordCard">
            <div className="detailsDiv">
              <div className="webPic">
                <h3>{item.website.slice(0, 1).toUpperCase()}</h3>
              </div>
              <div className="details">
                <p className="cardDetails website">{item.website}</p>
                <p className="cardDetails username">{item.username}</p>
                {/* <p className="cardDetails password">
                  {showPasswords
                    ? item.password
                    : item.password.replace(/./gi, '*')}
                </p> */}
                <div className="cardDetails password">
                  {showPasswords ? (
                    item.password
                  ) : (
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
                      alt="stars"
                      className="stars"
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="deleteDiv">
              <button type="button" onClick={handleDeletes(index)}>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
                  alt="delete"
                  className="delete"
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default YourPasswords
