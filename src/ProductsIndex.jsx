export function ProductsIndex(props) {
  return (
    <div>
      <h1>Hey what up</h1>
      {props.products.map((product) => (
        <div key={product.id}>
          <img src={product.images[0]} />
          <h2>{product.name}</h2>
          <h2>{product.price}</h2>
        </div>
      ))}
    </div>
  );
}
