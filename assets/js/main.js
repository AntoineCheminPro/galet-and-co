function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var subject = document.getElementById('subject').value;

    // Vérification du nom
    if (name === '') {
      alert('Veuillez saisir votre nom.');
      return false;
    }

    // Vérification de l'email
    var emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
    if (!email.match(emailPattern)) {
      alert('Veuillez saisir une adresse email valide.');
      return false;
    }

    // Vérification du numéro de téléphone
    var phonePattern = /^\d{10}$/;
    if (!phone.match(phonePattern)) {
      alert('Veuillez saisir un numéro de téléphone valide (10 chiffres).');
      return false;
    }

    // Vérification de l'objet
    if (subject === '') {
      alert('Veuillez saisir un objet.');
      return false;
    }

    // Si toutes les vérifications sont passées, le formulaire est valide
    return true;
  }