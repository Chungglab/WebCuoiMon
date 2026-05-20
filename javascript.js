// ==========================================
// XỬ LÝ LOGIC CHO TRANG ĐĂNG KÝ (SIGNUP)
// ==========================================

// Kiểm tra xem chúng ta có đang ở trang Đăng ký không
// (Dựa vào việc tìm ô "repeat-password" xem có tồn tại không)
const isSignupPage = document.getElementById("repeat-password") !== null;

if (isSignupPage) {
  const signupForm = document.querySelector("form");

  signupForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Chặn form tải lại trang

    // Lấy giá trị người dùng nhập vào
    const firstname = document.getElementById("firstname-input").value;
    const email = document.getElementById("email-input").value;
    const password = document.getElementById("password").value;
    const repeatPassword = document.getElementById("repeat-password").value;

    // 1. Kiểm tra mật khẩu có khớp nhau không
    if (password !== repeatPassword) {
      alert("Mật khẩu nhập lại không khớp. Vui lòng thử lại!");
      return; // Dừng lại, không thực thi tiếp
    }

    // 2. Gom dữ liệu lại thành 1 gói (Object)
    const user = {
      name: firstname,
      email: email,
      password: password,
    };

    // 3. Chuyển Object thành chuỗi chữ và lưu vào localStorage
    localStorage.setItem("italiaUser", JSON.stringify(user));

    alert("Đăng ký thành công! Hãy tiến hành đăng nhập.");

    // 4. Chuyển hướng người dùng về trang Đăng nhập
    window.location.href = "login.html";
  });
}

// ==========================================
// XỬ LÝ LOGIC CHO TRANG ĐĂNG NHẬP (LOGIN)
// ==========================================

// Kiểm tra xem chúng ta có đang ở trang Đăng nhập không
// (Dựa vào việc tìm ô "Email-input" và đảm bảo không có "repeat-password")
const isLoginPage =
  document.getElementById("Email-input") !== null &&
  document.getElementById("repeat-password") === null;

if (isLoginPage) {
  const loginForm = document.querySelector("form");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Lấy giá trị người dùng nhập vào trang Login
    const emailLogin = document.getElementById("Email-input").value;
    const passwordLogin = document.getElementById("password-input").value;

    // Mở "sổ tay" localStorage ra xem có tài khoản nào từng đăng ký chưa
    const savedUserJSON = localStorage.getItem("italiaUser");

    if (savedUserJSON) {
      // Biến chuỗi chữ lấy được thành cục dữ liệu (Object) lại
      const savedUser = JSON.parse(savedUserJSON);

      // So sánh email và mật khẩu vừa nhập với email/mật khẩu trong sổ
      if (
        emailLogin === savedUser.email &&
        passwordLogin === savedUser.password
      ) {
        // Đăng nhập thành công -> Lưu cờ trạng thái
        localStorage.setItem("isLoggedIn", "true");

        alert(
          "Đăng nhập thành công! Chào mừng " +
            savedUser.name +
            " đến với nước Ý!",
        );

        // Chuyển hướng về trang chủ
        window.location.href = "index.html";
      } else {
        alert("Email hoặc mật khẩu không chính xác!");
      }
    } else {
      alert("Không tìm thấy tài khoản nào! Vui lòng đăng ký trước.");
      // Đẩy họ sang trang đăng ký
      window.location.href = "signup.html";
    }
  });
}
