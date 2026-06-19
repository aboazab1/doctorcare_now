import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../../components/SEO';

const PrivacyPolicy = () => {
  return (
    <>
      <SEO 
        title="Privacy Policy | Doctor Care"
        description="Learn about Doctor Care's privacy policy for home medical care services in Riyadh. We protect your privacy and personal data with the highest security standards."
        keywords="privacy policy, doctor care, home medical care, Riyadh, data protection, privacy"
      />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary/10 via-white to-secondary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We are committed to protecting your privacy and personal data with the highest security and confidentiality standards
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Last updated: January 2024
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="prose prose-lg max-w-none"
            >
              {/* Introduction */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  At "Doctor Care", we understand the importance of your privacy and trust in our services. This policy explains how we collect, use, and protect your personal information when using our home medical care services in Riyadh.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  We are committed to protecting your privacy and ensuring the security of your personal data according to the highest medical and ethical standards.
                </p>
              </div>

              {/* Information Collection */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Collection</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  We collect the following information to provide the best home medical care services:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li><strong>Personal Data:</strong> Full name, phone number, email address, address, age, gender</li>
                  <li><strong>Medical Data:</strong> Medical history, current medications, allergies, current health status</li>
                  <li><strong>Emergency Data:</strong> Emergency contact information</li>
                  <li><strong>Location Data:</strong> Home address for service delivery</li>
                  <li><strong>Payment Data:</strong> Billing and payment information (securely stored)</li>
                </ul>
              </div>

              {/* How We Use Information */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Information</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  We use your personal information for the following purposes:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li>Providing requested home medical care services</li>
                  <li>Scheduling medical appointments and visits</li>
                  <li>Communicating with you about your health and appointments</li>
                  <li>Providing medical support in emergency situations</li>
                  <li>Improving and developing our service quality</li>
                  <li>Complying with legal and regulatory requirements</li>
                </ul>
              </div>

              {/* Data Protection */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Protection</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  We apply the highest security standards to protect your information:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li><strong>Encryption:</strong> All data is protected with advanced encryption</li>
                  <li><strong>Limited Access:</strong> Only authorized medical staff can access your data</li>
                  <li><strong>Secure Backups:</strong> Secure and encrypted backup copies</li>
                  <li><strong>Continuous Training:</strong> Our team is trained on privacy protection</li>
                  <li><strong>Regular Audits:</strong> Regular security system reviews</li>
                </ul>
              </div>

              {/* Data Sharing */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Sharing</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  We do not sell or rent your personal information to any third party. We may share your information only in the following cases:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li>When medically necessary to save lives</li>
                  <li>With your explicit consent</li>
                  <li>When required by law</li>
                  <li>With authorized medical service providers (with confidentiality guarantees)</li>
                </ul>
              </div>

              {/* Cookies */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  We use cookies to improve your experience on our website:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li>Remember your language preferences</li>
                  <li>Improve website performance</li>
                  <li>Analyze website usage (anonymously)</li>
                  <li>Provide better user experience</li>
                </ul>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  You can manage cookies through your browser settings.
                </p>
              </div>

              {/* User Rights */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  You have the following rights regarding your personal information:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li><strong>Access:</strong> Request a copy of your personal data</li>
                  <li><strong>Correction:</strong> Correct any inaccurate information</li>
                  <li><strong>Deletion:</strong> Request deletion of your data (considering legal requirements)</li>
                  <li><strong>Restriction:</strong> Request restriction of data processing</li>
                  <li><strong>Objection:</strong> Object to data processing</li>
                  <li><strong>Portability:</strong> Transfer your data to another service</li>
                </ul>
              </div>

              {/* Contact Information */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  If you have any questions about our privacy policy or want to exercise any of your rights, please contact us:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Doctor Care</h3>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Phone:</strong> Call Us</p>
                    <p><strong>Email:</strong> privacy@doctorcare.sa</p>
                    <p><strong>Address:</strong> Riyadh, Saudi Arabia</p>
                    <p><strong>Working Hours:</strong> 24/7 for emergencies</p>
                  </div>
                </div>
              </div>

              {/* Updates */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Policy Updates</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  We may update this policy from time to time. We will notify you of any significant changes through:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li>Notification on our website</li>
                  <li>Text message or email</li>
                  <li>Phone call for emergencies</li>
                </ul>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  We recommend reviewing this policy regularly to stay informed of any updates.
                </p>
              </div>

              {/* Conclusion */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Conclusion</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  At "Doctor Care", we believe that your privacy is a fundamental right. We are committed to protecting your personal information and providing safe and reliable home medical care services in Riyadh.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Thank you for trusting our services. We are here to serve and care for you.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
