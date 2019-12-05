import Router from "express";
const router = Router();
import {
  getOrderedNumbers,
  getOperations
} from "../controllers/indexController";

router.route("/element_sorter").post(getOrderedNumbers);
router.route("/statistics").post(getOperations);
module.exports = router;
