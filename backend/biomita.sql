-- phpMyAdmin SQL Dump
-- version 6.0.0-dev+20260707.3e756d69dd
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jul 14, 2026 at 06:25 PM
-- Server version: 8.4.3
-- PHP Version: 8.3.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `biomita`
--

-- --------------------------------------------------------

--
-- Table structure for table `aires_protegees`
--

CREATE TABLE `aires_protegees` (
  `id` int NOT NULL,
  `nom` varchar(150) COLLATE utf8mb4_general_ci NOT NULL,
  `localisation` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `tarif_ticket` decimal(10,2) NOT NULL,
  `tarif_guide` decimal(10,2) NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `aires_protegees`
--

INSERT INTO `aires_protegees` (`id`, `nom`, `localisation`, `tarif_ticket`, `tarif_guide`, `image`) VALUES
(1, 'Parc National Andasibe-Mantadia', 'Alaotra-Mangoro, Madagascar', 65000.00, 50000.00, NULL),
(2, 'Parc National Ranomafana', 'Haute Matsiatra, Madagascar', 65000.00, 50000.00, NULL),
(3, 'Parc National Isalo', 'Ihorombe, Madagascar', 65000.00, 50000.00, NULL),
(4, 'Réserve Spéciale Ankarafantsika', 'Boeny, Madagascar', 55000.00, 45000.00, NULL),
(5, 'Parc National Masoala', 'Sava, Madagascar', 65000.00, 55000.00, NULL),
(6, 'Parc National Marojejy', 'Sava, Madagascar', 65000.00, 55000.00, NULL),
(7, 'Parc National Zombitse-Vohibasia', 'Atsimo-Andrefana, Madagascar', 55000.00, 45000.00, NULL),
(8, 'Réserve Spéciale Montagne d\'Ambre', 'Diana, Madagascar', 55000.00, 45000.00, NULL),
(9, 'Parc National Tsingy de Bemaraha', 'Melaky, Madagascar', 65000.00, 55000.00, NULL),
(10, 'Réserve Forestière Kirindy', 'Menabe, Madagascar', 40000.00, 35000.00, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `especes`
--

CREATE TABLE `especes` (
  `id` int NOT NULL,
  `nom` varchar(150) COLLATE utf8mb4_general_ci NOT NULL,
  `nom_scientifique` varchar(150) COLLATE utf8mb4_general_ci NOT NULL,
  `population` int NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `especes`
--

INSERT INTO `especes` (`id`, `nom`, `nom_scientifique`, `population`, `image`) VALUES
(1, 'Indri', 'Indri indri', 10000, NULL),
(2, 'Maki catta', 'Lemur catta', 2500, NULL),
(3, 'Sifaka de Verreaux', 'Propithecus verreauxi', 47000, NULL),
(4, 'Lémur brun commun', 'Eulemur fulvus', 100000, NULL),
(5, 'Microcèbe roux', 'Microcebus rufus', 50000, NULL),
(6, 'Sifaka soyeux', 'Propithecus candidus', 250, NULL),
(7, 'Caméléon panthère', 'Furcifer pardalis', 200000, NULL),
(8, 'Caméléon de Parson', 'Calumma parsonii', 15000, NULL),
(9, 'Brookesia micra', 'Brookesia micra', 30000, NULL),
(10, 'Gecko feuille satanique', 'Uroplatus phantasticus', 20000, NULL),
(11, 'Boa de Madagascar', 'Acrantophis madagascariensis', 8000, NULL),
(12, 'Coua bleu', 'Coua caerulea', 40000, NULL),
(13, 'Vanga écorcheur', 'Vanga curvirostris', 60000, NULL),
(14, 'Ibis huppé de Madagascar', 'Lophotibis cristata', 12000, NULL),
(15, 'Fossa', 'Cryptoprocta ferox', 2500, NULL),
(16, 'Grenouille tomate', 'Dyscophus antongilii', 18000, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `incidents`
--

CREATE TABLE `incidents` (
  `id` int NOT NULL,
  `type_incident` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `localisation` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `description` text COLLATE utf8mb4_general_ci NOT NULL,
  `statut` varchar(20) COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'signale',
  `aire_id` int NOT NULL,
  `agent_id` int NOT NULL,
  `date_incident` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `incidents`
--

INSERT INTO `incidents` (`id`, `type_incident`, `localisation`, `description`, `statut`, `aire_id`, `agent_id`, `date_incident`) VALUES
(1, 'deforestation', 'Zone périphérique nord', 'Défrichement suspect détecté en bordure du parc.', 'en_cours', 1, 1, '2026-06-03 16:00:00'),
(2, 'braconnage', 'Secteur sud', 'Traces de pièges à lémuriens découvertes par une équipe de patrouille.', 'signale', 2, 2, '2026-06-05 12:30:00'),
(3, 'feu_de_brousse', 'Limite ouest de la réserve', 'Départ de feu maîtrisé rapidement par les agents locaux.', 'resolu', 4, 4, '2026-06-06 15:45:00'),
(4, 'braconnage', 'Zone côtière', 'Signalement de pêche illégale dans la zone marine protégée.', 'en_cours', 5, 5, '2026-06-08 09:20:00'),
(5, 'pollution', 'Point d\'eau principal', 'Déchets plastiques laissés par des visiteurs près des piscines naturelles.', 'resolu', 3, 3, '2026-06-09 10:00:00'),
(6, 'deforestation', 'Accès sud des tsingy', 'Coupe de bois illégale signalée par la population locale.', 'signale', 9, 6, '2026-06-11 07:30:00');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` bigint UNSIGNED NOT NULL,
  `version` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `class` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `group` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `namespace` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `time` int NOT NULL,
  `batch` int UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `version`, `class`, `group`, `namespace`, `time`, `batch`) VALUES
(1, '2026-07-12-140500', '\\InitialisationBDD', 'default', 'App', 1783877507, 1),
(2, '2026-07-14-181327', 'App\\Database\\Migrations\\AjoutColonnesImages', 'default', 'App', 1784053308, 2);

-- --------------------------------------------------------

--
-- Table structure for table `observations`
--

CREATE TABLE `observations` (
  `id` int NOT NULL,
  `nombre_observe` int NOT NULL,
  `localisation` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `commentaire` text COLLATE utf8mb4_general_ci,
  `espece_id` int NOT NULL,
  `aire_id` int NOT NULL,
  `agent_id` int NOT NULL,
  `date_observation` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `observations`
--

INSERT INTO `observations` (`id`, `nombre_observe`, `localisation`, `commentaire`, `espece_id`, `aire_id`, `agent_id`, `date_observation`) VALUES
(1, 2, 'Circuit Indri', 'Groupe familial entendu chantant tôt le matin.', 1, 1, 1, '2026-06-02 07:00:00'),
(2, 5, 'Circuit Indri', 'Groupe actif dans la canopée.', 4, 1, 1, '2026-06-03 08:00:00'),
(3, 3, 'Sentier Varibolo', 'Observation nocturne, individus timides.', 5, 2, 2, '2026-06-04 19:30:00'),
(4, 1, 'Sentier Varibolo', 'Caméléon adulte de belle taille sur une branche basse.', 8, 2, 2, '2026-06-05 14:00:00'),
(5, 8, 'Canyon des makis', 'Groupe habitué aux visiteurs, proche du sentier.', 2, 3, 3, '2026-06-06 09:00:00'),
(6, 2, 'Canyon des makis', 'Deux individus observés en vol.', 12, 3, 3, '2026-06-06 09:45:00'),
(7, 4, 'Zone sèche nord', 'Sifakas observés sautant entre les arbres.', 3, 4, 4, '2026-06-07 10:30:00'),
(8, 1, 'Lisière forestière', 'Trace et observation directe furtive, très rare.', 15, 5, 5, '2026-06-08 06:15:00'),
(9, 1, 'Sentier tsingy', 'Individu minuscule repéré sur une feuille morte.', 9, 9, 6, '2026-06-09 15:00:00'),
(10, 3, 'Circuit Indri', 'Plusieurs individus aux couleurs vives.', 7, 1, 1, '2026-06-10 11:00:00'),
(11, 2, 'Canyon des makis', 'Espèce rare, observation exceptionnelle.', 6, 3, 3, '2026-06-11 08:50:00');

-- --------------------------------------------------------

--
-- Table structure for table `utilisateurs`
--

CREATE TABLE `utilisateurs` (
  `id` int NOT NULL,
  `nom` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `role` varchar(20) COLLATE utf8mb4_general_ci NOT NULL,
  `created_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `utilisateurs`
--

INSERT INTO `utilisateurs` (`id`, `nom`, `password`, `role`, `created_at`) VALUES
(1, 'Jean Rakoto', '$2y$10$Q7bJ9k1E3nQ6h0v3ZzM6Ke1nX0y4wq3h1jv7QO0mYVh3fSkzq0f2G', 'agent', '2026-05-20 08:00:00'),
(2, 'Marie Rasoa', '$2y$10$Q7bJ9k1E3nQ6h0v3ZzM6Ke1nX0y4wq3h1jv7QO0mYVh3fSkzq0f2G', 'agent', '2026-05-20 08:05:00'),
(3, 'Tovo Andriamampianina', '$2y$10$Q7bJ9k1E3nQ6h0v3ZzM6Ke1nX0y4wq3h1jv7QO0mYVh3fSkzq0f2G', 'agent', '2026-05-21 09:00:00'),
(4, 'Hery Razafindrakoto', '$2y$10$Q7bJ9k1E3nQ6h0v3ZzM6Ke1nX0y4wq3h1jv7QO0mYVh3fSkzq0f2G', 'agent', '2026-05-21 09:15:00'),
(5, 'Nirina Rabemananjara', '$2y$10$Q7bJ9k1E3nQ6h0v3ZzM6Ke1nX0y4wq3h1jv7QO0mYVh3fSkzq0f2G', 'agent', '2026-05-22 07:30:00'),
(6, 'Fanja Rakotonirina', '$2y$10$Q7bJ9k1E3nQ6h0v3ZzM6Ke1nX0y4wq3h1jv7QO0mYVh3fSkzq0f2G', 'agent', '2026-05-22 07:45:00'),
(7, 'Solofo Randriamanantena', '$2y$10$Q7bJ9k1E3nQ6h0v3ZzM6Ke1nX0y4wq3h1jv7QO0mYVh3fSkzq0f2G', 'responsable', '2026-05-15 08:00:00'),
(8, 'Lalao Ravelojaona', '$2y$10$Q7bJ9k1E3nQ6h0v3ZzM6Ke1nX0y4wq3h1jv7QO0mYVh3fSkzq0f2G', 'responsable', '2026-05-15 08:10:00');

-- --------------------------------------------------------

--
-- Table structure for table `visites`
--

CREATE TABLE `visites` (
  `id` int NOT NULL,
  `representant_nom` varchar(150) COLLATE utf8mb4_general_ci NOT NULL,
  `cin_passeport` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `nationalite` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `nombre_visiteurs` int NOT NULL,
  `aire_id` int NOT NULL,
  `agent_id` int NOT NULL,
  `montant_total` decimal(10,2) NOT NULL,
  `date_visite` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `visites`
--

INSERT INTO `visites` (`id`, `representant_nom`, `cin_passeport`, `nationalite`, `nombre_visiteurs`, `aire_id`, `agent_id`, `montant_total`, `date_visite`) VALUES
(1, 'Herizo Randria', '301021012345', 'Malgache', 4, 1, 1, 310000.00, '2026-06-02 08:15:00'),
(2, 'Sophie Dubois', 'P1234567', 'Française', 2, 1, 1, 180000.00, '2026-06-03 09:30:00'),
(3, 'John Miller', 'P9876543', 'Américaine', 3, 2, 2, 245000.00, '2026-06-04 10:00:00'),
(4, 'Andry Rakoto', '301031023456', 'Malgache', 6, 2, 2, 440000.00, '2026-06-05 07:45:00'),
(5, 'Laura Meier', 'P4561237', 'Suisse', 2, 3, 3, 180000.00, '2026-06-06 11:20:00'),
(6, 'Marco Rossi', 'P7418529', 'Italienne', 5, 4, 4, 320000.00, '2026-06-07 08:00:00'),
(7, 'Voahangy Rasolofo', '301041034567', 'Malgache', 3, 5, 5, 250000.00, '2026-06-08 09:00:00'),
(8, 'Emma Johnson', 'P3692581', 'Britannique', 4, 9, 6, 315000.00, '2026-06-09 13:10:00'),
(9, 'Tahina Rabe', '301051045678', 'Malgache', 1, 1, 1, 115000.00, '2026-06-10 08:30:00'),
(10, 'Chen Wei', 'P1597534', 'Chinoise', 2, 3, 3, 180000.00, '2026-06-11 10:15:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `aires_protegees`
--
ALTER TABLE `aires_protegees`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `especes`
--
ALTER TABLE `especes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `incidents`
--
ALTER TABLE `incidents`
  ADD PRIMARY KEY (`id`),
  ADD KEY `incidents_aire_id_foreign` (`aire_id`),
  ADD KEY `incidents_agent_id_foreign` (`agent_id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `observations`
--
ALTER TABLE `observations`
  ADD PRIMARY KEY (`id`),
  ADD KEY `observations_aire_id_foreign` (`aire_id`),
  ADD KEY `observations_agent_id_foreign` (`agent_id`),
  ADD KEY `observations_espece_id_foreign` (`espece_id`);

--
-- Indexes for table `utilisateurs`
--
ALTER TABLE `utilisateurs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `visites`
--
ALTER TABLE `visites`
  ADD PRIMARY KEY (`id`),
  ADD KEY `visites_aire_id_foreign` (`aire_id`),
  ADD KEY `visites_agent_id_foreign` (`agent_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `aires_protegees`
--
ALTER TABLE `aires_protegees`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `especes`
--
ALTER TABLE `especes`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `incidents`
--
ALTER TABLE `incidents`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `observations`
--
ALTER TABLE `observations`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `utilisateurs`
--
ALTER TABLE `utilisateurs`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `visites`
--
ALTER TABLE `visites`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `incidents`
--
ALTER TABLE `incidents`
  ADD CONSTRAINT `incidents_agent_id_foreign` FOREIGN KEY (`agent_id`) REFERENCES `utilisateurs` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `incidents_aire_id_foreign` FOREIGN KEY (`aire_id`) REFERENCES `aires_protegees` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `observations`
--
ALTER TABLE `observations`
  ADD CONSTRAINT `observations_agent_id_foreign` FOREIGN KEY (`agent_id`) REFERENCES `utilisateurs` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `observations_aire_id_foreign` FOREIGN KEY (`aire_id`) REFERENCES `aires_protegees` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `observations_espece_id_foreign` FOREIGN KEY (`espece_id`) REFERENCES `especes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `visites`
--
ALTER TABLE `visites`
  ADD CONSTRAINT `visites_agent_id_foreign` FOREIGN KEY (`agent_id`) REFERENCES `utilisateurs` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `visites_aire_id_foreign` FOREIGN KEY (`aire_id`) REFERENCES `aires_protegees` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
