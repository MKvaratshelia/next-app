import getMenu from '@/api/menu';
import './Menu.module.css';

export const Menu = async () => {
    const menu = await getMenu(0);
    return (
        <div>
            <ul>
                {menu.map((m) => (
                    <li key={m._id.secondCategory}>{m._id.secondCategory}</li>
                ))}
            </ul>
        </div>
    );
};
