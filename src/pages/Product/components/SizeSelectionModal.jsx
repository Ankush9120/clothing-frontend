const SizeSelectionModal = ({ open, onClose, onConfirm, selectedSize, sizes, measurements }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50" onClick={onClose}>
      <div className="bg-white rounded-lg p-6 w-full max-w-md" onClick={(e) => e.stopPropagation()}>
        <div className="grid gap-4">
          <div className="space-y-2">
            <h2 className="text-[16px] font-semibold">Select Size</h2>
            <div className="flex gap-2">
              {sizes.map((size) => (
                <div key={size.label} className="flex flex-col items-center">
                  <button
                    className={`size-10 border rounded grid place-items-center 
                        ${selectedSize === size.label ? "bg-primary-100 !border-primary-100 text-white" : "border-[1px] border-secondary-100"}
                        ${size.count <= 2 ? "border-red-100" : ""}`}
                    onClick={() => onConfirm(size.label)}
                  >
                    {size.label}
                  </button>
                  {size.count <= 2 && <span className="text-red-500 text-[12px] mt-1">{size.count} left</span>}
                </div>
              ))}
            </div>
          </div>

          {measurements && (
            <div className="space-y-2">
              <h3 className="text-[14px] font-medium">Garment Measurements</h3>
              <div className="grid grid-cols-3 gap-4 text-[12px]">
                <div>
                  <p className="text-secondary-100 opacity-50">Chest</p>
                  <p>{measurements.chest} inch</p>
                </div>
                <div>
                  <p className="text-secondary-100 opacity-50">Length</p>
                  <p>{measurements.length} inch</p>
                </div>
                <div>
                  <p className="text-secondary-100 opacity-50">Sleeve</p>
                  <p>{measurements.sleeve} inch</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SizeSelectionModal;
