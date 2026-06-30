export const toFormData = (data: Record<string, string | number>) => {
  const formData = new FormData();

  Object.entries(data).forEach(([key, value]) => {
    formData.append(key, String(value));
  });

  return formData;
};
