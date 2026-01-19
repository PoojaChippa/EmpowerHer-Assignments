const requests = {};
const LIMIT = 15;
const WINDOW = 60 * 1000; // 1 minute

const rateLimiterMiddleware = (req, res, next) => {
  const ip = req.ip;
  const currentTime = Date.now();

  if (!requests[ip]) {
    requests[ip] = [];
  }

  requests[ip] = requests[ip].filter((time) => currentTime - time < WINDOW);

  if (requests[ip].length >= LIMIT) {
    return res.status(429).json({
      error: "Too many requests, please try again later",
    });
  }

  requests[ip].push(currentTime);
  next();
};

export default rateLimiterMiddleware;
