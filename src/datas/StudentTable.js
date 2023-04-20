import { DataType } from "ka-table/enums";

const data = [
  {
    studentId: "2201013",
    classId: "2-wdj",
    studentContact: "010-1234-5678",
    studentName: "강주원",
  },
  {
    studentId: "2201014",
    classId: "2-wdj",
    studentContact: "010-4567-8901",
    studentName: "김유민",
  },
  {
    studentId: "2201015",
    classId: "2-wdj",
    studentContact: "010-2234-7789",
    studentName: "이주현",
  },
  {
    studentId: "2201392",
    classId: "2-wdj",
    studentContact: "010-7776-6665",
    studentName: "이재일",
  },
  {
    studentId: "2201393",
    classId: "2-wdj",
    studentContact: "010-8832-1234",
    studentName: "이현민",
  },
  {
    studentId: "2201394",
    classId: "2-wdj",
    studentContact: "010-1234-5678",
    studentName: "김지은",
  },
  {
    studentId: "2201395",
    classId: "2-wdj",
    studentContact: "010-1234-5678",
    studentName: "송민지",
  },
  {
    studentId: "2201015",
    classId: "2-wdj",
    studentContact: "010-9876-5432",
    studentName: "홍길동",
  },
  {
    studentId: "2201392",
    classId: "2-wdj",
    studentContact: "010-1234-5678",
    studentName: "이순신",
  },
  {
    studentId: "2201393",
    classId: "2-wdj",
    studentContact: "010-1234-5678",
    studentName: "김유신",
  },
  {
    studentId: "2201394",
    classId: "2-wdj",
    studentContact: "010-1234-5678",
    studentName: "강감찬",
  },
  {
    studentId: "2201395",
    classId: "2-wdj",
    studentContact: "010-1234-5678",
    studentName: "이성계",
  },
  {
    studentId: "2201015",
    classId: "2-cpj",
    studentContact: "010-1234-5678",
    studentName: "다람쥐",
  },
  {
    studentId: "2201392",
    classId: "2-cpj",
    studentContact: "010-1234-5678",
    studentName: "토끼",
  },
  {
    studentId: "2201393",
    classId: "2-cpj",
    studentContact: "010-1234-5678",
    studentName: "사슴",
  },
  {
    studentId: "2201394",
    classId: "2-cpj",
    studentContact: "010-1234-5678",
    studentName: "곰",
  },
  {
    studentId: "2201395",
    classId: "2-cpj",
    studentContact: "010-1234-5678",
    studentName: "거북이",
  },
  {
    studentId: "2201015",
    classId: "2-cpj",
    studentContact: "010-1234-5678",
    studentName: "고양이",
  },
];

const attributes = [
  /* FIXME: 원하는 형식으로 수정가능함
  {
    key: "<attribute name>"
    title: "<alias name>",
    DataType: DataType.String, Number, Boolean, Date, Time, DateTime....
  },
  */
  {
    key: "studentId",
    title: "학번",
    DataType: DataType.String,
  },
  {
    key: "classId",
    title: "반",
    DataType: DataType.String,
  },
  {
    key: "studentContact",
    title: "연락처",
    DataType: DataType.String,
  },
  {
    key: "studentName",
    title: "이름",
    DataType: DataType.String,
  },
];

export { data, attributes };
