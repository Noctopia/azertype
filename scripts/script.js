function afficherResultat(score, nbMotsProposes) {
    console.log("Votre score est de " + score + " sur " + nbMotsProposes)
}

function choisirPhrasesOuMots() {
    // Tant que l'utilisateur n'a pas saisi "mots" ou "phrases", on lui redemande de saisir un choix
    let choix = prompt("Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?")
    while (choix !== "mots" && choix !== "phrases") {
        choix = prompt("Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?")
    }
    return choix
}

function lancerBoucleDeJeu(listePropositions) {
    let score = 0
    for (let i = 0; i < listePropositions.length; i++) {
        // On demande à l'utilisateur de saisir le mot correspondant à l'indice i
        let motUtilisateur = prompt("Entrez le mot : " + listePropositions[i])
        if (motUtilisateur === listePropositions[i]) {
            // Si le mot saisi par l'utilisateur est correct, on incrémente le score
            score++
        }
    }
    return score
}

function lancerJeu() {
    // Initialisations
    let choix = choisirPhrasesOuMots()
    let score = 0
    let nbMotsProposes = 0

    // On détermine la liste des mots ou des phrases à proposer à l'utilisateur
    if (choix === "mots") {
        score = lancerBoucleDeJeu(listeMots)
        nbMotsProposes = listeMots.length
    } else {
        score = lancerBoucleDeJeu(listePhrases)
        nbMotsProposes = listePhrases.length
    }

    afficherResultat(score, nbMotsProposes)
}