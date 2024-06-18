import React, { useEffect, useState } from "react";

const useFormData = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  return { formData, setFormData };
};

export default useFormData;
