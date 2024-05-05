import './Product.css'

function Product ({title, price, features}) {
    // const list = features.map((feature) => <li>{feature}</li>);

    let isDiscount = price > 30000 ? "5% Dsicount" : "";

    let styles = {backgroundColor : isDiscount ? "pink" : "" };

        return (
            <div className="Product" style={styles}>
                <h3>{title}</h3>
                <h5>Price : {price}</h5>
                <p>{isDiscount}</p>
            </div>
        )
}

export default Product;