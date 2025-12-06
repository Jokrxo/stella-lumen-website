import { useRoute } from "wouter";
import { PRODUCTS } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function ProductDetails() {
  const [match, params] = useRoute<{ id: string }>("/product/:id");
  const product = PRODUCTS.find(p => p.id === params?.id);

  if (!match || !product) {
    return (
      <div className="pt-20 pb-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-3xl font-serif font-bold text-primary">Product Not Found</h1>
          <p className="text-muted-foreground mt-2">The product you are looking for does not exist.</p>
          <Link href="/shop"><Button className="mt-6 bg-primary text-white">Back to Catalogue</Button></Link>
        </div>
      </div>
    );
  }

  const isPriceNumber = typeof product.price === "number";

  return (
    <div className="pt-20 pb-20">
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-2">{product.name}</h1>
          <p className="text-secondary font-medium">{product.category}</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="bg-white border border-border rounded-lg overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-[400px] object-cover" onError={(e) => { (e.currentTarget as HTMLImageElement).src = "https://via.placeholder.com/600x400?text=Image+Unavailable"; }} />
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="bg-white p-8 border border-border rounded-lg shadow-sm">
              <h2 className="text-2xl font-serif font-bold text-primary mb-4">Overview</h2>
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {product.description}
              </p>
              <div className="mt-8 pt-6 border-t border-border flex items-center justify-between">
                <div className="text-lg font-bold text-primary">
                  {product.price ? (isPriceNumber ? `R${product.price}` : product.price) : <span className="text-muted-foreground text-sm font-normal">Contact for Pricing</span>}
                </div>
                {isPriceNumber ? (
                  <Button className="bg-primary text-white">Add to Cart</Button>
                ) : (
                  <Link href="/contact"><Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">Enquire</Button></Link>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6">
        <Link href="/shop"><Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">Back to Catalogue</Button></Link>
      </div>
    </div>
  );
}
