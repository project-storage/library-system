import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import BorrowService from "../../service/BorrowService";
import "../../style/BorrowBookStyle/BorrowBook_style.css";

export default function BorrowBook_main() {
  const [borrows, setBorrows] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchBorrows = async () => {
      try {
        const response = await BorrowService.getAllBorrow();
        setBorrows(response.data.allBorrows);
      } catch (error) {
        console.error("Error fetching borrows:", error);
      }
    };

    fetchBorrows();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const results = borrows.filter((borrow) =>
      borrow.tb_book.b_name.toLowerCase().includes(searchTerm.toLowerCase())||
      borrow.tb_member.m_user.toLowerCase().includes(searchTerm.toLowerCase())

    );
    setSearchResults(results);
  };

  return (
    <>
      <Navbar />
      <section className="bb-main">
        <div className="container w-[760px] mx-auto mt-8">
          <div className="bb-box border-2 border-black p-6">
            <h3 className="mt-2 mb-8 text-lg font-medium">
              การจัดการข้อมูลการยืม-คืนหนังสือ
            </h3>

            {/* ค้นหาหนังสือ */}
            <form onSubmit={handleSearch} className="my-6">
              <input
                className="border-[1.5px] border-black"
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button
                type="submit"
                className="mx-4 border-[1.5px] border-black px-6 font-medium rounded-md"
              >
                ค้นหา
              </button>
            </form>

            <div className="button-checkinfo flex justify-end gap-2 my-2">
              <Link
                to="/borrowbook_borrow"
                className="border-[1.5px] border-black px-3 font-medium rounded-md"
              >
                ยืม-คืนหนังสือ
              </Link>
              <button className="border-[1.5px] border-black px-3 font-medium rounded-md">
                ข้อมูลสถิติ
              </button>
            </div>

            <table className="w-full border border-collapse border-black">
              <thead className="bb-table-head">
                <tr>
                  <th>รหัสหนังสือ</th>
                  <th>ชื่อหนังสือ</th>
                  <th>ผู้ยืม-คืน</th>
                  <th>วันที่ยืม</th>
                  <th>วันที่คืน</th>
                  <th>ค่าปรับ</th>
                </tr>
              </thead>
              <tbody className="bb-table-body">
                {searchTerm === ""
                  ? // ถ้ายังไม่มีการค้นหา
                    borrows.map((borrow) => (
                      <tr key={borrow.id}>
                        <td>{borrow.tb_book.b_id}</td>
                        <td>{borrow.tb_book.b_name}</td>
                        <td>{borrow.tb_member.m_name}</td>
                        <td>{borrow.br_date_br}</td>
                        <td>{borrow.br_date_rt}</td>
                        <td>{borrow.br_fine}</td>
                      </tr>
                    ))
                  : // ถ้ามีการค้นหา
                    searchResults.map((borrow) => (
                      <tr key={borrow.id}>
                        <td>{borrow.tb_book.b_id}</td>
                        <td>{borrow.tb_book.b_name}</td>
                        <td>{borrow.tb_member.m_name}</td>
                        <td>{borrow.br_date_br}</td>
                        <td>{borrow.br_date_rt}</td>
                        <td>{borrow.br_fine}</td>
                      </tr>
                    ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
