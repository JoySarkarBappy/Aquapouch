import { motion, AnimatePresence } from "motion/react";
import { X, Check, ShoppingCart, CreditCard, Truck } from "lucide-react";
import { useState } from "react";

interface PurchaseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PurchaseModal({ isOpen, onClose }: PurchaseModalProps) {
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePurchase = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setStep(3);
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-on-surface/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-surface-container transition-colors z-10"
            >
              <X className="w-6 h-6 text-on-surface-variant" />
            </button>

            <div className="flex flex-col md:grid md:grid-cols-5 h-full overflow-y-auto max-h-[90vh] md:max-h-none">
              <div className="md:col-span-2 bg-primary p-6 md:p-8 text-white flex flex-col justify-between min-h-[200px] md:min-h-0">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Aquapouch</h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    The modular, gravity-fed filtration system for immediate water supply.
                  </p>
                </div>
                <div className="mt-8">
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-sm text-white/60">Price per unit</span>
                    <span className="text-3xl font-bold">360<span className="text-sm ml-1 opacity-60">tk</span></span>
                  </div>
                  <div className="p-4 rounded-xl bg-white/10 border border-white/10">
                    <div className="flex items-center gap-3 text-xs">
                      <Truck className="w-4 h-4" />
                      <span>Free delivery within BUET campus</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:col-span-3 p-6 md:p-12 bg-white">
                {step === 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                    <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                      <ShoppingCart className="w-5 h-5 text-primary" />
                      Order Details
                    </h4>
                    <div className="space-y-4 mb-8">
                      <div>
                        <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-2">Quantity</label>
                        <select className="w-full p-3 rounded-xl border border-outline-variant focus:ring-2 focus:ring-primary/20 outline-none transition-all">
                          <option>1 Unit</option>
                          <option>2 Units</option>
                          <option>5 Units (Bulk)</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-2">Delivery Address</label>
                        <textarea 
                          placeholder="Enter your full address..."
                          className="w-full p-3 rounded-xl border border-outline-variant focus:ring-2 focus:ring-primary/20 outline-none transition-all h-24 resize-none"
                        />
                      </div>
                    </div>
                    <button
                      onClick={() => setStep(2)}
                      className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
                    >
                      Continue to Payment
                    </button>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                    <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                      <CreditCard className="w-5 h-5 text-primary" />
                      Payment Method
                    </h4>
                    <div className="space-y-3 mb-8">
                      <div className="p-4 rounded-xl border-2 border-primary bg-primary/5 flex items-center justify-between cursor-pointer">
                        <div className="flex items-center gap-3">
                          <div className="w-4 h-4 rounded-full border-4 border-primary"></div>
                          <span className="font-bold">Cash on Delivery</span>
                        </div>
                        <span className="text-xs text-primary font-bold">Recommended</span>
                      </div>
                      <div className="p-4 rounded-xl border border-outline-variant flex items-center justify-between opacity-50 cursor-not-allowed">
                        <div className="flex items-center gap-3">
                          <div className="w-4 h-4 rounded-full border border-outline-variant"></div>
                          <span className="font-bold">bKash / Nagad</span>
                        </div>
                        <span className="text-[10px] uppercase tracking-widest">Coming Soon</span>
                      </div>
                    </div>
                    <button
                      disabled={isProcessing}
                      onClick={handlePurchase}
                      className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-3"
                    >
                      {isProcessing ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      ) : (
                        "Confirm Order"
                      )}
                    </button>
                    <button
                      onClick={() => setStep(1)}
                      className="w-full mt-4 text-on-surface-variant text-sm font-bold hover:text-primary transition-colors"
                    >
                      Go Back
                    </button>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Check className="w-10 h-10" />
                    </div>
                    <h4 className="text-2xl font-bold mb-2">Order Confirmed!</h4>
                    <p className="text-on-surface-variant text-sm mb-8">
                      Thank you for choosing Aquapouch. Our team will contact you shortly at +880 6448164694 for verification.
                    </p>
                    <button
                      onClick={onClose}
                      className="bg-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-primary/90 transition-all"
                    >
                      Close
                    </button>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
