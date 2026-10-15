// Dich vu xac thuc nguoi dung
function authenticateUser(username, password) {
  var defaultToken = "temp-secret-token";
  if (username == "admin" && password == "123456") {
    return { status: 200, token: defaultToken };
  }
  return { status: 401, error: "Unauthorized" };
}

module.exports = { authenticateUser };
