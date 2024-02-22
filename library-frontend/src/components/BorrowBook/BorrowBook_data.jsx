import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import MemberService from "../../service/MemberService";
import BookService from "../../service/BookService";
import BorrowService from "../../service/BorrowService";

export default function BorrowBook_data() {
  const [memberCount, setMemberCount] = useState(0);
  const [bookCount, setBookCount] = useState(0);
  const [borrowCount,setBorrowCount]= useState(0)

  const fetchMemberCount = async () => {
    try {
      const res = await MemberService.getAllMember();
      setMemberCount(res.data.allMember.length);
    } catch (error) {
      console.error("fail count member :", error);
    }
  };

  const fetchBookCount = async () => {
    try {
      const res = await BookService.getAllBoook();
      setBookCount(res.data.allBooks.length);
    } catch (error) {
      console.error("fail count book :", error);
    }
  };

  const fetchBorrowCount = async () => {
    try {
      const res = await BorrowService.getAllBorrow();
      if (res.data) {
        setBorrowCount(res.data.allBorrows.length);
      }
    } catch (error) {
      console.error("fail count borrow :", error);
    }
  };
  
  useEffect(() => {
    const fetchData = async () => {
      await fetchBookCount();
      await fetchMemberCount();
      await fetchBorrowCount()
    };

    fetchData();
  }, []);

  return (
    <React.Fragment>
      <Navbar />
      <section className="bb-data">
        <div className="container w-[760px] mx-auto mt-8">
          <div className="bb-borrow-box-head bg-green-600 text-white p-2 text-xl">
            <h1>ข้อมูลสถิติของห้องสมุด</h1>
          </div>
          <div className="bb-borrow-box-main flex flex-row gap-4 w-full justify-center shadow-xl p-4">
            <div className="flex flex-col bg-red-200 w-full">
              <div className="bb-borrow-box-info bg-white">
                <div className="bb-data-box m-4 shadow-xl p-4">
                  <h2 className="flex text-xl">หนังสือทั้งหมด (เล่ม)</h2>
                  <div className="bb-data text-8xl font-bold text-center">
                    {bookCount}
                  </div>
                </div>
              </div>

              <div className="bb-borrow-box-info bg-white">
                <div className="bb-data-box m-4 shadow-xl p-4">
                  <h2 className="flex text-xl">สมาชิกทั้งหมด (คน)</h2>
                  <div className="bb-data text-8xl font-bold text-center">
                    {memberCount}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col bg-red-200 w-full">
              <div className="bb-borrow-box-info bg-white">
                <div className="bb-data-box m-4 shadow-xl p-4">
                  <h2 className="flex text-xl">
                    การใช้บริการยืม-คืนหนังสือ (ครั้ง)
                  </h2>
                  <div className="bb-data text-8xl font-bold text-center">
                    {borrowCount}
                  </div>
                </div>
              </div>

              <div className="bb-borrow-box-info bg-white">
                <div className="bb-data-box m-4 shadow-xl p-4">
                  <h2 className="flex text-xl">หนังสือค้างส่ง (เล่ม)</h2>
                  <div className="bb-data text-8xl font-bold text-center">
                    2
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
