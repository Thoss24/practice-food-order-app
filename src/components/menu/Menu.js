import MenuItem from "./MenuItem";
import classes from './Menu.module.css';

const menu = [
    {
        name: 'burger', 
        price: '£10',
        key: 1,
        description: 'test'
    },
    {
        name: 'salad', 
        price: '£12',
        key: 2,
        description: 'test'
    },
    {
        name: 'hot dog', 
        price: '£15',
        key: 3,
        description: 'test'
    },
    {
        name: 'salmon', 
        price: '£17',
        key: 4,
        description: 'test'
    },
]

const Menu = () => {

    return (
        <div className={classes.menu}>
        {menu.map((item) => (
            <MenuItem 
            id={item.key}
            key={item.key}
            name={item.name}
            price={item.price}/>
        ))}
        </div>
    )
}

export default Menu