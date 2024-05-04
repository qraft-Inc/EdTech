/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Trainer` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Trainer_email_key` ON `Trainer`(`email`);
