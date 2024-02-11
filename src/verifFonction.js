// Description: Fonctions de vérification des données.
// Verifie si le nom et ou le prenom et valide est valide
const verifNom = (nom) => {
  const regex = /^[a-zA-ZÀ-ÖØ-öø-ÿ]+$/;
  return regex.test(nom);
}

// Verifie si l'email est valide
const verifEmail = (email) => {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return regex.test(email);
}

// Calcul l'age de la personne
const calculateAge = (date) => {
  const dateActuelle = new Date();
  const dateNaissance = new Date(date);
  let age = dateActuelle.getFullYear() - dateNaissance.getFullYear();
  if (dateActuelle.getMonth() < dateNaissance.getMonth() || (dateActuelle.getMonth() === dateNaissance.getMonth() && dateActuelle.getDate() < dateNaissance.getDate())) {
    return age--;
  }else{
    return age;    
  }
}

// Verifie si la date est valide et si la personne est majeur
const verifDate = (date) => {
  const regex = /^\d{4}-\d{2}-\d{2}$/;
  if (regex.test(date)) {
      const ageRecup = calculateAge(date);
      if (ageRecup >= 18){
          return true;
      }else{
          return false;
      }
  }else{
      return false;
  }
}

// Verifie si la code est valide et français
const verifCode = (code) => {
  const regex = /^[0-9]{5}$/;
  return regex.test(code);
}


export {verifNom, verifEmail, verifDate, verifCode, calculateAge};

