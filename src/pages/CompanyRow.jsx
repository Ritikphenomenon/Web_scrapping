import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CompanyRow = ({
  company,
  selectedCompanies,
  setSelectedCompanies,
}) => {
    const navigate =useNavigate();

    
  const [copySuccess, setCopySuccess] = useState(false);

    
  const CompanyDetail =(id)=>{
    navigate(`/company/${id}`)
};

  const handleCopy = (text) => {
    // Create a temporary textarea element
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "absolute";
    textarea.style.left = "-9999px"; // Move outside the screen to make it invisible
    document.body.appendChild(textarea);

    // Select and copy the text
    textarea.select();
    document.execCommand("copy");

    // Cleanup: remove the textarea
    document.body.removeChild(textarea);

    // Show copy success message for 2 seconds
    setCopySuccess(true);
    setTimeout(() => {
      setCopySuccess(false);
    }, 2000);
  };

  return (
    <tr key={company._id} className="h-[50px]">
      <td className="flex items-center mr-4 h-[50px]">
        <div className="flex-1 flex items-center">
          <input
            type="checkbox"
            className="w-[14px] h-[14px] rounded-sm border border-gray-300 flex items-center justify-center"
            checked={selectedCompanies.includes(company._id)}
            onChange={() =>
              setSelectedCompanies(
                selectedCompanies.includes(company._id)
                  ? selectedCompanies.filter((id) => id !== company._id)
                  : [...selectedCompanies, company._id]
              )
            }
          />
          <img
            src={company.logo}
            alt="logo"
            className="w-[25px] h-[25px] ml-2"
          />
        </div>
      </td>
      <td className="w-[117px] h-[50px]">
        <span  onClick={()=>CompanyDetail(company._id)} className="font-inter font-normal text-xs text-purple-700 whitespace-nowrap overflow-hidden truncate cursor-pointer">
          {company.name.split(" ").slice(0, 2).join(" ")}
        </span>
      </td>
      <td className="h-[50px]">
        {company.facebookUrl && (
          <a
            href={company.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="./Facebook.png"
              alt="Facebook"
              className="w-4 h-4 inline mr-1"
            />
          </a>
        )}
        {company.twitterUrl && (
          <a
            href={company.twitterUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="./Vector.png"
              alt="Twitter"
              className="w-4 h-4 inline mr-1"
            />
          </a>
        )}
        {company.linkedinUrl && (
          <a
            href={company.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="./Group.png"
              alt="LinkedIn"
              className="w-4 h-4 inline"
            />
          </a>
        )}
      </td>
      <td className="whitespace-nowrap overflow-hidden truncate max-w-xs h-[50px] font-inter font-normal text-gray-500">
        {company.description}
      </td>
      <td className="whitespace-nowrap overflow-hidden truncate max-w-xs h-[50px] font-inter font-normal text-gray-500">
      {company.address.split(" ").slice(0, 2).join(" ")}
      </td>
      <td className="whitespace-nowrap overflow-hidden truncate w-[280px] h-[50px] font-inter font-normal text-xs text-purple-700 flex items-start">
        <span className="flex">{company.phoneNumber}</span>
        <img
          src="./copy.png"
          className="w-4 h-4 ml-2 cursor-pointer opacity-50 hover:opacity-100"
          alt="Copy"
          onClick={() => handleCopy(company.phoneNumber)}
        />
      </td>
      <td className="whitespace-nowrap overflow-hidden truncate w-[330px] h-[50px] font-inter font-normal text-xs text-purple-700">
        <span className="flex w-[100px]">
          {company.email}
          <img
            src="./copy.png"
            className="w-4 h-4 ml-2 cursor-pointer opacity-50 hover:opacity-100"
            alt="Copy"
            onClick={() => handleCopy(company.email)}
          />
        </span>
      </td>
    </tr>
  );
};

export default CompanyRow;
