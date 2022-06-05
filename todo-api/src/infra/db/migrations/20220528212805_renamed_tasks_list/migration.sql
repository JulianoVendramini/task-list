/*
  Warnings:

  - You are about to drop the column `taskListId` on the `Task` table. All the data in the column will be lost.
  - You are about to drop the `TaskList` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Task" DROP CONSTRAINT "Task_taskListId_fkey";

-- AlterTable
ALTER TABLE "Task" DROP COLUMN "taskListId",
ADD COLUMN     "tasksListId" INTEGER;

-- DropTable
DROP TABLE "TaskList";

-- CreateTable
CREATE TABLE "TasksList" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "TasksList_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_tasksListId_fkey" FOREIGN KEY ("tasksListId") REFERENCES "TasksList"("id") ON DELETE SET NULL ON UPDATE CASCADE;
