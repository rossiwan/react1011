import { useState } from "react";

type Member = {
  name: string;
  position: string;
  photoUrl?: string;
  career?: string[];
};

export default function GovernmentApp() {
  const [members, setMembers] = useState<Member[]>([
    {
      name: "อนุทิน ชาญวีรกูล",
      position: "นายกรัฐมนตรี",
      photoUrl: "https://static.thairath.co.th/media/dFQROr7oWzulq5Fa6rV7mX2Itn0u25ZCEexa5Fd9ANw0jkrGpkkMvrGwVxVuYJAU0D1.webp",
      career: [
        "อดีตรัฐมนตรีว่าการกระทรวงสาธารณสุข (2562–2566)",
        "อดีตรัฐมนตรีช่วยว่าการกระทรวงพาณิชย์",
        "หัวหน้าพรรคภูมิใจไทย",
      ],
    },
    {
      name: "เอกนิติ นิติทัณฑ์ประภาศ",
      position: "รัฐมนตรีว่าการกระทรวงการคลัง",
      photoUrl: "https://www.prachachat.net/wp-content/uploads/2024/02/11-1-%E0%B8%AA%E0%B8%A3%E0%B8%A3%E0%B8%9E%E0%B8%AA%E0%B8%B2%E0%B8%A1%E0%B8%B4%E0%B8%95-%E0%B8%A1%E0%B8%B8%E0%B9%88%E0%B8%87-22%E0%B8%81%E0%B8%A3%E0%B8%A1-ESG22-1024x683.jpg",
      career: [
        "อดีตอธิบดีกรมสรรพากร",
        "อดีตผู้อำนวยการสำนักงานนโยบายรัฐวิสาหกิจ",
      ],
    },
    {
      name: "ศิษฐศักดิ์ พวงเกตุแก้ว",
      position: "รัฐมนตรีว่าการกระทรวงการต่างประเทศ",
      photoUrl: "https://www.matichon.co.th/wp-content/uploads/2025/09/S__148758645-728.jpg",
      career: [
        "อดีตปลัดกระทรวงการต่างประเทศ",
        "อดีตเอกอัครราชทูตไทยประจำญี่ปุ่น",
      ],
    },
    {
      name: "อรรถพล ฤกษ์พิบูลย์",
      position: "รัฐมนตรีว่าการกระทรวงพลังงาน",
      photoUrl: "https://www.prachachat.net/wp-content/uploads/2025/09/Cover-photo-52-728x485.jpg",
      career: [
        "อดีต CEO บริษัท ปตท. จำกัด (มหาชน)",
        "ทำงานในสายพลังงานกว่า 30 ปี",
      ],
    },
    {
      name: "จาตุพร บุรุษพัฒน์",
      position: "รัฐมนตรีว่าการกระทรวงพาณิชย์",
      photoUrl: "https://www.matichon.co.th/wp-content/uploads/2024/09/Online-728x520-copy-1.jpg",
      career: [
        "อดีตปลัดกระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม",
        "ข้าราชการประสบการณ์ยาวนานด้านสิ่งแวดล้อม",
      ],
    },
    {
      name: "พิพัฒน์ รัชกิจประการ",
      position: "รัฐมนตรีว่าการกระทรวงคมนาคม",
      photoUrl: "https://www.newtv.co.th/images/thumbnail/l/20240601042645_news18.jpg",
      career: [
        "อดีตรัฐมนตรีว่าการกระทรวงท่องเที่ยวและกีฬา",
        "นักธุรกิจจากภาคใต้",
      ],
    },
    {
      name: "ศุภมาศ อิศรภักดี",
      position: "รัฐมนตรีว่าการกระทรวงดิจิทัลเพื่อเศรษฐกิจและสังคม",
      photoUrl: "https://static.thairath.co.th/media/dFQROr7oWzulq5Fa5LBaLyekHwK8ZmH5Pkb5P5PmuzFa1URzFRv0vBMYoDYPRkuMwj0.webp",
      career: [
        "อดีตรัฐมนตรีว่าการกระทรวงการอุดมศึกษา วิทยาศาสตร์ วิจัยและนวัตกรรม",
        "สมาชิกพรรคภูมิใจไทย",
      ],
    },
  ]);

  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [career, setCareer] = useState("");
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const addOrEditMember = () => {
    if (!name.trim() || !position.trim()) return;

    const careerArray = career
      .split("\n")
      .map((c) => c.trim())
      .filter(Boolean);

    const newMember: Member = {
      name,
      position,
      photoUrl,
      career: careerArray,
    };

    if (editIndex !== null) {
      setMembers((prev) =>
        prev.map((m, idx) => (idx === editIndex ? newMember : m))
      );
      setEditIndex(null);
    } else {
      setMembers((prev) => [...prev, newMember]);
    }

    // Reset input fields
    setName("");
    setPosition("");
    setPhotoUrl("");
    setCareer("");
  };

  const onEdit = (index: number) => {
    const member = members[index];
    setName(member.name);
    setPosition(member.position);
    setPhotoUrl(member.photoUrl || "");
    setCareer(member.career?.join("\n") || "");
    setEditIndex(index);
  };

  const onDelete = (index: number) => {
    setMembers((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 font-sans">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">ทำเนียบรัฐบาล (ปัจจุบัน)</h1>

        {/* Input Form Section */}
        <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">{editIndex !== null ? "แก้ไขข้อมูลรัฐมนตรี" : "เพิ่มรัฐมนตรีใหม่"}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
            <input
              type="text"
              placeholder="ชื่อ"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
            />
            <input
              type="text"
              placeholder="ตำแหน่ง"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
            />
            <input
              type="text"
              placeholder="ลิงก์รูปภาพ (ไม่บังคับ)"
              value={photoUrl}
              onChange={(e) => setPhotoUrl(e.target.value)}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
            />
          </div>
          <textarea
            placeholder="ประวัติการทำงาน (บรรทัดละ 1 รายการ)"
            value={career}
            onChange={(e) => setCareer(e.target.value)}
            rows={4}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
          />
          <button
            onClick={addOrEditMember}
            className={`w-full mt-4 py-3 px-6 rounded-lg font-bold text-white transition-all duration-200
            ${editIndex !== null ? 'bg-green-500 hover:bg-green-600' : 'bg-blue-500 hover:bg-blue-600'}`}
          >
            {editIndex !== null ? "บันทึกการแก้ไข" : "เพิ่ม"}
          </button>
        </div>

        {/* Member List Section */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {members.map((m, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center">
              {m.photoUrl && (
                <div className="mb-4">
                  <img src={m.photoUrl} alt={m.name} className="w-24 h-24 rounded-full object-cover border-4 border-gray-200" />
                </div>
              )}
              <h3 className="text-xl font-bold text-gray-800">{m.name}</h3>
              <p className="text-sm font-medium text-blue-600 mb-2">{m.position}</p>
              {m.career && m.career.length > 0 && (
                <ul className="list-disc list-inside text-gray-600 text-left w-full mt-2">
                  {m.career.map((c, i) => (
                    <li key={i} className="text-sm">{c}</li>
                  ))}
                </ul>
              )}
              <div className="mt-4 flex space-x-2">
                <button
                  onClick={() => onEdit(idx)}
                  className="bg-yellow-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-yellow-600 transition-all duration-200"
                >
                  แก้ไข
                </button>
                <button
                  onClick={() => onDelete(idx)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-red-600 transition-all duration-200"
                >
                  ลบ
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}