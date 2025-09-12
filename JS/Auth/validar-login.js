import { supabase } from '../config/supabase.js'

const form = document.getElementById("loginForm")

form.addEventListener("submit", async (e) => {
  e.preventDefault()
  const email = document.getElementById("usuario").value
  const password = document.getElementById("contrasena").value

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  })

  if (error) {
    console.error("Error login:", error.message)
    document.getElementById("errorMessage").textContent = "Credenciales inválidas"
    return
  }

  console.log("Usuario logueado:", data.user)
  // Redirigir si login OK
  window.location.href = "inicioAdmin.html"
})
