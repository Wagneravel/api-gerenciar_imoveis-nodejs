import { MigrationInterface, QueryRunner } from "typeorm";

export class createMigration1678757565230 implements MigrationInterface {
    name = 'createMigration1678757565230'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_estates" ALTER COLUMN "value" TYPE numeric(12,2)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_estates" ALTER COLUMN "value" TYPE numeric(11,2)`);
    }

}
