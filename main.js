function openLightbox(imageSrc) {
  document.getElementById('lightbox-image').src = imageSrc;
  document.getElementById('lightbox').style.display = 'flex';
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}



const form = document.getElementById('form');
const Name = document.getElementById('txtName');
const Phone = document.getElementById('phone');
const Email = document.getElementById('email');
const text = document.getElementById('text');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  if (txtName.value === '') {
    showError(txtName, 'Name is required.');
  } else {
    showSuccess(txtName);
  }
  if (phone.value === '') {
    showError(phone, 'Phone is required.');
  } else {
    showSuccess(phone);
  }
  if (email.value === '') {
    showError(email, 'Email is required.');
  } else {
    showSuccess(email);
  }

  if (text.value === '') {
    showError(text, 'Detailed description of tattoo and budget is required.');
  } else {
    showSuccess(text);
  }
});

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}



document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault(); // ป้องกันการส่งฟอร์มแบบปกติ

  const txtName = document.getElementById("txtName").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();
  const NS = document.getElementById("NS").value.trim();
  const text = document.getElementById("text").value.trim();
  const isValid = true;

  // ล้างข้อความก่อนหน้า
  document.getElementById("successMessage").style.display = "none";
  document.getElementById("errorMessage").style.display = "none";

  // ตรวจสอบความถูกต้อง
  if (txtName === "" || phone === "" || email === "" || NS === "" || text === "") {
    isValid = false;
  }

  // แสดงข้อความตามผลการตรวจสอบ
  if (isValid) {
    document.getElementById("successMessage").style.display = "block";
    // สามารถส่งข้อมูลที่นี่ด้วย AJAX หรือการส่งฟอร์มปกติ
  } else {
    document.getElementById("errorMessage").style.display = "block";
  }
});


