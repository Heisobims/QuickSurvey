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
  const frequencies = ['Daily', 'Multiple times per week', 'Weekly', 'Monthly', 'Occasionally', 'Rarely'];
  const ageGroups = ['18-24', '25-34', '35-44', '45-54', '55-64', '65+'];
  const genders = ['Male', 'Female', 'Prefer not to say', 'Other'];
  const educationLevels = ['Primary', 'Secondary/SSCE', 'OND/NCE', 'HND/Bachelor\'s', 'Master\'s', 'PhD', 'None'];
  const incomeRanges = ['Below ₦50,000', '₦50,000 - ₦100,000', '₦100,000 - ₦250,000', '₦250,000 - ₦500,000', '₦500,000 - ₦1,000,000', 'Above ₦1,000,000', 'Prefer not to say'];
  const durations = ['Less than 6 months', '6 months - 1 year', '1-2 years', '2-5 years', 'More than 5 years'];
  const peopleAffectedOptions = ['Just me', '2-10 people', '10-50 people', '50-100 people', '100-1,000 people', '1,000-10,000 people', 'More than 10,000 people', 'Not sure'];
  const platforms = ['Mobile App (Android)', 'Mobile App (iOS)', 'Website', 'SMS/USSD', 'WhatsApp', 'All platforms', 'No preference'];
  const paymentWillingnessOptions = ['Yes, I would pay', 'Yes, but only a small amount', 'Maybe, depends on the price', 'Prefer free with ads', 'Only if completely free', 'Not sure'];
  const urgencyLevels = ['Extremely urgent - Need solution now', 'Very urgent - Within a month', 'Somewhat urgent - Within 3 months', 'Not urgent - Can wait 6+ months', 'Not urgent at all'];
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
      <div className="min-h-screen bg-[#affbff] flex items-center justify-center p-4 font-['Crimson_Text',_serif]">
        <div className="text-center animate-fade-in bg-white p-12 rounded-3xl shadow-xl">
          <div className="mb-6 inline-block">
            <CheckCircle2 className="w-24 h-24 text-[#82eda6] animate-bounce" />
          </div>
          <h2 className="text-4xl font-bold text-[#03594d] mb-4">Submitted! 😊</h2>
          <p className="text-gray-600 text-xl mb-2">Your detailed submission has been received successfully.</p>
          <p className="text-[#03594d] font-medium mt-3 text-lg">Thank you for joining us in making Nigeria a better place.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#affbff] via-[#fccddc] to-[#ffff94] py-12 px-4 font-['Crimson_Text',_serif]">
      <link href="https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;600;700&display=swap" rel="stylesheet" />
      
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-slide-down">
          <div className="inline-flex items-center justify-center w-28 h-28 mb-5 shadow-2xl overflow-hidden rounded-full border-4 border-white bg-white">
            <img 
              src="https://lh3.google.com/u/0/d/1a0vWFWVWtj9mACG4KUCI9eol31Xw3lfv=w450-h337-p-k-nu-iv1?auditContext=thumbnail" 
              alt="Stanley's Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-5xl font-bold text-[#03594d] mb-4">Building for Nigeria, by Nigerians</h1>
          <p className="text-[#03594d] text-xl max-w-2xl mx-auto leading-relaxed font-semibold">
            Hi, I'm Stanley. Help us understand the challenges you face in Nigeria. Your detailed insights drive meaningful tech solutions.
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex justify-between items-center max-w-2xl mx-auto">
            {[1, 2, 3, 4].map((section) => (
              <div key={section} className="flex items-center flex-1">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold transition-all duration-300 ${
                  currentSection >= section 
                    ? 'bg-[#03594d] text-[#82eda6] shadow-lg' 
                    : 'bg-white text-gray-400 border-2 border-gray-200'
                }`}>
                  {section}
                </div>
                {section < 4 && (
                  <div className={`flex-1 h-1.5 mx-2 transition-all duration-300 ${
                    currentSection > section ? 'bg-[#82eda6]' : 'bg-white/50'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-10 space-y-8 animate-fade-in border border-white/20">
          {/* Section 1: Personal Info */}
          {currentSection === 1 && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-3 border-b-2 border-[#82eda6]">
                <Users className="w-8 h-8 text-[#03594d]" />
                <h2 className="text-3xl font-bold text-[#03594d]">Personal Information</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-lg font-semibold text-[#03594d]">Full Name *</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-5 py-4 rounded-xl border-2 border-[#fccddc] outline-none focus:border-[#82eda6] text-lg bg-[#ffff94]/10" />
                </div>
                <div className="space-y-2">
                  <label className="block text-lg font-semibold text-[#03594d]">Occupation *</label>
                  <input type="text" name="occupation" value={formData.occupation} onChange={handleChange} required className="w-full px-5 py-4 rounded-xl border-2 border-[#fccddc] outline-none focus:border-[#82eda6] text-lg bg-[#ffff94]/10" placeholder="e.g. Software Engineer" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-lg font-semibold text-[#03594d]">Email *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-5 py-4 rounded-xl border-2 border-[#fccddc] outline-none focus:border-[#82eda6] text-lg" />
                </div>
                <div>
                  <label className="block text-lg font-semibold text-[#03594d]">Phone *</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="w-full px-5 py-4 rounded-xl border-2 border-[#fccddc] outline-none focus:border-[#82eda6] text-lg" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-lg font-semibold text-[#03594d]">City *</label>
                  <input type="text" name="location" value={formData.location} onChange={handleChange} required className="w-full px-5 py-4 rounded-xl border-2 border-[#fccddc] outline-none focus:border-[#82eda6] text-lg" />
                </div>
                <div>
                  <label className="block text-lg font-semibold text-[#03594d]">State *</label>
                  <select name="state" value={formData.state} onChange={handleChange} required className="w-full px-5 py-4 rounded-xl border-2 border-[#fccddc] bg-white outline-none focus:border-[#82eda6] text-lg">
                    <option value="">Select state</option>
                    {nigerianStates.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-lg font-semibold text-[#03594d]">Monthly Income Range *</label>
                    <select name="monthlyIncome" value={formData.monthlyIncome} onChange={handleChange} required className="w-full px-5 py-4 rounded-xl border-2 border-[#fccddc] bg-white outline-none focus:border-[#82eda6] text-lg">
                        <option value="">Select income range</option>
                        {incomeRanges.map(i => <option key={i} value={i}>{i}</option>)}
                    </select>
                </div>
                <div>
                    <label className="block text-lg font-semibold text-[#03594d]">Education *</label>
                    <select name="educationLevel" value={formData.educationLevel} onChange={handleChange} required className="w-full px-5 py-4 rounded-xl border-2 border-[#fccddc] bg-white outline-none focus:border-[#82eda6] text-lg">
                        <option value="">Select level</option>
                        {educationLevels.map(e => <option key={e} value={e}>{e}</option>)}
                    </select>
                </div>
              </div>
            </div>
          )}

          {/* Section 2: Problem Details */}
          {currentSection === 2 && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-3 border-b-2 border-[#82eda6]">
                <Target className="w-8 h-8 text-[#03594d]" />
                <h2 className="text-3xl font-bold text-[#03594d]">Problem Details</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-lg font-semibold text-[#03594d]">Sector *</label>
                  <select name="sector" value={formData.sector} onChange={handleChange} required className="w-full px-5 py-4 rounded-xl border-2 border-[#fccddc] bg-white outline-none focus:border-[#82eda6] text-lg">
                    <option value="">Select sector</option>
                    {sectors.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-lg font-semibold text-[#03594d]">Affected People *</label>
                  <select name="peopleAffected" value={formData.peopleAffected} onChange={handleChange} required className="w-full px-5 py-4 rounded-xl border-2 border-[#fccddc] bg-white outline-none focus:border-[#82eda6] text-lg">
                    <option value="">Select range</option>
                    {peopleAffectedOptions.map(p => <option key={p} value={p}>{p}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-lg font-semibold text-[#03594d]">Describe the problem *</label>
                <textarea name="problem" value={formData.problem} onChange={handleChange} required rows="3" className="w-full px-5 py-4 rounded-xl border-2 border-[#fccddc] outline-none focus:border-[#82eda6] text-lg" placeholder="Be as detailed as possible..." />
              </div>
              <div>
                <label className="block text-lg font-semibold text-[#03594d]">Personal Impact *</label>
                <textarea name="impact" value={formData.impact} onChange={handleChange} required rows="2" className="w-full px-5 py-4 rounded-xl border-2 border-[#fccddc] outline-none focus:border-[#82eda6] text-lg" placeholder="How does this affect your day-to-day?" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-lg font-semibold text-[#03594d]">Financial Loss (Monthly ₦) *</label>
                  <input type="text" name="financialImpact" value={formData.financialImpact} onChange={handleChange} required className="w-full px-5 py-4 rounded-xl border-2 border-[#fccddc] outline-none focus:border-[#82eda6] text-lg" />
                </div>
                <div>
                  <label className="block text-lg font-semibold text-[#03594d]">Time Lost (Hours/Week) *</label>
                  <input type="text" name="timeImpact" value={formData.timeImpact} onChange={handleChange} required className="w-full px-5 py-4 rounded-xl border-2 border-[#fccddc] outline-none focus:border-[#82eda6] text-lg" />
                </div>
              </div>
            </div>
          )}

          {/* Section 3: Solution */}
          {currentSection === 3 && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-3 border-b-2 border-[#82eda6]">
                <Zap className="w-8 h-8 text-[#03594d]" />
                <h2 className="text-3xl font-bold text-[#03594d]">Solution & Impact</h2>
              </div>
              <div>
                <label className="block text-lg font-semibold text-[#03594d]">Current Solution *</label>
                <textarea name="currentSolution" value={formData.currentSolution} onChange={handleChange} required rows="2" className="w-full px-5 py-4 rounded-xl border-2 border-[#fccddc] outline-none focus:border-[#82eda6] text-lg" placeholder="What are you doing now to cope?" />
              </div>
              <div>
                <label className="block text-lg font-semibold text-[#03594d]">Current Cost (₦) *</label>
                <input type="text" name="solutionCost" value={formData.solutionCost} onChange={handleChange} required className="w-full px-5 py-4 rounded-xl border-2 border-[#fccddc] outline-none focus:border-[#82eda6] text-lg" />
              </div>
              <div>
                <label className="block text-lg font-semibold text-[#03594d]">Ideal Solution *</label>
                <textarea name="idealSolution" value={formData.idealSolution} onChange={handleChange} required rows="3" className="w-full px-5 py-4 rounded-xl border-2 border-[#fccddc] outline-none focus:border-[#82eda6] text-lg" placeholder="Describe the perfect tech solution..." />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-lg font-semibold text-[#03594d]">Platform *</label>
                  <select name="preferredPlatform" value={formData.preferredPlatform} onChange={handleChange} required className="w-full px-5 py-4 rounded-xl border-2 border-[#fccddc] bg-white outline-none focus:border-[#82eda6] text-lg">
                    <option value="">Select platform</option>
                    {platforms.map(p => <option key={p} value={p}>{p}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-lg font-semibold text-[#03594d]">Urgency *</label>
                  <select name="urgency" value={formData.urgency} onChange={handleChange} required className="w-full px-5 py-4 rounded-xl border-2 border-[#fccddc] bg-white outline-none focus:border-[#82eda6] text-lg">
                    <option value="">Select urgency</option>
                    {urgencyLevels.map(u => <option key={u} value={u}>{u}</option>)}
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Section 4: Final */}
          {currentSection === 4 && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-3 border-b-2 border-[#82eda6]">
                <DollarSign className="w-8 h-8 text-[#03594d]" />
                <h2 className="text-3xl font-bold text-[#03594d]">Payment & Commitment</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-lg font-semibold text-[#03594d]">Would you pay? *</label>
                  <select name="paymentWillingness" value={formData.paymentWillingness} onChange={handleChange} required className="w-full px-5 py-4 rounded-xl border-2 border-[#fccddc] bg-white outline-none focus:border-[#82eda6] text-lg">
                    <option value="">Select option</option>
                    {paymentWillingnessOptions.map(p => <option key={p} value={p}>{p}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-lg font-semibold text-[#03594d]">Max Monthly (₦) *</label>
                  <input type="text" name="maxPayment" value={formData.maxPayment} onChange={handleChange} required className="w-full px-5 py-4 rounded-xl border-2 border-[#fccddc] outline-none focus:border-[#82eda6] text-lg" placeholder="e.g. 2000" />
                </div>
              </div>
              <div>
                <label className="block text-lg font-semibold text-[#03594d]">Interest Level *</label>
                <select name="willingness" value={formData.willingness} onChange={handleChange} required className="w-full px-5 py-4 rounded-xl border-2 border-[#fccddc] bg-white outline-none focus:border-[#82eda6] text-lg">
                  <option value="">Select interest</option>
                  {willingnessLevels.map(w => <option key={w} value={w}>{w}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-lg font-semibold text-[#03594d]">Additional Comments</label>
                <textarea name="additionalComments" value={formData.additionalComments} onChange={handleChange} rows="3" className="w-full px-5 py-4 rounded-xl border-2 border-[#fccddc] outline-none focus:border-[#82eda6] text-lg" />
              </div>
            </div>
          )}

          <div className="flex gap-4 pt-6">
            {currentSection > 1 && (
              <button onClick={prevSection} className="flex-1 bg-white text-[#03594d] border-2 border-[#03594d] font-bold py-4 px-6 rounded-xl hover:bg-[#affbff] transition-all text-xl">
                Previous
              </button>
            )}
            {currentSection < 4 ? (
              <button onClick={nextSection} className="flex-1 bg-[#03594d] text-[#82eda6] font-bold py-4 px-6 rounded-xl hover:opacity-90 transition-all shadow-lg text-xl">
                Next Section
              </button>
            ) : (
              <button onClick={handleSubmit} className="flex-1 bg-[#03594d] text-[#82eda6] font-bold py-5 px-8 rounded-xl hover:opacity-90 transition-all shadow-xl flex items-center justify-center gap-3 text-2xl">
                <span>Submit Your Idea</span>
                <Send className="w-8 h-8" />
              </button>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-down { from { opacity: 0; transform: translateY(-30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fade-in { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
        .animate-slide-down { animation: slide-down 0.7s ease-out; }
        .animate-fade-in { animation: fade-in 0.9s ease-out; }
        
        input::placeholder, textarea::placeholder {
          color: #03594d66;
          font-style: italic;
        }
      `}</style>
    </div>
  );
}