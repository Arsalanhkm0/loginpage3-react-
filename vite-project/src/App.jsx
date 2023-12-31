import './App.css'

function App() {
  function inpA() {
      label1.style.top= "-20px"
      label1.style.fontSize = "12px"
  }
  function inpb() {
      label2.style.top= "-20px"
      label2.style.fontSize = "12px"
}

  return (
  <>
    <div className="login-box">
        <p>sign in</p>
        <form>
          <div className="user-box">
            <input id='inp1' onClick={inpA}  required="" name="" type="text"/>
            <label id="label1">ایمیل / شماره موبایل</label>
          </div>
          <div className="user-box">
            <input onClick={inpb}  required="" name="" type="password"/>
            <label  id="label2">رمز عبور </label>
          </div>
          <div className="flex justify-center">
            <a href="#" >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            ورود
            </a>
          </div>
        </form>
        <p className="flex justify-center mt-3">اکانت ندارید؟ <a href="" className="a2">ثبت نام!</a></p>
      </div>
</>
  )
}

export default App
