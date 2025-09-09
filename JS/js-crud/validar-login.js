import { supabase } from "../config/supabase.js";


const loginForm = document.getElementById("loginForm");
const errorMessage = document.getElementById("errorMessage");

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const usuario = document.getElementById("usuario").value.trim();
  const contrasena = document.getElementById("contrasena").value.trim();

    // Validación básica
    if (!usuario || !contrasena) {
        errorMessage.textContent = "⚠️ Ingresá usuario y contraseña.";
        return;
    }


  try {
    // Buscar administrador con usuario y contraseña
    const { data, error } = await supabase
      .from("administrador")
      .select("*")
      .eq("usuario", usuario)
      .eq("contrasena", contrasena)
      .single();

    if (error || !data) {
        errorMessage.textContent = "❌ Usuario o contraseña incorrectos.";
        return;
    }

    if (data.length > 0) {
        // Guardar datos de sesión
        localStorage.setItem("usuarioLogueado", JSON.stringify(data[0]));

        // Redirigir a inicio
        window.location.href = "../../HTML/ADMIN/inicioAdmin.html";
    }

    // ✅ Login exitoso → redirigir
    window.location.href = "../../HTML/ADMIN/inicioAdmin.html";
  } catch (err) {
    console.error("Error en login:", err);
    errorMessage.textContent = "⚠️ Hubo un error al intentar iniciar sesión.";
  }

});
