import {Request, Response} from "express";

let products = [
    { id: 1, name: 'Laptop', category: 'Elektronik' },
    { id: 2, name: 'Meja', category: 'Perabotan' }
];

let categories =  [
    { id: 1, name: 'Elektronik' },
    { id: 2, name: 'Perabotan' }
]

const getAllCategories = (req: Request, res: Response) => {
    res.json(categories);
}

const getCategoryById = (req: Request, res: Response) => {
    const categoryId = parseInt(req.params.id);
    const category = categories.find(c => c.id === categoryId);
    if (category) {
        res.json(category);
    } else {
        res.status(404).json({ message: 'Category not found' });
    }
}

const postCategory = (req: Request, res: Response) => {
    const newCategory = req.body;
    newCategory.id = categories.length ? categories[categories.length - 1].id + 1 : 1;
    categories.push(newCategory);
    res.status(201).json(newCategory);
};

const updateCategoryById = (req: Request, res: Response) => {
    const categoryId = parseInt(req.params.id);
    const categoryIndex = categories.findIndex(c => c.id === categoryId);
    if (categoryIndex !== -1) {
        categories[categoryIndex] = { id: categoryId, ...req.body };
        res.json(categories[categoryIndex]);
    } else {
        res.status(404).json({ message: 'Category not found' });
    }
};

const deleteCategoryById = (req: Request, res: Response) => {
    const categoryId = parseInt(req.params.id);
    categories = categories.filter(c => c.id !== categoryId);
    res.status(204).send();
};

const getProductByName = (req: Request, res: Response) => {
    const query = String(req.query.name);
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
    if (filteredProducts.length>0) {
        res.json(filteredProducts);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
};

const getProductByCategoryIdAndName = (req: Request, res: Response) => {
    const query = String(req.query.name);
    const categoryId = parseInt(req.params.categoryId);    
    const category = categories.find(c => c.id === categoryId);
    let filteredProducts = products.filter(p => (p.category === category?.name));
    filteredProducts = filteredProducts.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );

    if (filteredProducts.length>0) {
        res.json(filteredProducts);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
};

module.exports = {
    getAllCategories,
    getCategoryById,
    postCategory,
    updateCategoryById,
    deleteCategoryById,
    getProductByName,
    getProductByCategoryIdAndName
}