import { API } from '@/app/api';
import { MenuItem } from '@/app/interfaces/menu.interface';

async function getMenu(firstCategory: number): Promise<MenuItem[]> {
    const res = await fetch(API.topPage.find, {
        method: 'POST',
        body: JSON.stringify({
            firstCategory,
        }),
        // ревалидация с помощью фетч в next (запрос за данными каждые 10 секунд)
        // next: { revalidate: 10 },
        headers: new Headers({ 'content-type': 'application/json' }),
    });
    return res.json();
}

export default getMenu;
