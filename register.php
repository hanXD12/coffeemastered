<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Register | Cafe</title>
  <link rel="stylesheet" href="css/login.css">
</head>
<body>

<section class="login-page">
  <div class="login-card">
    <h2>Buat <span>Akun</span></h2>
    <p>Daftar dulu untuk menikmati layanan cafe kami.</p>

    <form action="proses_register.php" method="post">
      <div class="input-group">
        <input type="text" name="nama" required>
        <label>Nama Lengkap</label>
      </div>

      <div class="input-group">
        <input type="text" name="username" required>
        <label>Username</label>
      </div>

      <div class="input-group">
        <input type="password" name="password" required>
        <label>Password</label>
      </div>

      <button type="submit" class="login-btn">Register</button>
    </form>

    <p class="switch-text">
      Sudah punya akun?
      <a href="login.php">Login sekarang</a>
    </p>
  </div>
</section>

</body>
</html>