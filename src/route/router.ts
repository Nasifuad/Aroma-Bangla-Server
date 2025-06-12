import Router from "express";

const router = Router();

router.get("/route", (req, res) => {
  res.send("Hellodfdff World!");
});

export { router };
