import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion.jsx";

const FAQSection = () => {
  return (
    <section id="faq" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12">
          Find quick answers to your most pressing questions about our EMR
          system.
        </p>

        <div className="space-y-6 max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                What exactly is an EMR (Electronic Medical Record) system?
              </AccordionTrigger>
              <AccordionContent>
                An EMR system is a digital version of a patient's chart,
                collecting and displaying medical and treatment histories from a
                single practice. It streamlines clinical workflows, improves
                data accuracy, and enhances overall patient care by making
                critical information readily accessible to healthcare providers.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>
                How do you ensure the security and compliance of patient data
                with regulations like HIPAA and GDPR?
              </AccordionTrigger>
              <AccordionContent>
                Data security and patient privacy are our top priorities. Our
                EMR system is built with robust encryption, strict access
                controls, and regular security audits. We are fully compliant
                with HIPAA (Health Insurance Portability and Accountability Act)
                and GDPR (General Data Protection Regulation) requirements,
                ensuring all sensitive patient information is protected with the
                highest industry standards.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>
                Can I access the EMR system on my mobile devices?
              </AccordionTrigger>
              <AccordionContent>
                Yes, our EMR system is designed with full mobile compatibility.
                You can securely access patient records, schedule appointments,
                and manage tasks from your smartphone or tablet, ensuring you
                have critical information at your fingertips, whether you're in
                the office or on the go.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>
                What is the onboarding process like for new clinics or
                practices?
              </AccordionTrigger>
              <AccordionContent>
                Our onboarding process is designed to be smooth and efficient.
                It includes comprehensive training sessions for your staff, data
                migration assistance from your existing systems, and dedicated
                support to ensure a seamless transition. We aim to get your
                practice up and running quickly and effectively.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>
                What integrations are available with other healthcare tools and
                systems?
              </AccordionTrigger>
              <AccordionContent>
                Our EMR system offers extensive integration capabilities with a
                wide range of popular healthcare tools, including lab systems,
                pharmacies, billing software, and practice management solutions.
                This ensures a connected workflow and reduces manual data entry,
                enhancing efficiency across your operations.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>
                Do you offer a free trial or demo so I can experience the system
                firsthand?
              </AccordionTrigger>
              <AccordionContent>
                Absolutely! We offer a free, no-obligation demo tailored to your
                practice's specific needs. This allows you to explore our EMR
                system's features and see how it can benefit your workflow
                before making any commitment. Please contact us to schedule your
                personalized demo.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger>
                Is the EMR system customizable to fit my practice's unique
                needs?
              </AccordionTrigger>
              <AccordionContent>
                Yes, our EMR system is highly customizable. We understand that
                every practice is unique, and our platform allows for flexible
                configuration of templates, workflows, and user permissions to
                align perfectly with your specific operational requirements and
                preferences.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger>
                What kind of technical support is available once I've adopted
                the system?
              </AccordionTrigger>
              <AccordionContent>
                We provide comprehensive technical support to ensure your
                practice runs smoothly. Our dedicated support team is available
                via phone, email, and live chat to assist with any questions or
                issues, ensuring you receive timely and effective help whenever
                you need it.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
