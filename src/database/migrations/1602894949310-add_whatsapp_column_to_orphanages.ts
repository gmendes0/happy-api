import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class addWhatsappColumnToOrphanages1602894949310
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "orphanages",
      new TableColumn({
        name: "whatsapp",
        type: "varchar",
        length: "13",
        isNullable: true,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("orphanages", "whatsapp");
  }
}
