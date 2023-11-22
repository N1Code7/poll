-- DropForeignKey
ALTER TABLE "Participation" DROP CONSTRAINT "Participation_user_id_fkey";

-- AlterTable
ALTER TABLE "Participation" ADD COLUMN     "userEmail" TEXT,
ADD COLUMN     "userName" TEXT,
ALTER COLUMN "user_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Participation" ADD CONSTRAINT "Participation_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
