
export default async function ItemPage({params: {id}}: {params: {id: string}}) {
    const item = await fetch(
        `https://api.mercadolibre.com/items/${id}`
    ).then(
        res =>
            res.json() as Promise<{
                id: string;
                title: string;
                thumbnail: string;
                price: number;
                currency_id: string;
            }>,
    );

    const {plain_text} = await fetch(
        `https://api.mercadolibre.com/items/${id}/description`
    ).then(
        res =>
            res.json() as Promise<{
                plain_text: string;
            }>,
    );
}