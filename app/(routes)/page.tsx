import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
  const product = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("a2c64d21-5d1d-447f-83f6-e4efb948ecc0");

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={product} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
