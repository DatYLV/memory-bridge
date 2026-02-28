"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

export default function CreateProfile() {
  const [fullName, setFullName] = useState("");
  const [birthDay, setBirthDay] = useState("");
  const [birthMonth, setBirthMonth] = useState("");
  const [birthYear, setBirthYear] = useState("");
  const [hometown, setHometown] = useState("");
  const [bio, setBio] = useState("");
  const [loading, setLoading] = useState(false);

  const months = [
    "Tháng 1","Tháng 2","Tháng 3","Tháng 4",
    "Tháng 5","Tháng 6","Tháng 7","Tháng 8",
    "Tháng 9","Tháng 10","Tháng 11","Tháng 12",
  ];

  const MAX_AGE = 110;

  const years = Array.from(
    { length: MAX_AGE },
    (_, i) => new Date().getFullYear() - i
  );

  // 🔥 Tính số ngày theo tháng + năm
  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month, 0).getDate();
  };

  const days =
    birthMonth && birthYear
      ? Array.from(
          {
            length: getDaysInMonth(
              parseInt(birthMonth),
              parseInt(birthYear)
            ),
          },
          (_, i) => i + 1
        )
      : [];

  // 🔥 Nếu đổi tháng/năm làm ngày sai → reset
  useEffect(() => {
    if (birthDay && birthMonth && birthYear) {
      const maxDays = getDaysInMonth(
        parseInt(birthMonth),
        parseInt(birthYear)
      );

      if (parseInt(birthDay) > maxDays) {
        setBirthDay("");
      }
    }
  }, [birthMonth, birthYear]);

  const handleSubmit = async () => {
    if (!fullName) {
      alert("Vui lòng nhập họ tên");
      return;
    }

    setLoading(true);

    const { error } = await supabase.from("profiles").insert([
      {
        full_name: fullName,
        birth_year: birthYear ? parseInt(birthYear) : null,
        hometown: hometown || null,
        bio: bio || null,
      },
    ]);

    if (error) {
      console.error(error);
      alert("Lưu thất bại");
    } else {
      alert("Tạo hồ sơ thành công!");
      setFullName("");
      setBirthDay("");
      setBirthMonth("");
      setBirthYear("");
      setHometown("");
      setBio("");
    }

    setLoading(false);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "10px 12px",
    borderRadius: 8,
    border: "1px solid #333",
    background: "#1f1f1f",
    color: "white",
    outline: "none",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom right, #0f0f0f, #1a1a2e)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 520,
          background: "#111",
          padding: 30,
          borderRadius: 16,
          boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
        }}
      >
        <h1
          style={{
            marginBottom: 25,
            fontSize: 24,
            fontWeight: 600,
            color: "#a78bfa",
          }}
        >
          Tạo Hồ Sơ
        </h1>

        {/* Họ tên */}
        <div style={{ marginBottom: 18 }}>
          <label style={{ display: "block", marginBottom: 6 }}>
            Họ tên
          </label>
          <input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            style={inputStyle}
          />
        </div>

        {/* Ngày sinh */}
        <div style={{ marginBottom: 18 }}>
          <label style={{ display: "block", marginBottom: 6 }}>
            Ngày sinh
          </label>

          <div style={{ display: "flex", gap: 10 }}>
            {/* Ngày */}
            <select
              value={birthDay}
              onChange={(e) => setBirthDay(e.target.value)}
              style={inputStyle}
              disabled={!birthMonth || !birthYear}
            >
              <option value="">Ngày</option>
              {days.map((day) => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}
            </select>

            {/* Tháng */}
            <select
              value={birthMonth}
              onChange={(e) => setBirthMonth(e.target.value)}
              style={inputStyle}
            >
              <option value="">Tháng</option>
              {months.map((month, index) => (
                <option key={index} value={index + 1}>
                  {month}
                </option>
              ))}
            </select>

            {/* Năm */}
            <select
              value={birthYear}
              onChange={(e) => setBirthYear(e.target.value)}
              style={inputStyle}
            >
              <option value="">Năm</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Quê quán */}
        <div style={{ marginBottom: 18 }}>
          <label style={{ display: "block", marginBottom: 6 }}>
            Quê quán
          </label>
          <input
            value={hometown}
            onChange={(e) => setHometown(e.target.value)}
            placeholder="Ví dụ: Hà Nội"
            style={inputStyle}
          />
        </div>

        {/* Giới thiệu */}
        <div style={{ marginBottom: 25 }}>
          <label style={{ display: "block", marginBottom: 6 }}>
            Giới thiệu
          </label>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            rows={4}
            style={{ ...inputStyle, resize: "none" }}
          />
        </div>

        <button
          onClick={handleSubmit}
          disabled={loading}
          style={{
            width: "100%",
            padding: 12,
            borderRadius: 10,
            border: "none",
            cursor: "pointer",
            fontWeight: 600,
            fontSize: 15,
            background: "linear-gradient(135deg, #7c3aed, #a78bfa)",
            color: "white",
            opacity: loading ? 0.7 : 1,
          }}
        >
          {loading ? "Đang lưu..." : "Tạo hồ sơ"}
        </button>
      </div>
    </div>
  );
}
