<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Login | Cafe</title>
  <link rel="stylesheet" href="css/login.css" />
</head>
<body>

  <section class="login-page">
    <div class="login-card">
      <h2>Welcome <span>Back</span></h2>
      <p>Masuk untuk mengelola menu kopi favoritmu.</p>

      <form action="" method="post">
        <div class="input-group">
          <input type="text" name="username" required />
          <label>Username</label>
        </div>

        <div class="input-group">
          <input type="password" name="password" required />
          <label>Password</label>
        </div>

        <button type="submit" class="login-btn">Login</button>
      </form>

      <p class="switch-text">
  Belum punya akun?
  <a href="register.php">Daftar sekarang</a>
</p>

      <a href="index.html" class="back-home">← Kembali ke Home</a>
    </div>
  </section>

</body>
</html>