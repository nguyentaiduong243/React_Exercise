import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Redirect, useHistory, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import Product from "../models/Product";

export function ProductList() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        (async () => {
            setProducts(await (await axios.get<Product[]>("http://localhost:5000/products").then()).data);
        })();
    }, []);

    function deleteProduct(id: number) {
        (async () => {
            const res =  await axios.delete<Product>(`http://localhost:5000/products/${id}`).then();
            if (res.status === 200) {
                setProducts(products.filter(product => product.id !== id));
            }
        })();
    }

    return (
        <div className="container">
            <div className="row">
                <table className="table">
                    <thead>
                        <tr>
                            <th className="text-center">Id</th>
                            <th className="text-center">Name</th>
                            <th className="text-center">Image</th>
                            <th className="text-center">Description</th>
                            <th className="text-center">Price</th>
                            <th className="text-center">Quantity</th>
                            <th className="text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products && products.map(product => 
                            <tr key={product.id}>
                                <th className="text-center" scope="row">{product.id}</th>
                                <td>{product.name}</td>
                                <td><img src={product.image} alt="Product"/></td>
                                <td>{product.description}</td>
                                <td className="text-center">{product.price!.toLocaleString()} VND</td>
                                <td className="text-center">{product.quantity}</td>
                                <td className="text-center">
                                    <Link to={`/product-details/${product.id}`}>Details</Link>
                                    <br/>
                                    <a href="" onClick={() => deleteProduct(product.id)}>Delete</a>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export function ProductDetails() {
    const {id} = useParams<{id: string}>();
    const history = useHistory();
    const [product, setProduct] = useState<Product>({
        id: 0,
        name: "",
        description: "",
        image: "",
        price: 0,
        quantity: 0
    });

    useEffect(() => {
        (async () => {            
            setProduct((await axios.get<Product>(`http://localhost:5000/products/${Number.parseInt(id)}`).then()).data);
        })();
    }, [id])

    if (id === "") {
        history.push("/products");
    }

    return (
        <div className="container">
            <div className="my-4">
                <h1>Product details</h1>
            </div>
            <div className="row mt-2">
                <div className="col-2">
                    <h5><strong>Name</strong></h5>
                </div>
                <div className="col-10">
                    <span>{product.name}</span>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-2">
                    <h5><strong>Description</strong></h5>
                </div>
                <div className="col-10">
                    <span>{product.description}</span>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-2">
                    <h5><strong>Image</strong></h5>
                </div>
                <div className="col-10">
                    <img src={product.image} alt="Product"/>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-2">
                    <h5><strong>Price</strong></h5>
                </div>
                <div className="col-10">
                    <span>{product.price.toLocaleString()} VND</span>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-2">
                    <h5><strong>Quantity</strong></h5>
                </div>
                <div className="col-10">
                    <span>{product.quantity}</span>
                </div>
            </div>
            <div className="row mt-4">
                <Link className="offset-2" to="/products">Back to product list</Link>
            </div>
        </div>
    )
}

export function ProductCreate() {
    const history = useHistory();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    function onSubmit(data: any) {
        axios
            .post("http://localhost:5000/products", data)
            .then(res => {
                if (res.status === 201) {
                    history.push("/products");
                }
            });
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12">
                    <h3 className="text-center">Create new product</h3>
                </div>
                <form className="col-6" onSubmit={handleSubmit(onSubmit)}>
                    <div className="col-12 mt-3">
                        <label htmlFor="name">Product name</label>
                        <input
                            type="text"
                            id="name"
                            className={`form-control`}
                            {...register("name", {
                                required: "Product name is required",
                                minLength: {
                                    value: 3,
                                    message:
                                        "Product name length must be longer than 2 characters",
                                },
                            })}
                        />
                        {errors.name && (
                            <div
                                className={errors.name === "" ? "" : "invalid"}
                                role="alert"
                            >
                                {errors.name.message}
                            </div>
                        )}
                    </div>

                    <div className="col-12 mt-3">
                        <label htmlFor="image">Product image</label>
                        <input
                            type="text"
                            id="image"
                            className={`form-control`}
                            {...register("image", {
                                required: "Product image is required",
                            })}
                        />
                        {errors.image && (
                            <div
                                className={errors.image === "" ? "" : "invalid"}
                                role="alert"
                            >
                                {errors.image.message}
                            </div>
                        )}
                    </div>

                    <div className="col-12 mt-3">
                        <label htmlFor="price">Product price</label>
                        <input
                            type="number"
                            id="price"
                            className={`form-control`}
                            {...register("price", {
                                required: "Product price is required",
                                valueAsNumber: true,
                                min: {
                                    value: 1,
                                    message:
                                        "Product price must be larger than 0",
                                },
                            })}
                        />
                        {errors.price && (
                            <div
                                className={errors.price === "" ? "" : "invalid"}
                                role="alert"
                            >
                                {errors.price.message}
                            </div>
                        )}
                    </div>

                    <div className="col-12 mt-3">
                        <label htmlFor="description">Product description</label>
                        <textarea
                            id="description"
                            rows={4}
                            className={`form-control`}
                            {...register("description", {
                                required: "Product description is required",
                                minLength: {
                                    value: 3,
                                    message:
                                        "Product description length must be longer than 2 characters",
                                },
                            })}
                        />
                        {errors.description && (
                            <div
                                className={
                                    errors.description === "" ? "" : "invalid"
                                }
                                role="alert"
                            >
                                {errors.description.message}
                            </div>
                        )}
                    </div>

                    <div className="col-12 mt-3">
                        <label htmlFor="quantity">Product quantity</label>
                        <input
                            type="number"
                            id="quantity"
                            className={`form-control`}
                            {...register("quantity", {
                                required: "Product quantity is required",
                                valueAsNumber: true,
                                min: {
                                    value: 1,
                                    message:
                                        "Product price must be larger than 0",
                                },
                            })}
                        />
                        {errors.quantity && (
                            <div
                                className={
                                    errors.quantity === "" ? "" : "invalid"
                                }
                                role="alert"
                            >
                                {errors.quantity.message}
                            </div>
                        )}
                    </div>

                    <div className="container col-12 mt-3">
                        <div className="row justify-content-center">
                            <button className="btn btn-primary" type="submit">
                                Submit
                            </button>
                            <Link
                                className="btn btn-outline-primary ml-2"
                                to="/home"
                            >
                                Return to home
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

const Products = { ProductList, ProductDetails, ProductCreate };

export default Products;