const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        {/* Project Management Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Project Management
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Images, videos, PDFs and audio files are supported. Create math
              expressions and diagrams directly from the app. Take photos with
              the mobile app and save them to a note.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium">
              Get Started →
            </button>
          </div>
          <div className="bg-blue-100 rounded-lg aspect-[4/3] flex items-center justify-center">
            <div className="text-blue-400 text-center">
              <div className="w-24 h-24 mx-auto mb-4 bg-blue-200 rounded-lg flex items-center justify-center">
                📋
              </div>
            </div>
          </div>
        </div>

        {/* Work Together Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
          <div className="bg-yellow-100 rounded-lg aspect-[4/3] flex items-center justify-center order-2 lg:order-1">
            <div className="text-yellow-600 text-center">
              <div className="w-24 h-24 mx-auto mb-4 bg-yellow-200 rounded-lg flex items-center justify-center">
                👥
              </div>
            </div>
          </div>
          <div className="space-y-6 order-1 lg:order-2">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Work together
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              With whitepace, share your notes with your colleagues and
              collaborate on them. You can also publish a note to the internet
              and share the URL with others.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium">
              Try it now →
            </button>
          </div>
        </div>

        {/* Use as Extension Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Use as Extension
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Use the web clipper extension, available on Chrome and Firefox, to
              save web pages or take screenshots as notes.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium">
              Let's Go →
            </button>
          </div>
          <div className="bg-blue-100 rounded-lg aspect-[4/3] flex items-center justify-center">
            <div className="text-blue-400 text-center">
              <div className="w-24 h-24 mx-auto mb-4 bg-blue-200 rounded-lg flex items-center justify-center">
                🔗
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
