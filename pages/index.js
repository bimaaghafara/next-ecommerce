import Page from 'src/modules/home';
import { initializeStore } from 'src/redux/store';

export async function getServerSideProps(context) {
    const res = await fetch('https://private-4639ce-ecommerce56.apiary-mock.com/home');
    const data = await res.json();
    const categories = data && data[0] && data[0].data && data[0].data.category;
    const products = data && data[0] && data[0].data && data[0].data.productPromo;
    
    // set categories & products to redux state
    const reduxStore = initializeStore();
    const { dispatch } = reduxStore;
    dispatch({ type: 'SET_CATEGORIES', payload: categories });
    dispatch({ type: 'SET_PRODUCTS', payload: products });

    return {
      props: {
        initialReduxState: reduxStore.getState()
      }
    }
}

export default Page;