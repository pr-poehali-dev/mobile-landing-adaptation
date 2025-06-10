import Icon from "@/components/ui/icon";

const Services = () => {
  const services = [
    {
      icon: "Code",
      title: "Разработка",
      description:
        "Создаем современные веб-приложения и мобильные решения с использованием передовых технологий",
    },
    {
      icon: "Palette",
      title: "Дизайн",
      description:
        "Разрабатываем уникальные дизайн-решения, которые отражают индивидуальность вашего бренда",
    },
    {
      icon: "TrendingUp",
      title: "Консалтинг",
      description:
        "Помогаем оптимизировать бизнес-процессы и найти новые возможности для роста",
    },
    {
      icon: "Shield",
      title: "Безопасность",
      description:
        "Обеспечиваем надежную защиту ваших данных и соответствие стандартам безопасности",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Наши услуги
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Полный спектр digital-решений для вашего успеха
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-orange-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon name={service.icon} size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
