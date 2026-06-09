const isSignupPage = document.getElementById("repeat-password") !== null;

if (isSignupPage) {
  const signupForm = document.querySelector("form");

  signupForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const firstname = document.getElementById("firstname-input").value;
    const email = document.getElementById("email-input").value;
    const password = document.getElementById("password").value;
    const repeatPassword = document.getElementById("repeat-password").value;

    if (password !== repeatPassword) {
      alert("Mật khẩu nhập lại không khớp. Vui lòng thử lại!");
      return;
    }

    const user = {
      name: firstname,
      email: email,
      password: password,
    };

    localStorage.setItem("italiaUser", JSON.stringify(user));

    alert("Đăng ký thành công! Hãy tiến hành đăng nhập.");

    window.location.href = "login.html";
  });
}

const isLoginPage =
  document.getElementById("Email-input") !== null &&
  document.getElementById("repeat-password") === null;

if (isLoginPage) {
  const loginForm = document.querySelector("form");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const emailLogin = document.getElementById("Email-input").value;
    const passwordLogin = document.getElementById("password-input").value;

    const savedUserJSON = localStorage.getItem("italiaUser");

    if (savedUserJSON) {
      const savedUser = JSON.parse(savedUserJSON);

      if (
        emailLogin === savedUser.email &&
        passwordLogin === savedUser.password
      ) {
        localStorage.setItem("isLoggedIn", "true");

        alert(
          "Đăng nhập thành công! Chào mừng " +
            savedUser.name +
            " đến với nước Ý!",
        );

        window.location.href = "index.html";
      } else {
        alert("Email hoặc mật khẩu không chính xác!");
      }
    } else {
      alert("Không tìm thấy tài khoản nào! Vui lòng đăng ký trước.");
      window.location.href = "signup.html";
    }
  });
}
