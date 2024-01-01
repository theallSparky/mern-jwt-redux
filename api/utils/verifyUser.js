import { Jwt } from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;

  if (!token) {
    return res.status(401).json({ error: "You need to login!" });
  }
};
