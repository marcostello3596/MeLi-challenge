//https://api.mercadolibre.com/sites/MLA/search?q=:query

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
}