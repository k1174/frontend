import  { useEffect, useState } from "react";

export default function TotalRegistration({ job }) {
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const fetchTotal = async () => {
      const response = await fetch(`/service/getUsersCount/${job._id}`);
      if (!response.ok) {
        console.error("Failed to get total");
        return;
      }
      const total = await response.json();
      console.log(total)
      setTotal(total.count);
    };

    fetchTotal();
  },[]);
  
  return (
    <>
        <h2>Total Registrations: {total}</h2>
    </>
  )
}