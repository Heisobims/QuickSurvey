import React, { useState } from 'react';
import { Send, CheckCircle2, Users, Target, DollarSign, Zap, Linkedin, MapPin, Clock, BarChart3 } from 'lucide-react';

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

  // Options for dropdowns
  const sectors = ['Healthcare & Medical Services', 'Education & Learning', 'Transportation & Logistics', 'Agriculture & Farming', 'Finance & Banking', 'Energy & Utilities', 'Commerce & Retail', 'Government Services', 'Communication & Internet', 'Real Estate & Housing', 'Entertainment & Media', 'Food & Hospitality', 'Manufacturing & Industry', 'Security & Safety', 'Environmental Services', 'Other'];
  const nigerianStates = ['Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue', 'Borno', 'Cross River', 'Delta', 'Ebonyi', 'Edo', 'Ekiti', 'Enugu', 'Gombe', 'Imo', 'Jigawa', 'Kaduna', 'Kano', 'Katsina', 'Kebbi', 'Kogi', 'Kwara', 'Lagos', 'Nasarawa', 'Niger', 'Ogun', 'Ondo', 'Osun', 'Oyo', 'Plateau', 'Rivers', 'Sokoto', 'Taraba', 'Yobe', 'Zamfara', 'FCT'];
  const ageGroups = ['Under 18', '18-24', '25-34', '35-44', '45-54', '55+'];
  const genders = ['Male', 'Female', 'Other', 'Prefer not to say'];
  const educationLevels = ['Primary', 'Secondary/SSCE', 'OND/NCE', 'HND/Bachelor\'s', 'Master\'s', 'PhD', 'None'];
  const frequencies = ['Daily', 'Weekly', 'Monthly', 'Rarely'];
  const durations = ['Less than 6 months', '6 months - 1 year', '1 - 3 years', '3+ years'];
  const peopleAffectedOptions = ['Just me', '2-10 people', '10-50 people', '50-100 people', '100+ people'];
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzUuKDjjyV8lEz8ybdALiWAC8KvCg7HKmecvjJocXNBccoYjCX9p1XZS9dxdhlzx1zZzA/exec';
    
    try {
      // Updated fetch call to handle Google Apps Script CORS requirements
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Essential for Google Apps Script
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      setSubmitted(true);
      setTimeout(() => { 
        setSubmitted(false); 
        setCurrentSection(1);
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
      }, 4000);
    } catch (error) {
      alert('Error submitting form. Please try again.');
    }
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const nextSection = () => setCurrentSection(prev => Math.min(prev + 1, 4));
  const prevSection = () => setCurrentSection(prev => Math.max(prev - 1, 1));

  if (submitted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-4 font-['Sora']">
        <div className="text-center bg-white p-12 rounded-3xl border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <CheckCircle2 className="w-20 h-20 text-[#82eda6] mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">You are a Genius!😊</h2>
          <p className="text-gray-600">Your submission is helping build a better Nigeria.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col font-['Sora']">
      <link href="https://fonts.googleapis.com/css2?family=Sora:wght@400;600;800&display=swap" rel="stylesheet" />
      
      <main className="flex-grow py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block w-28 h-28 mb-6 overflow-hidden rounded-full border-4 border-[#03594d] shadow-lg">
              <img src="https://lh3.google.com/u/0/d/1a0vWFWVWtj9mACG4KUCI9eol31Xw3lfv=w450-h337-p-k-nu-iv1?auditContext=thumbnail" alt="Profile" className="w-full h-full object-cover" />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-4">Building for Nigeria, By Nigerians</h1>
            <p className="text-[#03594d] font-medium max-w-xl mx-auto">Hi, I'm Stanley, Help us understand the challenges you face in Nigeria. Your detailed insights will drive meaningful tech solutions. </p>
          </div>

          <div className="bg-white border-2 border-black rounded-2xl p-6 md:p-10 shadow-[12px_12px_0px_0px_rgba(3,89,77,1)]">
            {/* Step 1: Personal Profile */}
            {currentSection === 1 && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 pb-3 border-b-2 border-[#82eda6]">
                  <Users className="w-6 h-6" />
                  <h2 className="text-xl font-extrabold uppercase tracking-tight">Personal Profile</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input 
                    label="Full Name *" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    placeholder="e.g., Chukwuma Adeyemi" 
                    hint="Enter your legal first and last name."
                  />
                  <Input 
                    label="Occupation *" 
                    name="occupation" 
                    value={formData.occupation} 
                    onChange={handleChange} 
                    placeholder="e.g., Digital Marketer or Student" 
                    hint="Your current primary work or study area."
                  />
                  <Select 
                    label="Age Group *" 
                    name="ageGroup" 
                    value={formData.ageGroup} 
                    options={ageGroups} 
                    onChange={handleChange} 
                    hint="Select the range that includes your current age."
                  />
                  <Select 
                    label="Gender *" 
                    name="gender" 
                    value={formData.gender} 
                    options={genders} 
                    onChange={handleChange} 
                    hint="Choose the gender identity you identify with."
                  />
                  <Select 
                    label="Education Level *" 
                    name="educationLevel" 
                    value={formData.educationLevel} 
                    options={educationLevels} 
                    onChange={handleChange} 
                    hint="The highest academic qualification you've completed."
                  />
                  <Input 
                    label="City/Town *" 
                    name="location" 
                    value={formData.location} 
                    onChange={handleChange} 
                    placeholder="e.g., Ikeja" 
                    hint="The specific city or town where you reside."
                  />
                  <Select 
                    label="State *" 
                    name="state" 
                    value={formData.state} 
                    options={nigerianStates} 
                    onChange={handleChange} 
                    hint="The Nigerian state where you are currently based."
                  />
                  <Input 
                    label="Phone Number *" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    placeholder="e.g., 08012345678" 
                    hint="A valid mobile number we can reach you on."
                  />
                </div>
              </div>
            )}

            {/* Step 2: Problem Analysis */}
            {currentSection === 2 && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 pb-3 border-b-2 border-[#82eda6]">
                  <Target className="w-6 h-6" />
                  <h2 className="text-xl font-extrabold uppercase tracking-tight">Problem Analysis</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Select 
                    label="Sector *" 
                    name="sector" 
                    value={formData.sector} 
                    options={sectors} 
                    onChange={handleChange} 
                    hint="Which industry is this problem most related to?"
                  />
                  <Select 
                    label="Frequency of Problem *" 
                    name="frequency" 
                    value={formData.frequency} 
                    options={frequencies} 
                    onChange={handleChange} 
                    hint="How often do you encounter this specific challenge?"
                  />
                  <Select 
                    label="How long has this existed? *" 
                    name="duration" 
                    value={formData.duration} 
                    options={durations} 
                    onChange={handleChange} 
                    hint="Total time you've been dealing with this issue."
                  />
                  <Select 
                    label="People Affected *" 
                    name="peopleAffected" 
                    value={formData.peopleAffected} 
                    options={peopleAffectedOptions} 
                    onChange={handleChange} 
                    hint="Estimate how many others share this same problem."
                  />
                </div>
                <TextArea 
                  label="Describe the Problem *" 
                  name="problem" 
                  value={formData.problem} 
                  onChange={handleChange} 
                  placeholder="Clearly explain the specific challenge you are facing..." 
                  hint="Provide enough detail so we understand the core issue."
                />
                <TextArea 
                  label="Personal Impact *" 
                  name="impact" 
                  value={formData.impact} 
                  onChange={handleChange} 
                  placeholder="How does this affect your daily life?" 
                  hint="Explain how this problem limits your goals or well-being."
                />
              </div>
            )}

            {/* Step 3: Current Context & Costs */}
            {currentSection === 3 && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 pb-3 border-b-2 border-[#82eda6]">
                  <BarChart3 className="w-6 h-6" />
                  <h2 className="text-xl font-extrabold uppercase tracking-tight">Impact & Current Solutions</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input 
                    label="Financial Loss (Monthly ₦) *" 
                    name="financialImpact" 
                    value={formData.financialImpact} 
                    onChange={handleChange} 
                    placeholder="e.g., 5000" 
                    hint="Estimated money lost per month due to this problem."
                  />
                  <Input 
                    label="Time Lost (Weekly Hours) *" 
                    name="timeImpact" 
                    value={formData.timeImpact} 
                    onChange={handleChange} 
                    placeholder="e.g., 10" 
                    hint="Hours wasted every week trying to resolve this."
                  />
                </div>
                <TextArea 
                  label="Your Current Solution *" 
                  name="currentSolution" 
                  value={formData.currentSolution} 
                  onChange={handleChange} 
                  placeholder="How do you handle this currently?" 
                  hint="Mention any apps, tools, or manual steps you take now."
                />
                <Input 
                  label="Current Cost to Manage (₦) *" 
                  name="solutionCost" 
                  value={formData.solutionCost} 
                  onChange={handleChange} 
                  placeholder="e.g., 2000" 
                  hint="How much you spend on your current alternative solution."
                />
              </div>
            )}

            {/* Step 4: Ideal Solution & Final */}
            {currentSection === 4 && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 pb-3 border-b-2 border-[#82eda6]">
                  <Zap className="w-6 h-6" />
                  <h2 className="text-xl font-extrabold uppercase tracking-tight">Ideal Solution</h2>
                </div>
                <TextArea 
                  label="Describe your Ideal Tech Solution *" 
                  name="idealSolution" 
                  value={formData.idealSolution} 
                  onChange={handleChange} 
                  placeholder="What would the perfect app or service look like?" 
                  hint="Describe features that would solve your problem permanently."
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input 
                    label="Preferred Platform *" 
                    name="preferredPlatform" 
                    value={formData.preferredPlatform} 
                    onChange={handleChange} 
                    placeholder="e.g., Mobile App or WhatsApp" 
                    hint="Where would you prefer to use this solution?"
                  />
                  <Select 
                    label="Urgency Level *" 
                    name="urgency" 
                    value={formData.urgency} 
                    options={['Very Urgent', 'Somewhat Urgent', 'Not Urgent']} 
                    onChange={handleChange} 
                    hint="How badly do you need this solved right now?"
                  />
                  <Select 
                    label="Willingness to Pay *" 
                    name="paymentWillingness" 
                    value={formData.paymentWillingness} 
                    options={['Yes', 'No', 'Maybe']} 
                    onChange={handleChange} 
                    hint="Would you pay to have this problem solved?"
                  />
                  <Select 
                    label="Willingness to Use *" 
                    name="willingness" 
                    value={formData.willingness} 
                    options={['Yes', 'No', 'Maybe']} 
                    onChange={handleChange} 
                    hint="Would you actually use this if it were built?"
                  />
                  <Input 
                    label="Willing to Pay (Max Monthly ₦) *" 
                    name="maxPayment" 
                    value={formData.maxPayment} 
                    onChange={handleChange} 
                    placeholder="e.g., 1500" 
                    hint="The maximum amount you'd pay for the ideal solution."
                  />
                  <Input 
                    label="Email Address *" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    placeholder="e.g., user@example.com" 
                    hint="We will use this to keep you updated on progress."
                  />
                </div>
                <TextArea 
                  label="Additional Comments" 
                  name="additionalComments" 
                  value={formData.additionalComments} 
                  onChange={handleChange} 
                  placeholder="Any other thoughts you'd like to share?" 
                  hint="Optional: Share anything we might have missed."
                />
              </div>
            )}

            {/* Navigation */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              {currentSection > 1 && (
                <button onClick={prevSection} className="flex-1 bg-white text-black border-2 border-black font-bold py-4 rounded-lg hover:bg-gray-50 transition-all">
                  Back
                </button>
              )}
              {currentSection < 4 ? (
                <button onClick={nextSection} className="flex-1 bg-[#03594d] text-[#82eda6] font-extrabold py-4 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:shadow-none transition-all">
                  Continue
                </button>
              ) : (
                <button onClick={handleSubmit} className="flex-1 bg-[#82eda6] text-black font-extrabold py-4 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center gap-2 active:translate-y-1 active:shadow-none transition-all">
                  Submit Feedback <Send className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t-2 border-black bg-white mt-12">
        <div className="max-w-4xl mx-auto px-4 flex flex-col items-center gap-4">
          <div className="flex items-center gap-2 text-black font-bold">
            <Linkedin className="w-5 h-5 text-[#03594d]" />
            <a href="https://linkedin.com/in/heisobims" target="_blank" rel="noopener noreferrer" className="hover:underline">
              linkedin.com/in/heisobims
            </a>
          </div>
          <p className="text-xs text-gray-500">© 2026 Building for Nigeria. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

// Custom reusable components for clean code
const Input = ({ label, name, value, onChange, placeholder, hint }) => (
  <div className="space-y-1">
    <label className="block text-[10px] font-extrabold text-black uppercase tracking-widest">{label}</label>
    <input 
      type="text" 
      name={name} 
      value={value} 
      onChange={onChange} 
      placeholder={placeholder} 
      className="w-full px-4 py-3 rounded-lg border-2 border-black focus:bg-[#82eda6]/10 outline-none transition-colors" 
      required 
    />
    {hint && <p className="text-[10px] text-gray-500 italic mt-1">{hint}</p>}
  </div>
);

const Select = ({ label, name, value, options, onChange, hint }) => (
  <div className="space-y-1">
    <label className="block text-[10px] font-extrabold text-black uppercase tracking-widest">{label}</label>
    <select 
      name={name} 
      value={value} 
      onChange={onChange} 
      className="w-full px-4 py-3 rounded-lg border-2 border-black bg-white outline-none focus:bg-[#82eda6]/10" 
      required
    >
      <option value="">Select option</option>
      {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
    </select>
    {hint && <p className="text-[10px] text-gray-500 italic mt-1">{hint}</p>}
  </div>
);

const TextArea = ({ label, name, value, onChange, placeholder, hint }) => (
  <div className="space-y-1">
    <label className="block text-[10px] font-extrabold text-black uppercase tracking-widest">{label}</label>
    <textarea 
      name={name} 
      value={value} 
      onChange={onChange} 
      rows="3" 
      placeholder={placeholder} 
      className="w-full px-4 py-3 rounded-lg border-2 border-black focus:bg-[#82eda6]/10 outline-none transition-colors" 
      required 
    />
    {hint && <p className="text-[10px] text-gray-500 italic mt-1">{hint}</p>}
  </div>
);
