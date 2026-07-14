<?php

use CodeIgniter\Database\Migration;

class InitialisationBDD extends Migration{
    public function up(){
// Utilisateurs
        $this->forge->addField([
            'id' => ['type' => 'INT', 'auto_increment' => true],
            'nom' => ['type' => 'VARCHAR', 'constraint' => 100],
            'password' => ['type' => 'VARCHAR', 'constraint' => 255],
            'role' => ['type' => 'VARCHAR', 'constraint' => 20], // 'agentTerrain' ou 'responsable'
            'created_at' => ['type' => 'DATETIME', 'null' => true],
        ]);
        $this->forge->addKey('id', true);
        $this->forge->createTable('utilisateurs');

// Aires protegees
        $this->forge->addField([
            'id' => ['type' => 'INT', 'auto_increment' => true],
            'nom' => ['type' => 'VARCHAR', 'constraint' => 150],
            'localisation' => ['type' => 'VARCHAR', 'constraint' => 255],
            'tarif_ticket' => ['type' => 'DECIMAL', 'constraint' => '10,2'],
            'tarif_guide' => ['type' => 'DECIMAL', 'constraint' => '10,2'],
            ]);
        $this->forge->addKey('id', true);
        $this->forge->createTable('aires_protegees');
        

// Visites
        $this->forge->addField([
            'id' => ['type' => 'INT', 'auto_increment' => true],
            'representant_nom' => ['type' => 'VARCHAR', 'constraint' => 150],
            'cin_passeport' => ['type' => 'VARCHAR', 'constraint' => 50],
            'nationalite' => ['type' => 'VARCHAR', 'constraint' => 100],
            'nombre_visiteurs' => ['type' => 'INT'],
            'aire_id' => ['type' => 'INT'],
            'agent_id' => ['type' => 'INT'], // qui a enregistré la visite
            'montant_total' => ['type' => 'DECIMAL', 'constraint' => '10,2'],
            'date_visite' => ['type' => 'DATETIME'],
        ]);
        $this->forge->addKey('id', true);
        $this->forge->addForeignKey('aire_id', 'aires_protegees', 'id', 'CASCADE', 'CASCADE');
        $this->forge->addForeignKey('agent_id', 'utilisateurs', 'id', 'CASCADE', 'CASCADE');
        $this->forge->createTable('visites');

//  Espece
        $this->forge->addField([
            'id' => ['type' => 'INT', 'auto_increment' => true],
            'nom' => ['type' => 'VARCHAR', 'constraint' => 150],
            'nom_scientifique' => ['type' => 'VARCHAR', 'constraint' => 150],
            'population' => ['type' => 'INT'],
        ]);
        $this->forge->addKey('id', true);
        $this->forge->createTable('especes');

// Observations
        $this->forge->addField([
            'id' => ['type' => 'INT', 'auto_increment' => true],
            'nombre_observe' => ['type' => 'INT'],
            'localisation' => ['type' => 'VARCHAR', 'constraint' => 255],
            'commentaire' => ['type' => 'TEXT', 'null' => true],
            'espece_id' => ['type' => 'INT', 'constraint' => 150],
            'aire_id' => ['type' => 'INT'],
            'agent_id' => ['type' => 'INT'],
            'date_observation' => ['type' => 'DATETIME'],
        ]);
        $this->forge->addKey('id', true);
        $this->forge->addForeignKey('aire_id', 'aires_protegees', 'id', 'CASCADE', 'CASCADE');
        $this->forge->addForeignKey('agent_id', 'utilisateurs', 'id', 'CASCADE', 'CASCADE');
        $this->forge->addForeignKey('espece_id', 'especes', 'id', 'CASCADE', 'CASCADE');
        $this->forge->createTable('observations');

// Incidents
        $this->forge->addField([
            'id' => ['type' => 'INT', 'auto_increment' => true],
            'type_incident' => ['type' => 'VARCHAR', 'constraint' => 100], // feu de brousse, braconnage, déforestation...
            'localisation' => ['type' => 'VARCHAR', 'constraint' => 255],
            'description' => ['type' => 'TEXT'],
            'statut' => ['type' => 'VARCHAR', 'constraint' => 20, 'default' => 'signale'], // signale, en_cours, resolu
            'aire_id' => ['type' => 'INT'],
            'agent_id' => ['type' => 'INT'],
            'date_incident' => ['type' => 'DATETIME'],
        ]);
        $this->forge->addKey('id', true);
        $this->forge->addForeignKey('aire_id', 'aires_protegees', 'id', 'CASCADE', 'CASCADE');
        $this->forge->addForeignKey('agent_id', 'utilisateurs', 'id', 'CASCADE', 'CASCADE');
        $this->forge->createTable('incidents');
    }
    
    
    public function down(){
        
    }
}
