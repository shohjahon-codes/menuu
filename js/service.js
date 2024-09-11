const url = "http://localhost:3000";

export const banner = async () => {
  try {
    
    const res = await fetch(`${url}/banner`);
    
    const data = await res.json();
   
    return data;
  } catch (error) {
    return error.message;
  }
};
