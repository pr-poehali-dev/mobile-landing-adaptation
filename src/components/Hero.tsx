import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen bg-white flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:60px_60px]"></div>

        {/* Decorative circles */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-100 rounded-full opacity-50"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-green-100 rounded-full opacity-40"></div>
        <div className="absolute bottom-32 left-32 w-20 h-20 bg-yellow-100 rounded-full opacity-30"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-red-100 rounded-full opacity-35"></div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-gray-900">
          Создаем будущее
          <br />
          <span className="text-blue-600">вместе с вами</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-600 max-w-3xl mx-auto">
          Инновационные решения для вашего бизнеса. Разработка, дизайн и
          консалтинг на высочайшем уровне.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
          >
            Начать проект
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
          >
            Узнать больше
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
