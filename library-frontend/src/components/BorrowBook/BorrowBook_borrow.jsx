import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function BorrowBook_borrow() {
  // const [m_user, setM_user] = useState("");
  // const [b_id, setB_id] = useState("");
  // const [br_date_br,setBr_date_br] = useState(0000-00-00)
  // const [br_date_rt,setBr_date_rt] = useState(000-00-00)
  // const [br_fine,setBr_fine] = useState(0)
  



  return (
    <>
      <Navbar />
      <section className="bb-borrow">
        <div className="container w-[660px] mx-auto mt-8">
          <div className="bb-borrow-box border-2 border-black p-6">
            <div className="btn-menu flex justify-center gap-4">
              <Link
                to="/borrowbook_borrow"
                className="border-[1.5px] border-black py-1 px-3 font-medium rounded-md underline"
              >
                ยืมหนังสือ
              </Link>
              <Link
                to="/borrowbook_return"
                className="border-[1.5px] border-black py-1 px-3 font-medium rounded-md"
              >
                คืนหนังสือ
              </Link>
            </div>
            <h1 className="text-2xl mt-2 mb-8">ยืมหนังสือ</h1>
            {/* หาผู้ทที่ต้องการยืม  */}
            <form action="" className="flex justify-center mb-3">
              <label htmlFor="username" className="">
                ผู้ที่ต้องการยืม:
              </label>
              <input
                type="text"
                id="m_user"
                name="username"
                className="border-grey border-[1.5px] ml-2"
                placeholder="กรอกชื่อผู้ใช้"
                required
              />
              <button
                type="submit"
                className="mx-4 border-[1.5px] border-black px-4 font-medium rounded-md"
              >
                ตกลง
              </button>
            </form>
            {/* หารหัสหนังสือ  */}
            <form action="" className="flex justify-center">
              <label htmlFor="username" className="">
                รหัสหนังสือ:
              </label>
              <input
                type="text"
                id="b_id"
                name="b_id"
                className="border-grey border-[1.5px] ml-2"
                placeholder="กรอกชื่อผู้ใช้"
                required
              />
              <button
                type="submit"
                className="mx-4 border-[1.5px] border-black px-4 font-medium rounded-md"
              >
                ตกลง
              </button>
            </form>

            <form className="w-[560px] mx-auto my-4">
              <div className="flex flex-col justify-center border-[1.5px] border-black">
                <div className="flex">
                  <label className="w-1/3  border-b-[1.5px] border-r-[1.5px] border-black">
                    ชื่อ-สกุลผู้ยืม
                  </label>
                  <input
                    type="text"
                    className=" border-b-[1.5px] border-black w-full"
                    readOnly
                  />
                </div>
                <div className="flex">
                  <label className="w-1/3 border-b-[1.5px] border-r-[1.5px] border-black">
                    รหัสหนังสือ
                  </label>
                  <input
                    type="text"
                    className=" border-b-[1.5px] border-black ring-0  w-full"
                    readOnly
                  />
                </div>
                <div className="flex">
                  <label className="w-1/3 border-b-[1.5px] border-r-[1.5px] border-black">
                    ชื่อหนังสือ
                  </label>
                  <input
                    type="text"
                    className=" border-b-[1.5px]  border-black  w-full"
                    re
                  />
                </div>
                <div className="flex justify-center gap-2 p-1">
                  <button className="border-[1.5px] border-black px-4 rounded">
                    ยืมหนังสือ
                  </button>
                  <button className="border-[1.5px] border-black px-4 rounded">
                    ยกเลิก
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
