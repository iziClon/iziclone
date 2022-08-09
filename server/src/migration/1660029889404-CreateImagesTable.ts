import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateImagesTable1660029889404 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS Images (
                id INT PRIMARY KEY AUTO_INCREMENT,
                productId INT NOT NULL,
                imageRef VARCHAR(255) NOT NULL,
                FOREIGN KEY (productId) REFERENCES Products (id) ON DELETE CASCADE,
                createdAt TIMESTAMP DEFAULT(UTC_TIMESTAMP()) NOT NULL,
                deletedAt TIMESTAMP
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE IF EXISTS Images
        `);
    }

}
