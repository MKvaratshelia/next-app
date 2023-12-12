import { Metadata } from 'next';
import getPage from '@/api/page';
import { notFound } from 'next/navigation';
import getMenu from '@/api/menu';

export const metadata: Metadata = {
    title: 'Продукты',
};

// генерирую статичные страницы название функции зарезервировано
export async function generateStaticParams() {
    const menu = await getMenu(0);
    // делаю плоский массив из вложенных
    return menu.flatMap((item) => item.pages.map((page) => ({ alias: page.alias })));
}
const PageProducts = async ({ params }: { params: { alias: string } }) => {
    const page = await getPage(params.alias);

    if (!page) {
        notFound();
    }
    return <div>{page.title}</div>;
};

export default PageProducts;
