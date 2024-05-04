-- DropIndex
DROP INDEX `Trainer_email_key` ON `Trainer`;

-- DropIndex
DROP INDEX `Trainer_password_key` ON `Trainer`;

-- DropIndex
DROP INDEX `Trainer_userId_key` ON `Trainer`;

-- AlterTable
ALTER TABLE `Trainer` MODIFY `fullName` VARCHAR(255) NOT NULL,
    MODIFY `email` VARCHAR(255) NOT NULL,
    MODIFY `password` VARCHAR(255) NOT NULL;
