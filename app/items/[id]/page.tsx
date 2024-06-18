import api from '@/app/api';

export default async function ItemPage({ params: { id } }) {
    const item = await api.item.fetch(id);

    return (
        <section className="container mx-auto p-4 bg-white rounded shadow font-proxima mt-32px">
            <div className="grid gap-2">
                <div className="flex justify-between items-start">
                    <img className="w-680px rounded-4px ml-32px" src={item.thumbnail} alt={item.title} />
                    <div className="text-left mr-32px">
                        <p className="text-14px mb-16px mt-32px text-gray-500 ">
                            {item.condition === 'new' ? 'Nuevo' : 'Usado'} | +1000 vendidos
                        </p>
                        <p className="font-semibold text-24px w-60">{item.title}</p>
                        <p className="mt-32px mb-32px text-46px font-light">
                            {Number(item.price).toLocaleString('es-AR', { style: 'currency', currency: item.currency_id })}
                        </p>
                        <button className="mr-32px px-32 pb-1 pt-4 bg-secondary text-white rounded-md hover:bg-blue-600">
                            Comprar
                        </button>
                    </div>
                </div>
                <div className="w-680px">
                    <p className="font-regular text-28px mt-14 ml-32px">Descripción del producto</p>
                    <p className="font-regular text-darkGray text-16px mt-32px mb-32px ml-32px">{item.description}</p>
                </div>
            </div>
        </section>
    );
}