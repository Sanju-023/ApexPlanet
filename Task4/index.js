
  function handleFormSubmit(event) {
    event.preventDefault();
    alert("Message sent successfully!");
    document.getElementById("contact-form").reset();
    return false;
  }

