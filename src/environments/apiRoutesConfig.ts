const apiUrl = 'https://dummyjson.com/auth';

// login endpoint
export const loginRoute = `${apiUrl}/login`;

// current user endpoint
export const userRoute = (id: number) => `${apiUrl}/users/${id}`;

// products endpoint
export const productsRoute = `${apiUrl}/products`;

// product endpoint
export const productRoute = (id: number) => `${apiUrl}/products/${id}`;
