import React, { useEffect } from 'react';
import { links } from './navbardata';

const Navbar1 = () => {
  const onScroll = () => {
    const sections = document.querySelectorAll('.side-menu__item');
    const scrollPos =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.querySelector('body').scrollTop;

    sections.forEach((elem) => {
      const value = elem.getAttribute('href');
      const refElement = document.querySelector(value);
      if (refElement) {
        const scrollTopMinus = scrollPos + 73;
        if (
          refElement.offsetTop <= scrollTopMinus &&
          refElement.offsetTop + refElement.offsetHeight > scrollTopMinus
        ) {
          elem.classList.add('active');
        } else {
          elem.classList.remove('active');
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    const target = e.currentTarget.getAttribute('href');
    const location = document.getElementById(target)?.offsetTop;
    window.scrollTo({
      left: 0,
      top: location - 64,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const pageLinks = document.querySelectorAll('.side-menu__item');
    pageLinks.forEach((elem) => {
      elem.addEventListener('click', (e) => {
        e.preventDefault();
        const target = elem.getAttribute('href').substring(1);
        document.getElementById(target).scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
        });
      });
    });

    return () => {
      // Clean up event listeners when component unmounts
      pageLinks.forEach((elem) => {
        elem.removeEventListener('click', handleClick);
      });
    };
  }, []);

  return (
    <ul className="main-menu ltr:!ml-auto rtl:!mr-auto">
      {links.map((link) => (
        <li className={`slide`} key={link.id}>
          <a href={link.url} className="side-menu__item">
            <span className="side-menu__label">{link.text}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Navbar1;
