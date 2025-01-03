"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const upload_middleware_1 = __importDefault(require("../middlewares/upload.middleware"));
const upload_controller_1 = __importDefault(require("../controllers/upload.controller"));
const products_controller_1 = __importDefault(require("../controllers/products.controller"));
const category_controller_1 = __importDefault(require("../controllers/category.controller"));
const router = express_1.default.Router();
// Route Searching
router.get("/categories/:id/products", category_controller_1.default.findCategoryProducts);
// Route Category
router.get("/categories", category_controller_1.default.findAll);
router.post("/categories", category_controller_1.default.create);
router.get("/categories/:id", category_controller_1.default.findOne);
router.put("/categories/:id", category_controller_1.default.update);
router.delete("/categories/:id", category_controller_1.default.delete);
// Route Product
router.get("/products", products_controller_1.default.findAll);
router.post("/products", products_controller_1.default.create);
router.get("/products/:id", products_controller_1.default.findOne);
router.put("/products/:id", products_controller_1.default.update);
router.delete("/products/:id", products_controller_1.default.delete);
router.post("/upload", upload_middleware_1.default.single, upload_controller_1.default.single);
router.post("/uploads", upload_middleware_1.default.multiple, upload_controller_1.default.multiple);
exports.default = router;
