"use client";
import { useState } from 'react';
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Button,
    Checkbox,
    FormControlLabel,
    Pagination,
    TextField,
    Slider,
    Input
} from '@mui/material';
import { FilterList, Search } from '@mui/icons-material';
import { categories, products } from '@/data/products';
import Link from 'next/link';
import { useCart } from '@/app/context/CartContext';

export default function ProductsPage() {
    const [priceRange, setPriceRange] = useState([0, 100000]);
    const [minPriceInput, setMinPriceInput] = useState('');
    const [maxPriceInput, setMaxPriceInput] = useState('');

    const [selectedCategories, setSelectedCategories] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [page, setPage] = useState(1);
    const itemsPerPage = 9;
    const { addToCart } = useCart();

    const handleCategoryChange = (categoryId) => {
        setSelectedCategories(prev =>
            prev.includes(categoryId)
                ? prev.filter(id => id !== categoryId)
                : [...prev, categoryId]
        );
    };

    const filteredProducts = products.filter(product => {
        const matchesCategory = selectedCategories.length === 0 ||
            selectedCategories.includes(product.category);
        const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];

        return matchesCategory && matchesSearch && matchesPrice;
    });


    const paginatedProducts = filteredProducts.slice(
        (page - 1) * itemsPerPage,
        page * itemsPerPage
    );

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-darkBackground p-4 md:p-8">
            <div className="px-8">
                {/* Header and Search */}
                <div className="mb-8">
                    <Typography
                        variant="h5"
                        className="text-center mb-4 text-gray-800 dark:text-white font-bold"
                    >
                        Our Products
                    </Typography>

                    <div className="relative max-w-2xl mx-auto">
                        <TextField
                            fullWidth
                            variant="outlined"
                            placeholder="Search products..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            InputProps={{
                                className: "bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg",
                                startAdornment: <Search className="mr-2 text-gray-900 dark:text-gray-100" />
                            }}
                            InputLabelProps={{
                                className: "text-gray-900 dark:text-gray-100"
                            }}
                        />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-8">
                    {/* Filters Sidebar */}
                    <div className="w-full md:w-64 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md h-fit">
                        <div className="flex items-center gap-2 mb-4">
                            <FilterList className="text-gray-600 dark:text-gray-300" />
                            <Typography className="text-gray-800 dark:text-white font-semibold">
                                Filters
                            </Typography>
                        </div>

                        <Typography className="text-gray-600 dark:text-gray-300 mb-2">
                            Categories
                        </Typography>

                        <div className="space-y-2">
                            {categories.map(category => (
                                <FormControlLabel
                                    key={category.id}
                                    control={
                                        <Checkbox
                                            checked={selectedCategories.includes(category.id)}
                                            onChange={() => handleCategoryChange(category.id)}
                                            className="text-primary dark:text-blue-400"
                                        />
                                    }
                                    label={
                                        <span className="text-gray-700 dark:text-gray-300">
                                            {category.name}
                                        </span>
                                    }
                                />
                            ))}
                        </div>


                        <div className="mt-6">
                            <Typography className="text-gray-600 dark:text-gray-300 mb-4">
                                Price Range
                            </Typography>

                            <div className="flex gap-4 items-center">
                                <Input
                                    value={minPriceInput}
                                    onChange={(e) => {
                                        const value = Math.max(0, Number(e.target.value));
                                        setMinPriceInput(value);
                                        setPriceRange([value, priceRange[1]]);
                                    }}
                                    className="w-24 [&_.MuiInput-input]:text-gray-700 [&_.MuiInput-input]:dark:text-gray-300"
                                    placeholder="Min Kes"
                                    type="number"
                                />
                                <span className="text-gray-500">-</span>
                                <Input
                                    value={maxPriceInput}
                                    onChange={(e) => {
                                        const value = Math.max(0, Number(e.target.value));
                                        setMaxPriceInput(value);
                                        setPriceRange([priceRange[0], value]);
                                    }}
                                    className="w-24 [&_.MuiInput-input]:text-gray-700 [&_.MuiInput-input]:dark:text-gray-300"
                                    placeholder="Max Kes"
                                    type="number"
                                />
                            </div>

                            <Slider
                                value={priceRange}
                                onChange={(_, newValue) => setPriceRange(newValue)}
                                valueLabelDisplay="auto"
                                min={0}
                                max={100000}
                                className="mt-4 [&_.MuiSlider-thumb]:bg-primary [&_.MuiSlider-thumb]:dark:bg-blue-400 [&_.MuiSlider-track]:bg-primary/50 [&_.MuiSlider-rail]:bg-gray-300"
                            />
                        </div>
                    </div>


                    {/* Product Grid */}
                    <div className="flex-1">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {paginatedProducts.map(product => (
                                <Link href={`/products/${product.id}`}
                                    key={product.id}>
                                    <Card
                                        className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col h-full"
                                    >
                                        <CardMedia
                                            component="img"
                                            height="200"
                                            image={product.image}
                                            alt={product.title}
                                            className="h-48 object-cover"
                                        />
                                        <CardContent className="flex-grow space-y-2">
                                            <Typography
                                                variant="h6"
                                                className="text-gray-800 dark:text-white font-semibold"
                                            >
                                                {product.title}
                                            </Typography>
                                            <Typography className="text-accent-dark dark:text-accent font-bold">
                                                Kes {product.price}
                                            </Typography>
                                            <Typography className="text-gray-600 dark:text-gray-300 text-sm">
                                                {product.description}
                                            </Typography>
                                        </CardContent>
                                        <div className="p-4 mt-auto">
                                            <Button
                                                fullWidth
                                                variant="contained"
                                                className="bg-primary hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    addToCart(product);
                                                }}
                                            >
                                                Add to Cart
                                            </Button>
                                        </div>
                                    </Card>
                                </Link>
                            ))}
                        </div>

                        {/* Pagination */}
                        {filteredProducts.length > itemsPerPage && (
                            <div className="mt-8 flex justify-center">
                                <Pagination
                                    count={Math.ceil(filteredProducts.length / itemsPerPage)}
                                    page={page}
                                    onChange={(e, value) => setPage(value)}
                                    className="[&_.MuiPaginationItem-root]:text-gray-700 [&_.MuiPaginationItem-root]:dark:text-white [&_.Mui-selected]:bg-primary [&_.Mui-selected]:dark:bg-blue-600"
                                />
                            </div>
                        )}
                    </div>
                </div>

                {/* Empty State */}
                {filteredProducts.length === 0 && (
                    <div className="text-center py-12">
                        <Typography className="text-gray-600 dark:text-gray-300">
                            No products found matching your criteria
                        </Typography>
                    </div>
                )}
            </div>
        </div>
    );
}