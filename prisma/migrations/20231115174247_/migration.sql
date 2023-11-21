/*
  Warnings:

  - You are about to drop the column `Stock` on the `product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `product` DROP COLUMN `Stock`,
    ADD COLUMN `stock` INTEGER NULL DEFAULT 0;
