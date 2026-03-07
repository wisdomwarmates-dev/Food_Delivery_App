import React, { createContext, useState, useEffect } from 'react';
import { productsData } from '../data';
import { toast } from 'react-toastify';

export const ShopContext = createContext()

const ShopContextProvider = ({children}) => {

    const [products, setProducts] = useState(productsData); 
    const [cart, setCart] = useState([]);
    const [quantity, setQuantity] = useState(0);
    const[total, setTotal] = useState(0);

    useEffect (() => {
        const total = cart.reduce((accumulator, currentItem) => {
                const priceAsNumber = parseFloat(currentItem.price);
                if(isNaN(priceAsNumber)) {
                    return accumulator
                }
                return accumulator + priceAsNumber *currentItem.amount
        },0);
        setTotal(total)
    },[cart])

    useEffect(() => {
        if(cart) {
            const amount = cart.reduce((accumulator, currentItem) => {
                return accumulator + currentItem.amount
            },0)
            setQuantity(amount)
        }
    },[cart])

    const addToCart = (product, id) => {
        const newItem = {...product, amount: 1}

        const cartItem = cart.find((item) => {
            return item.id === id
        })
            if(cartItem){
            const newCart = [...cart].map((item) => {
                if(item.id === id){
                    return {...item, amount: cartItem.amount}
                } else {
                    return item
                }
            })
            setCart(newCart)              
            } else {
                setCart([...cart, newItem])
                toast.success('Product added to cart')

            }
    }

    const clearCart = () => {
        setCart([])
        toast.success('Cart Empty')
    }

    const removeFromCart = () => {
        const newCart = cart.filter((item) => {
            return item.id !==id;
        })
        setCart(newCart);
        toast.success('Product removed successfully')
    }

    const increaseQuantity = (id) => {
        const cartItem = cart.find((item) => {
        return item.id === id;
        })
        addToCart(cartItem, id)
    }

    const decreaseQuantity = (id) => {
        const cartItem = cart.find((item) => item.id === id);
        if(cartItem){
            const newCart = cart.map((item) => {
                if(item.id === id){
                    return{...item, amount:cartItem.amount -1}
                } else {
                    return item
                }
            })
            setCart(newCart)
        }
        
    }

    return (
        <ShopContext.Provider value={{products, cart, addToCart, removeFromCart, clearCart, increaseQuantity, decreaseQuantity, quantity, total}}>
            {children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider; 
