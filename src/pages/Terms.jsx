import React, { useState } from 'react'

function Terms() {
  const [expandedSections, setExpandedSections] = useState(['introduction', 'user-obligations'])
  const [acceptedTerms, setAcceptedTerms] = useState(false)

  const toggleSection = (sectionId) => {
    if (expandedSections.includes(sectionId)) {
      setExpandedSections(expandedSections.filter(id => id !== sectionId))
    } else {
      setExpandedSections([...expandedSections, sectionId])
    }
  }

  const termsSections = [
    {
      id: 'introduction',
      title: 'Introduction & Acceptance',
      icon: '📜',
      content: `Welcome to GPS Nav Tracking Services ("Service"). These Terms and Conditions ("Terms") govern your access to and use of our website, mobile applications, and services. By accessing or using our Service, you agree to be bound by these Terms.

**Effective Date:** December 18, 2024
**Last Updated:** December 18, 2024
**Service Version:** 3.2.1

Please read these Terms carefully before using our services. If you do not agree with any part of these Terms, you must not use our Service. Your continued use of the Service constitutes your acceptance of these Terms and any updates.`
    },
    {
      id: 'definitions',
      title: 'Definitions',
      icon: '📖',
      content: `For the purposes of these Terms and Conditions:

1. **"Service"** refers to the GPS Nav Tracking platform, including all websites, mobile applications, APIs, and related services.
2. **"User"** means any individual or entity that accesses or uses the Service.
3. **"Account"** means the registered user profile created to access premium features of the Service.
4. **"Content"** refers to text, images, videos, data, maps, location information, and other materials available through the Service.
5. **"Device"** means any GPS-enabled vehicle tracking device registered with our Service.
6. **"Subscription"** means the paid access plan selected by the User.
7. **"Personal Data"** means any information relating to an identified or identifiable natural person.`
    },
    {
      id: 'user-obligations',
      title: 'User Obligations & Responsibilities',
      icon: '👤',
      content: `**As a User of our Service, you agree to:**

1. **Account Security:** You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
2. **Accurate Information:** Provide accurate, current, and complete information during registration and keep it updated.
3. **Compliance:** Use the Service only for lawful purposes and in accordance with these Terms.
4. **Device Ownership:** Only register devices that you own or have explicit permission to track.
5. **No Interference:** Not attempt to interfere with, compromise, or disrupt the Service's functionality.
6. **Age Requirement:** Be at least 18 years old to create an account and use the Service.
7. **Geographical Compliance:** Comply with all local, state, and federal laws regarding GPS tracking and data privacy.

**Prohibited Activities Include:**
- Using the Service for illegal surveillance or stalking
- Reverse engineering or decompiling any part of the Service
- Attempting to gain unauthorized access to other users' data
- Using the Service to harass, threaten, or intimidate others
- Sharing your account credentials with unauthorized persons`
    },
    {
      id: 'subscription',
      title: 'Subscription & Payments',
      icon: '💳',
      content: `**Subscription Plans:**
We offer various subscription plans with different features and pricing. All fees are stated in USD and are exclusive of applicable taxes.

**Billing Cycle:** Subscriptions are billed on a monthly or annual basis, as selected during purchase.

**Auto-Renewal:** Unless cancelled, subscriptions automatically renew at the end of each billing period.

**Payment Methods:** We accept major credit cards, debit cards, and other payment methods as indicated during checkout.

**Cancellation:** You may cancel your subscription at any time through your account settings. Cancellation takes effect at the end of your current billing period.

**Refunds:** Subscription fees are non-refundable, except as required by law or at our discretion.

**Price Changes:** We reserve the right to modify subscription fees with 30 days' notice.`
    },
    {
      id: 'intellectual-property',
      title: 'Intellectual Property Rights',
      icon: '⚖️',
      content: `**Ownership:** All intellectual property rights in the Service, including but not limited to software, designs, logos, trademarks, and content, are owned by GPS Nav or our licensors.

**License Grant:** We grant you a limited, non-exclusive, non-transferable, revocable license to use the Service for personal or internal business purposes.

**Restrictions:** You may not:
- Copy, modify, or create derivative works of the Service
- Use our trademarks, logos, or branding without permission
- Remove any copyright or proprietary notices
- Use the Service to develop a competing product

**User Content:** By submitting content to the Service, you grant us a worldwide, royalty-free license to use, reproduce, and display such content for the purpose of providing the Service.`
    },
    {
      id: 'limitation-liability',
      title: 'Limitation of Liability & Disclaimer',
      icon: '⚠️',
      content: `**Disclaimer of Warranties:**
THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE.

**Limitation of Liability:**
TO THE MAXIMUM EXTENT PERMITTED BY LAW, GPS NAV SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, OR BUSINESS OPPORTUNITIES.

**Maximum Liability:**
IN NO EVENT SHALL OUR TOTAL LIABILITY EXCEED THE AMOUNT PAID BY YOU FOR THE SERVICE IN THE 12 MONTHS PRECEDING THE CLAIM.

**Service Availability:**
We strive to maintain 99.9% service uptime but do not guarantee uninterrupted availability. We may perform maintenance that temporarily affects service availability.`
    },
    {
      id: 'termination',
      title: 'Termination & Suspension',
      icon: '🚫',
      content: `**By You:** You may terminate your account at any time through your account settings or by contacting customer support.

**By Us:** We may suspend or terminate your access to the Service immediately if:
- You breach these Terms
- You engage in fraudulent or illegal activities
- Required by law or governmental authority
- For non-payment of subscription fees

**Effect of Termination:**
Upon termination:
- Your right to use the Service immediately ceases
- You must stop all use of the Service
- We may delete your data according to our data retention policy
- Any outstanding payments become immediately due

**Survival:** Sections relating to intellectual property, limitation of liability, and indemnification survive termination.`
    },
    {
      id: 'governing-law',
      title: 'Governing Law & Dispute Resolution',
      icon: '🏛️',
      content: `**Governing Law:** These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law provisions.

**Dispute Resolution:** Any dispute arising from these Terms shall be resolved through binding arbitration in accordance with the American Arbitration Association's rules.

**Class Action Waiver:** You agree to resolve disputes on an individual basis and waive any right to participate in class actions.

**Venue:** Arbitration shall take place in Wilmington, Delaware.

**Time Limitation:** Any claim must be brought within one year of the event giving rise to the claim.

**Force Majeure:** We shall not be liable for any failure to perform due to circumstances beyond our reasonable control.`
    },
    {
      id: 'modifications',
      title: 'Modifications to Terms',
      icon: '🔄',
      content: `**Right to Modify:** We reserve the right to modify these Terms at any time. We will provide notice of material changes through:
- Email notification to registered users
- In-app notifications
- Updated posting date on our website

**Acceptance of Changes:** Your continued use of the Service after changes become effective constitutes your acceptance of the modified Terms.

**Review Responsibility:** You are responsible for regularly reviewing these Terms. The "Last Updated" date at the top indicates when changes were last made.

**Material Changes:** For material changes affecting your rights, we will provide at least 30 days' notice.

**Archived Versions:** Previous versions of these Terms are available upon request.`
    },
    {
      id: 'contact',
      title: 'Contact Information',
      icon: '📞',
      content: `For questions, concerns, or notices regarding these Terms and Conditions, please contact us:

**GPS Nav Legal Department**
Email: legal@gpsnav.com
Phone: +1 (555) 987-6543
Address: 456 Compliance Avenue, Legal City, LC 67890

**Customer Support:**
Email: support@gpsnav.com
Phone: +1 (555) 123-4567
Hours: Monday-Friday, 9:00 AM - 6:00 PM EST

**Legal Notices:** Formal legal notices should be sent via registered mail to our corporate address above.`
    }
  ]

  const importantPoints = [
    { text: 'Users must be 18+ years old', icon: '👤' },
    { text: 'Auto-renewal subscriptions', icon: '🔄' },
    { text: '30-day notice for changes', icon: '📅' },
    { text: 'Binding arbitration required', icon: '⚖️' },
    { text: 'Service "as is" basis', icon: '⚠️' },
    { text: 'Delaware governing law', icon: '🏛️' }
  ]

  const acceptanceHistory = [
    { date: 'Dec 18, 2024', version: '3.2.1', action: 'Current Version' },
    { date: 'Nov 15, 2024', version: '3.2.0', action: 'Minor Updates' },
    { date: 'Sep 01, 2024', version: '3.1.0', action: 'Major Revision' },
    { date: 'Jun 15, 2024', version: '3.0.0', action: 'Complete Overhaul' }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-900/20 to-purple-900/20 rounded-2xl p-8 border border-indigo-800/30">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center shadow-2xl mr-5">
                <span className="text-3xl">📄</span>
              </div>
              <div>
                <h1 className="text-4xl font-bold text-white">Terms & Conditions</h1>
                <p className="text-gray-400 mt-2">Legal agreement governing your use of GPS Nav Tracking Services</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 mt-6">
              <div className="bg-indigo-900/30 px-4 py-2 rounded-xl border border-indigo-800/30">
                <div className="text-sm text-indigo-300">Version</div>
                <div className="text-xl font-bold text-white">3.2.1</div>
              </div>
              <div className="bg-gray-900/50 px-4 py-2 rounded-xl border border-gray-800">
                <div className="text-sm text-gray-400">Effective Date</div>
                <div className="text-xl font-bold text-white">Dec 18, 2024</div>
              </div>
              <div className="bg-gray-900/50 px-4 py-2 rounded-xl border border-gray-800">
                <div className="text-sm text-gray-400">Last Updated</div>
                <div className="text-xl font-bold text-white">Dec 18, 2024</div>
              </div>
              <div className="bg-gray-900/50 px-4 py-2 rounded-xl border border-gray-800">
                <div className="text-sm text-gray-400">Pages</div>
                <div className="text-xl font-bold text-white">12</div>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex flex-col items-center">
            <div className="text-6xl mb-3">⚖️</div>
            <div className="text-sm text-gray-400 bg-gray-900/50 px-3 py-1 rounded-lg">Legally Binding</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          {/* Quick Actions */}
          <div className="bg-gray-900/50 rounded-2xl p-5 border border-gray-800">
            <h3 className="text-lg font-bold text-white mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition duration-300 font-medium flex items-center justify-center">
                <span className="mr-2">📄</span>
                Download PDF
              </button>
              <button className="w-full py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-xl transition duration-300 font-medium flex items-center justify-center">
                <span className="mr-2">🖨️</span>
                Print Terms
              </button>
              <button className="w-full py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-xl transition duration-300 font-medium flex items-center justify-center">
                <span className="mr-2">📧</span>
                Email Copy
              </button>
            </div>
          </div>

          {/* Important Points */}
          <div className="bg-gradient-to-br from-amber-900/20 to-orange-900/20 rounded-2xl p-5 border border-amber-800/30">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center">
              <span className="mr-2">⚠️</span>
              Key Points
            </h3>
            <div className="space-y-3">
              {importantPoints.map((point, index) => (
                <div key={index} className="flex items-center p-3 bg-amber-900/10 rounded-xl">
                  <span className="text-xl mr-3">{point.icon}</span>
                  <span className="text-white text-sm font-medium">{point.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Version History */}
          <div className="bg-gray-900/50 rounded-2xl p-5 border border-gray-800">
            <h3 className="text-lg font-bold text-white mb-4">Version History</h3>
            <div className="space-y-3">
              {acceptanceHistory.map((item, index) => (
                <div key={index} className={`p-3 rounded-xl ${item.version === '3.2.1' ? 'bg-indigo-900/20 border border-indigo-800/30' : 'bg-gray-800/30'}`}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-white font-bold">{item.version}</span>
                    <span className={`px-2 py-1 rounded text-xs ${item.version === '3.2.1' ? 'bg-indigo-600 text-white' : 'bg-gray-700 text-gray-300'}`}>
                      {item.action}
                    </span>
                  </div>
                  <div className="text-sm text-gray-400">{item.date}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          <div className="space-y-6">
            {/* Table of Contents */}
            <div className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800">
              <h2 className="text-xl font-bold text-white mb-4">Table of Contents</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {termsSections.map((section, index) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="flex items-center p-3 rounded-xl hover:bg-gray-800/50 transition group"
                  >
                    <span className="text-2xl mr-3">{section.icon}</span>
                    <div className="flex-1">
                      <div className="text-white font-medium group-hover:text-blue-300 transition">
                        {section.title}
                      </div>
                      <div className="text-sm text-gray-500">Section {index + 1}</div>
                    </div>
                    <span className="text-gray-500 group-hover:text-gray-300">→</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Terms Sections */}
            {termsSections.map((section, index) => (
              <div
                key={section.id}
                id={section.id}
                className="bg-gray-900/50 rounded-2xl border border-gray-800 overflow-hidden"
              >
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-800/30 transition group"
                >
                  <div className="flex items-center">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-900/30 to-purple-900/30 flex items-center justify-center mr-4 group-hover:from-indigo-800/40 group-hover:to-purple-800/40 transition">
                      <span className="text-2xl">{section.icon}</span>
                    </div>
                    <div>
                      <div className="flex items-center">
                        <h3 className="text-xl font-bold text-white mr-3">{section.title}</h3>
                        <span className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs">
                          Section {index + 1}
                        </span>
                      </div>
                      <p className="text-gray-400 mt-1">
                        {expandedSections.includes(section.id) ? 'Click to collapse' : 'Click to expand'}
                      </p>
                    </div>
                  </div>
                  <div className="text-gray-400 text-2xl">
                    {expandedSections.includes(section.id) ? '−' : '+'}
                  </div>
                </button>
                
                {expandedSections.includes(section.id) && (
                  <div className="px-6 pb-6 pt-2 border-t border-gray-800">
                    <div className="text-gray-300 leading-relaxed whitespace-pre-line space-y-4">
                      {section.content.split('\n\n').map((paragraph, pIndex) => (
                        <div key={pIndex}>
                          {paragraph.split('\n').map((line, lIndex) => {
                            if (line.startsWith('**') && line.endsWith('**')) {
                              return (
                                <p key={lIndex} className="font-bold text-white text-lg mt-4 mb-2">
                                  {line.slice(2, -2)}
                                </p>
                              )
                            } else if (line.match(/^\d+\./)) {
                              return (
                                <div key={lIndex} className="flex items-start ml-4 my-2">
                                  <span className="text-indigo-400 font-bold mr-3 mt-1">{line.split('.')[0]}.</span>
                                  <span>{line.substring(line.indexOf('.') + 2)}</span>
                                </div>
                              )
                            } else if (line.startsWith('-')) {
                              return (
                                <div key={lIndex} className="flex items-start ml-6 my-1">
                                  <span className="text-red-400 mr-2 mt-1">•</span>
                                  <span>{line.substring(1)}</span>
                                </div>
                              )
                            } else {
                              return <p key={lIndex} className="mb-3">{line}</p>
                            }
                          })}
                        </div>
                      ))}
                    </div>
                    
                    {/* Special Formatting for Contact Section */}
                    {section.id === 'contact' && (
                      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-gray-800/30 p-4 rounded-xl">
                          <div className="flex items-center mb-3">
                            <span className="text-2xl mr-3">⚖️</span>
                            <h4 className="font-bold text-white">Legal Department</h4>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center text-gray-300">
                              <span className="mr-2">📧</span>
                              <a href="mailto:legal@gpsnav.com" className="text-blue-400 hover:text-blue-300">
                                legal@gpsnav.com
                              </a>
                            </div>
                            <div className="flex items-center text-gray-300">
                              <span className="mr-2">📱</span>
                              <span>+1 (555) 987-6543</span>
                            </div>
                          </div>
                        </div>
                        <div className="bg-gray-800/30 p-4 rounded-xl">
                          <div className="flex items-center mb-3">
                            <span className="text-2xl mr-3">💁</span>
                            <h4 className="font-bold text-white">Customer Support</h4>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center text-gray-300">
                              <span className="mr-2">📧</span>
                              <a href="mailto:support@gpsnav.com" className="text-blue-400 hover:text-blue-300">
                                support@gpsnav.com
                              </a>
                            </div>
                            <div className="flex items-center text-gray-300">
                              <span className="mr-2">🕐</span>
                              <span>Mon-Fri, 9AM-6PM EST</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}

            {/* Acceptance Section */}
            <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-2xl p-6 border border-green-800/30">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center mr-4">
                  <span className="text-3xl">✓</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Terms Acceptance</h3>
                  <p className="text-gray-300">By using our service, you agree to these terms</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start p-4 bg-green-900/20 rounded-xl">
                  <input
                    type="checkbox"
                    id="terms-acceptance"
                    checked={acceptedTerms}
                    onChange={(e) => setAcceptedTerms(e.target.checked)}
                    className="w-5 h-5 rounded border-gray-600 text-green-600 mt-1"
                  />
                  <label htmlFor="terms-acceptance" className="ml-3">
                    <div className="text-white font-bold mb-1">
                      I have read, understood, and agree to be bound by these Terms & Conditions
                    </div>
                    <div className="text-gray-300 text-sm">
                      By checking this box, you acknowledge that you have reviewed all sections above and accept all terms.
                    </div>
                  </label>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button 
                    className={`py-3 rounded-xl font-bold transition ${acceptedTerms ? 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white' : 'bg-gray-800 text-gray-400 cursor-not-allowed'}`}
                    disabled={!acceptedTerms}
                  >
                    {acceptedTerms ? 'Continue to Service →' : 'Accept Terms to Continue'}
                  </button>
                  <button className="py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-xl font-bold transition">
                    Save for Later
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-900/50 rounded-2xl p-5 border border-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-400 mb-4 md:mb-0">
            Document ID: <span className="text-white font-mono">TOS-2024-12-18-001</span> • 
            <span className="ml-2">Governing Law: Delaware, USA</span>
          </div>
          <div className="flex items-center space-x-6">
            <div className="text-sm text-gray-400">
              <span className="text-white font-bold">12</span> sections • 
              <span className="ml-2 text-white font-bold">3,850</span> words
            </div>
            <div className="flex space-x-4">
              <button className="text-sm text-blue-400 hover:text-blue-300 transition">
                Share Feedback
              </button>
              <button className="text-sm text-green-400 hover:text-green-300 transition">
                Request Clarification
              </button>
              <button className="text-sm text-purple-400 hover:text-purple-300 transition">
                View Legal FAQ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Terms