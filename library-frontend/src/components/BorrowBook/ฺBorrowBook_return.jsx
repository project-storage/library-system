import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import BorrowService from "../../service/BorrowService";

export default function BorrowBook_return() {
  const [borrow, setBorrow] = useState([]);
  const [searchBorrow, setSearchBorrow] = useState("")
  const [borrowOption, setBorrowOption] = useState([])
  const [selectedBorrow, setSelectedBorrow] = useState(null)


  useEffect(() => {
    const fetchBorrow = async () => {
      try {
        const response = await BorrowService.getAllBorrow();
        setBorrow(response.data);
      } catch (error) {
        console.error("Error:", error.response);
        setError(error.response.data.message);
      }
    };
    fetchBorrow();
  }, []);

  // search company
  const handleSearchCompany = (event) => {
    setSearchCompany(event.target.value);
    const filteredCompanies = companies.filter((company) =>
      company.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setCompanyOption(filteredCompanies.map((company) => company.name));
  };

  const handleCompanySelect = (event, value) => {
    setSelectedCompany(value);
    const selectedCompanyId = companies.find((company) => company.name === value)?.id;
    setContractCompanyId(selectedCompanyId);
  };

  return (
    <>
      <Navbar />
      <section className="bb-borrow">
        <div className="container w-[660px] mx-auto mt-8">
          <div className="bb-borrow-box border-2 border-black p-6">
            <div className="btn-menu flex justify-center gap-4">
              <Link
                to="/borrowbook_borrow"
                className="border-[1.5px] border-black py-1 px-3 font-medium rounded-md"
              >
                ยืมหนังสือ
              </Link>
              <Link
                to="/borrowbook_return"
                className="border-[1.5px] border-black py-1 px-3 font-medium rounded-md underline"
              >
                คืนหนังสือ
              </Link>
            </div>
            <h1 className="text-2xl mt-2 mb-8">คืนหนังสือ</h1>
            {/* รหัสหนังสือที่ต้องการคืน  */}
            <form onSubmit={handleSearch} className="flex justify-center mb-3">
              <label htmlFor="m_user" className="">
                รหัสหนังสือที่ต้องการคืน:
              </label>
              <input
                type="text"
                id="m_user"
                name="username"
                value={bookId}
                onChange={(e) => setBookId(e.target.value)}
                className="border-grey border-[1.5px] ml-2"
                required
              />
              <button
                type="submit"
                className="mx-4 border-[1.5px] border-black px-4 font-medium rounded-md"
              >
                ค้นหา
              </button>
            </form>

            {bookData && (
              <form className="w-[560px] mx-auto my-4">
                <div className="flex flex-col justify-center border-[1.5px] border-black">
                  <div className="flex">
                    <label className="w-1/3 border-b-[1.5px] border-r-[1.5px] border-black">รหัสหนังสือ</label>
                    <input
                      type="text"
                      className=" border-b-[1.5px] border-black ring-0  w-full"
                      value={bookData.bookId} // Update with appropriate data from bookData
                      readOnly
                    />
                  </div>
                  <div className="flex">
                    <label className="w-1/3 border-b-[1.5px] border-r-[1.5px] border-black">ชื่อหนังสือ</label>
                    <input
                      type="text"
                      className=" border-b-[1.5px]  border-black  w-full"
                      value={bookData.bookName} // Update with appropriate data from bookData
                      readOnly
                    />
                  </div>
                  <div className="flex">
                    <label className="w-1/3 border-b-[1.5px] border-r-[1.5px] border-black">ผู้ยืม-คืนหนังสือ</label>
                    <input
                      type="text"
                      className=" border-b-[1.5px]  border-black  w-full"
                      value={bookData.borrowerName} // Update with appropriate data from bookData
                      readOnly
                    />
                  </div>
                  <div className="flex">
                    <label className="w-1/3 border-b-[1.5px] border-r-[1.5px] border-black">วันที่ยืมหนังสือ</label>
                    <input
                      type="text"
                      className=" border-b-[1.5px]  border-black  w-full"
                      value={bookData.borrowDate} // Update with appropriate data from bookData
                      readOnly
                    />
                  </div>
                  <div className="flex">
                    <label className="w-1/3 border-b-[1.5px] border-r-[1.5px] border-black">ค่าปรับ</label>
                    <input
                      type="text"
                      className=" border-b-[1.5px]  border-black  w-full"
                      placeholder="กรอกค่าปรับหนังสือ"
                    />
                  </div>
                  <div className="flex justify-center gap-2 p-1">
                    <button className="border-[1.5px] border-black px-4 rounded">
                      คืนหนังสือ
                    </button>
                    <button className="border-[1.5px] border-black px-4 rounded">
                      ยกเลิก
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
