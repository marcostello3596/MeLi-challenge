import Link from "next/link";
import api from '@/app/api';

export default async function ItemsPage({searchParams}) {
    const {results} = await api.item.search(searchParams.search);

    return (
        <section className="container mx-auto p-4 bg-white font-proxima mt-8">
            <article className="divide-y divide-gray-200">
                {results.map(item => (
                    <Link href={`/items/${item.id}`} key={item.id} className="flex flex-col md:flex-row gap-4 p-4 items-center hover:bg-gray-50">
                        <img src={item.thumbnail} alt={item.title} className="w-full md:w-44 h-44 object-contain rounded-s m-4"/>
                        <div className="flex flex-col justify-center text-center md:text-left">
                            <p className="text-18px md:text-24px font-bold mb-4 md:mb-8">{Number(item.price).toLocaleString('es-AR', {style: 'currency', currency: item.currency_id})}</p>
                            <p className="text-16px md:text-18px">{item.title}</p>
                        </div>
                    </Link>
                ))}
            </article>
        </section>
    );
}
