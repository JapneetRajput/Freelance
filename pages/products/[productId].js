import Router, { useRouter } from "next/router"

function ProductDetail(){
    const router = useRouter();
    const productId = router.query.productId;
  return (
    <>Details of Product {productId}</>
  )
}

export default ProductDetail