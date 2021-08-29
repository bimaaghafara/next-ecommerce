
import { useSelector, useDispatch } from 'react-redux';

export const useWishlist = (product) => {
    const dispatch = useDispatch();
    const productsWishlist = useSelector((state) => state.productsWishlist || []);

    const isWishlist = () => !!productsWishlist.find(e => e.id == product.id);
    const handleAddToWishlist = (e) => {
        e.stopPropagation();
        if (isWishlist()) {
            dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: product });
        } else {
            dispatch({ type: 'ADD_TO_WISHLIST', payload: product });
        }
    }
    return { productsWishlist, isWishlist, handleAddToWishlist }
}