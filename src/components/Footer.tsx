import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
              Наша Компания
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Мы создаем цифровые решения, которые помогают бизнесу расти и
              развиваться в современном мире.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors"
              >
                <Icon name="Twitter" size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors"
              >
                <Icon name="Facebook" size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors"
              >
                <Icon name="Instagram" size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors"
              >
                <Icon name="Linkedin" size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-orange-400 transition-colors">
                  Разработка
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition-colors">
                  Дизайн
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition-colors">
                  Консалтинг
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition-colors">
                  Поддержка
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center">
                <Icon name="Phone" size={16} className="mr-2 text-orange-400" />
                <span>+7 (999) 123-45-67</span>
              </div>
              <div className="flex items-center">
                <Icon name="Mail" size={16} className="mr-2 text-orange-400" />
                <span>info@company.ru</span>
              </div>
              <div className="flex items-center">
                <Icon
                  name="MapPin"
                  size={16}
                  className="mr-2 text-orange-400"
                />
                <span>Москва, Россия</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Наша Компания. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
