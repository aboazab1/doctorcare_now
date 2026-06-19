import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../../components/SEO';

const TermsOfService = () => {
  return (
    <>
      <SEO 
        title="Terms of Service | Doctor Care"
        description="Learn about Doctor Care's terms of service for home medical care services in Riyadh. Clear and understandable terms to ensure the best service experience."
        keywords="terms of service, doctor care, home medical care, Riyadh, terms of use, service policy"
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
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Clear and understandable terms to ensure the best home medical care service experience
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
                  Welcome to "Doctor Care". These terms govern your use of our home medical care services in Riyadh. By using our services, you agree to be bound by these terms.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  We recommend reading these terms carefully before using our services.
                </p>
              </div>

              {/* Service Definition */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Definition</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  "Doctor Care" provides the following home medical care services in Riyadh only:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li>Sending specialized nurses for home care</li>
                  <li>Providing basic medical services at home</li>
                  <li>Monitoring patients' health conditions</li>
                  <li>Providing medical advice and guidance</li>
                  <li>Responding to home medical emergencies</li>
                  <li>Coordinating with hospitals when needed</li>
                </ul>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  <strong>Important Note:</strong> Our services are available only within Riyadh, Saudi Arabia.
                </p>
              </div>

              {/* Liability Limits */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Liability Limits</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  We are committed to providing the best medical services, but there are limits to our liability:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li>We are not responsible for incorrect use of our medical recommendations after the visit ends</li>
                  <li>We are not responsible for medical conditions requiring immediate surgical intervention</li>
                  <li>We are not responsible for patients not following provided medical instructions</li>
                  <li>We are not responsible for medical emergencies requiring immediate hospital transfer</li>
                  <li>We are not responsible for any damages resulting from unsafe home environment</li>
                </ul>
              </div>

              {/* Appointments and Cancellation */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Appointments and Cancellation</h2>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Booking Policies:</h3>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li>Appointments must be booked at least 24 hours in advance</li>
                  <li>For emergencies, immediate booking is available with additional fees</li>
                  <li>Appointments are confirmed via phone or text messages</li>
                  <li>Accurate health information must be provided</li>
                </ul>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Cancellation Policies:</h3>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li>Cancellation is free up to 4 hours before the appointment</li>
                  <li>Cancellation within 4 hours is subject to 50% cancellation fee</li>
                  <li>No-show without prior notice is subject to full fee</li>
                  <li>For emergencies, appointments can be cancelled at any time</li>
                </ul>
              </div>

              {/* Pricing and Payments */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Pricing and Payments</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Pricing and payment policies:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li>Prices are agreed upon with the client before service delivery</li>
                  <li>Prices include medical service and transportation within Riyadh</li>
                  <li>Additional fees for visits outside normal working hours</li>
                  <li>Additional fees for emergencies and urgent visits</li>
                  <li>Payment can be made in cash or bank transfer</li>
                  <li>Official invoices are issued for each service</li>
                </ul>
              </div>

              {/* Client Obligations */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Client Obligations</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  The client undertakes to:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li>Provide a safe and suitable environment for the medical team</li>
                  <li>Provide accurate and correct medical information</li>
                  <li>Follow provided medical instructions</li>
                  <li>Provide required medical documents</li>
                  <li>Inform us of any changes in health condition</li>
                  <li>Allow the medical team access to the patient</li>
                  <li>Provide a clean and suitable environment for care</li>
                </ul>
              </div>

              {/* Company Rights */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Company Rights</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  The company reserves the following rights:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li>Refuse service in case of health or safety risks</li>
                  <li>Terminate service immediately in case of non-compliance with terms</li>
                  <li>Request immediate hospital transfer in emergency cases</li>
                  <li>Refuse service in case of unsuitable environment</li>
                  <li>Modify service hours according to medical needs</li>
                  <li>Request additional assistance from family members when needed</li>
                </ul>
              </div>

              {/* Medical Emergency */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Medical Emergency</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  In medical emergency cases:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li>We respond immediately to emergencies</li>
                  <li>We coordinate with nearby hospitals when needed</li>
                  <li>We provide necessary first aid</li>
                  <li>We accompany the patient to the hospital if necessary</li>
                  <li>We continue follow-up with the family</li>
                </ul>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mt-4">
                  <p className="text-red-800 font-semibold">
                    <strong>Warning:</strong> In serious emergency cases, we may request immediate hospital transfer. This is a medical decision that cannot be overridden.
                  </p>
                </div>
              </div>

              {/* Confidentiality */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Confidentiality and Privacy</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  We are committed to maintaining the confidentiality and privacy of your medical information:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li>All medical information is protected with strict confidentiality</li>
                  <li>We do not share information except with medical specialists</li>
                  <li>We maintain patient health condition confidentiality</li>
                  <li>We comply with medical and ethical laws</li>
                  <li>We maintain family data confidentiality</li>
                </ul>
              </div>

              {/* Service Updates */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Updates</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  We reserve the right to:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li>Modify these terms at any time</li>
                  <li>Develop and improve our services</li>
                  <li>Add new services</li>
                  <li>Modify prices with prior notice</li>
                  <li>Update work policies</li>
                </ul>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Clients will be notified of any important changes via the website or phone.
                </p>
              </div>

              {/* Contact Information */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  For inquiries or complaints, please contact us:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Doctor Care</h3>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Phone:</strong> Call Us</p>
                    <p><strong>Email:</strong> Info@doctorcaresa.com</p>
                    <p><strong>Address:</strong> Riyadh, Saudi Arabia</p>
                    <p><strong>Working Hours:</strong> 24/7 for emergencies</p>
                    <p><strong>Emergency:</strong> Call Us</p>
                  </div>
                </div>
              </div>

              {/* Conclusion */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Conclusion</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  These terms have been established to ensure the best home medical care services in Riyadh. We are committed to providing excellent and safe service to all our clients.
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

export default TermsOfService;
