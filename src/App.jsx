import React, { useState } from 'react';
import { Send, Lightbulb, CheckCircle2, Users, Target, DollarSign, Zap } from 'lucide-react';

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
  const urgencyLevels = ['Extremely urgent', 'Very urgent', 'Somewhat urgent', 'Not urgent', 'Not urgent at all'];
  const willingnessLevels = ['Definitely', 'Very likely', 'Maybe', 'Unlikely', 'Definitely not'];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzUuKDjjyV8lEz8ybdALiWAC8KvCg7HKmecvjJocXNBccoYjCX9p1XZS9dxdhlzx1zZzA/exec';
    try {
      await fetch(GOOGLE_SCRIPT_URL, { method: 'POST', mode: 'no-cors', body: JSON.stringify(formData) });
      setSubmitted(true);
      setTimeout(() => {
        setFormData({ name: '', email: '', phone: '', location: '', state: '', sector: '', occupation: '', ageGroup: '', gender: '', educationLevel: '', monthlyIncome: '', problem: '', frequency: '', duration: '', impact: '', peopleAffected: '', financialImpact: '', timeImpact: '', currentSolution: '', solutionCost: '', idealSolution: '', preferredPlatform: '', paymentWillingness: '', maxPayment: '', urgency: '', willingness: '', referralSource: '', additionalComments: '' });
        setCurrentSection(1);
        setSubmitted(false);
      }, 4000);
    } catch (error) {
      alert('Network error. Please try again.');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-rose-50 flex items-center justify-center p-4">
        <div className="text-center">
          <CheckCircle2 className="w-24 h-24 text-pink-500 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-4">Thank You!</h2>
          <p className="text-pink-600">Your detailed submission for Nigeria 🇳🇬 has been received.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-rose-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Lightbulb className="w-16 h-16 text-pink-500 mx-auto mb-4" />
          <h1 className="text-5xl font-bold text-gray-800">Share Your Idea</h1>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8">
          {/* Section 1: Personal Info */}
          {currentSection === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold flex items-center gap-2"><Users className="text-pink-500" /> Personal Info</h2>
              <input type="text" name="name" placeholder="Full Name *" value={formData.name} onChange={handleChange} required className="w-full p-4 border rounded-xl" />
              <div className="grid grid-cols-2 gap-4">
                <input type="email" name="email" placeholder="Email *" value={formData.email} onChange={handleChange} required className="w-full p-4 border rounded-xl" />
                <input type="tel" name="phone" placeholder="Phone *" value={formData.phone} onChange={handleChange} required className="w-full p-4 border rounded-xl" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input type="text" name="occupation" placeholder="Occupation/Job Title *" value={formData.occupation} onChange={handleChange} required className="w-full p-4 border rounded-xl" />
                <select name="monthlyIncome" value={formData.monthlyIncome} onChange={handleChange} required className="w-full p-4 border rounded-xl">
                    <option value="">Monthly Income Range *</option>
                    {incomeRanges.map(i => <option key={i} value={i}>{i}</option>)}
                </select>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <select name="ageGroup" value={formData.ageGroup} onChange={handleChange} required className="w-full p-4 border rounded-xl">
                    <option value="">Age Group</option>
                    {ageGroups.map(a => <option key={a} value={a}>{a}</option>)}
                </select>
                <select name="gender" value={formData.gender} onChange={handleChange} required className="w-full p-4 border rounded-xl">
                    <option value="">Gender</option>
                    {genders.map(g => <option key={g} value={g}>{g}</option>)}
                </select>
                <select name="state" value={formData.state} onChange={handleChange} required className="w-full p-4 border rounded-xl">
                    <option value="">State</option>
                    {nigerianStates.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
            </div>
          )}

          {/* Section 2: Problem Details */}
          {currentSection === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold flex items-center gap-2"><Target className="text-pink-500" /> Problem Details</h2>
              <select name="sector" value={formData.sector} onChange={handleChange} required className="w-full p-4 border rounded-xl">
                <option value="">Select Sector *</option>
                {sectors.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
              <textarea name="problem" placeholder="Describe the problem *" value={formData.problem} onChange={handleChange} required className="w-full p-4 border rounded-xl h-32" />
              <textarea name="impact" placeholder="How does this impact your life/business? *" value={formData.impact} onChange={handleChange} required className="w-full p-4 border rounded-xl h-32" />
              <div className="grid grid-cols-2 gap-4">
                <select name="peopleAffected" value={formData.peopleAffected} onChange={handleChange} required className="w-full p-4 border rounded-xl">
                    <option value="">How many people are affected? *</option>
                    {peopleAffectedOptions.map(p => <option key={p} value={p}>{p}</option>)}
                </select>
                <input type="text" name="financialImpact" placeholder="Financial loss per month (e.g ₦10k)" value={formData.financialImpact} onChange={handleChange} className="w-full p-4 border rounded-xl" />
              </div>
              <input type="text" name="timeImpact" placeholder="How much time is wasted weekly? (e.g 5 hours)" value={formData.timeImpact} onChange={handleChange} className="w-full p-4 border rounded-xl" />
            </div>
          )}

          {/* Section 3: Solution */}
          {currentSection === 3 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold flex items-center gap-2"><Zap className="text-pink-500" /> Current & Ideal Solution</h2>
              <textarea name="currentSolution" placeholder="What are you currently using to solve this? *" value={formData.currentSolution} onChange={handleChange} required className="w-full p-4 border rounded-xl h-32" />
              <input type="text" name="solutionCost" placeholder="How much do you spend on current solutions? *" value={formData.solutionCost} onChange={handleChange} required className="w-full p-4 border rounded-xl" />
              <textarea name="idealSolution" placeholder="Describe your ideal tech solution *" value={formData.idealSolution} onChange={handleChange} required className="w-full p-4 border rounded-xl h-32" />
              <select name="preferredPlatform" value={formData.preferredPlatform} onChange={handleChange} required className="w-full p-4 border rounded-xl">
                <option value="">Preferred Platform *</option>
                {platforms.map(p => <option key={p} value={p}>{p}</option>)}
              </select>
            </div>
          )}

          {/* Section 4: Payment */}
          {currentSection === 4 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold flex items-center gap-2"><DollarSign className="text-pink-500" /> Final Details</h2>
              <select name="paymentWillingness" value={formData.paymentWillingness} onChange={handleChange} required className="w-full p-4 border rounded-xl">
                <option value="">Would you pay for a better solution? *</option>
                {paymentWillingnessOptions.map(p => <option key={p} value={p}>{p}</option>)}
              </select>
              <input type="text" name="maxPayment" placeholder="What is the maximum you'd pay per month? *" value={formData.maxPayment} onChange={handleChange} required className="w-full p-4 border rounded-xl" />
              <select name="willingness" value={formData.willingness} onChange={handleChange} required className="w-full p-4 border rounded-xl">
                <option value="">If built, would you use it immediately? *</option>
                {willingnessLevels.map(w => <option key={w} value={w}>{w}</option>)}
              </select>
              <textarea name="additionalComments" placeholder="Any other thoughts?" value={formData.additionalComments} onChange={handleChange} className="w-full p-4 border rounded-xl h-32" />
            </div>
          )}

          <div className="flex gap-4 mt-8">
            {currentSection > 1 && (
              <button onClick={() => setCurrentSection(prev => prev - 1)} className="flex-1 p-4 bg-gray-100 rounded-xl font-bold">Previous</button>
            )}
            {currentSection < 4 ? (
              <button onClick={() => setCurrentSection(prev => prev + 1)} className="flex-1 p-4 bg-pink-500 text-white rounded-xl font-bold">Next</button>
            ) : (
              <button onClick={handleSubmit} className="flex-1 p-4 bg-pink-500 text-white rounded-xl font-bold flex items-center justify-center gap-2">Submit <Send size={20}/></button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
