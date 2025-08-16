import React from "react";
import dayjs from "dayjs";
import { formInstance } from "./formInstance";
export default function TestPost() {
  const handleSubmit = async () => {
    try {
      const formData = new FormData();

      formData.append("maximum_leave_day", 12);
      formData.append("leave_day_taken", 3);
      formData.append("remaining_leave_day", 9);
      formData.append("application_date", dayjs().format("YYYY-MM-DD"));
      formData.append("start_date", dayjs("2025-08-20").format("YYYY-MM-DD"));
      formData.append("end_date", dayjs("2025-08-22").format("YYYY-MM-DD"));
      formData.append("reason", "Nghỉ phép cá nhân");
      formData.append("approver_id", 1);
      formData.append("leave_day", 2);
      formData.append("substitute_person_id", 2);
      formData.append("leave_type_id", 1);
      formData.append("related_person_id", 3);
      formData.append("proposed_status_id", 1);
      formData.append("paid_rate_id", 1);
      formData.append("paid_rate", 1);
      formData.append("note", "Ghi chú");
      formData.append(
        "attached_file",
        new File(["Test file"], "test.txt", { type: "text/plain" })
      );

      const result = await formInstance.post(
        "/hrm_leave_application",
        formData
      );
      console.log("Kết quả:", result);
    } catch (error) {
      console.error("Lỗi:", error);
    }
  };

  return <button onClick={handleSubmit}>Gửi đơn nghỉ phép</button>;
}
