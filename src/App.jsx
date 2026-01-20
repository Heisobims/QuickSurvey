import React, { useState } from 'react';
import { Send, CheckCircle2, Users, Target, DollarSign, Zap } from 'lucide-react';

export default function SurveyPlatform() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', location: '', state: '',
    sector: '', occupation: '', ageGroup: '', gender: '',
    educationLevel: '', monthlyIncome: '', problem: '',
    frequency: '', duration: '', impact: '', peopleAffected: '',
    financialImpact: '', timeImpact: '', currentSolution: '',
    solutionCost: '', idealSolution: '', preferredPlatform: '',
    paymentWillingness: '', maxPayment: '', urgency: '',
    willingness: '', referralSource: '', additionalComments: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [currentSection, setCurrentSection] = useState(1);

  const sectors = ['Healthcare & Medical Services', 'Education & Learning', 'Transportation & Logistics', 'Agriculture & Farming', 'Finance & Banking', 'Energy & Utilities', 'Commerce & Retail', 'Government Services', 'Communication & Internet', 'Real Estate & Housing', 'Entertainment & Media', 'Food & Hospitality', 'Manufacturing & Industry', 'Security & Safety', 'Environmental Services', 'Other'];
  const nigerianStates = ['Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue', 'Borno', 'Cross River', 'Delta', 'Ebonyi', 'Edo', 'Ekiti', 'Enugu', 'Gombe', 'Imo', 'Jigawa', 'Kaduna', 'Kano', 'Katsina', 'Kebbi', 'Kogi', 'Kwara', 'Lagos', 'Nasarawa', 'Niger', 'Ogun', 'Ondo', 'Osun', 'Oyo', 'Plateau', 'Rivers', 'Sokoto', 'Taraba', 'Yobe', 'Zamfara', 'FCT'];
  const incomeRanges = ['Below ₦50,000', '₦50,000 - ₦100,000', '₦100,000 - ₦250,000', '₦250,000 - ₦500,000', '₦500,000 - ₦1,000,000', 'Above ₦1,000,000', 'Prefer not to say'];
  const educationLevels = ['Primary', 'Secondary/SSCE', 'OND/NCE', 'HND/Bachelor\'s', 'Master\'s', 'PhD', 'None'];
  const peopleAffectedOptions = ['Just me', '2-10 people', '10-50 people', '50-100 people', '100-1,000 people', '1,000-10,000 people', 'More than 10,000 people', 'Not sure'];
  const platforms = ['Mobile App (Android)', 'Mobile App (iOS)', 'Website', 'SMS/USSD', 'WhatsApp', 'All platforms', 'No preference'];
  const urgencyLevels = ['Extremely urgent - Need solution now', 'Very urgent - Within a month', 'Somewhat urgent - Within 3 months', 'Not urgent - Can wait 6+ months', 'Not urgent at all'];
  const paymentWillingnessOptions = ['Yes, I would pay', 'Yes, but only a small amount', 'Maybe, depends on the price', 'Prefer free with ads', 'Only if completely free', 'Not sure'];
  const willingnessLevels = ['Definitely - I would use it immediately', 'Very likely - I would try it out', 'Maybe - Depends on features and price', 'Unlikely - Not sure if I need it', 'Definitely not interested'];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzUuKDjjyV8lEz8ybdALiWAC8KvCg7HKmecvjJocXNBccoYjCX9p1XZS9dxdhlzx1zZzA/exec';
    
    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify(formData)
      });
      
      setSubmitted(true);
      setTimeout(() => {
        setFormData({
          name: '', email: '', phone: '', location: '', state: '',
          sector: '', occupation: '', ageGroup: '', gender: '',
          educationLevel: '', monthlyIncome: '', problem: '',
          frequency: '', duration: '', impact: '', peopleAffected: '',
          financialImpact: '', timeImpact: '', currentSolution: '',
          solutionCost: '', idealSolution: '', preferredPlatform: '',
          paymentWillingness: '', maxPayment: '', urgency: '',
          willingness: '', referralSource: '', additionalComments: ''
        });
        setCurrentSection(1);
        setSubmitted(false);
      }, 4000);
    } catch (error) {
      console.error('Submission error:', error);
      alert('Network error. Please check your connection and try again.');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextSection = () => {
    setCurrentSection(prev => Math.min(prev + 1, 4));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const prevSection = () => {
    setCurrentSection(prev => Math.max(prev - 1, 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-4 font-['Sora',_sans-serif]">
        <div className="text-center animate-fade-in bg-white p-12 rounded-3xl border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <div className="mb-6 inline-block">
            <CheckCircle2 className="w-24 h-24 text-[#82eda6]" />
          </div>
          <h2 className="text-4xl font-bold text-black mb-4">Submitted!</h2>
          <p className="text-gray-600 text-xl mb-2">Your submission has been received.</p>
          <p className="text-[#03594d] font-bold mt-3 text-lg">Thank you for helping us build for Nigeria.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-12 px-4 font-['Sora',_sans-serif]">
      <link href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800&display=swap" rel="stylesheet" />
      
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-slide-down">
          <div className="inline-flex items-center justify-center w-28 h-28 mb-6 overflow-hidden rounded-full border-4 border-[#03594d] shadow-lg">
            <img 
              src="YOUR_IMAGE_LINK_HERE" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-5xl font-extrabold text-black mb-4 tracking-tight">Building for Nigeria</h1>
          <p className="text-[#03594d] text-lg max-w-2xl mx-auto font-medium">
            Hi, I'm Stanley. Help us understand the challenges you face in Nigeria. Your detailed insights drive meaningful tech solutions.
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="mb-12">
          <div className="flex justify-between items-center max-w-2xl mx-auto">
            {[1, 2, 3, 4].map((section) => (
              <div key={section} className="flex items-center flex-1">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold transition-all duration-300 border-2 ${
                  currentSection >= section 
                    ? 'bg-[#82eda6] text-black border-black' 
                    : 'bg-white text-gray-400 border-gray-200'
                }`}>
                  {section}
                </div>
                {section < 4 && (
                  <div className={`flex-1 h-0.5 mx-2 ${
                    currentSection > section ? 'bg-black' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border-2 border-black rounded-2xl p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(3,89,77,1)] space-y-8 animate-fade-in">
          {/* Section 1: Personal Info */}
          {currentSection === 1 && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-3 border-b-2 border-[#82eda6]">
                <Users className="w-8 h-8 text-black" />
                <h2 className="text-2xl font-extrabold text-black uppercase tracking-wider">Personal Information</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-black uppercase">Full Name *</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border-2 border-black outline-none focus:bg-[#82eda6]/10 transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-black uppercase">Occupation *</label>
                  <input type="text" name="occupation" value={formData.occupation} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border-2 border-black outline-none focus:bg-[#82eda6]/10 transition-colors" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-black uppercase">Email *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border-2 border-black outline-none focus:bg-[#82eda6]/10 transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-black uppercase">Phone *</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border-2 border-black outline-none focus:bg-[#82eda6]/10 transition-colors" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-black uppercase">State *</label>
                  <select name="state" value={formData.state} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border-2 border-black bg-white outline-none focus:bg-[#82eda6]/10">
                    <option value="">Select state</option>
                    {nigerianStates.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div className="space-y-2">
                    <label className="block text-sm font-bold text-black uppercase">Monthly Income *</label>
                    <select name="monthlyIncome" value={formData.monthlyIncome} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border-2 border-black bg-white outline-none focus:bg-[#82eda6]/10">
                        <option value="">Select range</option>
                        {incomeRanges.map(i => <option key={i} value={i}>{i}</option>)}
                    </select>
                </div>
              </div>
            </div>
          )}

          {/* Section 2: Problem Details */}
          {currentSection === 2 && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-3 border-b-2 border-[#82eda6]">
                <Target className="w-8 h-8 text-black" />
                <h2 className="text-2xl font-extrabold text-black uppercase tracking-wider">Problem Details</h2>
              </div>
              <div>
                <label className="block text-sm font-bold text-black uppercase mb-2">Describe the problem in detail *</label>
                <textarea name="problem" value={formData.problem} onChange={handleChange} required rows="4" className="w-full px-4 py-3 rounded-lg border-2 border-black outline-none focus:bg-[#82eda6]/10 transition-colors" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-black uppercase">Sector *</label>
                  <select name="sector" value={formData.sector} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border-2 border-black bg-white outline-none">
                    <option value="">Select sector</option>
                    {sectors.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-black uppercase">Urgency *</label>
                  <select name="urgency" value={formData.urgency} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border-2 border-black bg-white outline-none">
                    <option value="">Select level</option>
                    {urgencyLevels.map(u => <option key={u} value={u}>{u}</option>)}
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Section 3: Solution */}
          {currentSection === 3 && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-3 border-b-2 border-[#82eda6]">
                <Zap className="w-8 h-8 text-black" />
                <h2 className="text-2xl font-extrabold text-black uppercase tracking-wider">The Solution</h2>
              </div>
              <div>
                <label className="block text-sm font-bold text-black uppercase mb-2">Your Ideal Tech Solution *</label>
                <textarea name="idealSolution" value={formData.idealSolution} onChange={handleChange} required rows="4" className="w-full px-4 py-3 rounded-lg border-2 border-black outline-none focus:bg-[#82eda6]/10 transition-colors" placeholder="What should we build to fix this?" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-black uppercase">Preferred Platform *</label>
                  <select name="preferredPlatform" value={formData.preferredPlatform} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border-2 border-black bg-white outline-none">
                    <option value="">Select platform</option>
                    {platforms.map(p => <option key={p} value={p}>{p}</option>)}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-black uppercase">Interest Level *</label>
                  <select name="willingness" value={formData.willingness} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border-2 border-black bg-white outline-none">
                    <option value="">Select level</option>
                    {willingnessLevels.map(w => <option key={w} value={w}>{w}</option>)}
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Section 4: Commitment */}
          {currentSection === 4 && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-3 border-b-2 border-[#82eda6]">
                <DollarSign className="w-8 h-8 text-black" />
                <h2 className="text-2xl font-extrabold text-black uppercase tracking-wider">Final Thoughts</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-black uppercase">Would you pay for it? *</label>
                  <select name="paymentWillingness" value={formData.paymentWillingness} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border-2 border-black bg-white outline-none">
                    <option value="">Select option</option>
                    {paymentWillingnessOptions.map(p => <option key={p} value={p}>{p}</option>)}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-black uppercase">Max Monthly Payment (₦) *</label>
                  <input type="text" name="maxPayment" value={formData.maxPayment} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border-2 border-black outline-none" placeholder="e.g. 5000" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-black uppercase mb-2">Any additional comments?</label>
                <textarea name="additionalComments" value={formData.additionalComments} onChange={handleChange} rows="3" className="w-full px-4 py-3 rounded-lg border-2 border-black outline-none transition-colors" />
              </div>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            {currentSection > 1 && (
              <button onClick={prevSection} className="flex-1 bg-white text-black border-2 border-black font-bold py-4 px-6 rounded-lg hover:bg-gray-100 transition-all">
                Back
              </button>
            )}
            {currentSection < 4 ? (
              <button onClick={nextSection} className="flex-1 bg-[#03594d] text-[#82eda6] font-extrabold py-4 px-6 rounded-lg hover:opacity-95 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:shadow-none">
                Continue
              </button>
            ) : (
              <button onClick={handleSubmit} className="flex-1 bg-[#82eda6] text-black font-extrabold py-5 px-8 rounded-lg hover:opacity-95 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:shadow-none flex items-center justify-center gap-3">
                <span>Submit Feedback</span>
                <Send className="w-6 h-6" />
              </button>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-down { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        .animate-slide-down { animation: slide-down 0.5s ease-out; }
        .animate-fade-in { animation: fade-in 0.6s ease-out; }
      `}</style>
    </div>
  );
}