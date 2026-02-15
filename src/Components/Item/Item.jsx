import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300">
      
      {/* Image Section */}
      <Link to={`/product/${props.id}`}>
        <div className="overflow-hidden bg-gray-50">
          <img
            onClick={window.scrollTo(0, 0)}
            src={props.image}
            alt={props.name}
            className="w-full h-72 object-cover group-hover:scale-105 transition duration-500"
          />
        </div>
      </Link>

      {/* Content Section */}
      <div className="p-4 space-y-2">
        <p className="text-sm text-zinc-800 font-medium line-clamp-2">
          {props.name}
        </p>

        <div className="flex items-center gap-3">
          <span className="text-lg font-semibold text-zinc-900">
            ${props.new_price}
          </span>

          <span className="text-sm text-gray-400 line-through">
            ${props.old_price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Item;
