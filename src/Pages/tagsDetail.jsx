
import { useLocation, useNavigate } from 'react-router-dom';

const TagsDetail = () => {
  const location = useLocation();
  const { state } = location;
  const filteredProducts = state?.filteredProducts || [];
  const navigate = useNavigate()
  const onClickHome = ()=>{
    navigate("/shop")
  }
  return (
    <div className='bg-[#0F172A]'>
      <div className="container mx-auto p-8 text-white">
      <div className='text-xl font-font font-semibold cursor-pointer'
      onClick={onClickHome}
      >Back to Store </div>
        <h1 className="text-3xl font-bold mb-8 text-center">Anime Products</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <div key={product.id} className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full" src={product.img} alt={product.title} />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{product.title}</div>
                  <p className="text-white text-base">Rating: {product.rate}</p>
                  <p className="text-white text-base">Size: {product.size}</p>
                  <p className="text-white text-base">Reviews: {product.review}</p>
                  <div className="text-white font-bold mt-4">${product.price}</div>
                  <div className="mt-4">
                    {product.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No products found for the selected tag.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TagsDetail;
