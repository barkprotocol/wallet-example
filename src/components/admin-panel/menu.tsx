'use client';

import Link from 'next/link';
import { Ellipsis } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { getMenuList } from '@/lib/menu-list';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { CollapseMenuButton } from '@/components/admin-panel/collapse-menu-button';
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from '@/components/ui/tooltip';

interface MenuProps {
  isOpen: boolean | undefined;
}

export function Menu({ isOpen }: MenuProps) {
  const pathname = usePathname();
  const menuList = getMenuList(pathname);

  return (
    <ScrollArea className="[&>div>div[style]]:!block">
      <nav className="mt-8 h-full w-full">
        <ul className="flex flex-col items-start space-y-1 px-2 lg:min-h-[calc(100vh-32px-40px-32px)]">
          {menuList.map(({ groupLabel, menus }, index) => (
            <li className={cn('w-full', groupLabel ? 'pt-5' : '')} key={index}>
              {(isOpen && groupLabel) || isOpen === undefined ? (
                <p className="max-w-[248px] truncate px-4 pb-2 text-sm font-medium text-muted-foreground">
                  {groupLabel}
                </p>
              ) : !isOpen && isOpen !== undefined && groupLabel ? (
                <TooltipProvider>
                  <Tooltip delayDuration={100}>
                    <TooltipTrigger aria-label={`Expand ${groupLabel}`} className="w-full">
                      <div className="flex w-full items-center justify-center">
                        <Ellipsis className="h-5 w-5" />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent side="right">
                      <p>{groupLabel}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ) : (
                <p className="pb-2"></p>
              )}
              {menus.map(({ href, label, icon: Icon, active, submenus }, index) => (
                <div className="w-full" key={index}>
                  {submenus.length === 0 ? (
                    <TooltipProvider disableHoverableContent>
                      <Tooltip delayDuration={100}>
                        <TooltipTrigger asChild>
                          <Button
                            variant={active ? 'secondary' : 'ghost'}
                            className="mb-1 h-10 w-full justify-start"
                            asChild
                            aria-label={label}
                          >
                            <Link href={href}>
                              <span
                                className={cn(isOpen === false ? '' : 'mr-4')}
                              >
                                <Icon size={18} />
                              </span>
                              <p
                                className={cn(
                                  'max-w-[200px] truncate',
                                  isOpen === false
                                    ? '-translate-x-96 opacity-0'
                                    : 'translate-x-0 opacity-100'
                                )}
                              >
                                {label}
                              </p>
                            </Link>
                          </Button>
                        </TooltipTrigger>
                        {isOpen === false && (
                          <TooltipContent side="right">
                            {label}
                          </TooltipContent>
                        )}
                      </Tooltip>
                    </TooltipProvider>
                  ) : (
                    <CollapseMenuButton
                      icon={Icon}
                      label={label}
                      active={active}
                      submenus={submenus}
                      isOpen={isOpen}
                    />
                  )}
                </div>
              ))}
            </li>
          ))}
        </ul>
      </nav>
    </ScrollArea>
  );
}
