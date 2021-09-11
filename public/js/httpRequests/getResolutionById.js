export default async function getPatientsResolutionsById(jwt) {
  try {
    const res = await fetch("/patient/me/resolutions", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    });
    if (res.status === 404) {
      return "no matches by this name";
    }
    if (res.status !== 200) {
      throw new Error(`Something went wrong. Error: ${res.statusText}`);
    }

    return res.json();
  } catch (err) {
    console.log(err.message);
    return null;
  }
}
