import React from "react";
import dayjs from "dayjs";
import { createLeaveApplication } from "./services/leaveApplication";

export default function TestPost() {
  const handleSubmit = async () => {
    try {
      const file = new File(["Test file"], "test.txt", { type: "text/plain" });

      const data = {
        maximum_leave_day: 12,
        leave_day_taken: 3,
        remaining_leave_day: 9,
        application_date: dayjs(),
        start_date: dayjs("2025-08-20"),
        end_date: dayjs("2025-08-22"),
        reason: "Nghỉ phép cá nhân",
        approver_id: 1,
        leave_day: 2,
        substitute_person_id: 2,
        leave_type_id: 1,
        related_person_id: 3,
        proposed_status_id: 1,
        paid_rate_id: 1,
        note: "Ghi chú",
        attached_file: file,
      };

      const result = await createLeaveApplication(data);
      console.log("Kết quả:", result);
    } catch (error) {
      console.error("Lỗi:", error);
    }
  };

  const callApi = async () => {
    setLoading(true);
    try {
      // Ví dụ GET: /test
      const res = await formInstance.get("/test");
      setResult(res.data);
    } catch (err) {
      console.error(err);
      setResult({ error: err.message });
    } finally {
      setLoading(false);
    }
  };
  return <button onClick={handleSubmit}>Gửi đơn nghỉ phép</button>;
}
