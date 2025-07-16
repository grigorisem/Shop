import { useState } from 'react'

type NavItem = 'Коллабы' | 'Мужское' | 'Женское' | null;

const dropdownContent: Record<Exclude<NavItem, null>, string[]> = {
  'Коллабы': ['Дропы 2025', 'Дропы 2024', 'Дропы 2023'],
  'Мужское': ['Футболки', 'Худи', 'Шарфы', 'Обувь'],
  'Женское': ['Футболки', 'Худи', 'Шарфы', 'Платья', 'Обувь'],
};

export const Navbar = () => {
  const [activeItem, setActiveItem] = useState<NavItem>(null);

  return (
    <div className="relative z-40">
      <nav
        className="flex space-x-10 px-8 py-4 text-black text-md z-30 justify-center"
        onMouseDownCapture={() => setActiveItem(null)}
      >
        {(['Коллабы', 'Мужское', 'Женское'] as Exclude<NavItem, null>[]).map((item) => (
          <div
            key={item}
            className="cursor-pointer hover:text-gray-300"
            onMouseEnter={() => setActiveItem(item)}
          >
            {item}
          </div>
        ))}
      </nav>

      {activeItem && (
        <div
          className="absolute left-0 w-full bg-white h-[250px] shadow-xl z-30"
          onMouseLeave={() => setActiveItem(null)}
        >
          <div className="flex justify-center items-start h-full pt-12">
            <div className="flex flex-col space-y-4 text-black text-sm">
              {dropdownContent[activeItem].map((link, i) => (
                <div key={i} className="font-medium hover:underline cursor-pointer">
                  {link}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
