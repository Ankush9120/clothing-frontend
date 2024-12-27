import React, { useState } from 'react'
import { MdArrowBack, MdCheck, MdStar, MdStarBorder, MdLocalShipping, MdClose, MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'

// Simulated API data
const mockOrderData = {
  id: '403-876-786-765-908',
  product: {
    name: 'Wine Coloured Saree',
    image: '/placeholder.svg',
    size: 'S',
    quantity: 1,
  },
  status: 'arriving', // 'arriving' | 'delivered'
  timeline: [
    { id: 1, label: 'Ordered', completed: true },
    { id: 2, label: 'Shipped', completed: true },
    { id: 3, label: 'Out for delivery', completed: true },
    { id: 4, label: 'Delivered', completed: true }
  ],
  rating: 4,
  orderDate: '25-Dec-2024',
  deliveryDate: 'On Sat, 21 Dec',
  expectedDelivery: 'By Sat, 21 Dec',
  pricing: {
    originalPrice: 8699,
    discount: 4699,
    shippingFee: 699,
    codFee: 19,
    total: 1699
  },
  shippingAddress: {
    name: 'Jhon Smith',
    phone: '+91 9587654321',
    address: 'E 44/3, Pocket D, Lorem Ipsum, Sit amor, dorem lisum Lorem ipaum',
    city: 'NEW DELHI',
    pincode: 'DELHI 110020'
  }
}

const Modal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl w-[90%] max-w-md p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
            <MdClose className="w-6 h-6 text-red-600" />
          </div>
          <div>
            <h3 className="text-xl font-medium">Cancel Order</h3>
            <p className="text-gray-600">Are you sure you want to cancel this order?</p>
          </div>
        </div>
        <div className="space-y-3">
          <button 
            onClick={onConfirm}
            className="w-full py-3 bg-red-600 text-white rounded-lg font-medium"
          >
            Yes, Cancel
          </button>
          <button 
            onClick={onClose}
            className="w-full py-3 border border-gray-200 rounded-lg font-medium"
          >
            No, Keep It
          </button>
        </div>
      </div>
    </div>
  )
}

const Timeline = ({ steps }) => (
  <div className="relative flex justify-between items-center w-full mt-4 mb-6">
    <div className="absolute left-0 right-0 h-0.5 bg-gray-200">
      <div 
        className="h-full bg-green-600 transition-all duration-500"
        style={{ 
          width: `${(steps.filter(step => step.completed).length - 1) * 33.33}%`
        }}
      />
    </div>
    {steps.map((step, index) => (
      <div key={step.id} className="relative flex flex-col items-center">
        <div 
          className={`w-5 h-5 rounded-full flex items-center justify-center z-10 
            ${step.completed ? 'bg-green-600' : 'bg-white border-2 border-gray-200'}`}
        >
          {step.completed && <MdCheck className="w-3 h-3 text-white" />}
        </div>
        <span className="text-sm text-gray-600 mt-2">{step.label}</span>
      </div>
    ))}
  </div>
)

const Rating = ({ value }) => (
  <div className="space-y-2">
    <h3 className="text-lg font-medium">Rate this product</h3>
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <React.Fragment key={star}>
          {star <= value ? (
            <MdStar className="w-8 h-8 text-yellow-400" />
          ) : (
            <MdStarBorder className="w-8 h-8 text-yellow-400" />
          )}
        </React.Fragment>
      ))}
    </div>
  </div>
)

export default function OrderStatusPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [paymentExpanded, setPaymentExpanded] = useState(false)
  const [orderData, setOrderData] = useState(mockOrderData)

  const handleCancelOrder = () => {
    setOrderData(prev => ({
      ...prev,
      status: 'cancelled',
      timeline: prev.timeline.map(step => ({ ...step, completed: false }))
    }))
    setIsModalOpen(false)
  }

  return (
    <div className="min-h-screen bg-[#FDF8F3]">
      <div className="max-w-lg mx-auto pb-6">
        {/* Header */}
        <header className="flex items-center gap-4 p-4 bg-white sticky top-0 z-10">
          <MdArrowBack className="w-6 h-6" />
          <h1 className="text-xl font-medium">ORDERS</h1>
        </header>

        <div className="p-4 space-y-6">
          {/* Product Image */}
          <div className="space-y-2">
            <img
              src={orderData.product.image}
              alt={orderData.product.name}
              className="w-full aspect-[4/5] rounded-lg object-cover"
            />
            <h2 className="text-center font-medium">{orderData.product.name}</h2>
            <p className="text-center text-gray-500">
              Size: {orderData.product.size} | Qty: {orderData.product.quantity}
            </p>
          </div>

          {/* Status Section */}
          <div className="bg-[#F5F5F5] rounded-lg p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#E5D7CE] flex items-center justify-center">
                <MdLocalShipping className="w-5 h-5 text-gray-600" />
              </div>
              <div>
                <h2 className="font-medium capitalize">{orderData.status}</h2>
                <p className="text-sm text-gray-500">
                  {orderData.status === 'delivered' ? orderData.deliveryDate : orderData.expectedDelivery}
                </p>
              </div>
            </div>

            <Timeline steps={orderData.timeline} />

            {orderData.status === 'arriving' && (
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full py-2 mt-4 border border-[#8B4513] text-[#8B4513] rounded-lg font-medium"
              >
                Cancel Order
              </button>
            )}
          </div>

          {/* Rating Section */}
          {orderData.status === 'delivered' && (
            <div className="bg-white rounded-lg p-4">
              <Rating value={orderData.rating} />
            </div>
          )}

          {/* Order Details */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-4">Order Details</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Order Date</span>
                  <span>{orderData.orderDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Order ID</span>
                  <span>{orderData.id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Order Total</span>
                  <span>₹{orderData.pricing.total} (1 item)</span>
                </div>
              </div>
            </div>

            {/* Shipping Address */}
            <div>
              <h3 className="text-lg font-medium mb-4">Shipping Address</h3>
              <div className="space-y-2">
                <p className="font-medium">{orderData.shippingAddress.name}</p>
                <p>{orderData.shippingAddress.phone}</p>
                <p className="text-gray-600">{orderData.shippingAddress.address}</p>
                <p className="text-gray-600">{orderData.shippingAddress.city}, {orderData.shippingAddress.pincode}</p>
              </div>
            </div>

            {/* Payment Information */}
            <div>
              <button
                className="flex items-center justify-between w-full text-lg font-medium"
                onClick={() => setPaymentExpanded(!paymentExpanded)}
              >
                <span>Payment Information</span>
                {paymentExpanded ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
              </button>
              
              {paymentExpanded && (
                <div className="mt-4 space-y-3">
                  <div className="flex justify-between">
                    <span>1 x {orderData.product.name}</span>
                    <span>₹{orderData.pricing.originalPrice}</span>
                  </div>
                  <div className="flex justify-between text-green-600">
                    <span>Discount on MRP</span>
                    <span>-₹{orderData.pricing.discount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping Fee</span>
                    <span>₹{orderData.pricing.shippingFee}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cash/Pay on Delivery</span>
                    <span>₹{orderData.pricing.codFee}</span>
                  </div>
                  <div className="flex justify-between pt-3 border-t font-medium">
                    <span>Total Amount</span>
                    <span>₹{orderData.pricing.total}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 mt-4">
                    <MdLocalShipping className="w-5 h-5" />
                    <span>Pay on delivery.</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Modal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleCancelOrder}
      />
    </div>
  )
}

