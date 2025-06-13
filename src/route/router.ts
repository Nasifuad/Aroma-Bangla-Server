import Router from "express";
import { productRoute } from "../modules/Product/product.route";

const router = Router();
const routes = [
  {
    path: "/product",
    route: productRoute,
  },
];

routes.forEach((route) => {
  router.use(route.path, route.route);
});
router.get("/route", (req, res) => {
  res.send("Hellodfdff World!");
});

export { router };
