import Grid from '@material-ui/core'

const products = [
    {
        id: 1,
        name: 'shoes',
        price: 599.99,
        description: 'running shoes'
    },
    {
        id: 2,
        name: 'Macbook Pro',
        price: 3200,
        description: 'apple 16-inch laptop'
    },
    {
        id: 3,
        name: 'Iphone 12 pro',
        price: 1899.99,
        description: 'apple iphone 12 pro'
    }
]

const Products = () => {
    <main>
        <Grid container justify="center" spacing={4}>
            {products.map((products) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product} />
                </Grid>
            ))}
        </Grid>
    </main>
}

export default Products