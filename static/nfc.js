// 1️⃣ Check NFC support first
if (!('NDEFReader' in window)) {
  showCardForm();
  return;
}

// 2️⃣ Main logic
const btn = document.getElementById("payBtn");

btn.addEventListener("click", async () => {
  try {
    const reader = new NDEFReader();
    await reader.scan();
    console.log("Scan started... Tap card");

    reader.onreading = ({ message }) => {
      console.log("NFC Data:", message);
    };

  } catch (err) {
    console.error(err);
  }
});

// 3️⃣ Fallback function for unsupported devices
function showCardForm() {
  alert("NFC not supported. Show card form here.");
}

