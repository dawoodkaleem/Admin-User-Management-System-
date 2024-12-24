const adminMiddleware = async (req, res, next) => {
  try {
    console.log(req.user.isAdmin);
    const adminRole = req.user.isAdmin;
    if (!adminRole) {
      res.status(403).json({ message: "Access denied .User is not an admin." });
    }

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = adminMiddleware;
