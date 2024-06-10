import api from '@/app/api';

export default async function ItemPage({params: {id}}: {params: {id: string}}) {
    const item = await api.item.fetch(id);
    const {plain_text} = await fetch(
        `https://api.mercadolibre.com/items/${id}/description`
    ).then(
        res =>
            res.json() as Promise<{
                plain_text: string;
            }>,
    );

    return (
        <section className="grid gap-2">
            <img src={item.thumbnail} alt={item.title} />
            <p className="font-bold text-xl">{Number(item.price).toLocaleString('es-AR', {style: 'currency', currency: item.currency_id})}</p>
            <p>{item.title}</p>
            <hr />
            <p>{plain_text}</p>
        </section>
    );

    
}