/* eslint-disable @next/next/no-img-element */
"use client";

import { useSearchParams } from "next/navigation";

export const CompanyDetails = () => {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const companyName = searchParams.get("companyName");
  const companyAddress = searchParams.get("companyAddress");
  const companyCity = searchParams.get("companyCity");
  const companyState = searchParams.get("companyState");
  const companyCountry = searchParams.get("companyCountry");
  const companyLogo = searchParams.get("companyLogo");
  const companyTaxId = searchParams.get("companyTaxId");
  const companyZip = searchParams.get("companyZip");

  return (
    <div className="">
      <p className="text-[11px] text-neutral-400 font-semibold uppercase pb-3.5">
        From
      </p>
      <div className="h-10 mb-3">
        {companyLogo ? (
          <img
            src={companyLogo}
            alt="Company Logo"
            className="h-10 rounded-md"
          />
        ) : (
          <div className="rounded-full bg-neutral-100 h-10 w-10 animate-pulse" />
        )}
      </div>
      {companyAddress ? (
        <p className="text-2xl font-medium">{companyName}</p>
      ) : (
        <div className="rounded-md bg-neutral-100 h-5 w-5/6  animate-pulse mb-4" />
      )}
      {email ? (
        <p className="text-neutral-500/90 text-sm mb-3">{email}</p>
      ) : (
        <div className="rounded-md bg-neutral-100 h-4 w-4/6 animate-pulse my-2" />
      )}
      <div className="text-xs text-neutral-500/80">
        {companyAddress ? (
          <p className="mb-2">{companyAddress}</p>
        ) : (
          <div className="rounded-md bg-neutral-100 h-4 w-3/6 animate-pulse my-2" />
        )}
        {companyAddress || companyState || companyZip ? (
          <p className="mb-0.5">
            {companyCity}, {companyState} {companyZip}
          </p>
        ) : (
          <div className="rounded-md bg-neutral-100 h-4 w-4/6 animate-pulse my-3" />
        )}
        {companyCountry ? (
          <p className="mb-1">{companyCountry}</p>
        ) : (
          <div className="rounded-md bg-neutral-100 h-4 w-3/6 animate-pulse my-2" />
        )}
        {companyTaxId && <p>Tax ID:{companyTaxId}</p>}
      </div>
    </div>
  );
};
