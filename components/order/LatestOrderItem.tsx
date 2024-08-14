import { OrderWithProducts } from "@/src/types"
import {deleteOrder} from '@/actions/delete-order-actions'
import { formatDateToArgentineTime } from "@/src/utils/formatDate"
type LatestOrderItemProps = {
    order: OrderWithProducts
}



export default function LatestOrderItem({order}: LatestOrderItemProps) {
    // const handleDelete = async (orderId:number) => {
    //     try {
    //         console.log(`borrando orden ${order.orderProducts.map(o=>o.orderId)}`)
    //         await deleteOrder(order.orderProducts.map(o=>o.orderId))
    //     } catch (error) {
    //         console.error('Failed to delete order:', error)
    //     }
    // }

  return (
   <>
    {
        order.status ?  
    <div className="bg-white shadow p-5 space-y-5 rounded-lg">
        {/* <button className=""   onClick={() => handleDelete(order.id)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clipRule="evenodd" />
                </svg>
        </button> */}

    <p className="text-2xl font-bold text-slate-600">
        Mesa: {order.name}
    </p>
    {`$${order.total}`}
    <ul 
        className="divide-y divide-gray-200 border-t border-gray-200 text-sm font-medium text-gray-500"
        role="list"
    >
        {order.orderProducts.map(product => (

            <li
                key={product.id}
                className="flex py-6 text-lg"
            >
                <p>
                    <span className="font-bold">
                        ({product.quantity}) {''}
                    </span>
                    {product.product.name}
                </p>
            </li>
        ))} 
        {formatDateToArgentineTime(order.date)}
    </ul>

</div>
    :
    <>
    </>
}
</>
)
}
