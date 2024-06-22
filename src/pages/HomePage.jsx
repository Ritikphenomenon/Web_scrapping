import { useState, useEffect } from "react";
import axios from "axios";
import Actions from "./Actions";
import CompanyList from "./CompanyList";
import Pagination from "./Pagination";


const HomePage = () => {
  const [url, setUrl] = useState("");
  const [companies, setCompanies] = useState([]);
  const [selectedCompanies, setSelectedCompanies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(8); // Number of companies per page

  useEffect(() => {
    fetchCompanies();
  }, [currentPage]); // Fetch companies when currentPage changes

  const fetchCompanies = () => {
    axios
      .get(
        `${import.meta.env.VITE_API_URL}/api/companies/getCompanies?page=${currentPage}&perPage=${perPage}`
      )
      .then((response) => setCompanies(response.data))
      .catch((error) => console.error("Error fetching companies:", error));
  };

  const handleAddCompany = () => {
    axios
      .post(`${import.meta.env.VITE_API_URL}/api/companies/addCompany`, { url })
      .then((response) => {
        setCompanies([...companies, response.data]);
        setUrl(""); // Clear input after successful addition
      })
      .catch((error) => console.error("Error adding company:", error));
  };

  const handleDeleteCompanies = () => {
    axios
      .delete(`${import.meta.env.VITE_API_URL}/api/companies/deleteCompanies`, {
        data: { ids: selectedCompanies },
      })
      .then(() => {
        setCompanies(
          companies.filter(
            (company) => !selectedCompanies.includes(company._id)
          )
        );
        setSelectedCompanies([]);
      })
      .catch((error) => console.error("Error deleting companies:", error));
  };

  const handleDownloadCSV = () => {
    const csvContent = [
      [
        "Name",
        "Description",
        "Logo",
        "Facebook URL",
        "Linkedin URL",
        "Twitter URL",
        "Instagram URL",
        "Address",
        "Phone Number",
        "Email",
      ],
      ...companies.map((company) => [
        company.name,
        company.description,
        company.logo,
        company.facebookUrl,
        company.linkedinUrl,
        company.twitterUrl,
        company.instagramUrl,
        company.address,
        company.phoneNumber,
        company.email,
      ]),
    ]
      .map((e) => e.join(","))
      .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.setAttribute("download", "companies.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(companies.length / perPage);

  // Calculate the companies to display on the current page
  const indexOfLastCompany = currentPage * perPage;
  const indexOfFirstCompany = indexOfLastCompany - perPage;
  const currentCompanies = companies.slice(
    indexOfFirstCompany,
    indexOfLastCompany
  );

  return (
    <div className="p-2 ">
      <Actions
        url={url}
        setUrl={setUrl}
        handleAddCompany={handleAddCompany}
        selectedCompanies={selectedCompanies}
        handleDeleteCompanies={handleDeleteCompanies}
        handleDownloadCSV={handleDownloadCSV}
      />
      <CompanyList
        companies={currentCompanies}
        selectedCompanies={selectedCompanies}
        setSelectedCompanies={setSelectedCompanies}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        handlePageChange={handlePageChange}
      />
    </div>
  );
};

export default HomePage;
