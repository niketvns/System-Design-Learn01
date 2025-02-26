/* eslint-disable react/prop-types */
const ProductCard = ({ product }) => {
  return (
    <div className="shadow-xl w-full p-2 rounded-sm">
      <img
        className="h-64 w-full"
        src={product?.thumbnail}
        alt={product?.title}
      />
      <div className="flex items-center gap-1 flex-wrap pt-2">
        {product?.tags?.map((tag) => {
          return (
            <span key={tag} className="bg-blue-200 px-1 rounded text-sm">
              {tag}
            </span>
          );
        })}
      </div>
      <h3 className="text-md font-semibold">{product?.title}</h3>
      <p>Price: ${product?.price}</p>
    </div>
  );
};

export default ProductCard;
