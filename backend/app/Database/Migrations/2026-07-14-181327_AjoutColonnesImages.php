<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class AjoutColonnesImages extends Migration
{
    public function up()
    {
        $this->forge->addColumn('aires_protegees', [
            'image' => ['type' => 'VARCHAR', 'constraint' => 255, 'null' => true, 'after' => 'tarif_guide']
        ]);
        $this->forge->addColumn('especes', [
            'image' => ['type' => 'VARCHAR', 'constraint' => 255, 'null' => true, 'after' => 'population']
        ]);
    }

    public function down()
    {
        //
    }
}
