import './Product.css'

function Product ({title, price, features}) {
    // const list = features.map((feature) => <li>{feature}</li>);
    if(price>30000){
        return (
            <div className="Product">
                <h3>{title}</h3>
                <h5>Price : {price}</h5>
                <p>Discount of 5%</p>
            </div>
        )
    }
    else{
        return (
            <div className="Product">
                <h3>{title}</h3>
                <h5>Price : {price}</h5>
            </div>
        )
    }
    
}

export default Product;