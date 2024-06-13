import Link from "next/link";
import api from '@/app/api';

export default async function ItemsPage({searchParams}: {searchParams: {search: string}}) {
    const {results} = await api.item.search(searchParams.search);

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