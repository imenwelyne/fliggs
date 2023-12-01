"use client";
import Logo from "./Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from "react";
import { MdEmail } from 'react-icons/md';
import { useRouter } from 'next/router';


interface NavLink {
  id: number;
  url: string;
  newTab: boolean;
  text: string;
}



interface MobileNavLink extends NavLink {
  closeMenu: () => void;
}
function NavLinkRegister({ url, text }: NavLink) {
  const path = usePathname();

  return (
    <li className="flex">
      <Link
        href={url}
        className={`w-full px-12 custom-font-book font-spacing py-1 uppercase  button-bg-yellow text-gray-900  ${
          path === url && "text-violet-400 border-violet-400"
        }}`}
      >
        {text}
      </Link>
    </li>
  );
}

function NavLink({ url, text, newTab }: NavLink) {
  const path = usePathname();

  return (
    <li className="flex">
      <Link
        href={url}
        target={newTab ? "_blank" : "_self"}
        className={`flex items-center custom-font-book font-spacing mx-4 -mb-1 border-b-2 border-transparent ${
          path === url && "text-violet-400  border-violet-400"
        }}`}
      >
        {text}
      </Link>
    </li>
  );
}


// function NavLinkContact({ url}: NavLink) {
//   const path = usePathname();

//   return (
//     <li className="flex">
//     <Link
//       href={url}
//       className={`flex items-center mx-4 -mb-1 border-b-2 dark:border-transparent ${
//         path === url && "dark:text-violet-400 dark:border-violet-400"
//       }}`}
//     >
//       <MdEmail /> {/* Use the imported icon component */}
//     </Link>
//   </li>
// );
// }


function MobileNavLink({ url, text, closeMenu }: MobileNavLink ) {
  const path = usePathname();
  
  const handleClick = () => {
    closeMenu();
  }
  return (
    <a className="flex">
      <Link
        href={url}
        onClick={handleClick}
        className={`-mx-3 custom-font-book font-spacing block rounded-lg px-3 py-2 text-base  leading-7 text-gray-100 hover:bg-gray-900 ${
          path === url && "text-violet-400 border-violet-400"
        }}`}
      >
        {text}
      </Link>
    </a>
  );
}

export default function Navbar({
  links,
  logoUrl,
  logoText,
}: {
  links: Array<NavLink>;
  logoUrl: string | null;
  logoText: string | null;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const closeMenu = () => {
    setMobileMenuOpen(false)
  }
  const path = usePathname();

const isInvestorx = path.includes('investorsx');
const isInvestor = path.includes('invest');
const investorXNavItem: NavLink = {
  id: 20,
  url: '/investorsx/#investor-section',
  newTab: false,
  text: 'BOOK A MEETING'
};
const investorNavItem: NavLink = {
  id: 20,
  url: '/investors/#registration-investor-section',
  newTab: false,
  text: 'CONTACT'
};
const homeNavItem: NavLink = {
  id: 20,
  url: '#registration-section',
  newTab: false,
  text: 'EARLY BIRD'
};
  return (
    <div className="p-0 md:p-4 lg:p-4 bg-black text-gray-100 fixed top-0 sticky-nav">
      <div className="container flex justify-between h-16 mx-auto px-0 sm:px-6">
        <Logo src={logoUrl}>
          {logoText && <h2 className="text-2xl font-bold">{logoText}</h2>}
        </Logo>
        {/* add hidden to the 2 divs under this comment */}
        <div className="items-center flex-shrink-0 hidden  lg:flex">
          <ul className="items-stretch nav-bar-mobile-padding hidden space-x-3 lg:flex">


          {
  isInvestorx ? (
    // Render only NavLinkRegister if 'investorx' is in the path
    <NavLinkRegister key={investorXNavItem.id} {...investorXNavItem} />
  ) : (
    <>
      {/* Otherwise, render all links */}
      {links.map((item) => (
        <NavLink key={item.id} {...item} />
      ))}
      {isInvestor ? (
        // Render this if isInvestor is true
        <NavLinkRegister key={investorNavItem.id} {...investorNavItem} />
      ) : (
        // Render this if isInvestor is false
        <NavLinkRegister key={homeNavItem.id} {...homeNavItem} />

      )}
    </>
  )
}



          </ul>
        </div>

     

        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 rtl:left-0 ltr:right-0 z-50 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Strapi</span>
                {logoUrl && 
                <img
                  className="h-8 w-auto"
                  src={logoUrl}
                  alt=""
                />
                }
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-200/10">
                <div className="space-y-2 py-6">
                
                
                {
  isInvestorx ? (
    // If 'isInvestorx' is true, render a specific link or a modified list
    <MobileNavLink
      key={investorXNavItem.id}
      closeMenu={closeMenu}
      {...investorXNavItem}
    />
  ) : (
    // If 'isInvestorx' is false, render all links as usual
    links.map((item) => (
      <MobileNavLink
        key={item.id}
        closeMenu={closeMenu}
        {...item}
      />
    ))
  )
}

                </div>
              </div>
            </div>
          </Dialog.Panel>
          </Dialog>
        <button 
        className="p-4 lg:hidden" 
        onClick={() => setMobileMenuOpen(true)} >
          <Bars3Icon className="h-7 w-7 text-gray-100" aria-hidden="true"/>
        </button>
      </div>
    </div>
  );
}
