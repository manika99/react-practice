import Product from "./Product";

function ProductTab (){
    let options =["hi-tech","durable","fast"]; 

    return (
        <div>
            <Product title="mobile" price={30000} />
            <Product title="laptop" price={100000} />
            <Product title="pen" price={1} />
        </div>
    )
}

export default ProductTab;