import { useState } from "react";

const shoppingList = [
    { id: 1, item: 'Milk', quantity: 2 },
    { id: 2, item: 'Bread', quantity: 1 },
    { id: 3, item: 'Eggs', quantity: 12 },
    { id: 4, item: 'Apples', quantity: 6 },
    { id: 5, item: 'Rice', quantity: 1 },
];



const Categories = () => {
    const [items, setItems] = useState(shoppingList);
    const [newItem, setNewItem] = useState('');
    const [newItemQuantity, setNewItemQuantity] = useState(1);
    function onAdd() {
        if (newItem.trim() === '') return;
        const newItemObj = {
            id: items.length + 1,
            item: newItem,
            quantity: newItemQuantity
        };
        setItems([...items, newItemObj]);
        setNewItem('');
        setNewItemQuantity(1);
    }
    return (
        <div>
            <ol>{items.map((item) => (
                <div>
                    <li key={item.id}>
                        {item.item} - Quantity: {item.quantity}
                    </li>
                </div>
            ))}
            </ol>
            <div>
                <input value={newItem} onChange={(e) => setNewItem(e.target.value)} />
                <input value={newItemQuantity} onChange={(e) => setNewItemQuantity(parseInt(e.target.value))} type="number" />
                <button onClick={onAdd}>Add</button>
            </div>
        </div>
    )
}
export default Categories;