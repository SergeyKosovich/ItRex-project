import { loginDoctor, getDoctorData } from "./doctorFetch.js";

const loginWrapper = document.querySelector(".login-wrapper");
const logoutWrapper = document.querySelector(".logout-wrapper");
const userLogin = document.querySelector(".logout-user-name");

class DoctorService {
  authDoctor = async (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    const doctor = await loginDoctor({ email, password });
    if (!doctor) return;

    localStorage.setItem("doctor-jwt", doctor.token);
    localStorage.setItem("doctorUserId", doctor.user_id);
    setTimeout(() => {
      document.location.href = `http://localhost:3000/doctor.html`;
    }, 1000);
  };

  getDoctor = async () => {
    const jwt = localStorage.getItem("doctor-jwt");
    const id = localStorage.getItem("doctorUserId");

    const doctor = await getDoctorData(id, jwt);
    if (!doctor) return;

    userLogin.innerHTML = `${doctor.name} | Specialization: '${doctor.specializations[0].name}'`;
    loginWrapper.classList.add("hidden");
    logoutWrapper.classList.add("active");
  };

  logoutDoctor() {
    localStorage.removeItem("doctor-jwt");
    localStorage.removeItem("doctorUserId");

    document.location.replace(`http://localhost:3000/doctorLogin.html`);
  }
}

export default new DoctorService();
