import axios from "axios";

export interface IProductsResponse {
    products: IProduct[];
    count: number;
}

export interface IProduct {
    id: number;
    name: string;
    brand: string;
    description: string;
    photo: string;
    price: string;
    createdAt: string;
    updatedAt: string;
}


export const BASE_URL = "https://mks-challenge-api-frontend.herokuapp.com/api/v1";

const api = axios.create({
    baseURL: BASE_URL
});

export async function getProducts(): Promise<IProductsResponse> {
    const response = await api.get("/products?page=1&rows=10&sortBy=id&orderBy=ASC");
    return response.data;
}
