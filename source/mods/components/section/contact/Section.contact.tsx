// Section.contact.tsx
import React from 'react';
import './Section.contact.scss';
import { useMediaQuery } from 'react-responsive';
import { ContactText } from '../../../../pages/index/main/default-main/default-text';

interface ContactProps {
  view: 'visible' | 'hidden';
  className: string;
  tag: ContactText;
  onMouseHover: (element: React.MouseEvent<HTMLElement>) => void; //--|🠈 Highlights the button of the viewed section on mouse interaction. 🠈|--//
  onMouseClick: (trigger: React.MouseEvent<HTMLElement>, string: '<header>' | '<main>' | '<footer>') => void; //--|🠈 Centers the view on the user-clicked section. 🠈|--//
  //--|🠊 Event: Reflects dynamic mouse interactions. 🠈|--//
  //--|🠊 MouseEvent: Standard interface for DOM mouse events. 🠈|--//
  //--|🠊 Void: Indicates that no value is returned by the toggle function. 🠈|--//
}
const SectionContact: React.FC<ContactProps> = ({
  onMouseHover: activateButton,
  onMouseClick: scrollSection,
  view,
  className,
  tag: Object,
}) => {
  //--|🠊 Tablet (Square) left with the rest of the tablet layout on 1 July 2024 🠈|--//
  const landscape: boolean = useMediaQuery({ query: '(orientation: landscape)' });
  const orientation: string = landscape ? 'desktop-landscape' : 'mobile-portrait';

  return (
    <section
      className={`${className} ${view}`}
      onMouseEnter={activateButton}
      onClick={(trigger) => scrollSection(trigger, '<main>')}
    >
      <div className={`${className} ${orientation}`}>
        <span className="contact-title">
          <h1>{Object.title}</h1>
          <h4>{Object.subject}</h4>
        </span>
        <span className="contact-links">
          {Object.links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              className={`contact-${link.name}`}
              target={link.url.startsWith('http') ? '_blank' : undefined}
              rel={link.url.startsWith('http') ? 'noreferrer' : undefined}
              download={link.download ? 'Tertius Roach CV.pdf' : undefined}
            >
              <img src={link.icon} alt={link.name} />
              <h5>{link.text}</h5>
            </a>
          ))}
        </span>
      </div>
    </section>
  );
};
export default SectionContact;
