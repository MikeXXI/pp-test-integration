
# Description du projet

Le projet est un formulaire d'inscription avec un style spécifique, conçu pour effectuer des tests unitaires et d'intégration. Le formulaire valide les champs et affiche un message toaster pour informer l'utilisateur des actions effectuées.

## Détails du projet

### Instructions d'installation

Avant de commencer, exécutez la commande npm install pour installer toutes les dépendances du projet.

Vous pourrai ainsi réaliser les commandes suivantes :

 - `npm start` : pour lancer le projet
 - `npm run jsdoc` : pour générer le fichier de documentation du projet
 - `npm run test` : pour exécuter les tests

### Structure du projet

Le projet suit une structure standard pour une application React. Il comprend un dossier `test` contenant `TU_app.test.js`, qui concerne les tests unitaires de l'application, et `TU_verifFonction.test.js`, qui concerne les tests unitaires des fonctions du fichier `verifFonction.js`.
Le fichier `App.test.js` contient les tests d'integration.

L'application ets lancée grâce au fichier `App.js`.

### Technologies utilisées

Les technologies utilisées dans cette application sont les suivantes :

- **React** : Une bibliothèque JavaScript open-source utilisée pour la construction d'interfaces utilisateur interactives.

- **Material-UI** : Une bibliothèque de composants React pour une conception rapide et facile. ( d'autres sous composant de mui sont utilisées)

- **React Toastify** : Une bibliothèque React pour afficher des notifications toast.

- **Babel** : Utilisé pour transpiler le code JavaScript moderne en une version compatible avec les navigateurs.

- **jsdoc** : Un générateur de documentation pour JavaScript.

- **React Test Renderer** : Utilisé pour générer des rendus de composants React pour les tests.

- **@testing-library/react** : Une bibliothèque de tests pour React, axée sur le comportement de l'utilisateur final.

- **@testing-library/jest-dom** : Utilisé pour étendre les fonctionnalités de Jest pour les tests DOM.

- **@testing-library/user-event** : Utilisé pour simuler des interactions utilisateur lors des tests.

### Instructions d'utilisation

Lorsque vous ouvrez l'application, vous verrez une interface utilisateur avec un formulaire d'inscription. Le formulaire est centré sur la page et présente différents champs à remplir.

Chaque champ du formulaire est accompagné d'une étiquette descriptive pour indiquer ce qui doit être saisi. En bas du formulaire, il y a un bouton "Valider" qui est initialement désactivé jusqu'à ce que tous les champs requis soient remplis.

Commencez par saisir votre nom de famille dans le champ "Nom de famille" et continuez ainsi pour remplir tous les champs obligatoires correctement. Cela vous permettra d'activer le bouton "Valider".

Si le formulaire est valide, les données sont enregistrées localement dans le stockage du navigateur et un message de succès s'affiche pour confirmer l'enregistrement des données. Les champs du formulaire sont réinitialisés après un certain délai.

Si le formulaire est invalide, un message d'erreur s'affiche pour indiquer les champs qui doivent être corrigés. Vous pouvez alors corriger les champs invalides et soumettre à nouveau le formulaire.

### Règles de validation

Voici les règles de validation concernant le formulaire:

1. **Nom de famille**:
    - Format : Le nom de famille doit contenir uniquement des lettres.
    - Validation : La fonction `verifNom` est utilisée pour vérifier que le nom de famille est composé uniquement de lettres.

2. **Prénom** :
    - Format : Le prénom doit contenir uniquement des lettres.
    - Validation : La fonction `verifNom` est utilisée pour vérifier que le prénom est composé uniquement de lettres.

3. **Email** :
    - Format : L'email doit être valide selon les standards (exemple@test.com).
    - Validation : La fonction `verifEmail` est utilisée pour valider le format de l'email.

4. **Date de naissance** :
    - Format : La date de naissance doit être au format `YYYY-MM-DD` et l'utilisateur doit être majeur.
    - Validation : La fonction `verifDate` est utilisée pour valider le format de la date et s'assurer que l'utilisateur est majeur.

5. **Ville** :
    - Format : Le nom de la ville doit contenir uniquement des lettres.
    - Validation : La fonction `verifNom` est utilisée pour vérifier que le nom de la ville est composé uniquement de lettres.

6. **Code Postal** :
    - Format : Le code postal doit contenir exactement 5 chiffres.
    - Validation : La fonction `verifCode` est utilisée pour valider que le code postal est composé de 5 chiffres.

Ces règles de validation sont appliquées dans la fonction `validateFormData`, qui vérifie chaque champ du formulaire en utilisant les fonctions de validation respectives. Si une donnée saisie ne respecte pas les critères de validation, un message d'erreur approprié est affiché sous le champ correspondant.



### Tests unitaires

Les tests unitaires sont des tests qui vérifient le bon fonctionnement des différentes parties individuelles d'un système de manière isolée. Chaque fonction ou composant est testé de manière indépendante pour s'assurer qu'il produit les résultats attendus dans différentes conditions.

`TU_verifFonction.test.js`

1. **Test de la fonction de validation du nom et prénom** :
   - Ce test vérifie si la fonction `verifNom` retourne `true` lorsque le nom ou le prénom est valide (ne contient que des lettres) et `false` dans le cas contraire.

2. **Test de la fonction de validation du code postal** :
   - Ce test vérifie si la fonction `verifCode` retourne `true` lorsque le code postal est valide (contient exactement 5 chiffres) et `false` dans le cas contraire.

3. **Test de la fonction de validation de l'email** :
   - Ce test vérifie si la fonction `verifEmail` retourne `true` lorsque l'email est valide (conforme à une adresse email standard) et `false` dans le cas contraire.

4. **Test de la fonction de validation de la date de naissance** :
   - Ce test vérifie différents cas :
     - Si la date de naissance est invalide, la fonction doit retourner `false`.
     - Si la date de naissance est valide mais l'utilisateur n'est pas majeur, la fonction doit retourner `false`.
     - Si la date de naissance est valide et l'utilisateur est majeur, la fonction doit retourner `true`.

5. **Test de la fonction de calcul et vérification de l'âge** :
   - Ce test vérifie si la fonction `calculateAge` calcule correctement l'âge en fonction de la date de naissance fournie.
   - Il compare l'âge calculé avec l'âge attendu en utilisant la date actuelle et la date de naissance spécifiée.

Les assertions `expect` sont utilisées pour vérifier les résultats retournés par les fonctions de validation et de calcul, en s'assurant qu'ils correspondent aux valeurs attendues pour chaque scénario de test.

`TU_app.test.js`

1. **Test de rendu initial** :
   - Ce test vérifie que le composant principal `<App />` se rend correctement sans erreur.
   - Il vérifie spécifiquement que le texte "Formulaire" est présent dans le rendu initial.

2. **Test de saisie dans le champ "Nom"** :
   - Ce test vérifie que l'entrée de texte dans le champ "Nom de famille" est fonctionnelle.
   - Il rend d'abord l'application, puis sélectionne l'élément d'entrée du champ "Nom de famille" et simule un changement de texte.
   - Enfin, il vérifie que la valeur de l'entrée correspond à la valeur saisie ('test').

3. **Test de saisie dans le champ "Prénom"** :
   - Ce test vérifie que l'entrée de texte dans le champ "Prénom" est fonctionnelle, en procédant de manière similaire au test précédent.

4. **Test de saisie dans le champ "Email"** :
   - Ce test vérifie que l'entrée de texte dans le champ "Email" est fonctionnelle, de la même manière que les tests précédents.

5. **Test de saisie dans le champ "Date de naissance"** :
   - Ce test vérifie que l'entrée de texte dans le champ "Date de naissance" est fonctionnelle, de la même manière que les tests précédents.

6. **Test de saisie dans le champ "Ville"** :
   - Ce test vérifie que l'entrée de texte dans le champ "Ville" est fonctionnelle, de la même manière que les tests précédents.


Les tests vérifient principalement que les champs du formulaire réagissent correctement aux entrées utilisateur en vérifiant que les valeurs saisies correspondent aux valeurs attendues.


**Tous ces tests sont exécutés dans la suite de tests unitaires définie par `describe('Test Unitaire des fonctions', () => {...})`. Chaque test utilise la fonction `test` de Jest pour définir et exécuter les tests.** 





### Tests d'intégration

Les tests d'intégration sont des tests qui vérifient que les différentes parties d'un système fonctionnent correctement ensemble. Dans ce code, les tests d'intégration sont effectués sur l'application représentée par le composant `<App />` dans React.

1. **Test de fonctionnement du bouton valider**:
   - Ce test vérifie que le bouton "Valider" est initialement désactivé et devient activé lorsque toutes les informations requises sont saisies.
   - Les différentes saisies sont simulées avec la fonction `fireEvent.change()` pour chaque champ du formulaire.
   - Après avoir saisi toutes les informations, le test vérifie que le bouton est activé.

2. **Vérification des messages d'erreur**:
   - Ce test simule la saisie de données incorrectes dans le formulaire, puis clique sur le bouton "Valider".
   - Il vérifie que les messages d'erreur appropriés s'affichent pour chaque champ incorrectement rempli.

3. **Validation du formulaire**:
   - Ce test simule la saisie de données correctes dans le formulaire, puis clique sur le bouton "Valider".
   - Il vérifie que le message de confirmation de la validation du formulaire s'affiche.
   - Ensuite, il vérifie que les données ont été correctement stockées dans le `localStorage`.

4. **Validation du formulaire avec champ de nom vide**:
   - Ce test simule la saisie de données correctes dans le formulaire, puis vérifie que le bouton "Valider" est activé.
   - Ensuite, il simule la suppression du nom de famille et vérifie que le bouton "Valider" est désactivé.

Ces tests utilisent la bibliothèque `@testing-library/react` pour rendre l'application, interagir avec ses éléments et vérifier leur comportement. Chaque test vérifie un aspect spécifique du fonctionnement de l'application, depuis l'activation du bouton de validation jusqu'à la gestion des erreurs et à la persistance des données valides.




### Couverture de tests


### Lien Git

https://github.com/MikeXXI/pp-test-integration
