import React, { useState } from "react";
import { MdArrowBack, MdFavoriteBorder, MdAdd, MdEdit, MdDelete, MdClose } from "react-icons/md";

// Mock data for saved addresses
const initialAddresses = [
  {
    id: 1,
    name: "John Smith",
    phone: "+91 9587654321",
    address: "E 44/3, Pocket D, Lorem Ipsum",
    area: "Sit amor, dorem lisum Lorem ipaum",
    city: "NEW DELHI",
    state: "DELHI",
    pincode: "110020",
    isDefault: true,
  },
  {
    id: 2,
    name: "John Smith",
    phone: "+91 9876543210",
    address: "F 22/7, Pocket A, Lorem Ipsum",
    area: "Consectetur adipiscing elit",
    city: "NEW DELHI",
    state: "DELHI",
    pincode: "110019",
    isDefault: false,
  },
];

export default function AddressPage() {
  const [addresses, setAddresses] = useState(initialAddresses);
  const [selectedAddress, setSelectedAddress] = useState(initialAddresses[0].id);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [editingAddress, setEditingAddress] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    area: "",
    city: "",
    state: "",
    pincode: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.phone) newErrors.phone = "Phone is required";
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.pincode) newErrors.pincode = "Pincode is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.state) newErrors.state = "State is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    if (editingAddress) {
      setAddresses((prev) => prev.map((addr) => (addr.id === editingAddress.id ? { ...formData, id: addr.id, isDefault: addr.isDefault } : addr)));
    } else {
      const newAddress = {
        ...formData,
        id: Date.now(),
        isDefault: addresses.length === 0,
      };
      setAddresses((prev) => [...prev, newAddress]);
    }

    setFormData({
      name: "",
      phone: "",
      address: "",
      area: "",
      city: "",
      state: "",
      pincode: "",
    });
    setIsAddingNew(false);
    setEditingAddress(null);
  };

  const handleEdit = (address) => {
    setEditingAddress(address);
    setFormData(address);
    setIsAddingNew(true);
  };

  const handleDelete = (id) => {
    setAddresses((prev) => prev.filter((addr) => addr.id !== id));
    if (selectedAddress === id && addresses.length > 1) {
      setSelectedAddress(addresses.find((addr) => addr.id !== id).id);
    }
  };

  return (
    <div className="min-h-screen bg-[#FDF8F3]">
      <div className="max-w-lg mx-auto pb-20">
        {/* Header */}
        <header className="flex items-center justify-between p-4 bg-white sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <MdArrowBack className="w-5 h-5" />
            <h1 className="text-base font-medium tracking-wide">SHOPPING BAG</h1>
          </div>
          <MdFavoriteBorder className="w-5 h-5" />
        </header>

        {/* Progress Bar */}
        <div className="px-6 py-4">
          <div className="flex items-center justify-between relative">
            <div className="absolute left-[22px] right-[22px] h-[1px] bg-gray-300">
              <div className="w-2/3 h-full bg-[#8B4513]" />
            </div>
            <div className="flex flex-col items-center gap-1 z-10">
              <div className="w-3 h-3 rounded-full bg-[#8B4513] border-2 border-[#8B4513]" />
              <span className="text-xs text-[#8B4513]">Bag</span>
            </div>
            <div className="flex flex-col items-center gap-1 z-10">
              <div className="w-3 h-3 rounded-full bg-[#8B4513] border-2 border-[#8B4513]" />
              <span className="text-xs text-[#8B4513]">Address</span>
            </div>
            <div className="flex flex-col items-center gap-1 z-10">
              <div className="w-3 h-3 rounded-full bg-white border-2 border-gray-300" />
              <span className="text-xs text-gray-400">Payment</span>
            </div>
          </div>
        </div>

        <div className="px-4 space-y-4">
          {/* Add New Address Button */}
          {!isAddingNew && (
            <button onClick={() => setIsAddingNew(true)} className="flex items-center gap-2 w-full p-4 bg-white rounded-lg border border-dashed border-gray-300">
              <MdAdd className="w-5 h-5" />
              <span className="font-medium">Add New Address</span>
            </button>
          )}

          {/* Address Form */}
          {isAddingNew && (
            <div className="bg-white rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-medium">{editingAddress ? "Edit Address" : "Add New Address"}</h2>
                <button
                  onClick={() => {
                    setIsAddingNew(false);
                    setEditingAddress(null);
                    setErrors({});
                  }}
                >
                  <MdClose className="w-5 h-5" />
                </button>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <input type="text" name="name" placeholder="Full Name *" value={formData.name} onChange={handleInputChange} className={`w-full p-3 border rounded-lg ${errors.name ? "border-red-500" : "border-gray-200"}`} />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <input type="tel" name="phone" placeholder="Phone Number *" value={formData.phone} onChange={handleInputChange} className={`w-full p-3 border rounded-lg ${errors.phone ? "border-red-500" : "border-gray-200"}`} />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>
                </div>
                <div>
                  <input type="text" name="address" placeholder="Address (House No, Building, Street) *" value={formData.address} onChange={handleInputChange} className={`w-full p-3 border rounded-lg ${errors.address ? "border-red-500" : "border-gray-200"}`} />
                  {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
                </div>
                <input type="text" name="area" placeholder="Area, Colony, Sector (Optional)" value={formData.area} onChange={handleInputChange} className="w-full p-3 border border-gray-200 rounded-lg" />
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <input type="text" name="pincode" placeholder="Pincode *" value={formData.pincode} onChange={handleInputChange} className={`w-full p-3 border rounded-lg ${errors.pincode ? "border-red-500" : "border-gray-200"}`} />
                    {errors.pincode && <p className="text-red-500 text-xs mt-1">{errors.pincode}</p>}
                  </div>
                  <div>
                    <input type="text" name="city" placeholder="City *" value={formData.city} onChange={handleInputChange} className={`w-full p-3 border rounded-lg ${errors.city ? "border-red-500" : "border-gray-200"}`} />
                    {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
                  </div>
                </div>
                <div>
                  <input type="text" name="state" placeholder="State *" value={formData.state} onChange={handleInputChange} className={`w-full p-3 border rounded-lg ${errors.state ? "border-red-500" : "border-gray-200"}`} />
                  {errors.state && <p className="text-red-500 text-xs mt-1">{errors.state}</p>}
                </div>
                <button type="submit" className="w-full py-3 bg-[#8B4513] text-white rounded-lg font-medium">
                  {editingAddress ? "Save Changes" : "Save Address"}
                </button>
              </form>
            </div>
          )}

          {/* Saved Addresses */}
          <div className="space-y-4">
            {addresses.map((address) => (
              <div key={address.id} className="bg-white rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <input type="radio" name="address" checked={selectedAddress === address.id} onChange={() => setSelectedAddress(address.id)} className="mt-1" />
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-medium">{address.name}</h3>
                        <p className="text-sm text-gray-500">{address.phone}</p>
                      </div>
                      <div className="flex gap-2">
                        <button onClick={() => handleEdit(address)} className="p-1 text-gray-600 hover:text-gray-900">
                          <MdEdit className="w-5 h-5" />
                        </button>
                        <button onClick={() => handleDelete(address.id)} className="p-1 text-gray-600 hover:text-gray-900">
                          <MdDelete className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">{address.address}</p>
                    {address.area && <p className="text-sm text-gray-600">{address.area}</p>}
                    <p className="text-sm text-gray-600">
                      {address.city}, {address.state} {address.pincode}
                    </p>
                    {address.isDefault && <span className="inline-block mt-2 text-xs text-[#8B4513] bg-[#8B4513]/10 px-2 py-1 rounded">Default Address</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Continue Button */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t">
          <button
            onClick={() => {
              /* Handle continue to payment */
            }}
            disabled={!selectedAddress}
            className="w-full py-3 bg-[#8B4513] text-white rounded-lg font-medium disabled:opacity-50"
          >
            Continue to Payment
          </button>
        </div>
      </div>
    </div>
  );
}
