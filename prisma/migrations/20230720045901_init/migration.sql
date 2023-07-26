/*
  Warnings:

  - Made the column `first_name` on table `contacts` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `contacts` ADD COLUMN `last_name` VARCHAR(100) NULL,
    MODIFY `first_name` VARCHAR(100) NOT NULL,
    MODIFY `email` VARCHAR(200) NULL,
    MODIFY `phone` VARCHAR(20) NULL;
