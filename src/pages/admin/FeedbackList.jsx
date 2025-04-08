import React, { useEffect, useState } from "react";
import AdminLayout from "../../layout/AdminLayout";
import { useMutation } from "@tanstack/react-query";
import { adminCommunication } from "../../communication/adminCommunication";
import FeedbackCards from "../../components/admin/FeedbackCards";

export default function FeedbackList() {
  document.title = "Admin | Feedback";
  const [feedbacks, setFeedbacks] = useState([]);
  const { mutate, isPending } = useMutation({
    mutationFn: () => adminCommunication.getAllFeedback(),
    onSuccess: ({ data }) => {
      if (data.success) {
        setFeedbacks(data?.feedbacks);
      }
    },
  });

  useEffect(() => {
    mutate();
  }, []);
  console.log(feedbacks);
  return (
    <AdminLayout>
      <div>
        <h2 className="text-3xl to-blue-900
        ">Feedbacks</h2>
        {feedbacks.length>0 && feedbacks?.map((f, i)=>(
          <FeedbackCards key={f._id} fullName={f.fullName} email={f.email} createdAt={f.createdAt} feedbackMessage={f.feedbackMessage}  />
        ))}
      </div>
    </AdminLayout>
  );
}
