import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CompanyDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [company, setCompany] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState("");

  useEffect(() => {
    const fetchCompanyDetails = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/companies/getCompanyDetails/${id}`
        );
        setCompany(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message || "Failed to fetch company details");
        setLoading(false);
      }
    };

    if (id) {
      fetchCompanyDetails();
    }
  }, [id]);

  const handleAddCompany = () => {
    axios
      .post(`${import.meta.env.VITE_API_URL}/api/companies/addCompany`, { url })
      .then(() => {
        setUrl(""); // Clear input after successful addition
      })
      .catch((error) => console.error("Error adding company:", error));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!company) {
    return <div>Company not found</div>;
  }

  const {
    name,
    description,
    logo,
    email,
    address,
    phoneNumber,
    facebookUrl,
    twitterUrl,
    instagramUrl,
    linkedinUrl,
    screenshotUrl,
    Url,
  } = company;

  return (
    <div className="container mx-auto p-4">
      <div className="flex h-[82px] p-[20px] px-[15px] gap-[10px] relative">
        <img
          src="/search.png"
          alt="Icon"
          className="absolute left-6 top-8 h-4 w-4"
        />
        <input
          type="text"
          placeholder="Enter domain name"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg p-3 pl-[36px] w-full sm:w-[404px] h-[42px] text-gray-800 text-sm placeholder-gray-400 focus:outline-none"
        />
        <button
          onClick={handleAddCompany}
          className="bg-[#EDE5FF] rounded-md p-[10px] px-[15px] w-full sm:w-[167px] h-[42px] gap-[8px] flex items-center"
        >
          <span className="text-[#6C2BD9] font-inter font-medium text-[14px] leading-[16.94px]">
            Fetch & Save Details
          </span>
        </button>
      </div>

      <div className="flex gap-2 py-2">
        <span
          className="cursor-pointer text-[14px] leading-[21px] font-medium text-[#374151]"
          onClick={() => navigate("/")}
        >
          Home
        </span>
        <span className="mt-2">
          <img src="/right.png" alt="Arrow" />
        </span>
        <span className="text-[14px] leading-[21px] font-medium text-[#374151]">
          {company.name.split(" ").slice(0, 1).join(" ")}
        </span>
      </div>

      <div className="flex flex-col sm:flex-row items-start gap-4 bg-white rounded-md border border-[#ECECEC] p-4 mt-2">
        <img src={logo} alt={`${name} Logo`} className="w-32 h-32" />

        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">{name}</h1>
          <div className="flex flex-col sm:flex-row gap-4 w-[500px]">
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <img src="/circle.png" className="w-6 h-5" alt="Icon" />
                <span className="text-sm font-semibold text-[#64748B]">
                  Description
                </span>
              </div>
              <p className="text-gray-600">{description}</p>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <div className="flex items-center gap-2">
                <img src="/phone.png" className="w-6 h-6" alt="Phone" />
                <span className="text-sm text-[#64748B]">Phone</span>
              </div>
              <p className="text-black ">{phoneNumber}</p>

              <div className="flex items-center gap-2 mt-2">
                <img src="/mail.png" className="w-6 h-6" alt="Email" />
                <span className="text-sm text-[#64748B]">Email</span>
              </div>
              <p className="text-black">{email}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="  flex flex-col sm:flex-row gap-4 mt-4 ">
        <div className="w-full h-full sm:w-[438px] bg-white rounded-md border p-4 space-y-4">
          <h2 className="text-xl font-semibold">Company Details</h2>

          <div className="flex items-center gap-2">
            <img src="/globe.png" className="w-6" alt="Website" />
            <span className="text-gray-600">Website</span>
          </div>
          <a href={Url} className="text-black">
            {Url}
          </a>

          <div>
            <div className="flex items-center gap-2 mt-4">
              <img src="/circle.png" className="w-6 h-5" alt="Description" />
              <span className="text-sm font-semibold text-[#64748B]">
                Description
              </span>
            </div>
            <p className="text-black">{description}</p>
          </div>

          <div className="flex items-center gap-2 mt-4">
            <img src="/location.png" className="w-6 h-6" alt="Address" />
            <span className="text-sm text-[#64748B]">Address</span>
          </div>
          <p className="text-black">{address}</p>

          <div className="flex items-center gap-2 mt-4">
            <img src="/facebook1.png" className="w-6 h-6" alt="Facebook" />
            <span className="text-sm text-[#64748B]">Facebook</span>
          </div>
          <p className="overflow-hidden">
          <a href={facebookUrl} className="text-[#6C2BD9] ">
            {facebookUrl}
          </a>
          </p>
          

          <div className="flex items-center gap-2 mt-4">
            <img src="/instagram1.png" className="w-6 h-6" alt="Instagram" />
            <span className="text-sm text-[#64748B]">Instagram</span>
          </div>
          <p className="overflow-hidden">
          <a href={instagramUrl} className="text-[#6C2BD9] p-2">
            {instagramUrl}
          </a>
          </p>
         

          <div className="flex items-center gap-2 mt-4">
            <img src="/twitter1.png" className="w-6 h-6" alt="Twitter" />
            <span className="text-sm text-[#64748B]">Twitter</span>
          </div>
          <p className="overflow-hidden">
          <a href={twitterUrl} className="text-[#6C2BD9] p-2">
            {twitterUrl}
          </a>
          </p>
         

          <div className="flex items-center gap-2 mt-4">
            <img src="/linkedin1.png" className="w-6 h-6" alt="LinkedIn" />
            <span className="text-sm text-[#64748B]">LinkedIn</span>
          </div>
          <p className="overflow-hidden">
          <a href={linkedinUrl} className="text-[#6C2BD9] ">
            {linkedinUrl}
          </a>
          </p>
          
        </div>

        <div className="w-full sm:w-[989px] bg-white rounded-md border p-4">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <img src="/camera.png" className="w-6 h-6" alt="Screenshot" />
            Screenshot of Webpage
          </h2>
          <img src={screenshotUrl} className="mt-4 w-full h-[1000px]" alt="Screenshot" />
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;
