// 1️⃣ Main logic
const btn = document.getElementById("payBtn");

btn.addEventListener("click", async () => {
  // 2️⃣ Check NFC support inside click
  if (!('NDEFReader' in window)) {
    showCardForm();
    return;
  }

  // 3️⃣ NFC scan logic
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

// 4️⃣ Fallback function for unsupported devices
function showCardForm() {
  alert("NFC not supported on this device. Please use card manually.");
}
// 3️⃣ Fallback function for unsupported devices
function showCardForm() {
  alert("NFC not supported. Show card form here.");
}

