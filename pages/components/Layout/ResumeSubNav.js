import Link from "next/link";
import React from "react";

export default function ResumeSubNav({ resume }) {
  if (!resume) {
    return null;
  }
  return (
    <nav className="flex sm:justify-center space-x-4">
      {[
        ["Download PDF", `/resume/print/${resume.type}`, true],
        ["Cover Letter", `/resume/coverletter/${resume.type}`,false],
      ].map(([title, url, newWindow]) => (
        <Link
          href={url}
          key={title + url}
          target={newWindow ? "_blank" : undefined}
          className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
        >
          {title}
        </Link>
      ))}
    </nav>
  );
}
