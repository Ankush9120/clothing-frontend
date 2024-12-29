'use client'

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdAdd, MdEdit, MdDelete, MdClose } from "react-icons/md";
import Header from "../../components/Header";
import { HeartIcon } from "../../libs/icons";
import StatusBar from "../../components/StatusBar";
import { STATUS_STEPS } from "../../libs/constants";
import StickyButton from "../../components/StickyButton";

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
      setAddresses((prev) =>
        prev.map((addr) =>
          addr.id === editingAddress.id
            ? { ...formData, id: addr.id, isDefault: addr.isDefault }
            : addr
        )
      );
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
      <div className="grow flex flex-col">
        <Header
          title="Address"
          links={[
            {
              icon: HeartIcon,
              to: "/liked-products",
            },
          ]}
        />

        <StatusBar activeStep={STATUS_STEPS.ADDRESS} />

        <div className="px-4 py-4 space-y-4 grow">
          {/* Add New Address Button */}
            {!isAddingNew && (
              <button
                onClick={() => setIsAddingNew(true)}
                className="flex items-center gap-2 w-full px-4 py-3 rounded-md border border-dashed border-primary-100"
              >
                <MdAdd className="w-5 h-5 text-primary-100" />
                <span className="text-sm font-medium text-primary-100 font-albert">Add New Address</span>
              </button>
            )}

          {/* Address Form */}
          <AnimatePresence>
            {isAddingNew && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-primary-600 rounded-md p-4"
              >
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-sm font-medium text-gray-900 font-albert">
                    {editingAddress ? "Edit Address" : "Add New Address"}
                  </h2>
                  <button
                    onClick={() => {
                      setIsAddingNew(false);
                      setEditingAddress(null);
                      setErrors({});
                    }}
                    className="p-2"
                  >
                    <MdClose className="w-5 h-5 text-gray-500" />
                  </button>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <input
                        type="text"
                        name="name"
                        placeholder="Full Name *"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full px-[9px] py-[5px] text-sm border rounded-[4px] bg-primary-600 focus:outline-none focus:ring-1 focus:ring-primary-100 font-albert ${
                          errors.name ? "border-red-400" : "border-primary-300"
                        }`}
                      />
                      {errors.name && (
                        <p className="text-red-400 text-xs mt-1 font-albert">{errors.name}</p>
                      )}
                    </div>
                    <div>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number *"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`w-full px-[9px] py-[5px] text-sm border rounded-[4px] bg-primary-600 focus:outline-none focus:ring-1 focus:ring-primary-100 font-albert ${
                          errors.phone ? "border-red-400" : "border-primary-300"
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-red-400 text-xs mt-1 font-albert">{errors.phone}</p>
                      )}
                    </div>
                  </div>
                  <div>
                    <input
                      type="text"
                      name="address"
                      placeholder="Address (House No, Building, Street) *"
                      value={formData.address}
                      onChange={handleInputChange}
                      className={`w-full px-[9px] py-[5px] text-sm border rounded-[4px] bg-primary-600 focus:outline-none focus:ring-1 focus:ring-primary-100 font-albert ${
                        errors.address ? "border-red-400" : "border-primary-300"
                      }`}
                    />
                    {errors.address && (
                      <p className="text-red-400 text-xs mt-1 font-albert">{errors.address}</p>
                    )}
                  </div>
                  <input
                    type="text"
                    name="area"
                    placeholder="Area, Colony, Sector (Optional)"
                    value={formData.area}
                    onChange={handleInputChange}
                    className="w-full px-[9px] py-[5px] text-sm border border-primary-300 rounded-[4px] bg-primary-600 focus:outline-none focus:ring-1 focus:ring-primary-100 font-albert"
                  />
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <input
                        type="text"
                        name="pincode"
                        placeholder="Pincode *"
                        value={formData.pincode}
                        onChange={handleInputChange}
                        className={`w-full px-[9px] py-[5px] text-sm border rounded-[4px] bg-primary-600 focus:outline-none focus:ring-1 focus:ring-primary-100 font-albert ${
                          errors.pincode ? "border-red-400" : "border-primary-300"
                        }`}
                      />
                      {errors.pincode && (
                        <p className="text-red-400 text-xs mt-1 font-albert">{errors.pincode}</p>
                      )}
                    </div>
                    <div>
                      <input
                        type="text"
                        name="city"
                        placeholder="City *"
                        value={formData.city}
                        onChange={handleInputChange}
                        className={`w-full px-[9px] py-[5px] text-sm border rounded-[4px] bg-primary-600 focus:outline-none focus:ring-1 focus:ring-primary-100 font-albert ${
                          errors.city ? "border-red-400" : "border-primary-300"
                        }`}
                      />
                      {errors.city && (
                        <p className="text-red-400 text-xs mt-1 font-albert">{errors.city}</p>
                      )}
                    </div>
                  </div>
                  <div>
                    <input
                      type="text"
                      name="state"
                      placeholder="State *"
                      value={formData.state}
                      onChange={handleInputChange}
                      className={`w-full px-[9px] py-[5px] text-sm border rounded-[4px] bg-primary-600 focus:outline-none focus:ring-1 focus:ring-primary-100 font-albert ${
                        errors.state ? "border-red-400" : "border-primary-300"
                      }`}
                    />
                    {errors.state && (
                      <p className="text-red-400 text-xs mt-1 font-albert">{errors.state}</p>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 bg-primary-100 text-white rounded-[6px] text-sm font-medium font-albert"
                  >
                    {editingAddress ? "Save Changes" : "Save Address"}
                  </button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Saved Addresses */}
          <AnimatePresence>
            {!isAddingNew && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-4"
              >
                {addresses.map((address) => (
                  <motion.div
                    key={address.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="bg-primary-600 rounded-md p-4"
                  >
                    <div className="flex items-start gap-3 cursor-pointer" onClick={() => setSelectedAddress(address.id)}>
                      <input
                        type="radio"
                        name="address"
                        checked={selectedAddress === address.id}
                        className="mt-1.5 w-4 h-4 border-2 border-primary-100  focus:ring-primary-300 rounded-full appearance-none  relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:w-2 before:h-2 before:rounded-full before:transform before:-translate-x-1/2 before:-translate-y-1/2 checked:before:bg-primary-100"
                      />
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="text-sm font-medium text-gray-900 font-albert">
                              {address.name}
                            </h3>
                            <p className="text-sm text-gray-500 font-albert">
                              {address.phone}
                            </p>
                          </div>
                          <div className="flex gap-2">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleEdit(address)
                              }}
                              className="p-1.5 text-secondary-200 rounded-full opacity-80"
                            >
                              <MdEdit className="w-4 h-4" />
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleDelete(address.id)
                              }}
                              className="p-1.5 text-red-100 rounded-full"
                            >
                              <MdDelete className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mt-2 font-albert">
                          {address.address}
                        </p>
                        {address.area && (
                          <p className="text-sm text-gray-600 font-albert">
                            {address.area}
                          </p>
                        )}
                        <p className="text-sm text-gray-600 font-albert">
                          {address.city}, {address.state} {address.pincode}
                        </p>
                        {address.isDefault && (
                          <span className="inline-block mt-2 text-xs text-primary-100 bg-primary-300 px-2 py-0.5 rounded-[4px] font-albert">
                            Default Address
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <StickyButton>Continue to Payment</StickyButton>
      </div>
  );
}

