import { Layout } from '@/Layout/Layout';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'ComputedMeta',
};

export default function Home() {
    return (
        <Layout>
            <h1>hello</h1>
        </Layout>
    );
}
