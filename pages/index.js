import Page from 'src/modules/home';

export async function getServerSideProps(context) {
    const res = await fetch('https://private-4639ce-ecommerce56.apiary-mock.com/home');
    const data = await res.json();
    const categories = data && data[0] && data[0].data && data[0].data.category;
    const products = data && data[0] && data[0].data && data[0].data.productPromo;

    return {
      props: {
        initialReduxState: { categories, products }
      }
    }
}

export default Page;