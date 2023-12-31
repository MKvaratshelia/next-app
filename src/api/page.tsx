import { API } from '@/app/api';
import { TopPageModel } from '@/app/interfaces/page.interface';

async function getPage(alias: string): Promise<TopPageModel | null> {
    const res = await fetch(API.topPage.byAlias + alias);
    if (!res.ok) {
        return null;
    }

    return res.json();
}

export default getPage;
