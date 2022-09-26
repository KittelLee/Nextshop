import data from "../utils/data";
import Head from "next/head";
import Layout from "../components/Layout";
import ProductItem from "../components/ProductItem";

export default function Home() {
  return (
    <Layout title="Home">
      <div className="grid grid-cols1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {data.products.map((product) => (
          <ProductItem product={product} key={product.slug} />
        ))}
      </div>
    </Layout>
  );
}
