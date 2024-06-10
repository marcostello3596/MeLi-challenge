import Link from "next/link";

export default async function ItemsPage({searchParams}: {searchParams: {search: string}}) {
    const {results} = await fetch(
        `https://api.mercadolibre.com/sites/MLA/search?q=${searchParams.search}&limit=4`
    ).then(
        res =>
            res.json() as Promise<{
                results: {
                    id: string;
                    title: string;
                    thumbnail: string;
                    price: number;
                    currency_id: string;
                }[];
            }>,
    );

    return (
        <section>
            <article className="grid gap-4">
                {results.map(item => (
                    <Link href={`/items/${item.id}`} key={item.id} className="flex gap-4">
                        <img src={item.thumbnail} alt={item.title} />
                        <div>
                            <p className="font-bold text-xl">{Number(item.price).toLocaleString('es-AR', {style: 'currency', currency: item.currency_id})}</p>
                            <p>{item.title}</p>
                        </div>
                    </Link>
                ))}
            </article>
        </section>
    );
}