import React from "react";

const PricingPlans = () => {
  return (
    <section className="w-full bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-semibold mb-3">
            Choose the perfect
            <br />
            Plan for your Business
          </h2>
          <p className="text-gray-600 text-sm">
            Whether you're just starting or scaling up, Just Start
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <p className="text-sm mb-2">Pro</p>
            <h3 className="text-3xl font-bold mb-1">$0</h3>
            <p className="text-xs text-gray-500 mb-4">Per month</p>
            <p className="text-sm text-gray-600 mb-6">
              Advanced tools for growing teams.
            </p>

            <button className="w-full bg-orange-500 text-white py-3 rounded-md mb-4">
              Start Free Trial
            </button>

            <p className="text-xs text-center text-gray-500 mb-6">
              Refilled Monthly
            </p>

            <hr className="mb-6" />
            <h4 className="mb-4 font-semibold">
              All Pro plan features include,Plus
            </h4>
            <ul className="space-y-3 text-sm text-black">
              <li>✓ Unlimited projects & storage</li>
              <li>✓ Priority customer support</li>
              <li>✓ Custom branding & watermark removal</li>
              <li>✓ Export in multiple formats</li>
              <li>✓ Advanced integrations (e.g., Slack, Zapier, Figma)</li>
            </ul>
          </div>

          <div className="rounded-2xl p-8 shadow-md bg-linear-to-b from-orange-50 to-white relative">
            <span className="absolute top-4 right-6 text-xs text-orange-500 font-medium">
              Recommended
            </span>

            <p className="text-sm mb-2">Pro</p>
            <h3 className="text-3xl font-bold mb-1">$19</h3>
            <p className="text-xs text-gray-500 mb-4">Per month</p>
            <p className="text-sm text-gray-600 mb-6">
              Advanced tools for growing teams.
            </p>

            <button className="w-full bg-orange-500 text-white py-3 rounded-md mb-4">
              Start Free Trial
            </button>

            <p className="text-xs text-center text-gray-500 mb-6">
              Refilled Monthly
            </p>

            <hr className="mb-6" />
            <h4 className="mb-4 font-semibold">
              All Pro plan features include,Plus
            </h4>

            <ul className="space-y-3 text-sm text-black">
              <li>✓ Unlimited projects & storage</li>
              <li>✓ Priority customer support</li>
              <li>✓ Custom branding & watermark removal</li>
              <li>✓ Export in multiple formats</li>
              <li>✓ Advanced integrations (e.g., Slack, Zapier, Figma)</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-8">
            <p className="text-sm mb-2">Pro</p>
            <h3 className="text-3xl font-bold mb-1">$59</h3>
            <p className="text-xs text-gray-500 mb-4">Per month</p>
            <p className="text-sm text-gray-600 mb-6">
              Advanced tools for growing teams.
            </p>

            <button className="w-full bg-orange-500 text-white py-3 rounded-md mb-4">
              Start Free Trial
            </button>

            <p className="text-xs text-center text-gray-500 mb-6">
              Refilled Monthly
            </p>

            <hr className="mb-6" />
            <h4 className="mb-4 font-semibold">
              All Pro plan features include,Plus
            </h4>

            <ul className="space-y-3 text-sm text-black">
              <li>✓ Unlimited projects & storage</li>
              <li>✓ Priority customer support</li>
              <li>✓ Custom branding & watermark removal</li>
              <li>✓ Export in multiple formats</li>
              <li>✓ Advanced integrations (e.g., Slack, Zapier, Figma)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
