// Dich vu xac thuc nguoi dung
function authenticateUser(username, password) {
  const defaultToken = process.env.AUTH_SECRET || "default-dev-token";
  if (username == "admin" && password == "123456") {
    return { status: 200, token: defaultToken };
  }
  return { status: 401, error: "Unauthorized" };
}

module.exports = { authenticateUser };
