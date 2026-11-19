
# Cahier de charges

## Projet : *Application de gestion d'événements sportifs*

### Auteur du projet

**Nom** : *Kevin Gowi*

**Statut** : *Étudiant en informatique (Licence 2)*

**Rôle** : *Développeur front-end*


## Contexte et objectifs
L'application a pour but de permettre à des organisateurs sportifs (**clubs, associations, écoles, etc.**) de planifier, gérer et suivre des événements sportifs impliquant des équipes ou des joueurs. Elle se concentre exclusivement sur la partie front-end, développée avec ***ReactJS***, et s'appuie sur le stockage local (***localStorage***) pour la gestion temporaire des données.

## Objectifs principaux :

**1.** Offrir une interface intuitive pour créer et gérer des événements sportifs.

**2.** Permettre la gestion des équipes et des joueurs.

**3.** Visualiser les informations d'un événement, d'une équipe ou d'un joueur.

**4.** Garantir la persistance locale des données via localStorage.


## Public cible

- Associations sportives

- Clubs amateurs

- Écoles et universités

- Organisateurs d'événements ou de tournois


## Fonctionnalités principales

### Gestion des événements

Création d’un événement (nom, type, date, lieu, participantes - joueurs ou équipes -)

Types d’événements supportés : **match, tournoi, compétion, camp d'entrainement**.

Visualisation des détails d’un événement

Modification et suppression d’un événement


### Gestion des équipes

Création d’une équipe (nom, logo, sport, joueurs, coach...)

Attribution d’équipes à un événement

Visualisation des équipes et de leurs effectifs (joueurs)


### Gestion des joueurs

Ajout d’un joueur (nom, photo, sport, poste, performances - force, vitesse, taille, endurance -)

Attribution à une équipe

Visualisation d’un joueur

Visualisation graphique des statistiques d'un joueur

Edition et suppression d'un joueur


### Navigation entre les vues

Utilisation de ***react-router-dom***

Trois sections principales : **Événements** / **Équipes** / **Joueurs**


### Persistance des données

Utilisation du ***localStorage*** pour stocker les données localement

Chargement initial et Sauvegarde automatique des données à chaque modification


## Technologies utilisées

Framework : **ReactJS**

Routing : **react-router-dom**

Gestion des données : **localStorage** 

Design : **CSS + Bootstrap**

Icônes : **Fontawesome**

Identifiants uniques : **uuid**


## Structure de l’application

***App.jsx*** : composant principal contenant les routes

***/components*** : composants réutilisables (Event, Team, Player, Home, Dashboard...)

***/hooks*** : hooks personnalisés et Context Provider

***/data*** : données statiques (JSON) de l'application


## Scénarios d’utilisation

- L’utilisateur crée des équipes et ajoute les joueurs

- Il crée un événement en sélectionnant les équipes ou les joueurs participants

- Il consulte la fiche de l’événement avec tous les détails

- Il peut modifier ou supprimer un élément à tout moment



## Évolutions futures

- Ajout d’un système de sauvegarde dans une base de données

- Gestion de comptes utilisateurs (authentification)

- Suivi avancé des évènements (gestion du score, commentaire...)



