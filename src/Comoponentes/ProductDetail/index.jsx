import { useContext } from 'react'
import './style.css'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'


const ProductDetail = () => {
    const context = useContext(ShoppingCartContext);

    return (
        <aside className={` ${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            
            <div className='flex justify-between items-center'>
                <h2 className="font-medium text-xl">Detail</h2>
                <div 
                className='p-6'
                onClick={context.closeProductDetail}>
                    <XMarkIcon className="h-6 w-6"/></div>

            </div>

        </aside>
    )
}

export default ProductDetail;