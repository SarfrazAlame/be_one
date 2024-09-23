/*
  Warnings:

  - Added the required column `mosquename` to the `organization` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "organization" ADD COLUMN     "mosquename" TEXT NOT NULL,
ALTER COLUMN "location" DROP NOT NULL;
