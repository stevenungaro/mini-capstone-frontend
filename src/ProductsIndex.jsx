export function ProductsIndex(props) {
  return (
    <div>
      <h1>All Games</h1>
      <div className="grid grid-cols-4 gap-8">
        {props.products.map((product) => (
          <div key={product.id}>
            <img className="main_photo" src={product.images[0].url} />
            <div className="grid grid-cols-2 place-content-between">
              <h2>{product.name}</h2>
              <h2>{product.price}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
