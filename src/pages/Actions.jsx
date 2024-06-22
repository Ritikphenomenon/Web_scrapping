import React from "react";

const Actions = ({
  url,
  setUrl,
  handleAddCompany,
  selectedCompanies,
  handleDeleteCompanies,
  handleDownloadCSV,
}) => {
  return (
      <div>
    <div className="flex h-[82px] p-[20px] px-[15px] gap-[10px] relative">
      <img
        src="./search.png"
        alt="Icon"
        className="absolute left-6 top-8 h-4 w-4"
      />
      <input
        type="text"
        placeholder="Enter domain name"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg p-3 pl-[36px] w-[404px] h-[42px] text-gray-800 text-sm placeholder-gray-400 focus:outline-none"
      />
      <button
        onClick={handleAddCompany}
        className="bg-[#EDE5FF] rounded-md p-[10px] px-[15px] w-[167px] h-[42px] gap-[8px] flex items-center"
      >
        <span className="text-[#6C2BD9] font-inter font-medium text-[14px] leading-[16.94px]">
          Fetch & Save Details
        </span>
      </button>
      </div>

      <div className="left-[4px] bg-white border-[#ECECEC] border rounded-[6px] p-[12px] py-[0px]">
        <div className="w-[336px] h-[50px] p-[10px] pl-[15px] gap-[10px] flex items-start">
          <p className="w-[98px] h-[20px] text-[#334155] font-inter font-medium text-[12px] mt-2">
            {selectedCompanies.length > 0 ? selectedCompanies.length : 0}
            <span></span> selected
          </p>
          <button
            onClick={handleDeleteCompanies}
            className="w-[58px] h-[30px] rounded-[3px] border-[1px] border-[#ECECEC] px-[10px] gap-[5px]"
          >
            <span className="w-[38px] h-[20px] text-[#A2A2A2] font-inter font-medium text-[12px] text-center pb-2">
              Delete
            </span>
          </button>

          <div
            onClick={handleDownloadCSV}
            className="w-[135px] h-[30px] rounded-[3px] border-[1px] border-[#ECECEC] p-[5px] px-[15px] flex items-center"
          >
            <img src="./list-plus.png" alt="" className="mr-2" />
            <p className="text-[#A2A2A2] font-inter font-medium text-[12px] text-center">
              Export as CSV
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Actions;
