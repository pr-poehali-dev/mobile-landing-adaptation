import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen bg-white flex flex-col">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-8 py-6">
        <div className="text-xl font-semibold">Whitepace</div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Products
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Solutions
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Resources
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Pricing
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            className="text-yellow-500 bg-yellow-50 hover:bg-yellow-100"
          >
            Login
          </Button>
          <Button className="bg-blue-500 hover:bg-blue-600 text-white">
            Try Whitepace free →
          </Button>
        </div>
      </nav>

      {/* Main Hero Content */}
      <div className="flex-1 flex items-center px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Get More Done with whitepace
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Project management software that enables your teams to
              collaborate, plan, analyze and manage everyday tasks
            </p>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 text-lg">
              Try Whitepace free →
            </Button>
          </div>

          {/* Right Content - Image placeholder */}
          <div className="bg-blue-100 rounded-lg aspect-[4/3] flex items-center justify-center">
            <div className="text-blue-400 text-center">
              <div className="w-24 h-24 mx-auto mb-4 bg-blue-200 rounded-lg flex items-center justify-center">
                📊
              </div>
              <p className="text-sm">Project Management Interface</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
