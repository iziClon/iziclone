import { MigrationInterface, QueryRunner } from 'typeorm';

export class addColumnToCategories1655718773738 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('ALTER TABLE Categories ADD COLUMN icon VARCHAR(255) NOT NULL');
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('ALTER TABLE Categories DROP COLUMN icon');
    }
}
