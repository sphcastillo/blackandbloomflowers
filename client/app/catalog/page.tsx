import CatalogList from "@/components/CatalogList";

export default function CatalogPage() {
  return (
    <div>
        <div>
            <h1 className="text-4xl font-bold uppercase">Send Little Joys</h1>
        </div>
        <CatalogList products={products} />
    </div>
  )
}
