/*
  Warnings:

  - Added the required column `city` to the `organization` table without a default value. This is not possible if the table is not empty.
  - Added the required column `district` to the `organization` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `organization` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state` to the `organization` table without a default value. This is not possible if the table is not empty.
  - Added the required column `zipcode` to the `organization` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "organization" ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "district" TEXT NOT NULL,
ADD COLUMN     "phone" TEXT NOT NULL,
ADD COLUMN     "state" TEXT NOT NULL,
ADD COLUMN     "zipcode" TEXT NOT NULL;
