// Kiem thu chuc nang xac thuc
const { authenticateUser, validateEmail } = require('./auth');

console.log("Kiem tra dang nhap that bai:");
const resFail = authenticateUser("user", "sai_mat_khau");
if (resFail.status === 401) {
  console.log("PASS: Tra ve dung ma loi 401");
} else {
  console.log("FAIL: Ma loi khong dung");
}

console.log("Kiem tra dinh dang email:");
if (validateEmail("test@example.com") && !validateEmail("invalid-email")) {
  console.log("PASS: Ham validateEmail hoat dong chinh xac");
} else {
  console.log("FAIL: Ham validateEmail loi");
}
