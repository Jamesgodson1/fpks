import crypto from "node:crypto";

const tokenMaxAgeMs = 1000 * 60 * 60 * 8;

function getSecret() {
  return process.env.ADMIN_SESSION_SECRET || "dev-only-admin-secret";
}

function sign(value) {
  return crypto.createHmac("sha256", getSecret()).update(value).digest("hex");
}

function safeEqual(a, b) {
  const left = Buffer.from(String(a));
  const right = Buffer.from(String(b));
  return left.length === right.length && crypto.timingSafeEqual(left, right);
}

function createToken(email) {
  const payload = Buffer.from(
    JSON.stringify({ email, exp: Date.now() + tokenMaxAgeMs }),
    "utf8"
  ).toString("base64url");
  return `${payload}.${sign(payload)}`;
}

function verifyToken(token) {
  const [payload, signature] = String(token || "").split(".");
  if (!payload || !signature || !safeEqual(signature, sign(payload))) {
    return null;
  }

  const session = JSON.parse(Buffer.from(payload, "base64url").toString("utf8"));
  if (!session.exp || session.exp < Date.now()) {
    return null;
  }
  return session;
}

export function loginAdmin(req, res) {
  const configuredEmail = process.env.ADMIN_EMAIL || "admin@fuelpacks.local";
  const configuredPassword = process.env.ADMIN_PASSWORD || "change-this-password";
  const { email, password } = req.body || {};

  if (!safeEqual(email || "", configuredEmail) || !safeEqual(password || "", configuredPassword)) {
    return res.status(401).json({ message: "Invalid admin credentials." });
  }

  res.json({
    token: createToken(configuredEmail),
    admin: { email: configuredEmail }
  });
}

export function requireAdmin(req, res, next) {
  const header = req.headers.authorization || "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : "";
  const session = verifyToken(token);

  if (!session) {
    return res.status(401).json({ message: "Admin login required." });
  }

  req.admin = session;
  next();
}

export function getAdminSession(req, res) {
  res.json({ admin: { email: req.admin.email } });
}
