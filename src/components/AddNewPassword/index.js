import './index.css'

const AddNewPassword = props => {
  const {formData, handleForm, handleSubmit} = props

  return (
    <div className="cardBackgroundStyle passwordManagerBg">
      <form onSubmit={handleSubmit()} className="formContainer">
        <div className="formTitleDiv">
          <h5 className="formTitle">Add New Password</h5>
        </div>
        <div className="inputDiv">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
            alt="website"
            className="inputImg"
          />
          <input
            type="text"
            onChange={handleForm('formData')}
            value={formData.website}
            placeholder="Enter Website"
            className="inputTag"
            name="website"
          />
        </div>
        <div className="inputDiv">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
            alt="username"
            className="inputImg"
          />
          <input
            type="text"
            onChange={handleForm('formData')}
            value={formData.username}
            placeholder="Enter Username"
            className="inputTag"
            name="username"
          />
        </div>
        <div className="inputDiv">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
            alt="password"
            className="inputImg"
          />
          <input
            type="password"
            onChange={handleForm('formData')}
            value={formData.password}
            placeholder="Enter Password"
            className="inputTag"
            name="password"
          />
        </div>

        <div className="addButtonDiv">
          <button type="submit" className="addButton">
            Add
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddNewPassword
