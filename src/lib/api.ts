const API_BASE_URL = "https://dwf-m7-desafio-production.up.railway.app";

export async function checkEmail(email: string) {
  // chequea contra la api si existe
  try {
    const res = await fetch(`${API_BASE_URL}/users/email/${email}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
export async function auth(email: string, password: string) {
  // obtiene un token
  try {
    const res = await fetch(API_BASE_URL + "/auth/token", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password, email }),
    });

    if (!res.ok) throw new Error('Error al iniciar sesión');

    const { token } = await res.json();

    return { token };

  } catch (error) {
    throw error
  }
}
export async function signUp(dataUser) {
  if (!dataUser) {
    console.error("error signUp");
  }
  try {
    const res = await fetch(API_BASE_URL + "/auth", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataUser),
    });
    const data = await res.json();
    return data
  } catch (error) {
    console.error(error);
  }
}
export async function getMe(token: string) {
  // obtiene la data del user vinculada al token
  try {
    const res = await fetch(`${API_BASE_URL}/me`, {
      method: "GET",
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
    const data = await res.json()
    return data
  } catch (error) {
    console.error(error);
  }
}
export async function updateDataUser(changes, token) {
  try {
    const res = await fetch(`${API_BASE_URL}/me`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
        Authorization: `bearer ${token}`,
      },
      body: JSON.stringify(changes),
    })
    const data = await res.json()
    return data
  } catch (error) {
    console.error(error);
  }
}
export async function getPetsLost(location) {
  try {
    const res = await fetch(
      `${API_BASE_URL}/mascotas-cerca-de?lat=${location.lat}&lng=${location.lng}`
    );
    const data = await res.json();
    return data

  } catch (error) {
    console.error(error);
  }
}
export async function sendReport(report) {
  if (!report) {
    console.error("error al enviar el reporte");
  }
  try {
    const res = await fetch(`${API_BASE_URL}/reports`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(report),
    });
    if (!res.ok) throw new Error('Error al enviar el reporte');
    const data = await res.json();
    return data
  } catch (error) {
    console.error(error);
  }
}
export async function getPetsUser(token) {
  try {
    const res = await fetch(`${API_BASE_URL}/me/reports`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
    const data = await res.json()
    return data
  } catch (error) {
    console.error(error);
  }
}
export async function getPetUser(token, petId) {
  try {
    const res = await fetch(`${API_BASE_URL}/me/reports/${petId}`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
    const data = await res.json()
    return data
  } catch (error) {
    console.error(error);
  }
}
export async function createPet(dataPet, token) {
  try {
    const res = await fetch(`${API_BASE_URL}/me/reports`, {
      method: "post",
      headers: {
        'Content-Type': 'application/json',
        Authorization: `bearer ${token}`,
      },
      body: JSON.stringify(dataPet),
    })
    const data = await res.json()
    return data
  } catch (error) {
    console.error(error);
  }
}
export async function updatePet({ newDataPet, id, token }) {
  try {
    const res = await fetch(`${API_BASE_URL}/me/reports/${id}`, {
      method: "put",
      headers: {
        'Content-Type': 'application/json',
        Authorization: `bearer ${token}`,
      },
      body: JSON.stringify(newDataPet),
    })
    const data = await res.json()
    return data
  } catch (error) {
    console.error(error);
  }

}
export async function deletePet(id, token) {
  try {
    const res = await fetch(`${API_BASE_URL}/me/reports/${id}`, {
      method: "delete",
      headers: {
        'Content-Type': 'application/json',
        Authorization: `bearer ${token}`,
      },
    })
    const data = await res.json()
    return data
  } catch (error) {
    console.error(error);
  }
}
