import api from '@/app/api';

export default async function ItemPage({params: {id}}: {params: {id: string}}) {
    const item = await api.item.fetch(id);
}