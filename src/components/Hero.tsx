import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 flex items-center justify-center px-4">
      <div className="max-w-6xl mx-auto text-center text-white">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Создаем будущее
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-400">
            вместе с вами
          </span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-purple-100 max-w-3xl mx-auto">
          Инновационные решения для вашего бизнеса. Разработка, дизайн и
          консалтинг на высочайшем уровне.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Начать проект
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-white text-white hover:bg-white hover:text-purple-800 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300"
          >
            Узнать больше
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
