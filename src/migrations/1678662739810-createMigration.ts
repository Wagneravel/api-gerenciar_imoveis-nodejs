import { MigrationInterface, QueryRunner } from "typeorm";

export class createMigration1678662739810 implements MigrationInterface {
    name = 'createMigration1678662739810'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedules" DROP COLUMN "date"`);
        await queryRunner.query(`ALTER TABLE "schedules" ADD "date" date NOT NULL`);
        await queryRunner.query(`ALTER TABLE "schedules" DROP COLUMN "hour"`);
        await queryRunner.query(`ALTER TABLE "schedules" ADD "hour" TIME NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedules" DROP COLUMN "hour"`);
        await queryRunner.query(`ALTER TABLE "schedules" ADD "hour" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "schedules" DROP COLUMN "date"`);
        await queryRunner.query(`ALTER TABLE "schedules" ADD "date" character varying NOT NULL`);
    }

}
