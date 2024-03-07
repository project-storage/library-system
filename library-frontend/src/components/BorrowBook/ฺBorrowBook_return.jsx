import React, { useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import BorrowService from "../../service/BorrowService";

export default function BorrowBook_return() {
  const [b_id, setBid] = useState("");
  const [bookData, setBookData] = useState(null);

  const handleBookCodeChange = (event) => {
    setBid(event.target.value);
  };

  const searchBook = (event) => {
    event.preventDefault();
    BorrowService.getSearchBorrow(b_id) // ส่ง bookCode ไปยัง getSearchBorrow()
      .then((response) => {
        setBookData(response.data); // อัปเดต state ของข้อมูลหนังสือที่ค้นพบ
        console.log("Book Data:", response.data);
      })
      .catch((error) => {
        console.error("Error searching book:", error);
      });
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
            <form onSubmit={searchBook} className="flex justify-center mb-3">
              <label htmlFor="username" className="">
                รหัสหนังสือที่ต้องการคืน:
              </label>
              <input
                type="text"
                id="m_user"
                name="username"
                value={b_id}
                onChange={handleBookCodeChange}
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
                    <label className="w-1/3 border-b-[1.5px] border-r-[1.5px] border-black">
                      รหัสหนังสือ
                    </label>
                    <input
                      type="text"
                      value={bookData.b_id}
                      className="border-b-[1.5px] border-black ring-0  w-full"
                      readOnly
                    />
                  </div>
                  <div className="flex">
                    <label className="w-1/3 border-b-[1.5px] border-r-[1.5px] border-black">
                      ชื่อหนังสือ
                    </label>
                    <input
                      type="text"
                      value={bookData.tb_book ? bookData.tb_book.b_name : ""}
                      className="border-b-[1.5px]  border-black  w-full"
                      readOnly
                    />
                  </div>
                  <div className="flex">
                    <label className="w-1/3 border-b-[1.5px] border-r-[1.5px] border-black">
                      ผู้ยืม-คืนหนังสือ
                    </label>
                    <input
                      type="text"
                      value={
                        bookData.tb_member ? bookData.tb_member.m_name : ""
                      }
                      className="border-b-[1.5px]  border-black  w-full"
                      readOnly
                    />
                  </div>
                  <div className="flex">
                    <label className="w-1/3 border-b-[1.5px] border-r-[1.5px] border-black">
                      วันที่ยืมหนังสือ
                    </label>
                    <input
                      type="text"
                      value={bookData.borrowedDate}
                      className="border-b-[1.5px]  border-black  w-full"
                      readOnly
                    />
                  </div>
                  <div className="flex">
                    <label className="w-1/3 border-b-[1.5px] border-r-[1.5px] border-black">
                      ค่าปรับ
                    </label>
                    <input
                      type="text"
                      className="border-b-[1.5px]  border-black  w-full"
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
