import { useState } from "react";
import Icon from "@/components/ui/icon";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Алексей Иванов",
      position: "CEO, TechStart",
      text: "Команда превзошла все наши ожидания. Проект был выполнен в срок и с отличным качеством. Рекомендую!",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Мария Петрова",
      position: "Маркетинг-директор, InnovateCorp",
      text: "Профессиональный подход и внимание к деталям. Результат превзошел все ожидания. Будем работать еще!",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616c2b5d58e?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Дмитрий Сидоров",
      position: "Основатель, DigitalFlow",
      text: "Отличная команда, которая понимает потребности бизнеса. Качественно и быстро решили все наши задачи.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Отзывы клиентов
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Что говорят о нас наши партнеры
          </p>
        </div>

        {/* Desktop: горизонтальная сетка */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>

        {/* Mobile: вертикальное расположение */}
        <div className="md:hidden space-y-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial }: { testimonial: any }) => {
  return (
    <div className="bg-gradient-to-br from-purple-50 to-orange-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex items-center mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Icon
            key={i}
            name="Star"
            size={20}
            className="text-orange-400 fill-current"
          />
        ))}
      </div>
      <p className="text-gray-700 mb-6 leading-relaxed italic">
        "{testimonial.text}"
      </p>
      <div className="flex items-center">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full mr-4 object-cover"
        />
        <div>
          <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
          <p className="text-gray-600 text-sm">{testimonial.position}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
