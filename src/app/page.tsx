'use client';
import { Layout } from '@/Layout/Layout';
import { Htag, P, Rating, Tag, Button } from '@/components';
import { useState } from 'react';

export default function Home() {
    const [rating, setRating] = useState<number>(2);
    return (
        <Layout>
            <Htag tag='h1'>Text</Htag>
            <Button appearance='primary' arrow='right'>
                кнопка
            </Button>
            <Button appearance='ghost' arrow='down'>
                кнопка
            </Button>
            <P size='s'>s</P>
            <P size='m'>m</P>
            <P size='l'>l</P>
            <Tag size='s' color='red'>
                tag
            </Tag>
            <Tag size='m' color='green'>
                tag
            </Tag>
            <Tag size='m' color='primary'>
                tag
            </Tag>
            <Tag size='s' href='https://ya.ru' color='ghost'>
                tag
            </Tag>
            <Rating rating={rating} isEditable={true} setRating={setRating} />
        </Layout>
    );
}
