<!DOCTYPE html>
<html lang="fr">
<head>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet" />
    <link rel="stylesheet" href="../index.css">
    <title>Connexion</title>
   </head>
<body>
  <header>
    <div>
      <img src="../Logo.png" alt="logo les amis des pattes avec un chat à l'interieur d'un chien" id="logo">
    </div>
    <div>
      <h1>Les Amis Des Pattes</h1>
    </div>
    <div class="header_link">
      <span class="material-icons" id="account_circle">
        account_circle
      </span>
    </div>
  </header>
  <main id="connexion">
  
    <div id="container">
      <!-- zone de connexion -->
  
      <form action="verification.php" method="POST">
        <h1>Connexion</h1>
  
        <label><b>Nom d'utilisateur</b></label>
        <input type="text" placeholder="Entrer le nom d'utilisateur" name="username" required>
  
        <label><b>Mot de passe</b></label>
        <input type="password" placeholder="Entrer le mot de passe" name="password" required>
  
        <input type="submit" id='submit' value='LOGIN'>
        <?php
                  if(isset($_GET['erreur'])){
                  $err = $_GET['erreur'];
                  if($err==1 || $err==2)
                  echo "<p style='color:red'>Utilisateur ou mot de passe incorrect</p>";
                  }
                  ?>
      </form>
      <!-- zone de vérification -->
    </div>
    <?php
                  session_start();
                  if(isset($_POST['username']) && isset($_POST['password']))
                  {
                  // connexion à la base de données
                  $db_username = 'root';
                  $db_password = 'mot_de_passe_bdd';
                  $db_name = 'nom_bdd';
                  $db_host = 'localhost';
                  $db = mysqli_connect($db_host, $db_username, $db_password,$db_name)
                  or die('could not connect to database');
                  
                  // on applique les deux fonctions mysqli_real_escape_string et htmlspecialchars
                  // pour éliminer toute attaque de type injection SQL et XSS
                  $username = mysqli_real_escape_string($db,htmlspecialchars($_POST['username'])); 
                  $password = mysqli_real_escape_string($db,htmlspecialchars($_POST['password']));
                  
                  if($username !== "" && $password !== "")
                  {
                  $requete = "SELECT count(*) FROM utilisateur where 
                  nom_utilisateur = '".$username."' and mot_de_passe = '".$password."' ";
                  $exec_requete = mysqli_query($db,$requete);
                  $reponse = mysqli_fetch_array($exec_requete);
                  $count = $reponse['count(*)'];
                  if($count!=0) // nom d'utilisateur et mot de passe correctes
                  {
                  $_SESSION['username'] = $username;
                  header('Location: principale.php');
                  }
                  else
                  {
                  header('Location: login.php?erreur=1'); // utilisateur ou mot de passe incorrect
                  }
                  }
                  else
                  {
                  header('Location: login.php?erreur=2'); // utilisateur ou mot de passe vide
                  }
                  }
                  else
                  {
                  header('Location: login.php');
                  }
                  mysqli_close($db); // fermer la connexion
                  ?>
    <div id="content">
      <!-- tester si l'utilisateur est connecté -->
      <?php
              session_start();
              if($_SESSION['username'] !== ""){
              $user = $_SESSION['username'];
              // afficher un message
              echo "Bonjour $user, vous êtes connecté";
              }
              ?>
    </div>
    <!-- zone de déconnexion -->
    <div id="content">
  
      <a href='principale.php?deconnexion=true'><span>Déconnexion</span></a>
  
      <!-- tester si l'utilisateur est connecté -->
      <?php
              session_start();
              if(isset($_GET['deconnexion']))
              { 
              if($_GET['deconnexion']==true)
              { 
              session_unset();
              header("location:login.php");
              }
              }
              else if($_SESSION['username'] !== ""){
              $user = $_SESSION['username'];
              // afficher un message
              echo "<br>Bonjour $user, vous êtes connectés";
              }
              ?>
    </div>
  </main>
  <footer id="footer">
    <p id="name">Created by : Josiane BUREAU</p>
  </footer>
  <script src="../index.js"></script> 
</body>
</html>