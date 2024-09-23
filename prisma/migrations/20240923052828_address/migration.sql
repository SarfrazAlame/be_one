/*
  Warnings:

  - Added the required column `address` to the `organization` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "password" TEXT;

-- AlterTable
ALTER TABLE "organization" ADD COLUMN     "address" TEXT NOT NULL;
