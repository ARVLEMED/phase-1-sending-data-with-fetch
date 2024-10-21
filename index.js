function submitData(name, email) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify({ name, email }),
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log("Success:", data);
    const newId = data.id;
    document.body.innerHTML += `<p>${newId}</p>`; 
  })
  .catch((error) => {
    console.error("Error:", error);
    document.body.innerHTML += `<p>${error.message}</p>`; 
  });
}
