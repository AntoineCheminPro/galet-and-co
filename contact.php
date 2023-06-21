<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    // Adresse e-mail de votre client
    $clientEmail = 'antoine.chemin@free.fr';

    // Corps du message
    $body = "Nom: $name\n";
    $body .= "Email: $email\n";
    $body .= "Téléphone: $phone\n";
    $body .= "Objet: $subject\n";
    $body .= "Message: $message\n";

    // En-têtes du courrier électronique
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Envoi du courrier électronique
    if (mail($clientEmail, $subject, $body, $headers)) {
        echo 'Le courrier électronique a été envoyé avec succès à votre client.';
    } else {
        echo 'Une erreur s\'est produite lors de l\'envoi du courrier électronique.';
    }
}
?>
