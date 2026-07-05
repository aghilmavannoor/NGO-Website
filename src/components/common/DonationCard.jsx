import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ShieldCheck, CheckCircle } from 'lucide-react';
import Button from './Button';

const DonationCard = () => {
  const [amount, setAmount] = useState('50');
  const [customAmount, setCustomAmount] = useState('');
  const [frequency, setFrequency] = useState('one-time');
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const presetAmounts = ['10', '25', '50', '100', '250'];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call to donationService
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const finalAmount = amount === 'custom' ? customAmount : amount;

  return (
    <div className="bg-white border border-slate-100 rounded-3xl p-8 md:p-10 shadow-md max-w-lg w-full mx-auto relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-full -mr-16 -mt-16 pointer-events-none z-0"></div>
      
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-primary shrink-0">
            <Heart size={22} className="fill-primary" />
          </div>
          <div>
            <h3 className="font-display font-black text-xl text-slate-800 uppercase tracking-wide">Support Our Work</h3>
            <p className="text-xs text-slate-400 font-semibold">100% of donations fund native restoration</p>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {!isSuccess ? (
            <motion.form 
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit} 
              className="space-y-6"
            >
              {/* Frequency Toggle */}
              <div className="flex p-1.5 bg-slate-100 rounded-2xl">
                <button
                  type="button"
                  onClick={() => setFrequency('one-time')}
                  className={`flex-1 text-center py-2.5 text-xs font-black uppercase tracking-wider rounded-xl transition-all ${
                    frequency === 'one-time' ? 'bg-white text-primary shadow-sm' : 'text-slate-500 hover:text-slate-700'
                  }`}
                >
                  One-Time
                </button>
                <button
                  type="button"
                  onClick={() => setFrequency('monthly')}
                  className={`flex-1 text-center py-2.5 text-xs font-black uppercase tracking-wider rounded-xl transition-all ${
                    frequency === 'monthly' ? 'bg-white text-primary shadow-sm' : 'text-slate-500 hover:text-slate-700'
                  }`}
                >
                  Monthly Support
                </button>
              </div>

              {/* Amount Selection */}
              <div>
                <label className="block text-[10px] font-black text-slate-400 mb-2.5 uppercase tracking-wider">Select Amount (USD)</label>
                <div className="grid grid-cols-5 gap-2 mb-3">
                  {presetAmounts.map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => {
                        setAmount(preset);
                        setCustomAmount('');
                      }}
                      className={`py-3 text-sm font-black rounded-xl border transition-all ${
                        amount === preset
                          ? 'bg-primary border-primary text-white shadow-md shadow-primary/20 scale-102'
                          : 'border-slate-200 bg-white text-slate-700 hover:border-slate-350 hover:bg-slate-50'
                      }`}
                    >
                      ${preset}
                    </button>
                  ))}
                </div>
                
                {/* Custom Amount Button/Input */}
                <button
                  type="button"
                  onClick={() => setAmount('custom')}
                  className={`w-full py-3 text-sm font-black rounded-xl border mb-3 transition-all ${
                    amount === 'custom'
                      ? 'border-primary text-primary bg-emerald-50/30'
                      : 'border-slate-200 bg-white text-slate-700 hover:border-slate-350 hover:bg-slate-50'
                  }`}
                >
                  Enter Custom Amount
                </button>

                {amount === 'custom' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="relative"
                  >
                    <span className="absolute left-4 top-3.5 text-slate-400 font-bold text-sm">$</span>
                    <input
                      type="number"
                      placeholder="Enter custom amount"
                      required
                      min="5"
                      value={customAmount}
                      onChange={(e) => setCustomAmount(e.target.value)}
                      className="w-full pl-9 pr-4 py-3 border border-slate-200 rounded-2xl text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-emerald-500/10 font-medium"
                    />
                  </motion.div>
                )}
              </div>

              {/* Payment Methods */}
              <div>
                <label className="block text-[10px] font-black text-slate-400 mb-2.5 uppercase tracking-wider">Payment Method</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {[
                    { id: 'upi', label: 'UPI' },
                    { id: 'card', label: 'Card' },
                    { id: 'netbank', label: 'NetBank' },
                    { id: 'wallet', label: 'Wallet' }
                  ].map((method) => (
                    <button
                      key={method.id}
                      type="button"
                      onClick={() => setPaymentMethod(method.id)}
                      className={`py-2.5 text-xs font-black uppercase tracking-wider rounded-xl border transition-all ${
                        paymentMethod === method.id
                          ? 'border-primary text-primary bg-emerald-50/20'
                          : 'border-slate-205 bg-white text-slate-500 hover:border-slate-350 hover:bg-slate-50'
                      }`}
                    >
                      {method.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Security info */}
              <div className="flex items-center gap-3 text-slate-450 text-xs font-semibold bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <ShieldCheck size={18} className="text-secondary shrink-0" />
                <span>SSL Encrypted transaction. Tax-exemption certificate will be generated.</span>
              </div>

              {/* Submit Button */}
              <Button 
                variant="primary" 
                type="submit" 
                className="w-full justify-center py-3.5 rounded-2xl shadow-lg shadow-primary/10 hover:scale-[1.01] transition-transform"
                disabled={isSubmitting || (amount === 'custom' && !customAmount)}
              >
                {isSubmitting ? 'Processing...' : `Donate $${finalAmount || '0'} Now`}
              </Button>
            </motion.form>
          ) : (
            <motion.div 
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8 space-y-5"
            >
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center text-primary mx-auto">
                <CheckCircle size={36} className="fill-emerald-50" />
              </div>
              <h4 className="font-display font-black text-2xl text-slate-800 uppercase tracking-wide">Thank You!</h4>
              <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-sm mx-auto font-medium">
                Your donation of <span className="font-bold text-slate-800">${finalAmount}</span> has been processed successfully. We've emailed your tax invoice and receipt.
              </p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setIsSuccess(false);
                  setCustomAmount('');
                  setAmount('50');
                }}
                className="mt-6 rounded-2xl shadow-sm hover:bg-emerald-50 hover:text-primary border-slate-200"
              >
                Make Another Donation
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default DonationCard;
