# PoC du Jeu Education Financière

## Quelle Techno ? 

La techno utilisée est javascript avec __ReactJs__. Ce choix à été fait car il sera facile d'adapter le code pour une appli mobile avec react-native.
L'application nécéssite une grand base de données. Dans un premer temps pour enregistrer les informations des joueurs et dans un second temps pour l'ensemble des événement constituant le jeu.

L'API utilisé est celle de __coingecko__ elle permet d'obtenir la valeur réel d'une cryptomonnaie dans une fenêtre de 24h, 1 semaine, 1 an etc...
Elle propose aussi l'affichage d'un graphique pour permettre au joueur de mieux analyser et donner une meilleure reponse.  

Framework utilisé : Bootstrap est le framework utilisé afin de donner un coter graphique au concept très rapidement. lors du developpement du veritable projet le framework sera abandonné pour laisser place à du css classique et la création d'un design system.

Afin d'afficher le graphique avec les données fournie par l'API la librairie __ChartJs__ . C'est une librarie javascript qui permet de créer des graphique rapidement avec un aaspect design pour la comprehension.

## Fonctionnement Générale 

Lorsque l'on arrive dans l'application nous avons un bouton commencer qui représente la roue avec lequel le joueur joue. Le principe du concept et de savoir si l'on peut avoir des questions avec des données réelles injecter dynamiquement. Une fois le bouton cliquer par le joueur, une question avec un contexte apparait avec comme ressources un graphique et des données pour pouvoir répondre le plus justement possible. 


## Installation du projet

Si vous voulez executer le projet cloner ce repo, faites npm install dans votre terminal pour installer toutes les dépendances.  
Puis faites npm start. Le projet s'ouvrira tout seul dans votre navigateur par la suite.


# Groupe de Workshop Numéro 7 







