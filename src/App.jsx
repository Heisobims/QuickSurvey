import React, { useState } from 'react';
import { Send, Lightbulb, CheckCircle2, Users, Target, DollarSign, Zap } from 'lucide-react';

export default function SurveyPlatform() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    state: '',
    sector: '',
    occupation: '',
    ageGroup: '',
    gender: '',
    educationLevel: '',
    monthlyIncome: '',
    problem: '',
    frequency: '',
    duration: '',
    impact: '',
    peopleAffected: '',
    financialImpact: '',
    timeImpact: '',
    currentSolution: '',
    solutionCost: '',
    idealSolution: '',
    preferredPlatform: '',
    paymentWillingness: '',
    maxPayment: '',
    urgency: '',
    willingness: '',
    referralSource: '',
    additionalComments: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [currentSection, setCurrentSection] = useState(1);

  const sectors = [
    'Healthcare & Medical Services',
    'Education & Learning',
    'Transportation & Logistics',
    'Agriculture & Farming',
    'Finance & Banking',
    'Energy & Utilities',
    'Commerce & Retail',
    'Government Services',
    'Communication & Internet',
    'Real Estate & Housing',
    'Entertainment & Media',
    'Food & Hospitality',
    'Manufacturing & Industry',
    'Security & Safety',
    'Environmental Services',
    'Other'
  ];

  const nigerianStates = [
    'Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue', 'Borno',
    'Cross River', 'Delta', 'Ebonyi', 'Edo', 'Ekiti', 'Enugu', 'Gombe', 'Imo', 'Jigawa',
    'Kaduna', 'Kano', 'Katsina', 'Kebbi', 'Kogi', 'Kwara', 'Lagos', 'Nasarawa', 'Niger',
    'Ogun', 'Ondo', 'Osun', 'Oyo', 'Plateau', 'Rivers', 'Sokoto', 'Taraba', 'Yobe', 'Zamfara', 'FCT'
  ];

  const frequencies = ['Daily', 'Multiple times per week', 'Weekly', 'Monthly', 'Occasionally', 'Rarely'];
  const ageGroups = ['18-24', '25-34', '35-44', '45-54', '55-64', '65+'];
  const genders = ['Male', 'Female', 'Prefer not to say', 'Other'];
  const educationLevels = ['Primary', 'Secondary/SSCE', 'OND/NCE', 'HND/Bachelor\'s', 'Master\'s', 'PhD', 'None'];
  const incomeRanges = [
    'Below ₦50,000',
    '₦50,000 - ₦100,000',
    '₦100,000 - ₦250,000',
    '₦250,000 - ₦500,000',
    '₦500,000 - ₦1,000,000',
    'Above ₦1,000,000',
    'Prefer not to say'
  ];
  const durations = ['Less than 6 months', '6 months - 1 year', '1-2 years', '2-5 years', 'More than 5 years'];
  const peopleAffectedOptions = [
    'Just me',
    '2-10 people',
    '10-50 people',
    '50-100 people',
    '100-1,000 people',
    '1,000-10,000 people',
    'More than 10,000 people',
    'Not sure'
  ];
  const platforms = ['Mobile App (Android)', 'Mobile App (iOS)', 'Website', 'SMS/USSD', 'WhatsApp', 'All platforms', 'No preference'];
  const paymentWillingnessOptions = [
    'Yes, I would pay',
    'Yes, but only a small amount',
    'Maybe, depends on the price',
    'Prefer free with ads',
    'Only if completely free',
    'Not sure'
  ];
  const urgencyLevels = [
    'Extremely urgent - Need solution now',
    'Very urgent - Within a month',
    'Somewhat urgent - Within 3 months',
    'Not urgent - Can wait 6+ months',
    'Not urgent at all'
  ];
  const willingnessLevels = [
    'Definitely - I would use it immediately',
    'Very likely - I would try it out',
    'Maybe - Depends on features and price',
    'Unlikely - Not sure if I need it',
    'Definitely not interested'
  ];
  const referralSources = [
    'Social Media',
    'Friend/Family',
    'Search Engine',
    'Email',
    'Advertisement',
    'News/Blog',
    'Community Group',
    'Other'
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Replace this URL with your actual Google Apps Script Web App URL
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwtO9vOta20jRcuQVEK4wsxDV_CCyMLsiZLZfuOtg2pRd7UwVtJ3DzRWLtRMOHgy2UbXA/exec';
    
    try {
      // Send to Google Sheets
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      
      // Also store locally as backup
      const timestamp = Date.now();
      const submissionKey = `submission:${timestamp}`;
      await window.storage.set(submissionKey, JSON.stringify({
        ...formData,
        timestamp,
        id: timestamp
      }));
      
      setSubmitted(true);
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          location: '',
          state: '',
          sector: '',
          occupation: '',
          ageGroup: '',
          gender: '',
          educationLevel: '',
          monthlyIncome: '',
          problem: '',
          frequency: '',
          duration: '',
          impact: '',
          peopleAffected: '',
          financialImpact: '',
          timeImpact: '',
          currentSolution: '',
          solutionCost: '',
          idealSolution: '',
          preferredPlatform: '',
          paymentWillingness: '',
          maxPayment: '',
          urgency: '',
          willingness: '',
          referralSource: '',
          additionalComments: ''
        });
        setCurrentSection(1);
        setSubmitted(false);
      }, 4000);
    } catch (error) {
      console.error('Submission error:', error);
      alert('There was an error submitting your response. Please try again.');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 flex items-center justify-center p-4">
        <div className="text-center animate-fade-in">
          <div className="mb-6 inline-block">
            <CheckCircle2 className="w-24 h-24 text-pink-500 animate-bounce" />
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Amazing! Thank You!</h2>
          <p className="text-gray-600 text-xl mb-2">Your detailed submission has been received successfully.</p>
          <p className="text-pink-600 font-medium mt-3 text-lg">Together, we're building solutions for Nigeria 🇳🇬</p>
          <p className="text-gray-500 mt-4">Your insights are invaluable to us.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-slide-down">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-pink-400 to-rose-500 rounded-3xl mb-5 shadow-xl">
            <Lightbulb className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Share Your Idea
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Help us understand the challenges you face in Nigeria. Your detailed insights drive meaningful tech solutions.
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex justify-between items-center max-w-2xl mx-auto">
            {[1, 2, 3, 4].map((section) => (
              <div key={section} className="flex items-center flex-1">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                  currentSection >= section 
                    ? 'bg-gradient-to-r from-pink-400 to-rose-500 text-white shadow-lg' 
                    : 'bg-white text-gray-400 border-2 border-gray-200'
                }`}>
                  {section}
                </div>
                {section < 4 && (
                  <div className={`flex-1 h-1 mx-2 transition-all duration-300 ${
                    currentSection > section ? 'bg-pink-400' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <p className="text-sm font-medium text-gray-600">
              Section {currentSection} of 4: {
                currentSection === 1 ? 'Personal Information' :
                currentSection === 2 ? 'Problem Details' :
                currentSection === 3 ? 'Solution & Impact' :
                'Final Details'
              }
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-3xl shadow-2xl p-10 space-y-8 animate-fade-in">
          
          {/* Section 1: Personal Information */}
          {currentSection === 1 && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-3 border-b-2 border-pink-100">
                <Users className="w-6 h-6 text-pink-500" />
                <h2 className="text-2xl font-bold text-gray-800">Personal Information</h2>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Full Name <span className="text-pink-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className={`w-full px-5 py-4 rounded-xl border-2 transition-all duration-300 outline-none ${
                    focusedField === 'name' 
                      ? 'border-pink-400 shadow-lg shadow-pink-100' 
                      : 'border-gray-200 hover:border-pink-200'
                  }`}
                  placeholder="Enter your full name"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Email Address <span className="text-pink-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className={`w-full px-5 py-4 rounded-xl border-2 transition-all duration-300 outline-none ${
                      focusedField === 'email' 
                        ? 'border-pink-400 shadow-lg shadow-pink-100' 
                        : 'border-gray-200 hover:border-pink-200'
                    }`}
                    placeholder="your@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Phone Number <span className="text-pink-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('phone')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className={`w-full px-5 py-4 rounded-xl border-2 transition-all duration-300 outline-none ${
                      focusedField === 'phone' 
                        ? 'border-pink-400 shadow-lg shadow-pink-100' 
                        : 'border-gray-200 hover:border-pink-200'
                    }`}
                    placeholder="e.g., 080XXXXXXXX"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    City/Town <span className="text-pink-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('location')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className={`w-full px-5 py-4 rounded-xl border-2 transition-all duration-300 outline-none ${
                      focusedField === 'location' 
                        ? 'border-pink-400 shadow-lg shadow-pink-100' 
                        : 'border-gray-200 hover:border-pink-200'
                    }`}
                    placeholder="e.g., Ikeja, Enugu, Kano"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    State <span className="text-pink-500">*</span>
                  </label>
                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('state')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className={`w-full px-5 py-4 rounded-xl border-2 transition-all duration-300 outline-none bg-white ${
                      focusedField === 'state' 
                        ? 'border-pink-400 shadow-lg shadow-pink-100' 
                        : 'border-gray-200 hover:border-pink-200'
                    }`}
                  >
                    <option value="">Select state</option>
                    {nigerianStates.map((state) => (
                      <option key={state} value={state}>{state}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Age Group <span className="text-pink-500">*</span>
                  </label>
                  <select
                    name="ageGroup"
                    value={formData.ageGroup}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('ageGroup')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className={`w-full px-5 py-4 rounded-xl border-2 transition-all duration-300 outline-none bg-white ${
                      focusedField === 'ageGroup' 
                        ? 'border-pink-400 shadow-lg shadow-pink-100' 
                        : 'border-gray-200 hover:border-pink-200'
                    }`}
                  >
                    <option value="">Select age</option>
                    {ageGroups.map((age) => (
                      <option key={age} value={age}>{age}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Gender <span className="text-pink-500">*</span>
                  </label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('gender')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className={`w-full px-5 py-4 rounded-xl border-2 transition-all duration-300 outline-none bg-white ${
                      focusedField === 'gender' 
                        ? 'border-pink-400 shadow-lg shadow-pink-100' 
                        : 'border-gray-200 hover:border-pink-200'
                    }`}
                  >
                    <option value="">Select gender</option>
                    {genders.map((gender) => (
                      <option key={gender} value={gender}>{gender}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Education Level <span className="text-pink-500">*</span>
                  </label>
                  <select
                    name="educationLevel"
                    value={formData.educationLevel}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('educationLevel')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className={`w-full px-5 py-4 rounded-xl border-2 transition-all duration-300 outline-none bg-white ${
                      focusedField === 'educationLevel' 
                        ? 'border-pink-400 shadow-lg shadow-pink-100' 
                        : 'border-gray-200 hover:border-pink-200'
                    }`}
                  >
                    <option value="">Select level</option>
                    {educationLevels.map((level) => (
                      <option key={level} value={level}>{level}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Occupation/Profession <span className="text-pink-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="occupation"
                    value={formData.occupation}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('occupation')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className={`w-full px-5 py-4 rounded-xl border-2 transition-all duration-300 outline-none ${
                      focusedField === 'occupation' 
                        ? 'border-pink-400 shadow-lg shadow-pink-100' 
                        : 'border-gray-200 hover:border-pink-200'
                    }`}
                    placeholder="e.g., Teacher, Business Owner, Student"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Monthly Income Range
                  </label>
                  <select
                    name="monthlyIncome"
                    value={formData.monthlyIncome}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('monthlyIncome')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-5 py-4 rounded-xl border-2 transition-all duration-300 outline-none bg-white ${
                      focusedField === 'monthlyIncome' 
                        ? 'border-pink-400 shadow-lg shadow-pink-100' 
                        : 'border-gray-200 hover:border-pink-200'
                    }`}
                  >
                    <option value="">Select income range</option>
                    {incomeRanges.map((range) => (
                      <option key={range} value={range}>{range}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Section 2: Problem Details */}
          {currentSection === 2 && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-3 border-b-2 border-pink-100">
                <Target className="w-6 h-6 text-pink-500" />
                <h2 className="text-2xl font-bold text-gray-800">Problem Details</h2>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Which sector is this problem in? <span className="text-pink-500">*</span>
                </label>
                <select
                  name="sector"
                  value={formData.sector}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('sector')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className={`w-full px-5 py-4 rounded-xl border-2 transition-all duration-300 outline-none bg-white ${
                    focusedField === 'sector' 
                      ? 'border-pink-400 shadow-lg shadow-pink-100' 
                      : 'border-gray-200 hover:border-pink-200'
                  }`}
                >
                  <option value="">Select a sector</option>
                  {sectors.map((sector) => (
                    <option key={sector} value={sector}>{sector}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Describe the problem in detail <span className="text-pink-500">*</span>
                </label>
                <textarea
                  name="problem"
                  value={formData.problem}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('problem')}
                  onBlur={() => setFocusedField(null)}
                  required
                  rows="6"
                  className={`w-full px-5 py-4 rounded-xl border-2 transition-all duration-300 outline-none resize-none ${
                    focusedField === 'problem' 
                      ? 'border-pink-400 shadow-lg shadow-pink-100' 
                      : 'border-gray-200 hover:border-pink-200'
                  }`}
                  placeholder="What specific challenge do you face? Include examples, when and where it happens, and why it's frustrating. Be as detailed as possible..."
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    How often do you encounter this? <span className="text-pink-500">*</span>
                  </label>
                  <select
                    name="frequency"
                    value={formData.frequency}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('frequency')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className={`w-full px-5 py-4 rounded-xl border-2 transition-all duration-300 outline-none bg-white ${
                      focusedField === 'frequency' 
                        ? 'border-pink-400 shadow-lg shadow-pink-100' 
                        : 'border-gray-200 hover:border-pink-200'
                    }`}
                  >
                    <option value="">Select frequency</option>
                    {frequencies.map((freq) => (
                      <option key={freq} value={freq}>{freq}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    How long have you faced this? <span className="text-pink-500">*</span>
                  </label>
                  <select
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('duration')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className={`w-full px-5 py-4 rounded-xl border-2 transition-all duration-300 outline-none bg-white ${
                      focusedField === 'duration' 
                        ? 'border-pink-400 shadow-lg shadow-pink-100' 
                        : 'border-gray-200 hover:border-pink-200'
                    }`}
                  >
                    <option value="">Select duration</option>
                    {durations.map((dur) => (
                      <option key={dur} value={dur}>{dur}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Describe the impact on you and others <span className="text-pink-500">*</span>
                </label>
                <textarea
                  name="impact"
                  value={formData.impact}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('impact')}
                  onBlur={() => setFocusedField(null)}
                  required
                  rows="5"
                  className={`w-full px-5 py-4 rounded-xl border-2 transition-all duration-300 outline-none resize-none ${
                    focusedField === 'impact' 
                      ? 'border-pink-400 shadow-lg shadow-pink-100' 
                      : 'border-gray-200 hover:border-pink-200'
                  }`}
                  placeholder="How does this problem affect daily life, business, health, or relationships? Include emotional, physical, or social impacts..."
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  How many people are affected? <span className="text-pink-500">*</span>
                </label>
                <select
                  name="peopleAffected"
                  value={formData.peopleAffected}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('peopleAffected')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className={`w-full px-5 py-4 rounded-xl border-2 transition-all duration-300 outline-none bg-white ${
                    focusedField === 'peopleAffected' 
                      ? 'border-pink-400 shadow-lg shadow-pink-100' 
                      : 'border-gray-200 hover:border-pink-200'
                  }`}
                >
                  <option value="">Select range</option>
                  {peopleAffectedOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Financial impact per month
                  </label>
                  <input
                    type="text"
                    name="financialImpact"
                    value={formData.financialImpact}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('financialImpact')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-5 py-4 rounded-xl border-2 transition-all duration-300 outline-none ${
                      focusedField === 'financialImpact' 
                        ? 'border-pink-400 shadow-lg shadow-pink-100' 
                        : 'border-gray-200 hover:border-pink-200'
                    }`}
                    placeholder="e.g., ₦5,000, ₦50,000, or 'Not applicable'"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Time wasted per week
                  </label>
                  <input
                    type="text"
                    name="timeImpact"
                    value={formData.timeImpact}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('timeImpact')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-5 py-4 rounded-xl border-2 transition-all duration-300 outline-none ${
                      focusedField === 'timeImpact' 
                        ? 'border-pink-400 shadow-lg shadow-pink-100' 
                        : 'border-gray-200 hover:border-pink-200'
                    }`}
                    placeholder="e.g., 2 hours, 10 hours, half a day"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Section 3: Solution & Impact */}
          {currentSection === 3 && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-3 border-b-2 border-pink-100">
                <Zap className="w-6 h-6 text-pink-500" />
                <h2 className="text-2xl font-bold text-gray-800">Solution & Impact</h2>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  What are you currently doing to solve this?
                </label>
                <textarea
                  name="currentSolution"
                  value={formData.currentSolution}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('currentSolution')}
                  onBlur={() => setFocusedField(null)}
                  rows="4"
                  className={`w-full px-5 py-4 rounded-xl border-2 transition-all duration-300 outline-none resize-none ${
                    focusedField === 'currentSolution' 
                      ? 'border-pink-400 shadow-lg shadow-pink-100' 
                      : 'border-gray-200 hover:border-pink-200'
                  }`}
                  placeholder="Are you using any workarounds, apps, services, or manual methods? Why aren't they working well? What's missing?"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  How much do current solutions cost you?
                </label>
                <input
                  type="text"
                  name="solutionCost"
                  value={formData.solutionCost}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('solutionCost')}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full px-5 py-4 rounded-xl border-2 transition-all duration-300 outline-none ${
                    focusedField === 'solutionCost' 
                      ? 'border-pink-400 shadow-lg shadow-pink-100' 
                      : 'border-gray-200 hover:border-pink-200'
                  }`}
                  placeholder="e.g., ₦2,000/month, ₦10,000/year, or 'Nothing currently'"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  What would your ideal solution look like? <span className="text-pink-500">*</span>
                </label>
                <textarea
                  name="idealSolution"
                  value={formData.idealSolution}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('idealSolution')}
                  onBlur={() => setFocusedField(null)}
                  required
                  rows="5"
                  className={`w-full px-5 py-4 rounded-xl border-2 transition-all duration-300 outline-none resize-none ${
                    focusedField === 'idealSolution' 
                      ? 'border-pink-400 shadow-lg shadow-pink-100' 
                      : 'border-gray-200 hover:border-pink-200'
                  }`}
                  placeholder="Dream big! What features would solve this problem perfectly? Mobile app, website, SMS? What should it do? How should it work?"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Preferred platform for the solution <span className="text-pink-500">*</span>
                </label>
                <select
                  name="preferredPlatform"
                  value={formData.preferredPlatform}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('preferredPlatform')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className={`w-full px-5 py-4 rounded-xl border-2 transition-all duration-300 outline-none bg-white ${
                    focusedField === 'preferredPlatform' 
                      ? 'border-pink-400 shadow-lg shadow-pink-100' 
                      : 'border-gray-200 hover:border-pink-200'
                  }`}
                >
                  <option value="">Select platform</option>
                  {platforms.map((platform) => (
                    <option key={platform} value={platform}>{platform}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  How urgent is solving this problem? <span className="text-pink-500">*</span>
                </label>
                <select
                  name="urgency"
                  value={formData.urgency}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('urgency')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className={`w-full px-5 py-4 rounded-xl border-2 transition-all duration-300 outline-none bg-white ${
                    focusedField === 'urgency' 
                      ? 'border-pink-400 shadow-lg shadow-pink-100' 
                      : 'border-gray-200 hover:border-pink-200'
                  }`}
                >
                  <option value="">Select urgency level</option>
                  {urgencyLevels.map((level) => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {/* Section 4: Final Details */}
          {currentSection === 4 && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-3 border-b-2 border-pink-100">
                <DollarSign className="w-6 h-6 text-pink-500" />
                <h2 className="text-2xl font-bold text-gray-800">Payment & Commitment</h2>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Would you pay for this solution? <span className="text-pink-500">*</span>
                </label>
                <select
                  name="paymentWillingness"
                  value={formData.paymentWillingness}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('paymentWillingness')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className={`w-full px-5 py-4 rounded-xl border-2 transition-all duration-300 outline-none bg-white ${
                    focusedField === 'paymentWillingness' 
                      ? 'border-pink-400 shadow-lg shadow-pink-100' 
                      : 'border-gray-200 hover:border-pink-200'
                  }`}
                >
                  <option value="">Select willingness</option>
                  {paymentWillingnessOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Maximum you'd pay per month
                </label>
                <input
                  type="text"
                  name="maxPayment"
                  value={formData.maxPayment}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('maxPayment')}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full px-5 py-4 rounded-xl border-2 transition-all duration-300 outline-none ${
                    focusedField === 'maxPayment' 
                      ? 'border-pink-400 shadow-lg shadow-pink-100' 
                      : 'border-gray-200 hover:border-pink-200'
                  }`}
                  placeholder="e.g., ₦500, ₦1,000, ₦5,000, or 'Would not pay'"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  If we built this solution, would you use it? <span className="text-pink-500">*</span>
                </label>
                <select
                  name="willingness"
                  value={formData.willingness}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('willingness')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className={`w-full px-5 py-4 rounded-xl border-2 transition-all duration-300 outline-none bg-white ${
                    focusedField === 'willingness' 
                      ? 'border-pink-400 shadow-lg shadow-pink-100' 
                      : 'border-gray-200 hover:border-pink-200'
                  }`}
                >
                  <option value="">Select interest level</option>
                  {willingnessLevels.map((level) => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  How did you hear about this survey?
                </label>
                <select
                  name="referralSource"
                  value={formData.referralSource}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('referralSource')}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full px-5 py-4 rounded-xl border-2 transition-all duration-300 outline-none bg-white ${
                    focusedField === 'referralSource' 
                      ? 'border-pink-400 shadow-lg shadow-pink-100' 
                      : 'border-gray-200 hover:border-pink-200'
                  }`}
                >
                  <option value="">Select source</option>
                  {referralSources.map((source) => (
                    <option key={source} value={source}>{source}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Any additional comments or suggestions?
                </label>
                <textarea
                  name="additionalComments"
                  value={formData.additionalComments}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('additionalComments')}
                  onBlur={() => setFocusedField(null)}
                  rows="4"
                  className={`w-full px-5 py-4 rounded-xl border-2 transition-all duration-300 outline-none resize-none ${
                    focusedField === 'additionalComments' 
                      ? 'border-pink-400 shadow-lg shadow-pink-100' 
                      : 'border-gray-200 hover:border-pink-200'
                  }`}
                  placeholder="Share any other thoughts, concerns, or ideas you have about this problem or potential solutions..."
                />
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex gap-4 pt-6">
            {currentSection > 1 && (
              <button
                onClick={prevSection}
                className="flex-1 bg-gray-100 text-gray-700 font-semibold py-4 px-6 rounded-xl hover:bg-gray-200 transition-all duration-300"
              >
                Previous
              </button>
            )}
            
            {currentSection < 4 ? (
              <button
                onClick={nextSection}
                className="flex-1 bg-gradient-to-r from-pink-400 to-rose-500 text-white font-bold py-4 px-6 rounded-xl hover:from-pink-500 hover:to-rose-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Next Section
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="flex-1 bg-gradient-to-r from-pink-400 to-rose-500 text-white font-bold py-5 px-8 rounded-xl hover:from-pink-500 hover:to-rose-600 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-[1.02] flex items-center justify-center gap-3"
              >
                <span className="text-lg">Submit Your Idea</span>
                <Send className="w-6 h-6" />
              </button>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 space-y-2">
          <p className="text-gray-600 text-sm">
            Your detailed submission helps us build solutions that truly matter.
          </p>
          <p className="text-pink-600 font-medium text-sm">
            All information is kept confidential and used solely for solution development.
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-slide-down {
          animation: slide-down 0.7s ease-out;
        }

        .animate-fade-in {
          animation: fade-in 0.9s ease-out;
        }
      `}</style>
    </div>
  );
}