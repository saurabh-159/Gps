import React, { useState } from 'react'
import { Shield, FileText, Lock, Cookie, Eye, Users, Mail, Phone, MapPin, ChevronDown, ChevronUp } from 'lucide-react'

export default function PrivacyPolicy() {
  const [expandedSections, setExpandedSections] = useState(['info-collection', 'info-usage'])

  const toggleSection = (sectionId) => {
    if (expandedSections.includes(sectionId)) {
      setExpandedSections(expandedSections.filter(id => id !== sectionId))
    } else {
      setExpandedSections([...expandedSections, sectionId])
    }
  }

  const privacyPolicySections = [
    {
      id: 'introduction',
      title: 'Introduction',
      level: 1,
      content: `This privacy policy has been compiled to better serve those who are concerned with how their 'Personally Identifiable Information' (PII) is being used online. PII, as described in US privacy law and information security, is information that can be used on its own or with other information to identify, contact, or locate a single person, or to identify an individual in context. Please read our privacy policy carefully to get a clear understanding of how we collect, use, protect or otherwise handle your Personally Identifiable Information in accordance with our website.`
    },
    {
      id: 'info-collection',
      title: 'Information Collection',
      level: 2,
      content: `**What personal information do we collect from the people that visit our blog, website or app?**\n\nWhen ordering or registering on our site, as appropriate, you may be asked to enter your name, email address, mailing address, phone number or other details to help you with your experience.\n\n**When do we collect information?**\n\nWe collect information from you when you register on our site, place an order, subscribe to a newsletter, respond to a survey, fill out a form, use Live Chat, open a Support Ticket or enter information on our site.\n\n**How do we use your information?**\n\nWe may use the information we collect from you when you register, make a purchase, sign up for our newsletter, respond to a survey or marketing communication, surf the website, or use certain other site features in the following ways:\n• To personalize your experience and to allow us to deliver the type of content and product offerings in which you are most interested.\n• To improve our website in order to better serve you.\n• To allow us to better service you in responding to your customer service requests.\n• To administer a contest, promotion, survey or other site feature.\n• To quickly process your transactions.\n• To ask for ratings and reviews of services or products.\n• To follow up with them after correspondence (live chat, email or phone inquiries).`
    },
    {
      id: 'info-usage',
      title: 'Information Usage',
      level: 2,
      content: `We may use the information we collect from you when you register, make a purchase, sign up for our newsletter, respond to a survey or marketing communication, surf the website, or use certain other site features in the following ways:\n\n• To personalize your experience and to allow us to deliver the type of content and product offerings in which you are most interested.\n• To improve our website in order to better serve you.\n• To allow us to better service you in responding to your customer service requests.\n• To administer a contest, promotion, survey or other site feature.\n• To quickly process your transactions.\n• To ask for ratings and reviews of services or products.\n• To follow up with them after correspondence (live chat, email or phone inquiries).`
    },
    {
      id: 'info-protection',
      title: 'Information Protection',
      level: 2,
      content: `Our website is scanned on a regular basis for security holes and known vulnerabilities in order to make your visit to our site as safe as possible.\n\nWe use regular Malware Scanning.\n\nYour personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems, and are required to keep the information confidential. In addition, all sensitive/credit information you supply is encrypted via Secure Socket Layer (SSL) technology.\n\nWe implement a variety of security measures when a user places an order enters, submits, or accesses their information to maintain the safety of your personal information.\n\nAll transactions are processed through a gateway provider and are not stored or processed on our servers.`
    },
    {
      id: 'cookie-usage',
      title: 'Cookie Usage',
      level: 2,
      content: `Cookies are small files that a site or its service provider transfers to your computer's hard drive through your Web browser (if you allow) that enables the site's or service provider's systems to recognize your browser and capture and remember certain information.\n\nWe use cookies to:\n• Help remember and process the items in the shopping cart.\n• Understand and save user's preferences for future visits.\n• Keep track of advertisements.\n• Compile aggregate data about site traffic and site interactions in order to offer better site experiences and tools in the future. We may also use trusted third-party services that track this information on our behalf.\n\nYou can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies. You do this through your browser settings. Since browser is a little different, look at your browser's Help Menu to learn the correct way to modify your cookies.\n\nIf you turn cookies off, some features will be disabled. It won't affect the user's experience that makes your site experience more efficient and may not function properly.`
    },
    {
      id: 'third-party-disclosure',
      title: '3rd Party Disclosure',
      level: 2,
      content: `We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential. We may also release information when it's release is appropriate to comply with the law, enforce our site policies, or protect ours or others' rights, property or safety.\n\nHowever, non-personally identifiable visitor information may be provided to other parties for marketing, advertising, or other uses.`
    },
    {
      id: 'third-party-links',
      title: '3rd Party Links',
      level: 2,
      content: `Occasionally, at our discretion, we may include or offer third-party products or services on our website. These third-party sites have separate and independent privacy policies. We therefore have no responsibility or liability for the content and activities of these linked sites. Nonetheless, we seek to protect the integrity of our site and welcome any feedback about these sites.`
    },
    {
      id: 'google-adsense',
      title: 'Google AdSense',
      level: 2,
      content: `Google's advertising requirements can be summed up by Google's Advertising Principles. They are put in place to provide a positive experience for users. https://support.google.com/adwordspolicy/answer/1316548?hl=en\n\nWe have not enabled Google AdSense on our site but we may do so in the future.`
    },
    {
      id: 'fair-info-practices',
      title: 'Fair Information Practices',
      level: 2,
      content: `The Fair Information Practices Principles form the backbone of privacy law in the United States and the concepts they include have played a significant role in the development of data protection laws around the globe. Understanding the Fair Information Practice Principles and how they should be implemented is critical to comply with the various privacy laws that protect personal information.\n\nIn order to be in line with Fair Information Practices we will take the following responsive action, should a data breach occur:\n• We will notify you via email within 7 business days.\n• We will notify the users via in-site notification within 7 business days.\n\nWe also agree to the Individual Redress Principle which requires that individuals have the right to legally pursue enforceable rights against data collectors and processors who fail to adhere to the law.`
    },
    {
      id: 'coppa',
      title: 'COPPA (Children Online Privacy Protection Act)',
      level: 2,
      content: `When it comes to the collection of personal information from children under the age of 13 years old, the Children's Online Privacy Protection Act (COPPA) puts parents in control. The Federal Trade Commission, United States' consumer protection agency, enforces the COPPA Rule, which spells out what operators of websites and online services must do to protect children's privacy and safety online.\n\nWe do not specifically market to children under the age of 13 years old.`
    },
    {
      id: 'caloppa',
      title: 'CalOPPA (California Online Privacy Protection Act)',
      level: 2,
      content: `CalOPPA is the first state law in the nation to require commercial websites and online services to post a privacy policy. The law's reach stretches well beyond California to require any person or company in the United States (and conceivably the world) that operates websites collecting Personally Identifiable Information from California consumers to post a conspicuous privacy policy on its website stating exactly the information being collected and those individuals or companies with whom it is being shared.\n\nAccording to CalOPPA, we agree to the following:\n• Users can visit our site anonymously.\n• Once this privacy policy is created, we will add a link to it on our home page or as a minimum, on the first significant page after entering our website.\n• Our Privacy Policy link includes the word 'Privacy' and can easily be found on the page specified above.`
    },
    {
      id: 'contact-info',
      title: 'Our Contact Information',
      level: 2,
      content: `If there are any questions regarding this privacy policy, you may contact us using the information below:\n\nEmail: privacy@gpsnav.com\nPhone: +1 (555) 123-4567\nAddress: 123 Security Lane, Privacy City, PC 12345\n\nLast Updated: December 18, 2024`
    }
  ]

  const quickNavItems = [
    { id: 'introduction', title: 'Introduction', icon: '📄' },
    { id: 'info-collection', title: 'Information Collection', icon: '📊' },
    { id: 'info-usage', title: 'Information Usage', icon: '🔄' },
    { id: 'info-protection', title: 'Information Protection', icon: '🔒' },
    { id: 'cookie-usage', title: 'Cookie Usage', icon: '🍪' },
    { id: 'third-party-disclosure', title: '3rd Party Disclosure', icon: '👥' },
    { id: 'third-party-links', title: '3rd Party Links', icon: '🔗' },
    { id: 'google-adsense', title: 'Google AdSense', icon: '📢' },
    { id: 'fair-info-practices', title: 'Fair Information Practices', icon: '⚖️' },
    { id: 'coppa', title: 'COPPA', icon: '👶' },
    { id: 'caloppa', title: 'CalOPPA', icon: '🏛️' },
    { id: 'contact-info', title: 'Contact Information', icon: '📞' },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900/20 to-indigo-900/20 rounded-2xl p-8 border border-blue-800/30">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center mb-3">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-xl mr-4">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white">Privacy Policy</h1>
                <p className="text-gray-400 mt-1">Last Updated: December 18, 2024 • Version 3.2</p>
              </div>
            </div>
            <p className="text-gray-300 max-w-3xl">
              We are committed to protecting your privacy and ensuring the security of your personal information. 
              This policy outlines how we collect, use, and protect your data.
            </p>
          </div>
          <div className="hidden lg:flex flex-col items-center">
            <div className="text-5xl mb-2">🔐</div>
            <div className="text-sm text-gray-400">GDPR Compliant</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left Sidebar - Quick Navigation */}
        <div className="lg:col-span-1">
          <div className="bg-gray-900/50 rounded-2xl p-5 border border-gray-800 sticky top-6">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center">
              <span className="mr-2">📑</span> Quick Navigation
            </h3>
            <div className="space-y-2">
              {quickNavItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="flex items-center p-3 rounded-xl hover:bg-gray-800/50 transition text-gray-300 hover:text-white group"
                >
                  <span className="text-xl mr-3">{item.icon}</span>
                  <span className="font-medium text-sm">{item.title}</span>
                  <span className="ml-auto text-gray-500 group-hover:text-gray-300">→</span>
                </a>
              ))}
            </div>

            {/* Download Button */}
            <div className="mt-6 pt-5 border-t border-gray-800">
              <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition duration-300 font-medium flex items-center justify-center">
                <FileText className="w-4 h-4 mr-2" />
                Download PDF Version
              </button>
            </div>

            {/* Policy Stats */}
            <div className="mt-6 p-4 bg-gray-800/30 rounded-xl">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">3,248</div>
                <div className="text-sm text-gray-400">Words in Policy</div>
              </div>
              <div className="h-2 w-full bg-gray-700 rounded-full mt-3 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-500" style={{ width: '100%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          <div className="space-y-6">
            {/* Introduction Card */}
            <div 
              id="introduction"
              className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-white flex items-center">
                  <span className="mr-3">📄</span>
                  Introduction
                </h2>
                <span className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-sm font-medium">
                  Updated
                </span>
              </div>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>
                  This privacy policy has been compiled to better serve those who are concerned with how their 
                  'Personally Identifiable Information' (PII) is being used online. PII, as described in US privacy 
                  law and information security, is information that can be used on its own or with other information 
                  to identify, contact, or locate a single person, or to identify an individual in context.
                </p>
                <p>
                  Please read our privacy policy carefully to get a clear understanding of how we collect, use, 
                  protect or otherwise handle your Personally Identifiable Information in accordance with our website.
                </p>
              </div>
            </div>

            {/* Collapsible Sections */}
            {privacyPolicySections.slice(1).map((section) => (
              <div 
                key={section.id}
                id={section.id}
                className="bg-gray-900/50 rounded-2xl border border-gray-800 overflow-hidden"
              >
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-800/30 transition"
                >
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-900/30 to-indigo-900/30 flex items-center justify-center mr-4">
                      {section.id === 'info-collection' && <span className="text-xl">📊</span>}
                      {section.id === 'info-usage' && <span className="text-xl">🔄</span>}
                      {section.id === 'info-protection' && <span className="text-xl">🔒</span>}
                      {section.id === 'cookie-usage' && <span className="text-xl">🍪</span>}
                      {section.id === 'third-party-disclosure' && <span className="text-xl">👥</span>}
                      {section.id === 'third-party-links' && <span className="text-xl">🔗</span>}
                      {section.id === 'google-adsense' && <span className="text-xl">📢</span>}
                      {section.id === 'fair-info-practices' && <span className="text-xl">⚖️</span>}
                      {section.id === 'coppa' && <span className="text-xl">👶</span>}
                      {section.id === 'caloppa' && <span className="text-xl">🏛️</span>}
                      {section.id === 'contact-info' && <span className="text-xl">📞</span>}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{section.title}</h3>
                      <p className="text-sm text-gray-400 mt-1">
                        {section.id === 'contact-info' ? 'Get in touch with us' : 'Click to expand details'}
                      </p>
                    </div>
                  </div>
                  <div className="text-gray-400">
                    {expandedSections.includes(section.id) ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </div>
                </button>
                
                {expandedSections.includes(section.id) && (
                  <div className="px-6 pb-6 pt-2 border-t border-gray-800">
                    <div className="text-gray-300 leading-relaxed whitespace-pre-line space-y-4">
                      {section.content.split('\n').map((paragraph, index) => (
                        paragraph.startsWith('**') && paragraph.endsWith('**') ? (
                          <p key={index} className="font-bold text-white">
                            {paragraph.slice(2, -2)}
                          </p>
                        ) : paragraph.startsWith('•') ? (
                          <div key={index} className="flex items-start ml-4">
                            <span className="text-blue-400 mr-2">•</span>
                            <span>{paragraph.slice(1)}</span>
                          </div>
                        ) : (
                          <p key={index}>{paragraph}</p>
                        )
                      ))}
                    </div>
                    
                    {/* Special formatting for contact info */}
                    {section.id === 'contact-info' && (
                      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-gray-800/30 p-4 rounded-xl">
                          <div className="flex items-center mb-2">
                            <span className="text-xl mr-3">📧</span>
                            <span className="font-bold text-white">Email</span>
                          </div>
                          <a href="mailto:privacy@gpsnav.com" className="text-blue-400 hover:text-blue-300 transition">
                            privacy@gpsnav.com
                          </a>
                        </div>
                        <div className="bg-gray-800/30 p-4 rounded-xl">
                          <div className="flex items-center mb-2">
                            <span className="text-xl mr-3">📱</span>
                            <span className="font-bold text-white">Phone</span>
                          </div>
                          <a href="tel:+15551234567" className="text-blue-400 hover:text-blue-300 transition">
                            +1 (555) 123-4567
                          </a>
                        </div>
                        <div className="bg-gray-800/30 p-4 rounded-xl">
                          <div className="flex items-center mb-2">
                            <span className="text-xl mr-3">📍</span>
                            <span className="font-bold text-white">Address</span>
                          </div>
                          <p className="text-gray-300">
                            123 Security Lane, Privacy City, PC 12345
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}

            {/* Policy Updates */}
            <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-2xl p-6 border border-green-800/30">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center mr-4">
                  <span className="text-2xl">🔄</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Recent Policy Updates</h3>
                  <p className="text-gray-300">We continuously improve our privacy practices</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center p-3 bg-green-900/20 rounded-xl">
                  <span className="text-green-400 mr-3">✓</span>
                  <span className="text-white">Added GDPR compliance measures (Dec 2024)</span>
                </div>
                <div className="flex items-center p-3 bg-green-900/20 rounded-xl">
                  <span className="text-green-400 mr-3">✓</span>
                  <span className="text-white">Enhanced data encryption protocols (Nov 2024)</span>
                </div>
                <div className="flex items-center p-3 bg-green-900/20 rounded-xl">
                  <span className="text-green-400 mr-3">✓</span>
                  <span className="text-white">Updated cookie consent mechanism (Oct 2024)</span>
                </div>
              </div>
            </div>

            {/* Acceptance Section */}
            <div className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-4">Your Acceptance</h3>
              <div className="text-gray-300 space-y-4">
                <p>
                  By using this site, you signify your acceptance of this policy. If you do not agree to this policy, 
                  please do not use our site. Your continued use of the site following the posting of changes to this 
                  policy will be deemed your acceptance of those changes.
                </p>
                <div className="flex items-center p-4 bg-gray-800/30 rounded-xl">
                  <input type="checkbox" id="policy-accept" className="w-5 h-5 rounded border-gray-600 text-blue-600" />
                  <label htmlFor="policy-accept" className="ml-3 text-white font-medium">
                    I have read and agree to the Privacy Policy
                  </label>
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
            Document ID: <span className="text-white font-mono">PP-2024-12-18-001</span> • 
            <span className="ml-2">Effective Date: December 18, 2024</span>
          </div>
          <div className="flex space-x-4">
            <button className="text-sm text-blue-400 hover:text-blue-300 transition">
              Print Policy
            </button>
            <button className="text-sm text-green-400 hover:text-green-300 transition">
              Save for Later
            </button>
            <button className="text-sm text-purple-400 hover:text-purple-300 transition">
              Share Policy
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}