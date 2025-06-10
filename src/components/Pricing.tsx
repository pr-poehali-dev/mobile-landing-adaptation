const Pricing = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Choose Your Plan
        </h2>
        <p className="text-lg text-gray-600 mb-16 max-w-2xl mx-auto">
          Whether you want to get organized, keep your personal life on track,
          or boost workplace productivity, Evernote has the right plan for you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Free Plan */}
          <div className="border border-yellow-200 rounded-lg p-8 bg-white">
            <h3 className="text-2xl font-semibold mb-4">Free</h3>
            <div className="text-4xl font-bold mb-6">$0</div>
            <p className="text-gray-600 mb-8">
              Capture ideas and find them quickly
            </p>
            <ul className="space-y-3 mb-8 text-left">
              <li className="flex items-center">
                <span className="text-yellow-500 mr-3">✓</span>
                Sync unlimited devices
              </li>
              <li className="flex items-center">
                <span className="text-yellow-500 mr-3">✓</span>
                10 GB monthly uploads
              </li>
              <li className="flex items-center">
                <span className="text-yellow-500 mr-3">✓</span>
                200 MB max. note size
              </li>
              <li className="flex items-center">
                <span className="text-yellow-500 mr-3">✓</span>
                Customize Home dashboard and access extra widgets
              </li>
              <li className="flex items-center">
                <span className="text-yellow-500 mr-3">✓</span>
                Connect primary Google Calendar account
              </li>
              <li className="flex items-center">
                <span className="text-yellow-500 mr-3">✓</span>
                Add due dates, reminders, and notifications to your tasks
              </li>
            </ul>
            <button className="w-full bg-white border border-yellow-400 text-gray-900 py-3 rounded-lg hover:bg-yellow-50">
              Get Started
            </button>
          </div>

          {/* Personal Plan */}
          <div className="border-2 border-yellow-400 rounded-lg p-8 bg-yellow-50 relative">
            <h3 className="text-2xl font-semibold mb-4">Personal</h3>
            <div className="text-4xl font-bold mb-6 text-yellow-600">
              $11.99
            </div>
            <p className="text-gray-600 mb-8">Keep home and family on track</p>
            <ul className="space-y-3 mb-8 text-left">
              <li className="flex items-center">
                <span className="text-yellow-500 mr-3">✓</span>
                Sync unlimited devices
              </li>
              <li className="flex items-center">
                <span className="text-yellow-500 mr-3">✓</span>
                10 GB monthly uploads
              </li>
              <li className="flex items-center">
                <span className="text-yellow-500 mr-3">✓</span>
                200 MB max. note size
              </li>
              <li className="flex items-center">
                <span className="text-yellow-500 mr-3">✓</span>
                Customize Home dashboard and access extra widgets
              </li>
              <li className="flex items-center">
                <span className="text-yellow-500 mr-3">✓</span>
                Connect primary Google Calendar account
              </li>
              <li className="flex items-center">
                <span className="text-yellow-500 mr-3">✓</span>
                Add due dates, reminders, and notifications to your tasks
              </li>
            </ul>
            <button className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600">
              Get Started
            </button>
          </div>

          {/* Organization Plan */}
          <div className="border border-yellow-200 rounded-lg p-8 bg-white">
            <h3 className="text-2xl font-semibold mb-4">Organization</h3>
            <div className="text-4xl font-bold mb-6">$49.99</div>
            <p className="text-gray-600 mb-8">
              Capture ideas and find them quickly
            </p>
            <ul className="space-y-3 mb-8 text-left">
              <li className="flex items-center">
                <span className="text-yellow-500 mr-3">✓</span>
                Sync unlimited devices
              </li>
              <li className="flex items-center">
                <span className="text-yellow-500 mr-3">✓</span>
                10 GB monthly uploads
              </li>
              <li className="flex items-center">
                <span className="text-yellow-500 mr-3">✓</span>
                200 MB max. note size
              </li>
              <li className="flex items-center">
                <span className="text-yellow-500 mr-3">✓</span>
                Customize Home dashboard and access extra widgets
              </li>
              <li className="flex items-center">
                <span className="text-yellow-500 mr-3">✓</span>
                Connect primary Google Calendar account
              </li>
              <li className="flex items-center">
                <span className="text-yellow-500 mr-3">✓</span>
                Add due dates, reminders, and notifications to your tasks
              </li>
            </ul>
            <button className="w-full bg-white border border-yellow-400 text-gray-900 py-3 rounded-lg hover:bg-yellow-50">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
