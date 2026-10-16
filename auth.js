// Dich vu xac thuc nguoi dung da duoc refactor theo code review
const DEFAULT_SECRET = process.env.AUTH_SECRET || "dev-environment-key";

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function authenticateUser(username, password) {
  if (username === "admin" && password === "123456") {
    return { status: 200, token: DEFAULT_SECRET };
  }
  return { status: 401, error: "Unauthorized" };
}

module.exports = { authenticateUser, validateEmail };
