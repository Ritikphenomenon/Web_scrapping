import React from "react";
import CompanyRow from "./CompanyRow";

const CompanyList = ({
  companies,
  selectedCompanies,
  setSelectedCompanies,
}) => {
  return (
    <div className="overflow-x-auto">
      <table className="table table-compact w-full h-[480px]">
        <thead>
          <tr>
            <th></th>
            <th className="w-[117px] h-[44.8px] font-inter font-semibold text-[10.8px] leading-[16.2px] text-[#6B7280] p-[14.8px]">
              COMPANY
            </th>
            <th className="w-[135px] h-[44.8px] p-[14.4px] bg-[#F9FAFB]">
              <span className="w-[95px] h-[16px] font-inter font-semibold text-[10.8px] leading-[16.2px] text-[#6B7280]">
                SOCIAL PROFILES
              </span>
            </th>
            <th className="w-[555px] h-[44.8px] p-[14.4px] bg-[#F9FAFB]">
              <span className="w-[73px] h-[16px] font-inter font-semibold text-[10.8px] leading-[16.2px] text-[#6B7280]">
                DESCRIPTION
              </span>
            </th>
            <th className="w-[219px] h-auto p-[14.4px] bg-[#F9FAFB]">
              <span className="w-[52px] h-[16px] font-inter font-semibold text-[10.8px] leading-[16.2px] text-[#6B7280]">
                ADDRESS
              </span>
            </th>
            <th className="w-[153px] h-auto p-[14.4px] bg-[#F9FAFB]">
              <span className="w-[60px] h-[16px] font-inter font-semibold text-[10.8px] leading-[16.2px] text-[#6B7280]">
                PHONE NO.
              </span>
            </th>
            <th className="w-[171px] h-auto p-[14.4px] bg-[#F9FAFB]">
              <span className="w-[34px] h-[16px] font-inter font-semibold text-[10.8px] leading-[16.2px] text-[#6B7280]">
                EMAIL
              </span>
            </th>
          </tr>
        </thead>
        <tbody className="h-[414px] overflow-y-auto">
          {companies.map((company) => (
            <CompanyRow
              key={company._id}
              company={company}
              selectedCompanies={selectedCompanies}
              setSelectedCompanies={setSelectedCompanies}
            />
          ))}
          {/* Add placeholder rows if there are fewer than 7 companies */}
          {Array.from({ length: Math.max(0, 8 - companies.length) }).map(
            (_, index) => (
              <tr key={`placeholder-${index}`} className="h-[57px]">
                <td colSpan="8" className="h-[57px]"></td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CompanyList;
