"use client";

import { motion } from "framer-motion";

export default function TermsContent() {
  const sections = [
    {
      title: "General Work Terms and Client Responsibilities & Liabilities",
      content: `The client shall be solely responsible for providing all site content, including text and multimedia, to Zenpay before work begins. By engaging with Zenpay, the user confirms that they have read, understood, and accepted the Privacy Policy of Zenpay. The user also agrees to receive SMS and email notifications on their registered mobile number. Additionally, the client is responsible for creating proper backups of all website content before allowing Zenpay to proceed with the agreed tasks. The company will not be held liable for any loss or damage to existing data under any circumstances.

The contract does not hold Zenpay responsible for tasks related to data entry, web hosting, or custom artwork/graphics unless explicitly specified, agreed upon, and paid by both parties. Any artwork, images, or text provided or created by Zenpay for the client will remain the property of the company and/or its suppliers unless otherwise agreed upon in writing.

Zenpay strives to meet all delivery timelines; however, there may be instances where extensions or adjustments are necessary due to unforeseen and unavoidable circumstances. These may include deployment challenges, dependencies, third-party support delays, development bottlenecks, resource unavailability due to emergencies, communication delays, or similar issues. The company will make every effort to address these challenges promptly and minimize any impact on delivery schedules.

Zenpay will provide the Client with an opportunity to review the website's design and content during the development process and after completion. The company will wait a period of 7 days to receive feedback on the shared work or outputs. If the Client does not respond within this timeframe, the material will be considered automatically accepted and approved. The Client retains copyright ownership of any data, files, or graphic logos provided and grants Zenpay the rights to publish and use such materials.

It is the Client's responsibility to obtain the necessary permissions and rights for any third-party copyrighted information or files used in the project. Additionally, the Client agrees to provide Zenpay with the rights to use such materials and indemnify the company against any claims arising from the Client's failure to secure proper copyright permissions.

Evidence of permissions and authorizations may be requested. Zenpay will not be held responsible for any changes made to the Client's pages or website by the Client or any third party after deployment. These changes may include additions, modifications, or deletions. The company may charge a one-time Web Development fee to address and resolve any issues arising from such alterations.`
    },

    {
      title: "Payments",
      content: `Zenpay accepts payments via cheque, cash, or bank transfers, though the company reserves the right to refuse any payment method without prior notice. Additionally, Zenpay retains the right to withdraw accepted payment methods or adjust pricing at any time without notice.

If the Customer cancels the service before its completion, a cancellation fee may apply, equivalent to the value of the work completed up to the cancellation point. Failure to pay the cancellation fee or settle overdue amounts may result in legal action if necessary.`
    },

    {
      title: "Support and Third Party",
      content: `Upon site launch, we provide free support for the first month. After this period, support services are charged based on various pricing packages tailored to the client's needs, with attractive discounts for higher-tier packages.

Support includes bug fixes and email support but excludes issues related to architecture changes, rule changes, and add-ons. Third-party integrations, licenses, payments, or compliance are the responsibility of the client.

The company does not guarantee the accuracy or performance of third-party products or services. Any upgrades or modifications to third-party systems may require feasibility reviews and may impact pricing and timelines.`
    },

    {
      title: "Re-work, Enhancements/Add-ons and Billing",
      content: `Any additional features beyond scope will follow a Change Management process and be billed separately. Scope changes after wireframe approval will also incur charges and timeline adjustments.

Minor tweaks may be included, but excessive or repeated rework requests may be billed at $15–$20 per hour. Enhancements or add-ons will be billed separately after informing the client.

Any rework, changes, or tweaks requested after approval will be treated as additional work and billed accordingly. The client agrees to pay all fees in full without deductions or offsets.`
    },

    {
      title: "Approvals and Delivery",
      content: `Project stages will begin only after approval and necessary payments for previous stages. Upon completion, the website will be uploaded to Zenpay's server for review.

Final upload to the client's server will occur only after full payment is received. Final code and materials will be transferred to the client upon completion and approval.

Zenpay may showcase the completed work as a portfolio reference unless the client requests otherwise in advance.`
    },

    {
      title: "Limitations of Liability",
      content: `Zenpay will use reasonable skill and care but provides no guarantees regarding availability, accuracy, or performance of services.

The company is not responsible for loss or damage to artwork, photos, data, or content supplied by the client.

Except in cases of death or personal injury due to negligence, the company is not liable for direct, indirect, or consequential damages, including loss of profit or third-party claims.

Zenpay is not liable for failures related to third-party services.`
    },

    {
      title: "Timescale",
      content: `The company will endeavor to complete all services within the agreed timeline. Work begins after receiving the deposit (30%–50%) and all content.

Timelines may be extended due to circumstances beyond the company's control.`
    },

    {
      title: "Jurisdiction",
      content: `These terms shall be governed by applicable laws, and disputes shall be subject to the exclusive jurisdiction of the relevant authorities. Placing an order confirms acceptance of these terms.`
    },

    {
      title: "Severability",
      content: `If any provision is found invalid or unenforceable, the remaining provisions remain unaffected. The invalid clause will be replaced with a valid one reflecting the original intent.`
    }
  ];

  return (
    <>
      <section className="relative overflow-hidden -mt-32 bg-cover bg-center bg-no-repeat py-24 px-6 md:px-16"
      style={{ backgroundImage: "url('about/banner-bg.jpg')" }}>
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="absolute top-10 left-10 w-32 h-32 bg-[#ffdfb2] rounded-full opacity-30 blur-2xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#ffe1c2] rounded-full opacity-30 blur-3xl animate-ping"></div>

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl md:mt-30 font-bold text-gray-200 leading-tight">
            Terms of<span className="text-[#fa9404]"> Use</span>
          </h2>

          <motion.div
            className="mt-8 flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
          >

          </motion.div>
        </motion.div>

      </div>
    </section>
    <section className="px-6 md:px-20 py-16 bg-white text-gray-800 leading-relaxed">
      <h1 className="text-3xl font-bold mb-2">Terms & Conditions</h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: 1st Dec 2025</p>

      {sections.map((sec, i) => (
        <div key={i} className="mb-10">
          <h2 className="text-xl font-semibold mb-3">{i + 1}. {sec.title}</h2>
          <p className="whitespace-pre-line text-gray-700">{sec.content}</p>
        </div>
      ))}
    </section>
    </>
  );
}
