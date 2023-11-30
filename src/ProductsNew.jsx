export function ProductsNew() {
  return (
    <div>
      <h1>New Product</h1>
      <form>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Price: <input name="price" type="number" />
        </div>
        <div>
          Description: <input name="description" type="text" />
        </div>
        <div>
          Supplier: <input name="supplier" type="number" />
        </div>
        <button type="submit">Create Product</button>
      </form>
    </div>
  );
}
