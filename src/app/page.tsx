import { Htag } from '@/components';
import { Button } from '@/components';

export default function Home() {
    return (
        <>
            <Htag tag='h1'>Text</Htag>
            <Button appearance='primary' arrow='right'>
                кнопка
            </Button>
            <Button appearance='ghost' arrow='down'>
                кнопка
            </Button>
        </>
    );
}
