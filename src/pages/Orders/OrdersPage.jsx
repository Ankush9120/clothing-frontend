import React, { useState, useEffect } from 'react'
import { MdArrowBack, MdSearch, MdLocalShipping, MdCheck, MdClose, MdChevronRight, MdStar, MdStarBorder } from 'react-icons/md'

// Simulated API data
const initialOrders = [
  {
    id: 1,
    status: 'arriving',
    date: 'By Sat, 21 Dec',
    product: {
      name: 'Wine Coloured Saree',
      size: 'S',
      quantity: 1,
      price: 1699,
      image: 'https://via.placeholder.com/80'
    }
  },
  {
    id: 2,
    status: 'delivered',
    date: 'On Sat, 21 Dec',
    product: {
      name: 'Yellow Jacket',
      size: 'S',
      quantity: 1,
      price: 1699,
      image: 'https://via.placeholder.com/80/FFA500'
    },
    rating: 4
  },
  {
    id: 3,
    status: 'cancelled',
    product: {
      name: 'Beige Suit',
      size: 'S',
      quantity: 1,
      price: 1699,
      image: 'https://via.placeholder.com/80/D2B48C'
    }
  },
  {
    id: 4,
    status: 'delivered',
    date: 'On Sat, 21 Dec',
    product: {
      name: 'Red Dress',
      size: 'S',
      quantity: 1,
      price: 1699,
      image: 'https://via.placeholder.com/80/FF0000'
    },
    rating: 4
  }
]

const StatusIcon = ({ status }) => {
  switch (status) {
    case 'arriving':
      return <MdLocalShipping className="w-5 h-5 text-gray-600" />
    case 'delivered':
      return <MdCheck className="w-5 h-5 text-green-600" />
    case 'cancelled':
      return <MdClose className="w-5 h-5 text-red-600" />
    default:
      return null
  }
}

const OrderItem = ({ order }) => (
  <div className="space-y-3">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-[#E5D7CE] flex items-center justify-center">
        <StatusIcon status={order.status} />
      </div>
      <div>
        <h2 className={`font-medium ${order.status === 'delivered' ? 'text-green-600' : order.status === 'cancelled' ? 'text-red-600' : ''}`}>
          {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
        </h2>
        {order.date && <p className="text-sm text-gray-500">{order.date}</p>}
      </div>
    </div>

    <div className="flex items-center gap-4 bg-white rounded-lg p-3">
      <img
        src={order.product.image}
        alt={order.product.name}
        className="w-20 h-20 rounded-lg object-cover"
      />
      <div className="flex-1">
        <h3 className="font-medium">{order.product.name}</h3>
        <p className="text-sm text-gray-500">Size: {order.product.size} | Qty: {order.product.quantity}</p>
        <p className="font-medium mt-1">₹{order.product.price}</p>
      </div>
      <MdChevronRight className="w-6 h-6 text-gray-400" />
    </div>

    {order.status === 'delivered' && (
      <div className="bg-white rounded-lg p-4">
        <h4 className="text-gray-500 mb-2">Rate this product</h4>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            star <= order.rating 
              ? <MdStar key={star} className="w-6 h-6 text-yellow-400" />
              : <MdStarBorder key={star} className="w-6 h-6 text-yellow-400" />
          ))}
        </div>
      </div>
    )}
  </div>
)

export default function OrdersPage() {
  const [orders, setOrders] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    // Simulating API call
    setOrders(initialOrders)
  }, [])

  const filteredOrders = orders.filter(order => 
    order.product.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-[#FDF8F3]">
      <div className="max-w-lg mx-auto relative">
        {/* Fixed Header */}
        <header className="flex items-center gap-4 p-4 bg-white sticky top-0 z-20">
          <MdArrowBack className="w-6 h-6" />
          <h1 className="text-xl font-medium">ORDERS</h1>
        </header>

        {/* Sticky Search */}
        <div className="px-4 py-3 bg-[#FDF8F3] sticky top-[60px] z-10">
          <div className="flex items-center gap-3 px-4 py-2.5 bg-white rounded-full border border-gray-200">
            <MdSearch className="w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search in orders"
              className="flex-1 bg-transparent outline-none text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Scrollable Orders List */}
        <div className="space-y-6 px-4 pb-6">
          {filteredOrders.map(order => (
            <OrderItem key={order.id} order={order} />
          ))}
        </div>
      </div>
    </div>
  )
}

