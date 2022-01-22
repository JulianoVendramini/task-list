-- CreateTable
CREATE TABLE "Todos" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "completed" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Todos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Todos_title_key" ON "Todos"("title");
