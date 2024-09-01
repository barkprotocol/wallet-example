// app/payments/layout.tsx

import React from 'react';
import { getMenuList } from '@/utils/menu';
import { NetworkName } from '@/types';

interface LayoutProps {
  children: React.ReactNode;
  pathname: string;
}

const PaymentsLayout: React.FC<LayoutProps> = ({ children, pathname }) => {
  const menuList = getMenuList(pathname);

  return (
    <div className="flex">
      <aside className="w-64 bg-gray-100 p-4">
        <nav>
          {menuList.map(group => (
            <div key={group.groupLabel} className="mb-6">
              <h2 className="text-lg font-semibold mb-2">{group.groupLabel}</h2>
              <ul>
                {group.menus.map(menu => (
                  <li key={menu.label} className="mb-2">
                    <a
                      href={menu.href}
                      className={`flex items-center p-2 rounded ${menu.active ? 'bg-blue-500 text-white' : 'text-gray-700'}`}
                    >
                      <menu.icon className="mr-2" />
                      {menu.label}
                    </a>
                    {menu.submenus && (
                      <ul className="ml-4">
                        {menu.submenus.map(submenu => (
                          <li key={submenu.label}>
                            <a
                              href={submenu.href}
                              className={`block p-2 ${submenu.active ? 'bg-blue-100' : ''}`}
                            >
                              {submenu.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </aside>
      <main className="flex-1 p-6">
        {children}
      </main>
    </div>
  );
};

export default PaymentsLayout;
