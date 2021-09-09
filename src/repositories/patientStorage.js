import { Patient } from "../db/models.js";

export default class PatientStorage {
  async getPatient(userId) {
    const patient = await Patient.findOne({
      attributes: ["firstName", "lastName", "patient_id"],
      where: {
        user_id: userId,
      },
    });

    return patient || null;
  }
}
