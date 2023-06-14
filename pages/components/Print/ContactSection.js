import React from "react";
import Link from "next/link";
import {
  ExclamationCircleIcon,
  UserCircleIcon,
  UserGroupIcon,
  AtSymbolIcon,
  ComputerDesktopIcon,
  GlobeAltIcon,
  MapIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

const ContactSection = ({ contacts }) => {
  if (!contacts) {
    return <div></div>; // or return null if you want to render nothing
  }
  const renderContact = (contact) => {
    const { type, value } = contact;

    let icon = null;
    let link = "";

    switch (type) {
      case "phone":
        icon = (
          <PhoneIcon className="h-8 w-8 inline-block border rounded-full p-1" />
        );
        break;
      case "email":
        icon = (
          <AtSymbolIcon className="h-8 w-8 inline-block border rounded-full p-1" />
        );
        break;
      case "address":
        icon = (
          <MapIcon className="h-8 w-8 inline-block border rounded-full p-1" />
        );
        break;
      case "website":
        icon = (
          <GlobeAltIcon className="h-8 w-8 inline-block border rounded-full p-1" />
        );
        break;
      case "github":
        icon = (
          <ComputerDesktopIcon className="h-8 w-8 inline-block border rounded-full p-1" />
        );
        link = "https://github.com/";
        break;
      case "twitter":
        icon = (
          <UserCircleIcon className="h-8 w-8 inline-block border rounded-full p-1" />
        );
        link = "https://twitter.com/";
        break;
      case "linkedin":
        icon = (
          <UserGroupIcon className="h-8 w-8 inline-block border rounded-full p-1" />
        );
        link = "https://linkedin.com/";
        break;
      default:
        break;
    }

    // if (type === 'website' || type === 'github' || type === 'twitter' || type === 'linkedin') {
    // }
    return (
      <div className="flex flex-row w-full py-1" key={type + value}>
        {/* <div className="flex items-center w-2/12 justify-center">{icon}</div> */}
        <div className="w-10/12">
          <p key={type}>
            <strong>{type.charAt(0).toUpperCase() + type.slice(1)}:</strong>
            &nbsp;
          </p>
          <a
            href={link ? link + value : value}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm"
          >
            {link ? link + value : value}
          </a>
        </div>
      </div>
    );

    // return (
    //   <p key={type}>
    //     {icon}
    //     <strong>{type.charAt(0).toUpperCase() + type.slice(1)}:</strong>&nbsp;{value}
    //   </p>
    // );
  };

  return (
    <div className="py-4">
      <h2 className="text-bold text-xl border-b-4 border-slate-400 text-left font-bold py-0.5">
        Contact Section
      </h2>
      {contacts.map((contact,index) => renderContact(contact))}
    </div>
  );
};

export default ContactSection;
